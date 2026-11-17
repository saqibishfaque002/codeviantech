@extends('layouts.admin')

@section('title', __('admin.dashboard'))
@section('page_title', __('admin.dashboard'))

@section('content')
<div class="space-y-8">
  <!-- Stats Grid -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    <div class="glass-card p-6 rounded-2xl space-y-2">
      <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">{{ __('admin.total_leads') }}</span>
      <div class="flex items-center justify-between">
        <span class="text-3xl font-extrabold text-white">{{ $stats['total_leads'] }}</span>
        <div class="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
        </div>
      </div>
      <span class="text-[11px] text-emerald-400 font-medium">● Live incoming inquiries</span>
    </div>

    <div class="glass-card p-6 rounded-2xl space-y-2">
      <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">{{ __('admin.new_leads') }}</span>
      <div class="flex items-center justify-between">
        <span class="text-3xl font-extrabold text-amber-400">{{ $stats['new_leads'] }}</span>
        <div class="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        </div>
      </div>
      <span class="text-[11px] text-amber-400/80 font-medium">Awaiting team review</span>
    </div>

    <div class="glass-card p-6 rounded-2xl space-y-2">
      <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">{{ __('admin.converted_leads') }}</span>
      <div class="flex items-center justify-between">
        <span class="text-3xl font-extrabold text-emerald-400">{{ $stats['converted_leads'] }}</span>
        <div class="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        </div>
      </div>
      <span class="text-[11px] text-emerald-400 font-medium">Active engagements</span>
    </div>

    <div class="glass-card p-6 rounded-2xl space-y-2">
      <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">{{ __('admin.active_services') }}</span>
      <div class="flex items-center justify-between">
        <span class="text-3xl font-extrabold text-cyan-400">{{ $stats['total_services'] }}</span>
        <div class="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
        </div>
      </div>
      <span class="text-[11px] text-slate-400 font-medium">Published on public site</span>
    </div>
  </div>

  <!-- Recent Inquiries Section -->
  <div class="glass-card rounded-2xl overflow-hidden shadow-xl">
    <div class="p-6 border-b border-brand-line flex items-center justify-between">
      <div>
        <h3 class="font-heading font-extrabold text-lg text-white">{{ __('admin.inquiries') }}</h3>
        <p class="text-xs text-slate-400">Recent customer project requests</p>
      </div>
      <a href="{{ route('admin.inquiries.index') }}" class="text-xs font-bold text-brand-blue hover:text-brand-cyan transition-colors">
        View All Inquiries →
      </a>
    </div>

    <div class="overflow-x-auto">
      <table class="w-full text-left text-sm">
        <thead class="bg-slate-900/60 border-b border-brand-line text-xs font-bold text-slate-400 uppercase tracking-wider">
          <tr>
            <th class="py-3.5 px-6">{{ __('admin.client_name') }}</th>
            <th class="py-3.5 px-6">{{ __('admin.services') }}</th>
            <th class="py-3.5 px-6">{{ __('admin.budget') }}</th>
            <th class="py-3.5 px-6">{{ __('admin.status') }}</th>
            <th class="py-3.5 px-6">{{ __('admin.date') }}</th>
            <th class="py-3.5 px-6 text-right">{{ __('admin.actions') }}</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-brand-line/60 text-slate-300">
          @forelse($recentInquiries as $inq)
            <tr class="hover:bg-slate-800/30 transition-colors">
              <td class="py-4 px-6">
                <strong class="block text-white">{{ $inq->name }}</strong>
                <span class="text-xs text-slate-400">{{ $inq->email }}</span>
                @if($inq->company)
                  <span class="text-[11px] text-cyan-400 block">{{ $inq->company }}</span>
                @endif
              </td>
              <td class="py-4 px-6 text-slate-200 font-medium">
                {{ $inq->service }}
              </td>
              <td class="py-4 px-6 font-mono text-xs text-emerald-400">
                {{ $inq->budget ?? 'Open' }}
              </td>
              <td class="py-4 px-6">
                <span class="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider
                  @if($inq->status === 'new') bg-rose-500/20 text-rose-300 border border-rose-500/40
                  @elseif($inq->status === 'in_review') bg-amber-500/20 text-amber-300 border border-amber-500/40
                  @elseif($inq->status === 'contacted') bg-blue-500/20 text-blue-300 border border-blue-500/40
                  @else bg-emerald-500/20 text-emerald-300 border border-emerald-500/40
                  @endif">
                  {{ __('admin.status_' . $inq->status) }}
                </span>
              </td>
              <td class="py-4 px-6 text-xs text-slate-400">
                {{ $inq->created_at->format('M d, Y') }}
              </td>
              <td class="py-4 px-6 text-right">
                <a href="{{ route('admin.inquiries.show', $inq) }}" class="px-3 py-1.5 rounded-lg bg-blue-600/20 hover:bg-blue-600/40 text-blue-300 text-xs font-bold transition-colors">
                  {{ __('admin.view_details') }}
                </a>
              </td>
            </tr>
          @empty
            <tr>
              <td colspan="6" class="py-8 text-center text-slate-400">
                {{ __('admin.no_inquiries') }}
              </td>
            </tr>
          @endforelse
        </tbody>
      </table>
    </div>
  </div>
</div>
@endsection
