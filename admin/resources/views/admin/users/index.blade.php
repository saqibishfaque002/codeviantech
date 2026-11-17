@extends('layouts.admin')

@section('title', __('admin.users'))
@section('page_title', __('admin.users'))

@section('content')
<div class="space-y-6">
  <div class="flex items-center justify-between">
    <p class="text-xs text-slate-400">Manage internal team members, access roles, and permissions.</p>
    <a href="{{ route('admin.users.create') }}" class="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-colors">
      + Add Team User
    </a>
  </div>

  <div class="glass-card rounded-2xl overflow-hidden shadow-xl">
    <table class="w-full text-left text-sm">
      <thead class="bg-slate-900/80 border-b border-brand-line text-xs font-bold text-slate-400 uppercase tracking-wider">
        <tr>
          <th class="py-4 px-6">Name & Email</th>
          <th class="py-4 px-6">Assigned Role</th>
          <th class="py-4 px-6">Status</th>
          <th class="py-4 px-6">Joined Date</th>
          <th class="py-4 px-6 text-right">{{ __('admin.actions') }}</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-brand-line/60 text-slate-300">
        @foreach($users as $u)
          <tr class="hover:bg-slate-800/30 transition-colors">
            <td class="py-4 px-6">
              <strong class="text-white block">{{ $u->name }}</strong>
              <span class="text-xs text-slate-400">{{ $u->email }}</span>
            </td>
            <td class="py-4 px-6">
              <span class="px-2.5 py-1 rounded-md text-xs font-bold uppercase
                @if($u->role === 'super_admin') bg-purple-500/20 text-purple-300 border border-purple-500/40
                @elseif($u->role === 'admin') bg-blue-500/20 text-blue-300 border border-blue-500/40
                @else bg-slate-700 text-slate-300
                @endif">
                {{ str_replace('_', ' ', $u->role) }}
              </span>
            </td>
            <td class="py-4 px-6">
              <span class="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase {{ $u->is_active ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300' }}">
                {{ $u->is_active ? 'Active' : 'Disabled' }}
              </span>
            </td>
            <td class="py-4 px-6 text-xs text-slate-400">
              {{ $u->created_at->format('M d, Y') }}
            </td>
            <td class="py-4 px-6 text-right space-x-2">
              <a href="{{ route('admin.users.edit', $u) }}" class="text-xs text-blue-400 hover:underline font-semibold">{{ __('admin.edit') }}</a>
              @if($u->id !== auth()->id())
                <form method="POST" action="{{ route('admin.users.destroy', $u) }}" class="inline-block" onsubmit="return confirm('Delete this user?');">
                  @csrf
                  @method('DELETE')
                  <button type="submit" class="text-xs text-rose-400 hover:underline font-semibold ml-2">{{ __('admin.delete') }}</button>
                </form>
              @endif
            </td>
          </tr>
        @endforeach
      </tbody>
    </table>
  </div>
</div>
@endsection
