@extends('layouts.admin')

@section('title', __('admin.services'))
@section('page_title', __('admin.services'))

@section('content')
<div class="space-y-6">
  <div class="flex items-center justify-between">
    <p class="text-xs text-slate-400">Manage published digital services on the customer application.</p>
    <a href="{{ route('admin.services.create') }}" class="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-1.5">
      <span>+ {{ __('admin.create') }}</span>
    </a>
  </div>

  <div class="glass-card rounded-2xl overflow-hidden shadow-xl">
    <table class="w-full text-left text-sm">
      <thead class="bg-slate-900/80 border-b border-brand-line text-xs font-bold text-slate-400 uppercase tracking-wider">
        <tr>
          <th class="py-4 px-6">Service Name</th>
          <th class="py-4 px-6">Summary</th>
          <th class="py-4 px-6">Status</th>
          <th class="py-4 px-6">Sort Order</th>
          <th class="py-4 px-6 text-right">{{ __('admin.actions') }}</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-brand-line/60 text-slate-300">
        @forelse($services as $svc)
          <tr class="hover:bg-slate-800/30 transition-colors">
            <td class="py-4 px-6">
              <strong class="text-white font-semibold">{{ $svc->title }}</strong>
            </td>
            <td class="py-4 px-6 text-xs text-slate-400 max-w-sm truncate">
              {{ $svc->summary }}
            </td>
            <td class="py-4 px-6">
              <span class="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase {{ $svc->is_active ? 'bg-emerald-500/20 text-emerald-300' : 'bg-slate-700 text-slate-400' }}">
                {{ $svc->is_active ? 'Active' : 'Disabled' }}
              </span>
            </td>
            <td class="py-4 px-6 font-mono text-xs text-slate-400">
              {{ $svc->sort_order }}
            </td>
            <td class="py-4 px-6 text-right space-x-2">
              <a href="{{ route('admin.services.edit', $svc) }}" class="text-xs text-blue-400 hover:underline font-semibold">{{ __('admin.edit') }}</a>
              <form method="POST" action="{{ route('admin.services.destroy', $svc) }}" class="inline-block" onsubmit="return confirm('Delete this service?');">
                @csrf
                @method('DELETE')
                <button type="submit" class="text-xs text-rose-400 hover:underline font-semibold ml-2">{{ __('admin.delete') }}</button>
              </form>
            </td>
          </tr>
        @empty
          <tr>
            <td colspan="5" class="py-8 text-center text-slate-400">No services created yet.</td>
          </tr>
        @endforelse
      </tbody>
    </table>
  </div>
</div>
@endsection
