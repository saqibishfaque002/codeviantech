<?php

namespace App\Http\Controllers;

/**
 * Class AuthenticatedSessionController
 *
 * Dedicated alias controller for Breeze/Fortify-style authentication workflows,
 * supporting role-based post-login redirection.
 */
class AuthenticatedSessionController extends AuthController
{
    // Inherits showLogin, login, and logout methods with role-based checks
}
