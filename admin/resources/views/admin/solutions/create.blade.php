@extends('layouts.admin')

@section('title', 'Create Industry Solution')
@section('page_title', 'Add Industry Solution')

@section('content')
<div class="max-w-2xl space-y-6">
  <a href="{{ route('admin.solutions.index') }}" class="text-xs font-bold text-slate-400 hover:text-white transition-colors">
    ← Back to Solutions
  </a>

  <div class="glass-card p-6 sm:p-8 rounded-2xl shadow-xl">
    <form method="POST" action="{{ route('admin.solutions.store') }}" class="space-y-4">
      @csrf

      <div>
        <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">Solution Name *</label>
        <input type="text" name="title" required value="{{ old('title') }}" placeholder="e.g. Point of Sale (POS) Suite"
               class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500">
      </div>

      <div>
        <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">Industry Tag *</label>
        <input type="text" name="tag" required value="{{ old('tag') }}" placeholder="e.g. Retail & Supermarkets"
               class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500">
      </div>

      <div>
        <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">Executive Summary *</label>
        <textarea name="summary" required rows="3" placeholder="Key value proposition and business outcomes..."
                  class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500">{{ old('summary') }}</textarea>
      </div>

      <div>
        <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">Extended Feature Breakdown</label>
        <textarea name="description" rows="5" placeholder="Detailed architectural modules and capabilities..."
                  class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500">{{ old('description') }}</textarea>
      </div>

      <div class="pt-2">
        <label class="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-300">
          <input type="checkbox" name="is_active" value="1" checked class="rounded bg-slate-900 border-slate-700 text-blue-600">
          <span>Publish Solution Publicly</span>
        </label>
      </div>

      <div class="pt-4 border-t border-brand-line flex justify-end gap-3">
        <a href="{{ route('admin.solutions.index') }}" class="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white">Cancel</a>
        <button type="submit" class="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-colors">
          {{ __('admin.save') }}
        </button>
      </div>
    </form>
  </div>
</div>
@endsection
