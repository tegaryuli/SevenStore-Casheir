<?php
// untuk web
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware('guest')->group(function () {
    Route::get('/login', [AuthController::class, 'showLogin'])->name('login');
    Route::post('/login', [AuthController::class, 'login'])->name('auth.login');
    
    Route::get('/login/otp', [AuthController::class, 'showOtp'])->name('auth.login.otp');
    Route::post('/login/otp', [AuthController::class, 'verifyOtp'])->name('auth.verify.otp');
});

Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth')->name('logout');

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
    route::get('/produk', function() {
        return Inertia::render('Products');
    })->name('produk');
});
