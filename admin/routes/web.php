<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\InquiryController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\SolutionController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\LocaleController;

// Language Switcher (Public)
Route::get('/locale/{locale}', [LocaleController::class, 'switch'])->name('admin.locale');

// Guest Routes
Route::middleware('guest')->group(function () {
    Route::get('/', function () {
        return redirect()->route('admin.login');
    });
    Route::get('/login', [AuthController::class, 'showLogin'])->name('admin.login');
    Route::post('/login', [AuthController::class, 'login'])->name('admin.login.submit');
});

// Authenticated Admin Routes
Route::middleware('auth')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout'])->name('admin.logout');
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('admin.dashboard');
    Route::get('/profile', [AuthController::class, 'showProfile'])->name('admin.profile');
    Route::put('/profile', [AuthController::class, 'updateProfile'])->name('admin.profile.update');

    // Inquiries Management
    Route::get('/inquiries/export', [InquiryController::class, 'exportCsv'])->name('admin.inquiries.export');
    Route::resource('inquiries', InquiryController::class)->only(['index', 'show', 'destroy'])->names('admin.inquiries');
    Route::patch('/inquiries/{inquiry}/status', [InquiryController::class, 'updateStatus'])->name('admin.inquiries.update_status');
    Route::patch('/inquiries/{inquiry}/notes', [InquiryController::class, 'updateNotes'])->name('admin.inquiries.update_notes');

    // Services Management (Admin & Super Admin)
    Route::resource('services', ServiceController::class)->names('admin.services');

    // Solutions Management (Admin & Super Admin)
    Route::resource('solutions', SolutionController::class)->names('admin.solutions');

    // Super Admin Only: Team Users & Settings
    Route::middleware('role:super_admin')->group(function () {
        Route::resource('users', UserController::class)->names('admin.users');
        Route::get('/settings', [SettingController::class, 'index'])->name('admin.settings.index');
        Route::post('/settings', [SettingController::class, 'update'])->name('admin.settings.update');
    });
});
