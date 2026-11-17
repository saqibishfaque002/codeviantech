@extends('layouts.admin')

@section('title', 'Inquiry Details #' . $inquiry->id)
@section('page_title', 'Inquiry #' . $inquiry->id)

@section('content')
<div class="max-w-4xl space-y-6">
  <div class="flex items-center justify-between">
    <a href="{{ route('admin.inquiries.index') }}" class="text-xs font-bold text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors">
      ← Back to Inquiries List
    </a>

    <form method="POST" action="{{ route('admin.inquiries.destroy', $inquiry) }}" onsubmit="return confirm('Delete this inquiry?');">
      @csrf
      @method('DELETE')
      <button type="submit" class="text-xs text-rose-400 hover:text-rose-300 font-semibold transition-colors">
        {{ __('admin.delete') }} Inquiry
      </button>
    </form>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <!-- Client Info Card -->
    <div class="md:col-span-1 glass-card p-6 rounded-2xl space-y-4">
      <h3 class="font-heading font-extrabold text-base text-white border-b border-brand-line pb-3">Client Profile</h3>

      <div class="space-y-3 text-xs">
        <div>
          <span class="text-slate-400 block">{{ __('admin.client_name') }}:</span>
          <strong class="text-white text-sm block mt-0.5">{{ $inquiry->name }}</strong>
        </div>

        <div>
          <span class="text-slate-400 block">{{ __('admin.email_address') }}:</span>
          <a href="mailto:{{ $inquiry->email }}" class="text-cyan-400 hover:underline block mt-0.5">{{ $inquiry->email }}</a>
        </div>

        <div>
          <span class="text-slate-400 block">{{ __('admin.company') }}:</span>
          <span class="text-slate-200 block mt-0.5">{{ $inquiry->company ?? 'Individual' }}</span>
        </div>

        <div>
          <span class="text-slate-400 block">{{ __('admin.budget') }}:</span>
          <span class="font-mono text-emerald-400 block mt-0.5">{{ $inquiry->budget ?? 'Flexible / Unspecified' }}</span>
        </div>

        <div>
          <span class="text-slate-400 block">{{ __('admin.date') }}:</span>
          <span class="text-slate-300 block mt-0.5">{{ $inquiry->created_at->format('M d, Y - h:i A') }}</span>
        </div>
      </div>

      <div class="pt-4 border-t border-brand-line">
        <label class="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{{ __('admin.update_status') }}</label>
        <form method="POST" action="{{ route('admin.inquiries.update_status', $inquiry) }}">
          @csrf
          @method('PATCH')
          <select name="status" onchange="this.form.submit()" class="w-full text-xs p-2.5 rounded-xl font-bold border border-slate-700 bg-slate-900 text-white focus:outline-none focus:border-blue-500">
            <option value="new" {{ $inquiry->status === 'new' ? 'selected' : '' }}>{{ __('admin.status_new') }}</option>
            <option value="in_review" {{ $inquiry->status === 'in_review' ? 'selected' : '' }}>{{ __('admin.status_in_review') }}</option>
            <option value="contacted" {{ $inquiry->status === 'contacted' ? 'selected' : '' }}>{{ __('admin.status_contacted') }}</option>
            <option value="converted" {{ $inquiry->status === 'converted' ? 'selected' : '' }}>{{ __('admin.status_converted') }}</option>
            <option value="archived" {{ $inquiry->status === 'archived' ? 'selected' : '' }}>{{ __('admin.status_archived') }}</option>
          </select>
        </form>
      </div>
    </div>

    <!-- Project Specifications & Notes -->
    <div class="md:col-span-2 space-y-6">
      <div class="glass-card p-6 rounded-2xl space-y-3">
        <span class="text-xs font-bold text-cyan-400 uppercase tracking-wider">Service Scope: {{ $inquiry->service }}</span>
        <h3 class="font-heading font-extrabold text-lg text-white">Project Brief & Details</h3>
        <div class="p-4 rounded-xl bg-slate-900/90 border border-brand-line text-sm text-slate-200 leading-relaxed whitespace-pre-wrap">
{{ $inquiry->message }}
        </div>
      </div>

      <!-- Internal Technical Notes -->
      <div class="glass-card p-6 rounded-2xl space-y-3">
        <h3 class="font-heading font-bold text-base text-white">{{ __('admin.internal_notes') }}</h3>
        <p class="text-xs text-slate-400">Team notes for estimation, technical questions, and assignment.</p>

        <form method="POST" action="{{ route('admin.inquiries.update_notes', $inquiry) }}" class="space-y-3">
          @csrf
          @method('PATCH')
          <textarea name="admin_notes" rows="4" placeholder="Enter confidential internal scoping notes..."
                    class="w-full p-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-blue-500">{{ $inquiry->admin_notes }}</textarea>

          <button type="submit" class="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-colors">
            {{ __('admin.save_notes') }}
          </button>
        </form>
      </div>
    </div>
  </div>
</div>
@endsection
