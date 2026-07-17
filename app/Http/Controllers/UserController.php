<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Illuminate\Validation\Rules;

class UserController extends Controller
{
    public function index()
    {
        // Pastikan hanya admin yang bisa akses
        if (!auth()->user()->hasRole('admin')) {
            abort(403, 'Unauthorized action.');
        }

        $users = User::with('role')->get()->map(function($user) {
            return [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'display_id' => $user->display_id,
                'role' => $user->role ? $user->role->name : 'N/A',
                'created_at' => $user->created_at->format('Y-m-d H:i:s')
            ];
        });

        $roles = Role::all();

        return Inertia::render('Profile/nama', [
            'users' => $users,
            'roles' => $roles
        ]);
    }

    public function store(Request $request)
    {
        if (!auth()->user()->hasRole('admin')) {
            abort(403, 'Unauthorized action.');
        }

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'role_id' => 'required|exists:roles,id',
        ]);

        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role_id' => $request->role_id,
            // Nonaktifkan email verification sementara jika diinginkan:
            'email_verified_at' => now(), 
        ]);

        return redirect()->back()->with('success', 'User berhasil ditambahkan.');
    }
}
