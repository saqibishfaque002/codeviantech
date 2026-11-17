@extends('layouts.admin')

@section('title', 'Create Service')
@section('page_title', 'Create New Service')

@section('content')
<div class="max-w-2xl space-y-6">
  <a href="{{ route('admin.services.index') }}" class="text-xs font-bold text-slate-400 hover:text-white transition-colors">
    ← Back to Services
  </a>

  <div class="glass-card p-6 sm:p-8 rounded-2xl shadow-xl">
    <form method="POST" action="{{ route('admin.services.store') }}" class="space-y-4">
      @csrf

      <div>
        <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">Service Title *</label>
        <input type="text" name="title" required value="{{ old('title') }}" placeholder="e.g. Cloud Infrastructure & DevOps"
               class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500">
      </div>

      <div>
        <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">Short Summary *</label>
        <textarea name="summary" required rows="3" placeholder="Brief elevator pitch of the service..."
                  class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500">{{ old('summary') }}</textarea>
      </div>

      <div>
        <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">Full Description (Optional)</label>
        <textarea name="description" rows="5" placeholder="Detailed technical scope, methodology, and deliverables..."
                  class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500">{{ old('description') }}</textarea>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">Sort Order</label>
          <input type="number" name="sort_order" value="{{ old('sort_order', 0) }}"
                 class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500">
        </div>

        <div class="flex items-center pt-6">
          <label class="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-300">
            <input type="checkbox" name="is_active" value="1" checked class="rounded bg-slate-900 border-slate-700 text-blue-600">
            <span>Publish Immediately</span>
          </label>
        </div>
      </div>

      <div class="pt-4 border-t border-brand-line flex justify-end gap-3">
        <a href="{{ route('admin.services.index') }}" class="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white">Cancel</a>
        <button type="submit" class="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-colors">
          {{ __('admin.save') }}
        </button>
      </div>
    </form>
  </div>
</div>
@endsection
