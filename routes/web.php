<?php
// untuk web
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\PosController;
use App\Http\Controllers\TransactionHistoryController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AttendanceController;
use App\Http\Controllers\WarehouseController;
use App\Http\Controllers\NotificationController;
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
    
    // POS Routes
    Route::get('/pos', [PosController::class, 'index'])->name('pos.index');
    Route::post('/pos/checkout', [PosController::class, 'checkout'])->name('pos.checkout');
    
    // Transaction History
    Route::get('/histori-transaksi', [TransactionHistoryController::class, 'index'])->name('transactions.history');
    
    // Attendance Routes
    Route::get('/laporan/absensi', [AttendanceController::class, 'index'])->name('attendances.index');
    
    // Resource Routes for Products and Categories
    Route::resource('produk', ProductController::class)->parameters(['produk' => 'produk']);
    Route::resource('kategori', CategoryController::class)->parameters(['kategori' => 'category']);

    // Warehouse Routes
    Route::middleware(['role:Admin|Inventaris'])->prefix('gudang')->group(function () {
        Route::get('/', [WarehouseController::class, 'index'])->name('gudang.index');
        Route::get('/riwayat', [WarehouseController::class, 'history'])->name('gudang.history');
        Route::post('/transfer', [WarehouseController::class, 'transfer'])->name('gudang.transfer');
    });

    // Settings Routes
    Route::prefix('settings')->group(function () {
        Route::get('/profile', [ProfileController::class, 'edit'])->name('settings.profile.edit');
        Route::post('/profile', [ProfileController::class, 'update'])->name('settings.profile.update');
        
        Route::get('/users', [\App\Http\Controllers\UserController::class, 'index'])->name('settings.users.index');
        Route::post('/users', [\App\Http\Controllers\UserController::class, 'store'])->name('settings.users.store');
        Route::delete('/users/{user}', [\App\Http\Controllers\UserController::class, 'destroy'])->name('settings.users.destroy');
        Route::post('/users/{id}/restore', [\App\Http\Controllers\UserController::class, 'restore'])->name('settings.users.restore');
        Route::delete('/users/{id}/force', [\App\Http\Controllers\UserController::class, 'forceDestroy'])->name('settings.users.forceDestroy');
    });

    // Notifications Route
    Route::middleware(['role:Admin'])->group(function () {
        Route::get('/notif', [NotificationController::class, 'index'])->name('notifications.index');
    });
});
