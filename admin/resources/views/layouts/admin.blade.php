<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}" dir="{{ in_array(app()->getLocale(), ['ur', 'ar']) ? 'rtl' : 'ltr' }}" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>@yield('title', __('admin.admin_panel')) — CodvianTech</title>

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
    body { background-color: #081326; color: #f4f7fc; }
    .glass-card { background: rgba(16, 33, 59, 0.85); backdrop-filter: blur(16px); border: 1px solid rgba(180, 203, 238, 0.14); }

    /* Collapsible Sidebar Styles */
    #admin-sidebar {
      transition: width 0.28s cubic-bezier(0.4, 0, 0.2, 1);
    }
    #admin-sidebar.sidebar-collapsed {
      width: 4.5rem !important;
    }
    #admin-sidebar.sidebar-collapsed .sidebar-expanded-element {
      display: none !important;
    }
    #admin-sidebar.sidebar-collapsed .sidebar-collapsed-element {
      display: flex !important;
    }
    #admin-sidebar.sidebar-collapsed nav a {
      justify-content: center !important;
      padding-left: 0.5rem !important;
      padding-right: 0.5rem !important;
    }
    #admin-sidebar.sidebar-collapsed nav a span {
      display: none !important;
    }
    #admin-sidebar.sidebar-collapsed nav .super-admin-label {
      display: none !important;
    }
    #admin-sidebar.sidebar-collapsed .user-details {
      display: none !important;
    }
    #admin-sidebar.sidebar-collapsed .user-container {
      justify-content: center !important;
      width: 100% !important;
    }
  </style>
</head>
<body class="min-h-screen flex flex-col font-sans antialiased text-slate-100 {{ in_array(app()->getLocale(), ['ur', 'ar']) ? 'font-arabic' : '' }}">

  <div class="flex-1 flex overflow-hidden">
    <!-- Sidebar -->
    <aside id="admin-sidebar" class="w-64 bg-[#061020] border-r border-brand-line flex flex-col justify-between hidden md:flex flex-shrink-0 select-none">
      <div>
        <!-- Logo Area: Supports both Collapsed (App Icon Mark) & Expanded (Full Primary Logo) -->
        <div class="h-16 px-4 flex items-center justify-between border-b border-brand-line overflow-hidden">
          <a href="{{ route('admin.dashboard') }}" class="flex items-center overflow-hidden group focus:outline-none" title="CodvianTech Admin">
            {{-- Collapsed State: Display Square App Icon / Favicon Mark --}}
            <div class="sidebar-collapsed-element hidden items-center justify-center w-full">
              <x-logo variant="app-icon" size="sm" class="group-hover:scale-105 transition-transform" />
            </div>

            {{-- Expanded State: Display Full Primary Logo --}}
            <div class="sidebar-expanded-element flex items-center">
              <x-logo variant="full" size="md" mode="dark" class="group-hover:opacity-95 transition-opacity" />
            </div>
          </a>

          {{-- Sidebar Collapse/Expand Toggle Button --}}
          <button id="sidebar-collapse-btn"
                  type="button"
                  class="sidebar-expanded-element p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors focus:outline-none"
                  title="Collapse Sidebar"
                  aria-label="Collapse Sidebar">
            <svg class="w-4 h-4 transition-transform duration-300" id="collapse-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
          </button>
        </div>

        <!-- Navigation Links -->
        <nav class="p-3 space-y-1.5 text-sm font-medium">
          <a href="{{ route('admin.dashboard') }}"
             title="{{ __('admin.dashboard') }}"
             class="flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition-colors {{ request()->routeIs('admin.dashboard') ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/30 font-semibold' : 'text-slate-400 hover:text-white hover:bg-slate-800/40' }}">
            <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
            <span class="truncate">{{ __('admin.dashboard') }}</span>
          </a>

          <a href="{{ route('admin.inquiries.index') }}"
             title="{{ __('admin.inquiries') }}"
             class="flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-colors {{ request()->routeIs('admin.inquiries.*') ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/30 font-semibold' : 'text-slate-400 hover:text-white hover:bg-slate-800/40' }}">
            <div class="flex items-center gap-3">
              <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/></svg>
              <span class="truncate">{{ __('admin.inquiries') }}</span>
            </div>
            @php $newCount = \App\Models\Inquiry::where('status', 'new')->count(); @endphp
            @if($newCount > 0)
              <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-500 text-white shrink-0">{{ $newCount }}</span>
            @endif
          </a>

          <a href="{{ route('admin.services.index') }}"
             title="{{ __('admin.services') }}"
             class="flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition-colors {{ request()->routeIs('admin.services.*') ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/30 font-semibold' : 'text-slate-400 hover:text-white hover:bg-slate-800/40' }}">
            <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
            <span class="truncate">{{ __('admin.services') }}</span>
          </a>

          <a href="{{ route('admin.solutions.index') }}"
             title="{{ __('admin.solutions') }}"
             class="flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition-colors {{ request()->routeIs('admin.solutions.*') ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/30 font-semibold' : 'text-slate-400 hover:text-white hover:bg-slate-800/40' }}">
            <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
            <span class="truncate">{{ __('admin.solutions') }}</span>
          </a>

          @if(auth()->user()->isSuperAdmin())
          <div class="pt-4 pb-1 super-admin-label">
            <span class="px-3.5 text-[10px] font-bold uppercase tracking-wider text-slate-500">Super Admin</span>
          </div>

          <a href="{{ route('admin.users.index') }}"
             title="{{ __('admin.users') }}"
             class="flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition-colors {{ request()->routeIs('admin.users.*') ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/30 font-semibold' : 'text-slate-400 hover:text-white hover:bg-slate-800/40' }}">
            <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
            <span class="truncate">{{ __('admin.users') }}</span>
          </a>

          <a href="{{ route('admin.settings.index') }}"
             title="{{ __('admin.settings') }}"
             class="flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition-colors {{ request()->routeIs('admin.settings.*') ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/30 font-semibold' : 'text-slate-400 hover:text-white hover:bg-slate-800/40' }}">
            <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            <span class="truncate">{{ __('admin.settings') }}</span>
          </a>
          @endif
        </nav>
      </div>

      <!-- User Profile in Sidebar -->
      <div class="p-3 border-t border-brand-line bg-slate-900/60 overflow-hidden">
        <div class="flex items-center justify-between user-container">
          <div class="flex items-center gap-2.5 overflow-hidden">
            <div class="w-8 h-8 rounded-lg bg-brand-blue/20 text-brand-cyan flex items-center justify-center font-bold text-xs uppercase shrink-0 border border-brand-blue/30">
              {{ substr(auth()->user()->name, 0, 2) }}
            </div>
            <div class="text-xs user-details overflow-hidden">
              <strong class="block text-white truncate max-w-[110px]">{{ auth()->user()->name }}</strong>
              <span class="text-brand-muted text-[10px] uppercase font-mono">{{ auth()->user()->role }}</span>
            </div>
          </div>
          <form method="POST" action="{{ route('admin.logout') }}" class="user-details">
            @csrf
            <button type="submit" class="p-1.5 text-slate-400 hover:text-rose-400 transition-colors" title="{{ __('admin.logout') }}">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>
            </button>
          </form>
        </div>
      </div>
    </aside>

    <!-- Main Content Area -->
    <div class="flex-1 flex flex-col overflow-y-auto">
      <!-- Top Bar -->
      <header class="h-16 border-b border-brand-line bg-[#081326]/85 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-30">
        <div class="flex items-center gap-3">
          {{-- Mobile & Collapsed Sidebar Toggle --}}
          <button id="sidebar-mobile-toggle"
                  type="button"
                  class="p-2 rounded-lg border border-brand-line bg-brand-panel text-slate-300 hover:text-white hover:border-brand-blue transition-colors focus:outline-none"
                  aria-label="Toggle Navigation Sidebar"
                  title="Toggle Navigation Sidebar">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h1 class="font-heading font-extrabold text-lg text-white">@yield('page_title', __('admin.dashboard'))</h1>
        </div>

        <div class="flex items-center gap-4">
          <!-- Language Selector -->
          <div class="flex items-center gap-1 bg-slate-900/90 border border-brand-line rounded-lg p-1 text-xs font-semibold">
            <a href="{{ route('admin.locale', 'en') }}" class="px-2 py-1 rounded {{ app()->getLocale() === 'en' ? 'bg-brand-blue text-white' : 'text-slate-400 hover:text-white' }}">EN</a>
            <a href="{{ route('admin.locale', 'ur') }}" class="px-2 py-1 rounded {{ app()->getLocale() === 'ur' ? 'bg-brand-blue text-white' : 'text-slate-400 hover:text-white' }}">اردو</a>
            <a href="{{ route('admin.locale', 'ar') }}" class="px-2 py-1 rounded {{ app()->getLocale() === 'ar' ? 'bg-brand-blue text-white' : 'text-slate-400 hover:text-white' }}">العربية</a>
          </div>

          <a href="{{ route('admin.profile') }}" class="text-xs text-slate-300 hover:text-white flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-brand-line bg-brand-panel hover:border-brand-blue transition-colors">
            <span>{{ __('admin.logged_in_as') }}:</span>
            <strong class="text-brand-cyan">{{ auth()->user()->name }}</strong>
          </a>
        </div>
      </header>

      <!-- Flash Messages -->
      <div class="px-6 pt-4">
        @if(session('success'))
          <div class="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-sm flex items-center gap-2">
            <svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            <span>{{ session('success') }}</span>
          </div>
        @endif
        @if(session('error'))
          <div class="p-4 rounded-xl bg-rose-950/40 border border-rose-500/40 text-rose-300 text-sm flex items-center gap-2">
            <svg class="w-5 h-5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <span>{{ session('error') }}</span>
          </div>
        @endif
      </div>

      <!-- Page Content -->
      <main class="p-6 flex-1">
        @yield('content')
      </main>

      <!-- Admin Content Footer -->
      <footer class="px-6 py-4 border-t border-brand-line/50 bg-[#061020]/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3 mt-auto">
        <div class="flex items-center gap-2.5">
          <x-logo variant="mark-only" size="xs" />
          <span class="font-medium text-slate-300">CodvianTech Operations &amp; Command Center</span>
        </div>
        <p>&copy; {{ date('Y') }} CodvianTech. All rights reserved.</p>
      </footer>
    </div>
  </div>

  {{-- Sidebar Interactive Toggle Script --}}
  <script>
    (function() {
      const sidebar = document.getElementById('admin-sidebar');
      const collapseBtn = document.getElementById('sidebar-collapse-btn');
      const mobileToggle = document.getElementById('sidebar-mobile-toggle');
      const collapseIcon = document.getElementById('collapse-icon');

      function setCollapsed(isCollapsed) {
        if (!sidebar) return;
        if (isCollapsed) {
          sidebar.classList.add('sidebar-collapsed');
          if (collapseIcon) collapseIcon.classList.add('rotate-180');
        } else {
          sidebar.classList.remove('sidebar-collapsed');
          if (collapseIcon) collapseIcon.classList.remove('rotate-180');
        }
        try {
          localStorage.setItem('codvian_admin_sidebar_collapsed', isCollapsed ? 'true' : 'false');
        } catch(e) {}
      }

      // Restore preference
      try {
        if (localStorage.getItem('codvian_admin_sidebar_collapsed') === 'true') {
          setCollapsed(true);
        }
      } catch(e) {}

      if (collapseBtn) {
        collapseBtn.addEventListener('click', function() {
          const isCurrentlyCollapsed = sidebar.classList.contains('sidebar-collapsed');
          setCollapsed(!isCurrentlyCollapsed);
        });
      }

      if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
          if (window.innerWidth < 768) {
            sidebar.classList.toggle('hidden');
          } else {
            const isCurrentlyCollapsed = sidebar.classList.contains('sidebar-collapsed');
            setCollapsed(!isCurrentlyCollapsed);
          }
        });
      }
    })();
  </script>

</body>
</html>
