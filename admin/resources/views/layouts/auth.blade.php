<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}" dir="{{ in_array(app()->getLocale(), ['ur', 'ar']) ? 'rtl' : 'ltr' }}" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>@yield('title', 'Admin Login — CodvianTech')</title>

  <!-- Favicons & App Icons -->
  <link rel="icon" href="{{ asset('assets/brand/favicon.ico') }}" sizes="any">
  <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('assets/brand/favicon-16x16.png') }}">
  <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('assets/brand/favicon-32x32.png') }}">
  <link rel="icon" type="image/png" sizes="48x48" href="{{ asset('assets/brand/favicon-48x48.png') }}">
  <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('assets/brand/apple-touch-icon.png') }}">
  <link rel="apple-touch-icon-precomposed" sizes="180x180" href="{{ asset('assets/brand/apple-touch-icon-precomposed.png') }}">
  <link rel="manifest" href="{{ asset('assets/brand/site.webmanifest') }}">
  <meta name="theme-color" content="#081326">
  <meta name="msapplication-TileColor" content="#081326">

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&family=Noto+Naskh+Arabic:wght@400;600;700&display=swap" rel="stylesheet">

  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            brand: {
              bg: '#081326',
              soft: '#0d1b32',
              panel: '#10213b',
              panelLight: '#162a4a',
              blue: '#5b8cff',
              cyan: '#55d6e8',
              line: 'rgba(180, 203, 238, 0.14)',
            }
          },
          fontFamily: {
            sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
            heading: ['"Manrope"', 'system-ui', 'sans-serif'],
            arabic: ['"Noto Naskh Arabic"', 'sans-serif']
          }
        }
      }
    }
  </script>
  <style>
    body {
      background-color: #081326;
      color: #f4f7fc;
      overflow-x: hidden;
    }
    .glass-card {
      background: rgba(16, 33, 59, 0.88);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(180, 203, 238, 0.16);
    }
    @keyframes authFadeInUp {
      0% {
        opacity: 0;
        transform: translateY(20px) scale(0.98);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }
    @keyframes pulseAmbient {
      0%, 100% {
        opacity: 0.25;
        transform: scale(1);
      }
      50% {
        opacity: 0.4;
        transform: scale(1.08);
      }
    }
    .auth-card-entrance {
      animation: authFadeInUp 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    .ambient-glow {
      position: absolute;
      border-radius: 9999px;
      filter: blur(80px);
      pointer-events: none;
      animation: pulseAmbient 8s ease-in-out infinite;
    }
  </style>
</head>
<body class="min-h-screen flex items-center justify-center p-4 relative font-sans antialiased {{ in_array(app()->getLocale(), ['ur', 'ar']) ? 'font-arabic' : '' }}">

  {{-- Ambient background lighting --}}
  <div class="ambient-glow w-96 h-96 -top-20 -left-20 bg-brand-blue/20"></div>
  <div class="ambient-glow w-96 h-96 -bottom-20 -right-20 bg-brand-cyan/15"></div>

  <div class="w-full max-w-md relative z-10 auth-card-entrance">
    {{-- Centered Brand Header / Logo with entrance animation --}}
    <div class="text-center space-y-3 mb-6">
      <div class="inline-flex flex-col items-center group">
        <div class="transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_8px_24px_rgba(85,214,232,0.3)]">
          <x-logo variant="app-icon" size="lg" alt="CodvianTech App Icon" />
        </div>
      </div>
      <div>
        <h2 class="text-2xl font-extrabold text-white tracking-tight flex items-center justify-center gap-1.5 font-heading">
          <span>Codvian</span><span class="text-brand-cyan">Tech</span>
          <span class="text-xs font-mono px-2 py-0.5 rounded-md bg-brand-blue/20 text-brand-blue border border-brand-blue/30 uppercase tracking-wider ml-1">Admin</span>
        </h2>
        <p class="text-xs text-slate-400 mt-1">Operational Command & Secure Authentication</p>
      </div>
    </div>

    {{-- Main Auth Card Content --}}
    <div class="glass-card rounded-3xl p-8 shadow-2xl shadow-black/60 space-y-6">
      @yield('content')
    </div>

    {{-- Simple Footer --}}
    <div class="text-center mt-6 text-xs text-slate-500">
      <p>&copy; {{ date('Y') }} CodvianTech. All rights reserved.</p>
    </div>
  </div>

</body>
</html>
