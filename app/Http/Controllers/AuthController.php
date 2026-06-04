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

        if (is_null($user->email_verified_at)) {
            return back()->withErrors([
                'email' => 'Email belum diverifikasi. Silakan hubungi admin.',
            ])->onlyInput('email');
        }

        $otp = (string) random_int(100000, 999999);
        
        $request->session()->put('login.id', $user->id);
        $request->session()->put('login.otp', $otp);
        $request->session()->put('login.remember', (bool) ($validated['remember'] ?? false));
        
        \Illuminate\Support\Facades\Mail::to($user->email)->queue(new \App\Mail\LoginOtpMail($otp));

        return redirect()->route('auth.login.otp');
    }

    public function showOtp(Request $request)
    {
        if (! $request->session()->has('login.id')) {
            return redirect()->route('login');
        }

        $user = User::find($request->session()->get('login.id'));

        return Inertia::render('auth/OtpPage', [
            'email' => $user ? $user->email : '',
        ]);
    }

    public function verifyOtp(Request $request)
    {
        $request->validate([
            'otp' => ['required', 'string', 'size:6'],
        ]);

        if (! $request->session()->has('login.id') || ! $request->session()->has('login.otp')) {
            return redirect()->route('login');
        }

        if ($request->otp !== $request->session()->get('login.otp')) {
            return back()->withErrors(['otp' => 'Kode OTP tidak valid atau salah.']);
        }

        $user = User::find($request->session()->get('login.id'));
        $remember = $request->session()->get('login.remember', false);

        Auth::login($user, $remember);

        $request->session()->forget(['login.id', 'login.otp', 'login.remember']);
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
