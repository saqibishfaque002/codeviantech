<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Request;
use App\Http\Middleware\SetLocale;
use App\Http\Middleware\CheckRole;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware): void {
        $middleware->web(append: [
            SetLocale::class,
        ]);

        $middleware->alias([
            'role' => CheckRole::class,
        ]);

        // Role-based redirection for authenticated users hitting guest routes
        $middleware->redirectUsersTo(function (Request $request) {
            $user = $request->user();
            if ($user && $user->hasRole(['super_admin', 'admin', 'manager'])) {
                return route('admin.dashboard');
            }
            return config('app.customer_url', env('CUSTOMER_APP_URL', 'http://localhost:3000/'));
        });

        // Redirect unauthenticated guests to the admin login page
        $middleware->redirectGuestsTo(fn () => route('admin.login'));
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        //
    })->create();
