<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function showLogin()
    {
        if (Auth::check()) {
            $user = Auth::user();
            if ($user && $user->hasRole(['super_admin', 'admin', 'manager'])) {
                return redirect()->route('admin.dashboard');
            }
            return redirect(config('app.customer_url', env('CUSTOMER_APP_URL', 'http://localhost:3000/')));
        }
        return view('admin.auth.login');
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials, $request->boolean('remember'))) {
            $user = Auth::user();
            if (!$user->is_active) {
                Auth::logout();
                if ($request->expectsJson()) {
                    return response()->json(['error' => 'Your account is currently disabled.'], 403);
                }
                return back()->withErrors(['email' => 'Your account is currently disabled.']);
            }

            $request->session()->regenerate();

            // Role-based check upon successful login
            $isAdmin = $user->hasRole(['super_admin', 'admin', 'manager']);
            $customerUrl = config('app.customer_url', env('CUSTOMER_APP_URL', 'http://localhost:3000/'));

            if ($request->expectsJson()) {
                return response()->json([
                    'success' => true,
                    'user' => [
                        'id' => $user->id,
                        'name' => $user->name,
                        'email' => $user->email,
                        'role' => $user->role,
                    ],
                    'is_admin' => $isAdmin,
                    'redirect' => $isAdmin ? route('admin.dashboard') : $customerUrl,
                ]);
            }

            // If the authenticated user has an 'admin' role, force a redirect directly to the Admin Panel dashboard
            if ($isAdmin) {
                // Clear any stale intended URLs (e.g. /login or /) to prevent double login redirects
                $request->session()->forget('url.intended');
                return redirect()->route('admin.dashboard');
            }

            // Standard customers should continue to be redirected to their normal customer view
            $request->session()->forget('url.intended');
            return redirect($customerUrl);
        }

        if ($request->expectsJson()) {
            return response()->json([
                'error' => 'The provided credentials do not match our records.',
            ], 422);
        }

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ])->onlyInput('email');
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('admin.login');
    }

    public function showProfile()
    {
        return view('admin.auth.profile', ['user' => Auth::user()]);
    }

    public function updateProfile(Request $request)
    {
        $user = Auth::user();

        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255', 'unique:users,email,' . $user->id],
            'current_password' => ['nullable', 'required_with:new_password', 'current_password'],
            'new_password' => ['nullable', 'min:8', 'confirmed'],
        ]);

        $user->name = $request->name;
        $user->email = $request->email;

        if ($request->filled('new_password')) {
            $user->password = Hash::make($request->new_password);
        }

        $user->save();

        return back()->with('success', __('admin.user_saved_successfully'));
    }
}
