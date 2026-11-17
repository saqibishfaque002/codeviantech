<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckRole
{
    public function handle(Request $request, Closure $next, ...$roles): Response
    {
        $user = $request->user();

        if (!$user || !$user->is_active) {
            auth()->logout();
            return redirect()->route('admin.login')->with('error', 'Your account is inactive. Please contact your administrator.');
        }

        if (empty($roles)) {
            return $next($request);
        }

        if (!$user->hasRole($roles)) {
            // If the user is a standard customer, keep them on the customer view
            if ($user->role === 'customer' || !$user->hasRole(['super_admin', 'admin', 'manager'])) {
                return redirect(config('app.customer_url', env('CUSTOMER_APP_URL', 'http://localhost:3000/')));
            }
            abort(403, __('admin.unauthorized'));
        }

        return $next($request);
    }
}
