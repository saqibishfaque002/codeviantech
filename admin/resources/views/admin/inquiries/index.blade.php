@extends('layouts.admin')

@section('title', __('admin.inquiries'))
@section('page_title', __('admin.inquiries'))

@section('content')
<div class="space-y-6">
  <!-- Controls Bar -->
  <div class="glass-card p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
    <!-- Filter Pills -->
    <div class="flex items-center gap-2 flex-wrap">
      <span class="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2">{{ __('admin.filter') }}:</span>
      @foreach(['all', 'new', 'in_review', 'contacted', 'converted', 'archived'] as $st)
        <a href="{{ route('admin.inquiries.index', ['status' => $st, 'search' => request('search')]) }}"
           class="text-xs px-3 py-1.5 rounded-lg font-semibold transition-colors {{ $status === $st ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-900/60 text-slate-400 hover:text-white' }}">
          {{ $st === 'all' ? 'ALL' : __('admin.status_' . $st) }}
        </a>
      @endforeach
    </div>

    <!-- Search & Export -->
    <div class="flex items-center gap-3 w-full md:w-auto">
      <form method="GET" action="{{ route('admin.inquiries.index') }}" class="flex-1 md:w-64">
        <input type="hidden" name="status" value="{{ $status }}">
        <input type="text" name="search" value="{{ $search }}" placeholder="{{ __('admin.search') }}"
               class="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-blue-500">
      </form>

      <a href="{{ route('admin.inquiries.export') }}" class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-colors flex items-center gap-1.5 flex-shrink-0">
        <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
        <span>{{ __('admin.export_csv') }}</span>
      </a>
    </div>
  </div>

  <!-- Table Card -->
  <div class="glass-card rounded-2xl overflow-hidden shadow-xl">
    <div class="overflow-x-auto">
      <table class="w-full text-left text-sm">
        <thead class="bg-slate-900/80 border-b border-brand-line text-xs font-bold text-slate-400 uppercase tracking-wider">
          <tr>
            <th class="py-4 px-6">{{ __('admin.client_name') }}</th>
            <th class="py-4 px-6">{{ __('admin.services') }}</th>
            <th class="py-4 px-6">{{ __('admin.budget') }}</th>
            <th class="py-4 px-6">{{ __('admin.status') }}</th>
            <th class="py-4 px-6">{{ __('admin.date') }}</th>
            <th class="py-4 px-6 text-right">{{ __('admin.actions') }}</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-brand-line/60 text-slate-300">
          @forelse($inquiries as $inq)
            <tr class="hover:bg-slate-800/30 transition-colors">
              <td class="py-4 px-6">
                <strong class="block text-white font-semibold">{{ $inq->name }}</strong>
                <span class="text-xs text-slate-400">{{ $inq->email }}</span>
                @if($inq->company)
                  <span class="text-[11px] text-cyan-400 block">{{ $inq->company }}</span>
                @endif
              </td>
              <td class="py-4 px-6 text-slate-200">
                {{ $inq->service }}
                <p class="text-xs text-slate-500 line-clamp-1 max-w-xs mt-0.5">{{ $inq->message }}</p>
              </td>
              <td class="py-4 px-6 font-mono text-xs text-emerald-400">
                {{ $inq->budget ?? 'Open' }}
              </td>
              <td class="py-4 px-6">
                <form method="POST" action="{{ route('admin.inquiries.update_status', $inq) }}" class="inline-block">
                  @csrf
                  @method('PATCH')
                  <select name="status" onchange="this.form.submit()" class="text-xs px-2.5 py-1 rounded-lg font-bold border bg-slate-900 cursor-pointer focus:outline-none
                    @if($inq->status === 'new') border-rose-500/50 text-rose-300
                    @elseif($inq->status === 'in_review') border-amber-500/50 text-amber-300
                    @elseif($inq->status === 'contacted') border-blue-500/50 text-blue-300
                    @else border-emerald-500/50 text-emerald-300
                    @endif">
                    <option value="new" {{ $inq->status === 'new' ? 'selected' : '' }}>{{ __('admin.status_new') }}</option>
                    <option value="in_review" {{ $inq->status === 'in_review' ? 'selected' : '' }}>{{ __('admin.status_in_review') }}</option>
                    <option value="contacted" {{ $inq->status === 'contacted' ? 'selected' : '' }}>{{ __('admin.status_contacted') }}</option>
                    <option value="converted" {{ $inq->status === 'converted' ? 'selected' : '' }}>{{ __('admin.status_converted') }}</option>
                    <option value="archived" {{ $inq->status === 'archived' ? 'selected' : '' }}>{{ __('admin.status_archived') }}</option>
                  </select>
                </form>
              </td>
              <td class="py-4 px-6 text-xs text-slate-400">
                {{ $inq->created_at->format('M d, Y') }}
              </td>
              <td class="py-4 px-6 text-right space-x-2">
                <a href="{{ route('admin.inquiries.show', $inq) }}" class="px-3 py-1.5 rounded-lg bg-blue-600/20 hover:bg-blue-600/40 text-blue-300 text-xs font-bold transition-colors">
                  {{ __('admin.view_details') }}
                </a>
              </td>
            </tr>
          @empty
            <tr>
              <td colspan="6" class="py-12 text-center text-slate-400">
                {{ __('admin.no_inquiries') }}
              </td>
            </tr>
          @endforelse
        </tbody>
      </table>
    </div>

    @if($inquiries->hasPages())
      <div class="p-4 border-t border-brand-line">
        {{ $inquiries->links() }}
      </div>
    @endif
  </div>
</div>
@endsection
