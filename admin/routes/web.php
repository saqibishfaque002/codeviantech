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

/*
|--------------------------------------------------------------------------
| Web Routes - CodvianTech Architecture
| Customer View: https://codeviantech.com/
| Admin Panel:   https://codeviantech.com/admin
|--------------------------------------------------------------------------
*/

// Root fallback (Redirects to Admin Login if accessed directly)
Route::get('/', function () {
    return redirect()->route('admin.login');
});

// Non-prefixed fallback aliases
Route::get('/login', fn() => redirect()->route('admin.login'))->name('login');
Route::get('/dashboard', fn() => redirect()->route('admin.dashboard'));

// Language Switcher root fallback
Route::get('/locale/{locale}', [LocaleController::class, 'switch'])->name('admin.locale.root');

// ==============================================================
// Admin Panel Group (/admin prefix)
// ==============================================================
Route::prefix('admin')->group(function () {

    // Language Switcher
    Route::get('/locale/{locale}', [LocaleController::class, 'switch'])->name('admin.locale');

    // Admin Root Entry Point (/admin)
    Route::get('/', function () {
        if (auth()->check()) {
            $user = auth()->user();
            if ($user && $user->hasRole(['super_admin', 'admin', 'manager'])) {
                return redirect()->route('admin.dashboard');
            }
            return redirect(config('app.customer_url', env('CUSTOMER_APP_URL', 'https://codeviantech.com/')));
        }
        return redirect()->route('admin.login');
    });

    // Guest Routes (/admin/login)
    Route::middleware('guest')->group(function () {
        Route::get('/login', [AuthController::class, 'showLogin'])->name('admin.login');
        Route::post('/login', [AuthController::class, 'login'])->name('admin.login.submit');
    });

    // Authenticated Admin Routes (Restricted to super_admin, admin, manager)
    Route::middleware(['auth', 'role:super_admin,admin,manager'])->group(function () {
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
});
