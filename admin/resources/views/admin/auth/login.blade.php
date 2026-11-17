@extends('layouts.auth')

@section('title', 'Admin Login — CodvianTech')

@section('content')
  <!-- Language Selector on Login Screen -->
  <div class="flex justify-center gap-2 text-xs font-semibold pb-2 border-b border-brand-line">
    <a href="{{ route('admin.locale', 'en') }}" class="px-3 py-1 rounded-lg transition-colors {{ app()->getLocale() === 'en' ? 'bg-brand-blue text-white shadow-sm' : 'text-slate-400 hover:text-white hover:bg-slate-800/50' }}">English</a>
    <a href="{{ route('admin.locale', 'ur') }}" class="px-3 py-1 rounded-lg transition-colors {{ app()->getLocale() === 'ur' ? 'bg-brand-blue text-white shadow-sm' : 'text-slate-400 hover:text-white hover:bg-slate-800/50' }}">اردو</a>
    <a href="{{ route('admin.locale', 'ar') }}" class="px-3 py-1 rounded-lg transition-colors {{ app()->getLocale() === 'ar' ? 'bg-brand-blue text-white shadow-sm' : 'text-slate-400 hover:text-white hover:bg-slate-800/50' }}">العربية</a>
  </div>

  @if($errors->any())
    <div class="p-3.5 rounded-xl bg-rose-950/50 border border-rose-500/50 text-rose-300 text-xs flex items-center gap-2">
      <svg class="w-4 h-4 text-rose-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
      <span>{{ $errors->first() }}</span>
    </div>
  @endif

  <form method="POST" action="{{ route('admin.login.submit') }}" class="space-y-4">
    @csrf

    <div>
      <label for="email" class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">{{ __('admin.email') }}</label>
      <input id="email"
             type="email"
             name="email"
             required
             autofocus
             value="{{ old('email', 'admin@codeviantech.com') }}"
             placeholder="admin@codeviantech.com"
             class="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors">
    </div>

    <div>
      <label for="password" class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">{{ __('admin.password') }}</label>
      <input id="password"
             type="password"
             name="password"
             required
             value="Password123!"
             placeholder="••••••••"
             class="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors">
    </div>

    <div class="flex items-center justify-between text-xs text-slate-400">
      <label class="flex items-center gap-2 cursor-pointer select-none">
        <input type="checkbox" name="remember" class="rounded bg-slate-900 border-slate-700 text-brand-blue focus:ring-0">
        <span>Remember session</span>
      </label>
    </div>

    <button type="submit" class="w-full py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-brand-blue to-[#3a5ed4] hover:from-[#6c97ff] hover:to-[#476de6] shadow-lg shadow-brand-blue/30 hover:shadow-brand-blue/50 hover:-translate-y-0.5 active:translate-y-0 transition-all text-sm flex items-center justify-center gap-2">
      <span>Authenticate &amp; Access Admin</span>
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
    </button>
  </form>

  <div class="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-[11px] text-slate-400 space-y-1">
    <strong class="text-white block font-semibold">Demo Credentials:</strong>
    <p>Super Admin: <code class="text-brand-cyan">admin@codeviantech.com</code> / <code class="text-brand-cyan">Password123!</code></p>
    <p>Operations Manager: <code class="text-brand-cyan">manager@codeviantech.com</code> / <code class="text-brand-cyan">Password123!</code></p>
  </div>
@endsection
