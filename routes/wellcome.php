<?php
// untuk halaman wellcome, file lokasi ada di js/pages/Wellcome.jsx
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Wellcome');
})->name('home');
