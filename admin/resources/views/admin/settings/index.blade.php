@extends('layouts.admin')

@section('title', __('admin.settings'))
@section('page_title', __('admin.settings'))

@section('content')
<div class="max-w-5xl space-y-8">
  <div class="flex items-center justify-between">
    <div>
      <h3 class="font-heading font-extrabold text-2xl text-white">Application & Website Content Settings</h3>
      <p class="text-xs text-slate-400 mt-1">Manage all dynamic customer-facing text, contact information, banners, and links in real-time.</p>
    </div>
  </div>

  @if(session('success'))
    <div class="p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-sm font-semibold flex items-center gap-2">
      <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
      <span>{{ session('success') }}</span>
    </div>
  @endif

  <form method="POST" action="{{ route('admin.settings.update') }}" class="space-y-8">
    @csrf

    <!-- SECTION 1: Brand & Contact Information -->
    <div class="glass-card p-6 sm:p-8 rounded-2xl shadow-xl space-y-6">
      <div class="border-b border-slate-700/60 pb-4">
        <h4 class="font-heading font-bold text-lg text-white flex items-center gap-2">
          <span class="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
          Company & Direct Contact Details
        </h4>
        <p class="text-xs text-slate-400 mt-0.5">These values are used globally across the navbar, footer, contact page, and meta tags.</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">Official Company Name</label>
          <input type="text" name="company_name" value="{{ $settings['company_name'] ?? 'CodvianTech' }}"
                 class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500">
        </div>

        <div>
          <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">Site Tagline / Badge</label>
          <input type="text" name="site_tagline" value="{{ $settings['site_tagline'] ?? 'Your Digital Engineering Partner' }}"
                 class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500">
        </div>

        <div>
          <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">Primary Inbound Email</label>
          <input type="email" name="contact_email" value="{{ $settings['contact_email'] ?? 'inquiries@codeviantech.com' }}"
                 class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500">
        </div>

        <div>
          <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">Business Contact Phone (Direct Call & WhatsApp)</label>
          <input type="text" name="contact_phone" value="{{ $settings['contact_phone'] ?? '+92 3010031002' }}"
                 class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500">
        </div>

        <div>
          <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">Response Time Note</label>
          <input type="text" name="response_time_text" value="{{ $settings['response_time_text'] ?? 'We reply personally within one business day' }}"
                 class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500">
        </div>

        <div>
          <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">Global Headquarters Address / Presence</label>
          <input type="text" name="headquarters" value="{{ $settings['headquarters'] ?? 'Worldwide Distributed Remote Engineering Delivery' }}"
                 class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500">
        </div>
      </div>
    </div>

    <!-- SECTION 2: Social Media Profiles -->
    <div class="glass-card p-6 sm:p-8 rounded-2xl shadow-xl space-y-6">
      <div class="border-b border-slate-700/60 pb-4">
        <h4 class="font-heading font-bold text-lg text-white flex items-center gap-2">
          <span class="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
          Social Media & Developer Profiles
        </h4>
        <p class="text-xs text-slate-400 mt-0.5">Links rendered in the website footer and contact channels.</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div>
          <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">GitHub URL</label>
          <input type="url" name="social_github" value="{{ $settings['social_github'] ?? 'https://github.com/saqibishfaque002/codeviantech' }}"
                 class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500">
        </div>

        <div>
          <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">LinkedIn URL</label>
          <input type="url" name="social_linkedin" value="{{ $settings['social_linkedin'] ?? 'https://linkedin.com' }}"
                 class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500">
        </div>

        <div>
          <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">Twitter / X URL</label>
          <input type="url" name="social_twitter" value="{{ $settings['social_twitter'] ?? 'https://twitter.com' }}"
                 class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500">
        </div>
      </div>
    </div>

    <!-- SECTION 3: Home Page Hero Section -->
    <div class="glass-card p-6 sm:p-8 rounded-2xl shadow-xl space-y-6">
      <div class="border-b border-slate-700/60 pb-4">
        <h4 class="font-heading font-bold text-lg text-white flex items-center gap-2">
          <span class="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
          Homepage Hero & Studio Card
        </h4>
        <p class="text-xs text-slate-400 mt-0.5">Headline, description, and call-to-actions displayed at the top of the homepage.</p>
      </div>

      <div class="space-y-4">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div>
            <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">Hero Eyebrow Badge</label>
            <input type="text" name="hero_eyebrow" value="{{ $settings['hero_eyebrow'] ?? 'Your Digital Engineering Partner' }}"
                   class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500">
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">Hero Title (Line 1)</label>
            <input type="text" name="hero_title" value="{{ $settings['hero_title'] ?? 'Build what’s next.' }}"
                   class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500">
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">Hero Gradient Title (Line 2)</label>
            <input type="text" name="hero_gradient_title" value="{{ $settings['hero_gradient_title'] ?? 'Make work simpler.' }}"
                   class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500">
          </div>
        </div>

        <div>
          <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">Hero Description</label>
          <textarea name="hero_description" rows="3"
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500">{{ $settings['hero_description'] ?? 'We design and build clean, dependable software that solves everyday problems for growing businesses. Whether you need a custom tool for your team or a new mobile app for your customers, we make the process transparent and straightforward.' }}</textarea>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div>
            <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">Primary CTA Button</label>
            <input type="text" name="hero_cta_primary" value="{{ $settings['hero_cta_primary'] ?? 'Tell Us About Your Project' }}"
                   class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500">
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">Secondary CTA Button</label>
            <input type="text" name="hero_cta_secondary" value="{{ $settings['hero_cta_secondary'] ?? 'See What We’ve Built' }}"
                   class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500">
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">Hero Trust Badge</label>
            <input type="text" name="hero_trust_badge" value="{{ $settings['hero_trust_badge'] ?? 'Thoughtful design, clear pricing, and reliable support from start to launch.' }}"
                   class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500">
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2">
          <div>
            <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">Studio Card Tag</label>
            <input type="text" name="hero_card_tag" value="{{ $settings['hero_card_tag'] ?? 'CODVIANTECH / STUDIO' }}"
                   class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500">
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">Studio Card Title</label>
            <input type="text" name="hero_card_title" value="{{ $settings['hero_card_title'] ?? 'Built for your real team.' }}"
                   class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500">
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">Studio Card Description</label>
            <input type="text" name="hero_card_desc" value="{{ $settings['hero_card_desc'] ?? 'We focus on practical software that removes friction from your daily operations so you can focus on growing your business.' }}"
                   class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500">
          </div>
        </div>
      </div>
    </div>

    <!-- SECTION 4: Trust Strip -->
    <div class="glass-card p-6 sm:p-8 rounded-2xl shadow-xl space-y-6">
      <div class="border-b border-slate-700/60 pb-4">
        <h4 class="font-heading font-bold text-lg text-white flex items-center gap-2">
          <span class="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
          Trust Banner Strip
        </h4>
        <p class="text-xs text-slate-400 mt-0.5">The trust banner displayed directly below the hero section.</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div>
          <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">Banner Main Title</label>
          <input type="text" name="trust_strip_title" value="{{ $settings['trust_strip_title'] ?? 'One team for all your technical needs.' }}"
                 class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500">
        </div>
        <div>
          <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">Banner Subtitle</label>
          <input type="text" name="trust_strip_subtitle" value="{{ $settings['trust_strip_subtitle'] ?? 'We handle the technology so you can run your business.' }}"
                 class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500">
        </div>
        <div>
          <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">Pill Highlights (Comma-separated)</label>
          <input type="text" name="trust_strip_items" value="{{ $settings['trust_strip_items'] ?? 'Custom Software,Web & Mobile Apps,Business Systems & POS,Ongoing Support' }}"
                 class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500">
        </div>
      </div>
    </div>

    <!-- SECTION 5: Section Headers & Callouts -->
    <div class="glass-card p-6 sm:p-8 rounded-2xl shadow-xl space-y-6">
      <div class="border-b border-slate-700/60 pb-4">
        <h4 class="font-heading font-bold text-lg text-white flex items-center gap-2">
          <span class="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
          Services & Solutions Headers
        </h4>
        <p class="text-xs text-slate-400 mt-0.5">Manage section eyebrow, headline, highlighted gradient word, and description text.</p>
      </div>

      <div class="space-y-6">
        <!-- Services Section Header -->
        <div class="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
          <h5 class="text-xs font-bold text-cyan-400 uppercase tracking-wider">Services Section</h5>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label class="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Eyebrow</label>
              <input type="text" name="services_section_eyebrow" value="{{ $settings['services_section_eyebrow'] ?? 'What We Do' }}"
                     class="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500">
            </div>
            <div>
              <label class="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Title</label>
              <input type="text" name="services_section_title" value="{{ $settings['services_section_title'] ?? 'Practical services to help your business' }}"
                     class="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500">
            </div>
            <div>
              <label class="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Gradient Word</label>
              <input type="text" name="services_section_gradient" value="{{ $settings['services_section_gradient'] ?? 'thrive.' }}"
                     class="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500">
            </div>
          </div>
          <div>
            <label class="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Description</label>
            <input type="text" name="services_section_desc" value="{{ $settings['services_section_desc'] ?? 'Whether you are starting from scratch or improving an existing platform, here is how we work alongside your team.' }}"
                   class="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500">
          </div>
        </div>

        <!-- Solutions Section Header -->
        <div class="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
          <h5 class="text-xs font-bold text-emerald-400 uppercase tracking-wider">Solutions Section</h5>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label class="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Eyebrow</label>
              <input type="text" name="solutions_section_eyebrow" value="{{ $settings['solutions_section_eyebrow'] ?? 'Specialized Products' }}"
                     class="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500">
            </div>
            <div>
              <label class="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Title</label>
              <input type="text" name="solutions_section_title" value="{{ $settings['solutions_section_title'] ?? 'Tested software ready for your' }}"
                     class="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500">
            </div>
            <div>
              <label class="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Gradient Word</label>
              <input type="text" name="solutions_section_gradient" value="{{ $settings['solutions_section_gradient'] ?? 'industry.' }}"
                     class="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500">
            </div>
          </div>
          <div>
            <label class="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Description</label>
            <input type="text" name="solutions_section_desc" value="{{ $settings['solutions_section_desc'] ?? 'We have built complete, practical platforms for stores, schools, and business teams that you can adapt right away.' }}"
                   class="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500">
          </div>
        </div>
      </div>
    </div>

    <!-- SECTION 6: Call To Action Banner & Footer -->
    <div class="glass-card p-6 sm:p-8 rounded-2xl shadow-xl space-y-6">
      <div class="border-b border-slate-700/60 pb-4">
        <h4 class="font-heading font-bold text-lg text-white flex items-center gap-2">
          <span class="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
          Call-To-Action (CTA) Banner & Global Footer
        </h4>
        <p class="text-xs text-slate-400 mt-0.5">Control the bottom conversion banner and footer text.</p>
      </div>

      <div class="space-y-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">CTA Banner Title</label>
            <input type="text" name="cta_banner_title" value="{{ $settings['cta_banner_title'] ?? 'Have a project in mind?' }}"
                   class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500">
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">CTA Banner Button Text</label>
            <input type="text" name="cta_banner_button" value="{{ $settings['cta_banner_button'] ?? 'Let’s Talk About It' }}"
                   class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500">
          </div>
        </div>

        <div>
          <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">CTA Banner Description</label>
          <textarea name="cta_banner_description" rows="2"
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500">{{ $settings['cta_banner_description'] ?? 'Send us a short note about what you are planning. We will take the time to read through it, give honest feedback, and help you map out the best way forward.' }}</textarea>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
          <div>
            <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">Footer Brand Tagline</label>
            <input type="text" name="footer_tagline" value="{{ $settings['footer_tagline'] ?? 'Purpose-built software, intelligent enterprise platforms, and digital products engineered for ambitious global companies.' }}"
                   class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500">
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">Footer Copyright Note</label>
            <input type="text" name="footer_copyright" value="{{ $settings['footer_copyright'] ?? 'All rights reserved.' }}"
                   class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500">
          </div>
        </div>
      </div>
    </div>

    <!-- Submit Button Floating/Sticky Bar -->
    <div class="sticky bottom-6 z-20 flex justify-end">
      <button type="submit" class="px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs uppercase tracking-wider shadow-2xl shadow-blue-500/40 hover:-translate-y-0.5 transition-all">
        {{ __('admin.save') }}
      </button>
    </div>
  </form>
</div>
@endsection
