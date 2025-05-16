
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'fa';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.founder': 'Founder',
    'nav.companies': 'Companies',
    'nav.contact': 'Contact',
    
    // Home page
    'home.hero.title': 'Building Boundless Futures with Innovation & Intelligence',
    'home.hero.subtitle': 'Rafiei Holding - A global leader in education, technology, and business development',
    'home.hero.cta': 'Discover More',
    'home.intro.title': 'Welcome to Rafiei Holding',
    'home.intro.text': 'We are a multi-disciplinary holding group focused on creating innovative solutions across education, AI technology, financial services, and business development. Our mission is to empower individuals and businesses to thrive in the global economy.',
    'home.companies.title': 'Our Companies',
    'home.companies.subtitle': 'A portfolio of innovative businesses',
    
    // About page
    'about.title': 'About Rafiei Holding',
    'about.subtitle': 'Our Vision & Mission',
    'about.vision.title': 'Vision',
    'about.vision.text': 'To become the world\'s leading platform for borderless business innovation and education, empowering individuals to create global impact.',
    'about.mission.title': 'Mission',
    'about.mission.text': 'We develop cutting-edge solutions and educational systems that enable entrepreneurs and businesses to operate seamlessly across international borders, leveraging technology to overcome traditional limitations.',
    'about.timeline.title': 'Our Journey',
    
    // Founder page
    'founder.title': 'Reza Rafiei',
    'founder.subtitle': 'Founder & CEO',
    'founder.bio': 'Reza Rafiei is an entrepreneur, educator, and visionary founder behind several international ventures in education, artificial intelligence, financial services, and digital business development. With over 300,000 followers on social media and thousands of students worldwide, his mission is to empower individuals to launch borderless businesses.',
    'founder.resume.title': 'Professional Background',
    'founder.resume.item1': 'Founder of Rafiei Academy (international business education)',
    'founder.resume.item2': 'Developer of AI Assistants & AgentLab',
    'founder.resume.item3': 'Fintech system architect (Rafiei Financial Center)',
    'founder.resume.item4': 'Creator of the "Boundless" business methodology',
    'founder.resume.item5': 'Speaker, podcaster (BlookCast), and course developer',
    'founder.resume.item6': 'Migrating and expanding operations globally (UK, Australia, UAE)',
    
    // Companies
    'companies.title': 'Our Companies',
    'companies.subtitle': 'A portfolio of innovative businesses',
    
    // Rafiei Academy
    'companies.academy.title': 'Rafiei Academy',
    'companies.academy.description': 'Online educational platform for global entrepreneurship',
    'companies.academy.services': 'Courses: Dropshipping, freelancing, digital products, business mindset',
    'companies.academy.impact': 'Over 2000 students, focus on real-world, actionable learning',
    'companies.academy.details': 'Personality test, assignments, and mentoring included',
    
    // Rafiei AI Assistant
    'companies.ai_assistant.title': 'Rafiei AI Assistant',
    'companies.ai_assistant.description': 'Telegram-based and web-based AI assistant',
    'companies.ai_assistant.services': 'Offers life & business coaching, content creation, voice/image analysis',
    'companies.ai_assistant.impact': 'Connected to GPT and live search tools',
    'companies.ai_assistant.details': 'Designed to serve both personal growth and productivity',
    
    // Rafiei Financial Center
    'companies.financial.title': 'Rafiei Financial Center',
    'companies.financial.description': 'International payment processing and income aggregation',
    'companies.financial.services': 'Stripe, Deel, Wise onboarding for Iranian freelancers',
    'companies.financial.impact': 'Legal and KYC infrastructure for UK-based businesses',
    'companies.financial.details': 'Safe, fast, and compliant solutions for global income management',
    
    // Rafiei Business Development Agency
    'companies.business.title': 'Rafiei Business Development Agency',
    'companies.business.description': 'Assists individuals and companies in building online businesses',
    'companies.business.services': 'Services: Company registration, Stripe setup, website creation, automation',
    'companies.business.impact': 'End-to-end solutions from ideation to scaling',
    
    // Rafiei AI Lab
    'companies.ailab.title': 'Rafiei AI Lab',
    'companies.ailab.description': 'Experimental space for developing AI agents',
    'companies.ailab.services': 'Projects include podcast agents, coaching bots, business automation AI',
    'companies.ailab.impact': 'Focus on integrating AI into education, content, and SaaS',
    
    // BNets
    'companies.bnets.title': 'BNets – Borderless Network',
    'companies.bnets.description': 'Private infrastructure for secure, fast, and censorship-resistant internet connectivity',
    'companies.bnets.services': 'High-speed private network with global nodes, always-on redundancy and multi-layered security',
    'companies.bnets.impact': 'Serving international entrepreneurs, freelancers, and digital nomads',
    'companies.bnets.details': 'Smart routing for platforms like Stripe, Upwork, Wise, and dedicated support via Telegram bot',
    
    // BlueCast
    'companies.bluecast.title': 'BlueCast – Psychology of Wealth',
    'companies.bluecast.description': 'Persian podcast created by Reza Rafiei on wealth psychology and entrepreneurship',
    'companies.bluecast.services': 'Topics: Financial mindset, AI and future of work, smart income generation, life design',
    'companies.bluecast.impact': 'Available on Spotify, Castbox, and YouTube with subscription options',
    'companies.bluecast.details': 'Blends science, stories, and strategy for mindset and income improvement',
    
    // Contact page
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in touch with our team',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.message': 'Your Message',
    'contact.form.submit': 'Send Message',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Phone',
    'contact.info.location': 'Location',
    
    // Footer
    'footer.company': 'Rafiei LTD, UK Registered Company',
    'footer.location': 'Based in London',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms',
    'footer.sitemap': 'Sitemap',
    'footer.copyright': '© 2025 Rafiei Holding. All rights reserved.',
  },
  fa: {
    // Navigation
    'nav.home': 'خانه',
    'nav.about': 'درباره ما',
    'nav.founder': 'بنیانگذار',
    'nav.companies': 'شرکت‌ها',
    'nav.contact': 'تماس با ما',
    
    // Home page
    'home.hero.title': 'ساخت آینده‌های بی‌مرز با نوآوری و هوشمندی',
    'home.hero.subtitle': 'هلدینگ رفیعی - یک رهبر جهانی در آموزش، فناوری و توسعه کسب‌وکار',
    'home.hero.cta': 'بیشتر بدانید',
    'home.intro.title': 'به هلدینگ رفیعی خوش آمدید',
    'home.intro.text': 'ما یک گروه هلدینگ چندرشته‌ای هستیم که بر ایجاد راه‌حل‌های نوآورانه در زمینه‌های آموزش، فناوری هوش مصنوعی، خدمات مالی و توسعه کسب‌وکار تمرکز داریم. ماموریت ما توانمندسازی افراد و کسب‌وکارها برای رشد در اقتصاد جهانی است.',
    'home.companies.title': 'شرکت‌های ما',
    'home.companies.subtitle': 'مجموعه‌ای از کسب‌وکارهای نوآورانه',
    
    // About page
    'about.title': 'درباره هلدینگ رفیعی',
    'about.subtitle': 'چشم‌انداز و ماموریت ما',
    'about.vision.title': 'چشم‌انداز',
    'about.vision.text': 'تبدیل شدن به پیشروترین پلتفرم جهانی برای نوآوری و آموزش کسب‌وکار بدون مرز، با هدف توانمندسازی افراد برای ایجاد تأثیر جهانی.',
    'about.mission.title': 'ماموریت',
    'about.mission.text': 'ما راه‌حل‌های پیشرفته و سیستم‌های آموزشی را توسعه می‌دهیم که به کارآفرینان و کسب‌وکارها امکان می‌دهد بدون محدودیت در مرزهای بین‌المللی فعالیت کنند و با استفاده از فناوری بر محدودیت‌های سنتی غلبه کنند.',
    'about.timeline.title': 'مسیر ما',
    
    // Founder page
    'founder.title': 'رضا رفیعی',
    'founder.subtitle': 'بنیانگذار و مدیرعامل',
    'founder.bio': 'رضا رفیعی کارآفرین، مربی و بنیانگذار چندین شرکت بین‌المللی در زمینه‌های آموزش، هوش مصنوعی، خدمات مالی و توسعه کسب‌وکار دیجیتال است. با بیش از ۳۰۰,۰۰۰ دنبال‌کننده در رسانه‌های اجتماعی و هزاران دانشجو در سراسر جهان، ماموریت او توانمندسازی افراد برای راه‌اندازی کسب‌وکارهای بدون مرز است.',
    'founder.resume.title': 'سوابق حرفه‌ای',
    'founder.resume.item1': 'بنیانگذار آکادمی رفیعی (آموزش کسب‌وکار بین‌المللی)',
    'founder.resume.item2': 'توسعه‌دهنده دستیارهای هوش مصنوعی و AgentLab',
    'founder.resume.item3': 'معمار سیستم فین‌تک (مرکز مالی رفیعی)',
    'founder.resume.item4': 'خالق متدولوژی کسب‌وکار "بدون مرز"',
    'founder.resume.item5': 'سخنران، پادکستر (BlookCast) و توسعه‌دهنده دوره‌های آموزشی',
    'founder.resume.item6': 'مهاجرت و گسترش عملیات در سطح جهانی (بریتانیا، استرالیا، امارات)',
    
    // Companies
    'companies.title': 'شرکت‌های ما',
    'companies.subtitle': 'مجموعه‌ای از کسب‌وکارهای نوآورانه',
    
    // Rafiei Academy
    'companies.academy.title': 'آکادمی رفیعی',
    'companies.academy.description': 'پلتفرم آموزشی آنلاین برای کارآفرینی جهانی',
    'companies.academy.services': 'دوره‌ها: دراپ‌شیپینگ، فریلنسینگ، محصولات دیجیتال، ذهنیت کسب‌وکار',
    'companies.academy.impact': 'بیش از ۲۰۰۰ دانشجو، با تمرکز بر یادگیری کاربردی و عملی',
    'companies.academy.details': 'تست شخصیت، تکالیف و منتورینگ شامل می‌شود',
    
    // Rafiei AI Assistant
    'companies.ai_assistant.title': 'دستیار هوش مصنوعی رفیعی',
    'companies.ai_assistant.description': 'دستیار هوش مصنوعی مبتنی بر تلگرام و وب',
    'companies.ai_assistant.services': 'ارائه‌دهنده کوچینگ زندگی و کسب‌وکار، تولید محتوا، تحلیل صدا/تصویر',
    'companies.ai_assistant.impact': 'متصل به GPT و ابزارهای جستجوی زنده',
    'companies.ai_assistant.details': 'طراحی شده برای خدمت به رشد فردی و بهره‌وری',
    
    // Rafiei Financial Center
    'companies.financial.title': 'مرکز مالی رفیعی',
    'companies.financial.description': 'پردازش پرداخت بین‌المللی و تجمیع درآمد',
    'companies.financial.services': 'راه‌اندازی Stripe، Deel و Wise برای فریلنسرهای ایرانی',
    'companies.financial.impact': 'زیرساخت قانونی و KYC برای کسب‌وکارهای مبتنی بر بریتانیا',
    'companies.financial.details': 'راه‌حل‌های امن، سریع و قانونی برای مدیریت درآمد جهانی',
    
    // Rafiei Business Development Agency
    'companies.business.title': 'آژانس توسعه کسب‌وکار رفیعی',
    'companies.business.description': 'کمک به افراد و شرکت‌ها در ایجاد کسب‌وکارهای آنلاین',
    'companies.business.services': 'خدمات: ثبت شرکت، راه‌اندازی Stripe، ایجاد وبسایت، اتوماسیون',
    'companies.business.impact': 'راه‌حل‌های جامع از ایده تا مقیاس‌پذیری',
    
    // Rafiei AI Lab
    'companies.ailab.title': 'آزمایشگاه هوش مصنوعی رفیعی',
    'companies.ailab.description': 'فضای آزمایشی برای توسعه عامل‌های هوش مصنوعی',
    'companies.ailab.services': 'پروژه‌ها شامل عامل‌های پادکست، ربات‌های کوچینگ، هوش مصنوعی اتوماسیون کسب‌وکار',
    'companies.ailab.impact': 'تمرکز بر ادغام هوش مصنوعی در آموزش، محتوا و SaaS',
    
    // BNets
    'companies.bnets.title': 'بی‌نتس - شبکه بدون مرز',
    'companies.bnets.description': 'زیرساخت خصوصی برای اتصال اینترنت امن، سریع و بدون سانسور',
    'companies.bnets.services': 'شبکه خصوصی پرسرعت با سرورهای جهانی، افزونگی همیشه روشن و امنیت چندلایه',
    'companies.bnets.impact': 'خدمت به کارآفرینان بین‌المللی، فریلنسرها و دیجیتال نومدها',
    'companies.bnets.details': 'مسیریابی هوشمند برای پلتفرم‌هایی مانند Stripe، Upwork، Wise و پشتیبانی اختصاصی از طریق ربات تلگرام',
    
    // BlueCast
    'companies.bluecast.title': 'بلوکست - روانشناسی ثروت',
    'companies.bluecast.description': 'پادکست فارسی ایجاد شده توسط رضا رفیعی درباره روانشناسی ثروت و کارآفرینی',
    'companies.bluecast.services': 'موضوعات: ذهنیت مالی، هوش مصنوعی و آینده کار، تولید درآمد هوشمند، طراحی زندگی',
    'companies.bluecast.impact': 'در دسترس در اسپاتیفای، کستباکس و یوتیوب با گزینه‌های اشتراک',
    'companies.bluecast.details': 'ترکیبی از علم، داستان و استراتژی برای بهبود ذهنیت و درآمد',
    
    // Contact page
    'contact.title': 'تماس با ما',
    'contact.subtitle': 'با تیم ما در ارتباط باشید',
    'contact.form.name': 'نام کامل',
    'contact.form.email': 'آدرس ایمیل',
    'contact.form.message': 'پیام شما',
    'contact.form.submit': 'ارسال پیام',
    'contact.info.email': 'ایمیل',
    'contact.info.phone': 'تلفن',
    'contact.info.location': 'موقعیت',
    
    // Footer
    'footer.company': 'رفیعی LTD، شرکت ثبت شده در بریتانیا',
    'footer.location': 'مستقر در لندن',
    'footer.privacy': 'سیاست حفظ حریم خصوصی',
    'footer.terms': 'شرایط استفاده',
    'footer.sitemap': 'نقشه سایت',
    'footer.copyright': '© ۱۴۰۴ هلدینگ رفیعی. تمامی حقوق محفوظ است.',
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
