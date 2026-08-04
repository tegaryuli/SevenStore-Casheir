<?php

namespace App\Http\Controllers;

use App\Models\User;
use Spatie\Permission\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Illuminate\Validation\Rules;

class UserController extends Controller
{
    public function index()
    {
        // Pastikan hanya admin yang bisa akses
        if (!auth()->user()->hasRole('Admin')) {
            abort(403, 'Unauthorized action.');
        }

        $users = User::with('roles')->get()->map(function($user) {
            return [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'display_id' => $user->display_id,
                'role' => $user->roles->count() > 0 ? $user->roles->pluck('name')->join(', ') : 'N/A',
                'created_at' => $user->created_at->format('Y-m-d H:i:s')
            ];
        });

        $trashedUsers = User::onlyTrashed()->with('roles')->get()->map(function($user) {
            return [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'display_id' => $user->display_id,
                'role' => $user->roles->count() > 0 ? $user->roles->pluck('name')->join(', ') : 'N/A',
                'deleted_at' => $user->deleted_at->format('Y-m-d H:i:s')
            ];
        });

        $roles = Role::all();

        return Inertia::render('Profile/nama', [
            'users' => $users,
            'trashedUsers' => $trashedUsers,
            'roles' => $roles
        ]);
    }

    public function store(Request $request)
    {
        if (!auth()->user()->hasRole('Admin')) {
            abort(403, 'Unauthorized action.');
        }

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'roles' => 'required|array',
            'roles.*' => 'exists:roles,name',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            // Nonaktifkan email verification sementara jika diinginkan:
            'email_verified_at' => now(), 
        ]);

        $user->assignRole($request->roles);

        return redirect()->back()->with('success', 'User berhasil ditambahkan.');
    }

    public function destroy($id)
    {
        if (!auth()->user()->hasRole('Admin')) {
            abort(403, 'Unauthorized action.');
        }

        $user = User::findOrFail($id);

        if (auth()->id() === $user->id) {
            return redirect()->back()->with('error', 'Anda tidak dapat menghapus akun Anda sendiri.');
        }

        $user->delete();

        return redirect()->back()->with('success', 'User berhasil dimasukkan ke tong sampah.');
    }

    public function restore($id)
    {
        if (!auth()->user()->hasRole('Admin')) {
            abort(403, 'Unauthorized action.');
        }

        $user = User::withTrashed()->findOrFail($id);
        $user->restore();

        return redirect()->back()->with('success', 'User berhasil dipulihkan.');
    }

    public function forceDestroy($id)
    {
        if (!auth()->user()->hasRole('Admin')) {
            abort(403, 'Unauthorized action.');
        }

        $user = User::withTrashed()->findOrFail($id);
        $user->forceDelete();

        return redirect()->back()->with('success', 'User berhasil dihapus permanen.');
    }
}
