@extends('layouts.admin')

@section('title', 'Edit User — ' . $user->name)
@section('page_title', 'Edit User Credentials')

@section('content')
<div class="max-w-md space-y-6">
  <a href="{{ route('admin.users.index') }}" class="text-xs font-bold text-slate-400 hover:text-white transition-colors">
    ← Back to Users
  </a>

  <div class="glass-card p-6 sm:p-8 rounded-2xl shadow-xl">
    <form method="POST" action="{{ route('admin.users.update', $user) }}" class="space-y-4">
      @csrf
      @method('PUT')

      <div>
        <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">Full Name *</label>
        <input type="text" name="name" required value="{{ old('name', $user->name) }}"
               class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500">
      </div>

      <div>
        <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">Email Address *</label>
        <input type="email" name="email" required value="{{ old('email', $user->email) }}"
               class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500">
      </div>

      <div>
        <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">Role Permission *</label>
        <select name="role" required class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500">
          <option value="manager" {{ $user->role === 'manager' ? 'selected' : '' }}>Operations Manager</option>
          <option value="admin" {{ $user->role === 'admin' ? 'selected' : '' }}>Administrator</option>
          <option value="super_admin" {{ $user->role === 'super_admin' ? 'selected' : '' }}>Super Administrator</option>
        </select>
      </div>

      <div>
        <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">Change Password (Leave blank to keep current)</label>
        <input type="password" name="password" placeholder="New password"
               class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500">
      </div>

      <div class="pt-2">
        <label class="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-300">
          <input type="checkbox" name="is_active" value="1" {{ $user->is_active ? 'checked' : '' }} class="rounded bg-slate-900 border-slate-700 text-blue-600">
          <span>Account Active</span>
        </label>
      </div>

      <div class="pt-4 border-t border-brand-line flex justify-end gap-3">
        <a href="{{ route('admin.users.index') }}" class="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white">Cancel</a>
        <button type="submit" class="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-colors">
          {{ __('admin.save') }}
        </button>
      </div>
    </form>
  </div>
</div>
@endsection
