@extends('layouts.admin')

@section('title', 'My Profile')
@section('page_title', 'Account Profile')

@section('content')
<div class="max-w-md space-y-6">
  <div class="glass-card p-6 sm:p-8 rounded-2xl shadow-xl space-y-6">
    <div class="flex items-center gap-4 border-b border-brand-line pb-4">
      <div class="w-12 h-12 rounded-2xl overflow-hidden shadow-lg shadow-brand-blue/20 shrink-0">
        <x-logo variant="app-icon" size="sm" class="w-12 h-12" />
      </div>
      <div>
        <h3 class="font-heading font-extrabold text-lg text-white">{{ $user->name }}</h3>
        <div class="flex items-center gap-2 mt-0.5">
          <span class="text-xs text-brand-cyan font-mono uppercase">{{ str_replace('_', ' ', $user->role) }}</span>
          <span class="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold border border-emerald-500/30">Active</span>
        </div>
      </div>
    </div>

    @if($errors->any())
      <div class="p-3 rounded-xl bg-rose-950/40 border border-rose-500/40 text-rose-300 text-xs">
        {{ $errors->first() }}
      </div>
    @endif

    <form method="POST" action="{{ route('admin.profile.update') }}" class="space-y-4">
      @csrf
      @method('PUT')

      <div>
        <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">Your Name *</label>
        <input type="text" name="name" required value="{{ old('name', $user->name) }}"
               class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500">
      </div>

      <div>
        <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">Email Address *</label>
        <input type="email" name="email" required value="{{ old('email', $user->email) }}"
               class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500">
      </div>

      <div class="pt-4 border-t border-brand-line space-y-3">
        <h4 class="text-xs font-bold text-white uppercase tracking-wider">Change Password (Optional)</h4>

        <div>
          <label class="block text-xs text-slate-400 mb-1">Current Password</label>
          <input type="password" name="current_password"
                 class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500">
        </div>

        <div>
          <label class="block text-xs text-slate-400 mb-1">New Password</label>
          <input type="password" name="new_password"
                 class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500">
        </div>

        <div>
          <label class="block text-xs text-slate-400 mb-1">Confirm New Password</label>
          <input type="password" name="new_password_confirmation"
                 class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500">
        </div>
      </div>

      <div class="pt-4 border-t border-brand-line flex justify-end">
        <button type="submit" class="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-colors">
          {{ __('admin.save') }}
        </button>
      </div>
    </form>
  </div>
</div>
@endsection
