<?php

namespace App\Http\Controllers;

/**
 * Class LoginController
 *
 * Dedicated alias controller for authentication flows, session handling,
 * and role-based post-login redirection.
 */
class LoginController extends AuthController
{
    // Inherits showLogin, login, and logout methods with role-based checks
}
