<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Inquiry;
use App\Models\Service;
use App\Models\Solution;
use App\Models\Setting;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // 1. Super Admin User
        User::updateOrCreate(
            ['email' => 'admin@codeviantech.com'],
            [
                'name' => 'CodvianTech SuperAdmin',
                'password' => Hash::make('Password123!'),
                'role' => 'super_admin',
                'is_active' => true,
            ]
        );

        // 2. Operations Manager User
        User::updateOrCreate(
            ['email' => 'manager@codeviantech.com'],
            [
                'name' => 'Operations Manager',
                'password' => Hash::make('Password123!'),
                'role' => 'manager',
                'is_active' => true,
            ]
        );

        // 3. Sample Customer Inquiries
        Inquiry::updateOrCreate(
            ['email' => 'alexander@fintechnorth.com'],
            [
                'name' => 'Alexander Wright',
                'company' => 'NorthPoint Capital',
                'service' => 'Custom Software Engineering',
                'budget' => '$25,000 - $50,000',
                'message' => 'We require an enterprise asset management dashboard with real-time portfolio analytics and compliance logging.',
                'status' => 'in_review',
                'admin_notes' => 'Sent initial technical scope document. Discovery call scheduled for Thursday.',
            ]
        );

        Inquiry::updateOrCreate(
            ['email' => 'elena@medicareglobal.org'],
            [
                'name' => 'Dr. Elena Rostova',
                'company' => 'Apex Healthcare',
                'service' => 'Clinic & Practice Management',
                'budget' => '$50,000+',
                'message' => 'Looking for a secure clinic management solution with automated patient scheduling and telemedicine capabilities.',
                'status' => 'new',
                'admin_notes' => null,
            ]
        );

        Inquiry::updateOrCreate(
            ['email' => 'tariq@retailpulse.ae'],
            [
                'name' => 'Tariq Mahmood',
                'company' => 'Retail Pulse UAE',
                'service' => 'Omnichannel Point of Sale (POS)',
                'budget' => '$10,000 - $25,000',
                'message' => 'Omnichannel POS system with multi-warehouse inventory syncing for 8 retail store locations across Dubai.',
                'status' => 'contacted',
                'admin_notes' => 'Tariq responded favorably to the demo preview. Follow-up meeting scheduled.',
            ]
        );

        // 4. Default Services
        $services = [
            [
                'title' => 'Custom Software Engineering',
                'summary' => 'Bespoke desktop & enterprise software tailored around your exact organizational workflows.',
                'sort_order' => 1,
            ],
            [
                'title' => 'Web & Mobile Applications',
                'summary' => 'Responsive web portals and cross-platform mobile apps for iOS and Android.',
                'sort_order' => 2,
            ],
            [
                'title' => 'Business Management (ERP & CRM)',
                'summary' => 'Connected enterprise systems uniting operations, inventory, and finances.',
                'sort_order' => 3,
            ],
            [
                'title' => 'Product Engineering & MVP',
                'summary' => 'Rapid prototyping and scalable MVP launch for venture-backed startups.',
                'sort_order' => 4,
            ],
            [
                'title' => 'Cloud Infrastructure & DevOps',
                'summary' => 'Reliable multi-region cloud deployments, serverless APIs, and automated CI/CD.',
                'sort_order' => 5,
            ],
            [
                'title' => 'Ongoing Maintenance & Support',
                'summary' => '24/7 technical monitoring, security audits, and dedicated engineering team extension.',
                'sort_order' => 6,
            ],
        ];

        foreach ($services as $svc) {
            Service::updateOrCreate(
                ['title' => $svc['title']],
                [
                    'slug' => Str::slug($svc['title']),
                    'summary' => $svc['summary'],
                    'sort_order' => $svc['sort_order'],
                    'is_active' => true,
                ]
            );
        }

        // 5. Default Solutions
        $solutions = [
            [
                'title' => 'Point of Sale (POS) Suite',
                'tag' => 'Retail & Hospitality',
                'summary' => 'Fast checkout, barcode scanning, offline mode, and multi-location inventory syncing.',
            ],
            [
                'title' => 'School & Campus ERP',
                'tag' => 'Education',
                'summary' => 'Complete academic, administrative fee billing, attendance, and parent portal ecosystem.',
            ],
            [
                'title' => 'Enterprise ERP Platform',
                'tag' => 'Operations & Logistics',
                'summary' => 'Centralized operational command across procurement, accounting, and supply chain.',
            ],
            [
                'title' => 'Clinic & Healthcare EHR',
                'tag' => 'Healthcare',
                'summary' => 'Compliant patient scheduling, digital medical records, and telemedicine.',
            ],
        ];

        foreach ($solutions as $sol) {
            Solution::updateOrCreate(
                ['title' => $sol['title']],
                [
                    'tag' => $sol['tag'],
                    'summary' => $sol['summary'],
                    'is_active' => true,
                ]
            );
        }

        // 6. Global Site Settings (Preserve existing if set)
        $defaultSettings = [
            // General & Contact
            ['key' => 'company_name', 'value' => 'CodvianTech', 'group' => 'general'],
            ['key' => 'site_tagline', 'value' => 'Your Digital Engineering Partner', 'group' => 'general'],
            ['key' => 'contact_email', 'value' => 'inquiries@codeviantech.com', 'group' => 'general'],
            ['key' => 'contact_phone', 'value' => '+92 3010031002', 'group' => 'general'],
            ['key' => 'headquarters', 'value' => 'Worldwide Distributed Remote Engineering Delivery', 'group' => 'general'],
            ['key' => 'response_time_text', 'value' => 'We reply personally within one business day', 'group' => 'general'],

            // Social
            ['key' => 'social_github', 'value' => 'https://github.com/saqibishfaque002/codeviantech', 'group' => 'social'],
            ['key' => 'social_linkedin', 'value' => 'https://linkedin.com', 'group' => 'social'],
            ['key' => 'social_twitter', 'value' => 'https://twitter.com', 'group' => 'social'],

            // Hero
            ['key' => 'hero_eyebrow', 'value' => 'Your Digital Engineering Partner', 'group' => 'hero'],
            ['key' => 'hero_title', 'value' => 'Build what’s next.', 'group' => 'hero'],
            ['key' => 'hero_gradient_title', 'value' => 'Make work simpler.', 'group' => 'hero'],
            ['key' => 'hero_description', 'value' => 'We design and build clean, dependable software that solves everyday problems for growing businesses. Whether you need a custom tool for your team or a new mobile app for your customers, we make the process transparent and straightforward.', 'group' => 'hero'],
            ['key' => 'hero_cta_primary', 'value' => 'Tell Us About Your Project', 'group' => 'hero'],
            ['key' => 'hero_cta_secondary', 'value' => 'See What We’ve Built', 'group' => 'hero'],
            ['key' => 'hero_trust_badge', 'value' => 'Thoughtful design, clear pricing, and reliable support from start to launch.', 'group' => 'hero'],
            ['key' => 'hero_card_tag', 'value' => 'CODVIANTECH / STUDIO', 'group' => 'hero'],
            ['key' => 'hero_card_title', 'value' => 'Built for your real team.', 'group' => 'hero'],
            ['key' => 'hero_card_desc', 'value' => 'We focus on practical software that removes friction from your daily operations so you can focus on growing your business.', 'group' => 'hero'],

            // Trust Strip
            ['key' => 'trust_strip_title', 'value' => 'One team for all your technical needs.', 'group' => 'trust'],
            ['key' => 'trust_strip_subtitle', 'value' => 'We handle the technology so you can run your business.', 'group' => 'trust'],
            ['key' => 'trust_strip_items', 'value' => 'Custom Software,Web & Mobile Apps,Business Systems & POS,Ongoing Support', 'group' => 'trust'],

            // Services Section Header
            ['key' => 'services_section_eyebrow', 'value' => 'What We Do', 'group' => 'services'],
            ['key' => 'services_section_title', 'value' => 'Practical services to help your business', 'group' => 'services'],
            ['key' => 'services_section_gradient', 'value' => 'thrive.', 'group' => 'services'],
            ['key' => 'services_section_desc', 'value' => 'Whether you are starting from scratch or improving an existing platform, here is how we work alongside your team.', 'group' => 'services'],

            // Solutions Section Header
            ['key' => 'solutions_section_eyebrow', 'value' => 'Specialized Products', 'group' => 'solutions'],
            ['key' => 'solutions_section_title', 'value' => 'Tested software ready for your', 'group' => 'solutions'],
            ['key' => 'solutions_section_gradient', 'value' => 'industry.', 'group' => 'solutions'],
            ['key' => 'solutions_section_desc', 'value' => 'We have built complete, practical platforms for stores, schools, and business teams that you can adapt right away.', 'group' => 'solutions'],

            // CTA Banner
            ['key' => 'cta_banner_title', 'value' => 'Have a project in mind?', 'group' => 'cta'],
            ['key' => 'cta_banner_description', 'value' => 'Send us a short note about what you are planning. We will take the time to read through it, give honest feedback, and help you map out the best way forward.', 'group' => 'cta'],
            ['key' => 'cta_banner_button', 'value' => 'Let’s Talk About It', 'group' => 'cta'],

            // Footer
            ['key' => 'footer_tagline', 'value' => 'Purpose-built software, intelligent enterprise platforms, and digital products engineered for ambitious global companies.', 'group' => 'footer'],
            ['key' => 'footer_copyright', 'value' => 'All rights reserved.', 'group' => 'footer'],

            // About
            ['key' => 'about_eyebrow', 'value' => 'Who We Are', 'group' => 'about'],
            ['key' => 'about_title', 'value' => 'A technology team you can count on for the', 'group' => 'about'],
            ['key' => 'about_gradient', 'value' => 'long run.', 'group' => 'about'],
            ['key' => 'about_description', 'value' => 'We are a friendly, dedicated group of developers and designers who love solving difficult business puzzles through clean software.', 'group' => 'about'],
            ['key' => 'about_story_p1', 'value' => 'CodvianTech started with a straightforward observation: too many companies are forced to wrestle with complicated, clunky tools that slow their people down rather than helping them work faster.', 'group' => 'about'],
            ['key' => 'about_story_p2', 'value' => 'We wanted to do things differently. We partner closely with business owners, managers, and startup founders to listen to what is actually getting in their way. Then we build practical, clean software that removes those bottlenecks once and for all.', 'group' => 'about'],
            ['key' => 'about_story_p3', 'value' => 'Whether we are building a brand new mobile application from scratch or connecting your inventory with your accounting system, you work directly with experienced developers who care about getting the details right.', 'group' => 'about'],
            ['key' => 'about_promise_title', 'value' => 'Our Promise', 'group' => 'about'],
            ['key' => 'about_promise_desc', 'value' => 'Clear quotes, zero technical jargon, and dependable software that makes your working day smoother.', 'group' => 'about'],

            // Process
            ['key' => 'process_eyebrow', 'value' => 'Our Process', 'group' => 'process'],
            ['key' => 'process_title', 'value' => 'A clear, simple way of working', 'group' => 'process'],
            ['key' => 'process_gradient', 'value' => 'together.', 'group' => 'process'],
            ['key' => 'process_description', 'value' => 'We keep our process straightforward so you always know what is being built, who is working on it, and when it will be ready.', 'group' => 'process'],

            // Contact
            ['key' => 'contact_eyebrow', 'value' => 'Get In Touch', 'group' => 'contact'],
            ['key' => 'contact_title', 'value' => 'Let’s discuss what you are', 'group' => 'contact'],
            ['key' => 'contact_gradient', 'value' => 'planning.', 'group' => 'contact'],
            ['key' => 'contact_description', 'value' => 'Send us a quick message below and we will be in touch with practical ideas on how to bring your project to life.', 'group' => 'contact'],
            ['key' => 'contact_info_title', 'value' => 'We’d love to hear from you.', 'group' => 'contact'],
            ['key' => 'contact_info_desc', 'value' => 'Whether you have a clear plan ready or just a few early ideas on paper, we’re happy to talk through what you need. There’s no pressure or sales pitch—just honest advice from developers who care about building good software.', 'group' => 'contact'],
        ];

        foreach ($defaultSettings as $setting) {
            Setting::firstOrCreate(
                ['key' => $setting['key']],
                ['value' => $setting['value'], 'group' => $setting['group']]
            );
        }
    }
}
