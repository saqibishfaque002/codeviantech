@extends('layouts.admin')

@section('title', __('admin.solutions'))
@section('page_title', __('admin.solutions'))

@section('content')
<div class="space-y-6">
  <div class="flex items-center justify-between">
    <p class="text-xs text-slate-400">Manage turnkey software products (Point of Sale, School ERP, Enterprise BMS, Clinic EHR).</p>
    <a href="{{ route('admin.solutions.create') }}" class="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-colors">
      + {{ __('admin.create') }}
    </a>
  </div>

  <div class="glass-card rounded-2xl overflow-hidden shadow-xl">
    <table class="w-full text-left text-sm">
      <thead class="bg-slate-900/80 border-b border-brand-line text-xs font-bold text-slate-400 uppercase tracking-wider">
        <tr>
          <th class="py-4 px-6">Solution Title</th>
          <th class="py-4 px-6">Industry Tag</th>
          <th class="py-4 px-6">Summary</th>
          <th class="py-4 px-6">Status</th>
          <th class="py-4 px-6 text-right">{{ __('admin.actions') }}</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-brand-line/60 text-slate-300">
        @forelse($solutions as $sol)
          <tr class="hover:bg-slate-800/30 transition-colors">
            <td class="py-4 px-6 font-semibold text-white">
              {{ $sol->title }}
            </td>
            <td class="py-4 px-6">
              <span class="text-xs px-2.5 py-1 rounded-md bg-blue-500/20 text-cyan-300 font-medium">
                {{ $sol->tag }}
              </span>
            </td>
            <td class="py-4 px-6 text-xs text-slate-400 max-w-sm truncate">
              {{ $sol->summary }}
            </td>
            <td class="py-4 px-6">
              <span class="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase {{ $sol->is_active ? 'bg-emerald-500/20 text-emerald-300' : 'bg-slate-700 text-slate-400' }}">
                {{ $sol->is_active ? 'Active' : 'Draft' }}
              </span>
            </td>
            <td class="py-4 px-6 text-right space-x-2">
              <a href="{{ route('admin.solutions.edit', $sol) }}" class="text-xs text-blue-400 hover:underline font-semibold">{{ __('admin.edit') }}</a>
              <form method="POST" action="{{ route('admin.solutions.destroy', $sol) }}" class="inline-block" onsubmit="return confirm('Delete this solution?');">
                @csrf
                @method('DELETE')
                <button type="submit" class="text-xs text-rose-400 hover:underline font-semibold ml-2">{{ __('admin.delete') }}</button>
              </form>
            </td>
          </tr>
        @empty
          <tr>
            <td colspan="5" class="py-8 text-center text-slate-400">No industry solutions registered yet.</td>
          </tr>
        @endforelse
      </tbody>
    </table>
  </div>
</div>
@endsection
