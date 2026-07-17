<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function showLogin()
    {
        return Inertia::render('auth/SignInPage');
    }

    public function login(Request $request)
    {
        $validated = $request->validate([
            'email' => ['required', 'string'],
            'password' => ['required', 'string'],
            'remember' => ['nullable', 'boolean'],
        ]);

        $identifier = trim($validated['email']);
        $user = User::query()
            ->where(function ($query) use ($identifier) {
                $query->where('email', $identifier)
                    ->orWhere('name', $identifier);
            })
            ->first();

        $credentials = [
            'email' => $user?->email ?? $identifier,
            'password' => $validated['password'],
        ];

        if (! Auth::validate($credentials)) {
            return back()->withErrors([
                'email' => 'Email/username atau password tidak valid.',
            ])->onlyInput('email');
        }

        // if (is_null($user->email_verified_at)) {
        //     return back()->withErrors([
        //         'email' => 'Email belum diverifikasi. Silakan hubungi admin.',
        //     ])->onlyInput('email');
        // }

        $remember = (bool) ($validated['remember'] ?? false);
        Auth::login($user, $remember);

        // Record attendance if user is kasir (staff)
        if ($user->hasRole('kasir')) {
            $today = \Carbon\Carbon::today();
            $alreadyClockedIn = \App\Models\Attendance::where('user_id', $user->id)
                ->whereDate('created_at', $today)
                ->exists();
                
            if (!$alreadyClockedIn) {
                \App\Models\Attendance::create(['user_id' => $user->id]);
            }
        }

        $request->session()->regenerate();

        return redirect()->intended(route('dashboard'));
    }

    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('home');
    }

    public function session(Request $request)
    {
        return response()->json([
            'authenticated' => Auth::check(),
            'user' => $request->user(),
        ]);
    }
}
