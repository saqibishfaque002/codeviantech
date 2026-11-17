export interface SiteSettings {
  // General & Contact
  company_name: string;
  site_tagline: string;
  contact_email: string;
  contact_phone: string;
  headquarters: string;
  response_time_text: string;

  // Social Links
  social_github: string;
  social_linkedin: string;
  social_twitter: string;

  // Hero Section (Home)
  hero_eyebrow: string;
  hero_title: string;
  hero_gradient_title: string;
  hero_description: string;
  hero_cta_primary: string;
  hero_cta_secondary: string;
  hero_trust_badge: string;
  hero_card_tag: string;
  hero_card_title: string;
  hero_card_desc: string;

  // Trust Strip
  trust_strip_title: string;
  trust_strip_subtitle: string;
  trust_strip_items: string;

  // Services Section Header
  services_section_eyebrow: string;
  services_section_title: string;
  services_section_gradient: string;
  services_section_desc: string;

  // Solutions Section Header
  solutions_section_eyebrow: string;
  solutions_section_title: string;
  solutions_section_gradient: string;
  solutions_section_desc: string;

  // CTA Banner
  cta_banner_title: string;
  cta_banner_description: string;
  cta_banner_button: string;

  // Footer
  footer_tagline: string;
  footer_copyright: string;

  // About Section
  about_eyebrow: string;
  about_title: string;
  about_gradient: string;
  about_description: string;
  about_story_p1: string;
  about_story_p2: string;
  about_story_p3: string;
  about_promise_title: string;
  about_promise_desc: string;

  // Process Section
  process_eyebrow: string;
  process_title: string;
  process_gradient: string;
  process_description: string;

  // Contact Section
  contact_eyebrow: string;
  contact_title: string;
  contact_gradient: string;
  contact_description: string;
  contact_info_title: string;
  contact_info_desc: string;

  // Index signature for dynamic keys
  [key: string]: string;
}

export const DEFAULT_SETTINGS: SiteSettings = {
  // General & Contact
  company_name: "CodvianTech",
  site_tagline: "Your Digital Engineering Partner",
  contact_email: "inquiries@codeviantech.com",
  contact_phone: "+92 3010031002",
  headquarters: "Worldwide Distributed Remote Engineering Delivery",
  response_time_text: "We reply personally within one business day",

  // Social Links
  social_github: "https://github.com/saqibishfaque002/codeviantech",
  social_linkedin: "https://linkedin.com",
  social_twitter: "https://twitter.com",

  // Hero Section (Home)
  hero_eyebrow: "Your Digital Engineering Partner",
  hero_title: "Build what’s next.",
  hero_gradient_title: "Make work simpler.",
  hero_description:
    "We design and build clean, dependable software that solves everyday problems for growing businesses. Whether you need a custom tool for your team or a new mobile app for your customers, we make the process transparent and straightforward.",
  hero_cta_primary: "Tell Us About Your Project",
  hero_cta_secondary: "See What We’ve Built",
  hero_trust_badge: "Thoughtful design, clear pricing, and reliable support from start to launch.",
  hero_card_tag: "CODVIANTECH / STUDIO",
  hero_card_title: "Built for your real team.",
  hero_card_desc: "We focus on practical software that removes friction from your daily operations so you can focus on growing your business.",

  // Trust Strip
  trust_strip_title: "One team for all your technical needs.",
  trust_strip_subtitle: "We handle the technology so you can run your business.",
  trust_strip_items: "Custom Software,Web & Mobile Apps,Business Systems & POS,Ongoing Support",

  // Services Section Header
  services_section_eyebrow: "What We Do",
  services_section_title: "Practical services to help your business",
  services_section_gradient: "thrive.",
  services_section_desc:
    "Whether you are starting from scratch or improving an existing platform, here is how we work alongside your team.",

  // Solutions Section Header
  solutions_section_eyebrow: "Specialized Products",
  solutions_section_title: "Tested software ready for your",
  solutions_section_gradient: "industry.",
  solutions_section_desc:
    "We have built complete, practical platforms for stores, schools, and business teams that you can adapt right away.",

  // CTA Banner
  cta_banner_title: "Have a project in mind?",
  cta_banner_description:
    "Send us a short note about what you are planning. We will take the time to read through it, give honest feedback, and help you map out the best way forward.",
  cta_banner_button: "Let’s Talk About It",

  // Footer
  footer_tagline:
    "Purpose-built software, intelligent enterprise platforms, and digital products engineered for ambitious global companies.",
  footer_copyright: "All rights reserved.",

  // About Section
  about_eyebrow: "Who We Are",
  about_title: "A technology team you can count on for the",
  about_gradient: "long run.",
  about_description:
    "We are a friendly, dedicated group of developers and designers who love solving difficult business puzzles through clean software.",
  about_story_p1:
    "CodvianTech started with a straightforward observation: too many companies are forced to wrestle with complicated, clunky tools that slow their people down rather than helping them work faster.",
  about_story_p2:
    "We wanted to do things differently. We partner closely with business owners, managers, and startup founders to listen to what is actually getting in their way. Then we build practical, clean software that removes those bottlenecks once and for all.",
  about_story_p3:
    "Whether we are building a brand new mobile application from scratch or connecting your inventory with your accounting system, you work directly with experienced developers who care about getting the details right.",
  about_promise_title: "Our Promise",
  about_promise_desc:
    "Clear quotes, zero technical jargon, and dependable software that makes your working day smoother.",

  // Process Section
  process_eyebrow: "Our Process",
  process_title: "A clear, simple way of working",
  process_gradient: "together.",
  process_description:
    "We keep our process straightforward so you always know what is being built, who is working on it, and when it will be ready.",

  // Contact Section
  contact_eyebrow: "Get In Touch",
  contact_title: "Let’s discuss what you are",
  contact_gradient: "planning.",
  contact_description:
    "Send us a quick message below and we will be in touch with practical ideas on how to bring your project to life.",
  contact_info_title: "We’d love to hear from you.",
  contact_info_desc:
    "Whether you have a clear plan ready or just a few early ideas on paper, we’re happy to talk through what you need. There’s no pressure or sales pitch—just honest advice from developers who care about building good software.",
};
