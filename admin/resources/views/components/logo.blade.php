@props([
  'size' => 'md',
  'variant' => 'full',
  'mode' => 'auto',
  'class' => '',
  'alt' => 'CodvianTech'
])

@php
  $fullSizes = [
    'xs' => 'h-6 w-auto',
    'sm' => 'h-7 sm:h-8 w-auto',
    'md' => 'h-8 sm:h-10 w-auto',
    'lg' => 'h-10 sm:h-12 w-auto',
    'xl' => 'h-12 sm:h-16 w-auto',
  ];

  $markSizes = [
    'xs' => 'w-6 h-6',
    'sm' => 'w-7 h-7 sm:w-8 sm:h-8',
    'md' => 'w-8 h-8 sm:w-10 sm:h-10',
    'lg' => 'w-10 h-10 sm:w-12 sm:h-12',
    'xl' => 'w-14 h-14 sm:w-16 sm:h-16',
  ];

  $appIconSizes = [
    'xs' => 'w-6 h-6 rounded-md',
    'sm' => 'w-8 h-8 rounded-lg',
    'md' => 'w-9 h-9 sm:w-10 sm:h-10 rounded-xl',
    'lg' => 'w-12 h-12 rounded-2xl',
    'xl' => 'w-16 h-16 sm:w-20 sm:h-20 rounded-3xl',
  ];

  $fullSizeClass = $fullSizes[$size] ?? $fullSizes['md'];
  $markSizeClass = $markSizes[$size] ?? $markSizes['md'];
  $appIconSizeClass = $appIconSizes[$size] ?? $appIconSizes['md'];
@endphp

@if($variant === 'mark-only')
  <img src="{{ asset('assets/brand/logo-mark.png') }}"
       alt="{{ $alt }}"
       class="{{ $markSizeClass }} object-contain flex-shrink-0 select-none {{ $class }}"
       loading="lazy">

@elseif($variant === 'app-icon')
  <img src="{{ asset('assets/brand/app-icon.png') }}"
       alt="{{ $alt }}"
       class="{{ $appIconSizeClass }} object-cover flex-shrink-0 select-none shadow-md shadow-brand-blue/20 {{ $class }}"
       loading="lazy">

@elseif($variant === 'monochrome')
  @if($mode === 'dark')
    <img src="{{ asset('assets/brand/logo-mono-dark.png') }}"
         alt="{{ $alt }}"
         class="{{ $fullSizeClass }} object-contain select-none {{ $class }}"
         loading="lazy">
  @elseif($mode === 'light')
    <img src="{{ asset('assets/brand/logo-mono-light.png') }}"
         alt="{{ $alt }}"
         class="{{ $fullSizeClass }} object-contain select-none {{ $class }}"
         loading="lazy">
  @else
    <span class="inline-flex items-center {{ $class }}">
      <img src="{{ asset('assets/brand/logo-mono-dark.png') }}"
           alt="{{ $alt }}"
           class="{{ $fullSizeClass }} object-contain select-none hidden dark:block"
           loading="lazy">
      <img src="{{ asset('assets/brand/logo-mono-light.png') }}"
           alt="{{ $alt }}"
           class="{{ $fullSizeClass }} object-contain select-none block dark:hidden"
           loading="lazy">
    </span>
  @endif

@else {{-- Full Primary Logo --}}
  @if($mode === 'dark')
    <img src="{{ asset('assets/brand/logo-dark.png') }}"
         alt="{{ $alt }}"
         class="{{ $fullSizeClass }} object-contain select-none {{ $class }}"
         loading="lazy">
  @elseif($mode === 'light')
    <img src="{{ asset('assets/brand/logo-light.png') }}"
         alt="{{ $alt }}"
         class="{{ $fullSizeClass }} object-contain select-none {{ $class }}"
         loading="lazy">
  @else
    <span class="inline-flex items-center {{ $class }}">
      <img src="{{ asset('assets/brand/logo-dark.png') }}"
           alt="{{ $alt }}"
           class="{{ $fullSizeClass }} object-contain select-none hidden dark:block"
           loading="lazy">
      <img src="{{ asset('assets/brand/logo-light.png') }}"
           alt="{{ $alt }}"
           class="{{ $fullSizeClass }} object-contain select-none block dark:hidden"
           loading="lazy">
    </span>
  @endif
@endif
