
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'fa' | 'ar' | 'tr';

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
    'nav.contact': 'Contact',
    'nav.login': 'Login',
    'nav.register': 'Register',
    
    // Home page
    'home.hero.title': 'Building Boundless Futures with Innovation & Intelligence',
    'home.hero.subtitle': 'Rafiei Group - A global leader in education, technology, and business development',
    'home.hero.cta': 'Discover More',
    'home.intro.title': 'Welcome to Rafiei Group',
    'home.intro.text': 'We are a multi-disciplinary group focused on creating innovative solutions across education, AI technology, financial services, and business development. Our mission is to empower individuals and businesses to thrive in the global economy.',
    'home.products.title': 'Our Products',
    'home.products.subtitle': 'A suite of innovative solutions for the modern entrepreneur',
    'home.products.quick_access': 'Quick Access to Products',
    
    // Products
    'products.title': 'Our Products',
    'products.subtitle': 'A suite of innovative solutions',
    
    // Individual Products
    'products.ai_assistant.title': 'AI Assistant',
    'products.ai_assistant.description': 'Smart Telegram-based AI coach',
    
    'products.synapse.title': 'Synapse',
    'products.synapse.description': 'Create your own AI assistant in minutes',
    
    'products.academy.title': 'Rafiei Academy',
    'products.academy.description': 'Online courses for borderless income',
    
    'products.bnets.title': 'BNets',
    'products.bnets.description': 'Borderless smart network for global connectivity',
    
    'products.agency.title': 'Rafiei Agency',
    'products.agency.description': 'Digital business development agency',
    
    'products.financial.title': 'Financial Center',
    'products.financial.description': 'International financial tools & Stripe onboarding',
    
    'products.bluecast.title': 'BlueCast',
    'products.bluecast.description': 'Podcast on the psychology of money & entrepreneurship',
    
    // About page
    'about.title': 'About Rafiei Group',
    'about.subtitle': 'Our Vision & Mission',
    'about.vision.title': 'Vision',
    'about.vision.text': 'To become the world\'s leading platform for borderless business innovation and education, empowering individuals to create global impact.',
    'about.mission.title': 'Mission',
    'about.mission.text': 'We develop cutting-edge solutions and educational systems that enable entrepreneurs and businesses to operate seamlessly across international borders, leveraging technology to overcome traditional limitations.',
    'about.timeline.title': 'Our Journey',
    
    // Contact page
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in touch with our team',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Your Message',
    'contact.form.submit': 'Send Message',
    'contact.info.email': 'Email',
    'contact.info.location': 'Location',
    'contact.info.company': 'Company Information',
    
    // Footer
    'footer.about': 'About Rafiei Group',
    'footer.products': 'Products',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms',
    'footer.sitemap': 'Sitemap',
    'footer.copyright': '© 2025 Rafiei Group. All rights reserved.',
  },
  fa: {
    // Navigation
    'nav.home': 'خانه',
    'nav.about': 'درباره ما',
    'nav.contact': 'تماس با ما',
    'nav.login': 'ورود',
    'nav.register': 'ثبت نام',
    
    // Home page
    'home.hero.title': 'ساخت آینده‌های بی‌مرز با نوآوری و هوشمندی',
    'home.hero.subtitle': 'گروه رفیعی - یک رهبر جهانی در آموزش، فناوری و توسعه کسب‌وکار',
    'home.hero.cta': 'بیشتر بدانید',
    'home.intro.title': 'به گروه رفیعی خوش آمدید',
    'home.intro.text': 'ما یک گروه چندرشته‌ای هستیم که بر ایجاد راه‌حل‌های نوآورانه در زمینه‌های آموزش، فناوری هوش مصنوعی، خدمات مالی و توسعه کسب‌وکار تمرکز داریم. ماموریت ما توانمندسازی افراد و کسب‌وکارها برای رشد در اقتصاد جهانی است.',
    'home.products.title': 'محصولات ما',
    'home.products.subtitle': 'مجموعه‌ای از راه‌حل‌های نوآورانه برای کارآفرینان مدرن',
    'home.products.quick_access': 'دسترسی سریع به محصولات',
    
    // Products
    'products.title': 'محصولات ما',
    'products.subtitle': 'مجموعه‌ای از راه‌حل‌های نوآورانه',
    
    // Individual Products
    'products.ai_assistant.title': 'دستیار هوش مصنوعی',
    'products.ai_assistant.description': 'مربی هوشمند مبتنی بر تلگرام',
    
    'products.synapse.title': 'سیناپس',
    'products.synapse.description': 'ایجاد دستیار هوش مصنوعی خودتان در چند دقیقه',
    
    'products.academy.title': 'آکادمی رفیعی',
    'products.academy.description': 'دوره‌های آنلاین برای درآمد بدون مرز',
    
    'products.bnets.title': 'بی‌نتس',
    'products.bnets.description': 'شبکه هوشمند بدون مرز برای اتصال جهانی',
    
    'products.agency.title': 'آژانس رفیعی',
    'products.agency.description': 'آژانس توسعه کسب‌وکار دیجیتال',
    
    'products.financial.title': 'مرکز مالی',
    'products.financial.description': 'ابزارهای مالی بین‌المللی و راه‌اندازی استرایپ',
    
    'products.bluecast.title': 'بلوکست',
    'products.bluecast.description': 'پادکست در زمینه روانشناسی پول و کارآفرینی',
    
    // About page
    'about.title': 'درباره گروه رفیعی',
    'about.subtitle': 'چشم‌انداز و ماموریت ما',
    'about.vision.title': 'چشم‌انداز',
    'about.vision.text': 'تبدیل شدن به پیشروترین پلتفرم جهانی برای نوآوری و آموزش کسب‌وکار بدون مرز، با هدف توانمندسازی افراد برای ایجاد تأثیر جهانی.',
    'about.mission.title': 'ماموریت',
    'about.mission.text': 'ما راه‌حل‌های پیشرفته و سیستم‌های آموزشی را توسعه می‌دهیم که به کارآفرینان و کسب‌وکارها امکان می‌دهد بدون محدودیت در مرزهای بین‌المللی فعالیت کنند و با استفاده از فناوری بر محدودیت‌های سنتی غلبه کنند.',
    'about.timeline.title': 'مسیر ما',
    
    // Contact page
    'contact.title': 'تماس با ما',
    'contact.subtitle': 'با تیم ما در ارتباط باشید',
    'contact.form.name': 'نام کامل',
    'contact.form.email': 'آدرس ایمیل',
    'contact.form.subject': 'موضوع',
    'contact.form.message': 'پیام شما',
    'contact.form.submit': 'ارسال پیام',
    'contact.info.email': 'ایمیل',
    'contact.info.location': 'موقعیت',
    'contact.info.company': 'اطلاعات شرکت',
    
    // Footer
    'footer.about': 'درباره گروه رفیعی',
    'footer.products': 'محصولات',
    'footer.legal': 'قانونی',
    'footer.privacy': 'سیاست حفظ حریم خصوصی',
    'footer.terms': 'شرایط استفاده',
    'footer.sitemap': 'نقشه سایت',
    'footer.copyright': '© ۱۴۰۴ گروه رفیعی. تمامی حقوق محفوظ است.',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'عن المجموعة',
    'nav.contact': 'اتصل بنا',
    'nav.login': 'تسجيل الدخول',
    'nav.register': 'التسجيل',
    
    // Home page
    'home.hero.title': 'بناء مستقبل بلا حدود مع الابتكار والذكاء',
    'home.hero.subtitle': 'مجموعة رفيعي - رائدة عالمية في التعليم والتكنولوجيا وتطوير الأعمال',
    'home.hero.cta': 'اكتشف المزيد',
    'home.intro.title': 'مرحباً بكم في مجموعة رفيعي',
    'home.intro.text': 'نحن مجموعة متعددة التخصصات تركز على إنشاء حلول مبتكرة عبر التعليم وتكنولوجيا الذكاء الاصطناعي والخدمات المالية وتطوير الأعمال. مهمتنا هي تمكين الأفراد والشركات للازدهار في الاقتصاد العالمي.',
    'home.products.title': 'منتجاتنا',
    'home.products.subtitle': 'مجموعة من الحلول المبتكرة لرواد الأعمال العصريين',
    'home.products.quick_access': 'وصول سريع للمنتجات',
    
    // Products
    'products.title': 'منتجاتنا',
    'products.subtitle': 'مجموعة من الحلول المبتكرة',
    
    // Individual Products
    'products.ai_assistant.title': 'المساعد الذكي',
    'products.ai_assistant.description': 'مدرب ذكاء اصطناعي عبر تيليجرام',
    
    'products.synapse.title': 'سينابس',
    'products.synapse.description': 'أنشئ مساعدك الذكي الخاص في دقائق',
    
    'products.academy.title': 'أكاديمية رفيعي',
    'products.academy.description': 'دورات عبر الإنترنت للدخل العالمي',
    
    'products.bnets.title': 'بي-نتس',
    'products.bnets.description': 'شبكة ذكية بلا حدود للاتصال العالمي',
    
    'products.agency.title': 'وكالة رفيعي',
    'products.agency.description': 'وكالة تطوير الأعمال الرقمية',
    
    'products.financial.title': 'المركز المالي',
    'products.financial.description': 'أدوات مالية دولية وإعداد سترايب',
    
    'products.bluecast.title': 'بلوكاست',
    'products.bluecast.description': 'بودكاست حول علم نفس المال وريادة الأعمال',
    
    // About page
    'about.title': 'عن مجموعة رفيعي',
    'about.subtitle': 'رؤيتنا ومهمتنا',
    'about.vision.title': 'رؤيتنا',
    'about.vision.text': 'أن نصبح المنصة الرائدة عالمياً للابتكار التجاري والتعليم بلا حدود، وتمكين الأفراد من إحداث تأثير عالمي.',
    'about.mission.title': 'مهمتنا',
    'about.mission.text': 'نطور حلولاً متطورة وأنظمة تعليمية تمكن رواد الأعمال والشركات من العمل بسلاسة عبر الحدود الدولية، باستخدام التكنولوجيا للتغلب على القيود التقليدية.',
    'about.timeline.title': 'رحلتنا',
    
    // Contact page
    'contact.title': 'اتصل بنا',
    'contact.subtitle': 'تواصل مع فريقنا',
    'contact.form.name': 'الاسم الكامل',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.subject': 'الموضوع',
    'contact.form.message': 'رسالتك',
    'contact.form.submit': 'إرسال الرسالة',
    'contact.info.email': 'البريد الإلكتروني',
    'contact.info.location': 'الموقع',
    'contact.info.company': 'معلومات الشركة',
    
    // Footer
    'footer.about': 'عن مجموعة رفيعي',
    'footer.products': 'المنتجات',
    'footer.legal': 'قانوني',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'الشروط والأحكام',
    'footer.sitemap': 'خريطة الموقع',
    'footer.copyright': '© 2025 مجموعة رفيعي. جميع الحقوق محفوظة.',
  },
  tr: {
    // Navigation
    'nav.home': 'Ana Sayfa',
    'nav.about': 'Hakkımızda',
    'nav.contact': 'İletişim',
    'nav.login': 'Giriş',
    'nav.register': 'Kayıt Ol',
    
    // Home page
    'home.hero.title': 'İnovasyon ve Zeka ile Sınırsız Gelecekler İnşa Etmek',
    'home.hero.subtitle': 'Rafiei Group - Eğitim, teknoloji ve iş geliştirmede küresel bir lider',
    'home.hero.cta': 'Daha Fazlasını Keşfet',
    'home.intro.title': 'Rafiei Group\'a Hoş Geldiniz',
    'home.intro.text': 'Eğitim, yapay zeka teknolojisi, finansal hizmetler ve iş geliştirme alanlarında yenilikçi çözümler oluşturmaya odaklanan çok disiplinli bir grubuz. Misyonumuz, bireyleri ve işletmeleri küresel ekonomide gelişmeleri için güçlendirmektir.',
    'home.products.title': 'Ürünlerimiz',
    'home.products.subtitle': 'Modern girişimciler için yenilikçi çözümler paketi',
    'home.products.quick_access': 'Ürünlere Hızlı Erişim',
    
    // Products
    'products.title': 'Ürünlerimiz',
    'products.subtitle': 'Yenilikçi çözümler paketi',
    
    // Individual Products
    'products.ai_assistant.title': 'AI Asistan',
    'products.ai_assistant.description': 'Telegram tabanlı akıllı AI koçu',
    
    'products.synapse.title': 'Synapse',
    'products.synapse.description': 'Dakikalar içinde kendi AI asistanınızı oluşturun',
    
    'products.academy.title': 'Rafiei Akademi',
    'products.academy.description': 'Sınırsız gelir için çevrimiçi kurslar',
    
    'products.bnets.title': 'BNets',
    'products.bnets.description': 'Küresel bağlantı için sınırsız akıllı ağ',
    
    'products.agency.title': 'Rafiei Ajans',
    'products.agency.description': 'Dijital iş geliştirme ajansı',
    
    'products.financial.title': 'Finansal Merkez',
    'products.financial.description': 'Uluslararası finansal araçlar ve Stripe entegrasyonu',
    
    'products.bluecast.title': 'BlueCast',
    'products.bluecast.description': 'Para psikolojisi ve girişimcilik hakkında podcast',
    
    // About page
    'about.title': 'Rafiei Group Hakkında',
    'about.subtitle': 'Vizyonumuz ve Misyonumuz',
    'about.vision.title': 'Vizyonumuz',
    'about.vision.text': 'Sınırsız iş yeniliği ve eğitim için dünyanın önde gelen platformu olmak, bireylerin küresel etki yaratmasını sağlamak.',
    'about.mission.title': 'Misyonumuz',
    'about.mission.text': 'Girişimcilerin ve işletmelerin uluslararası sınırlar arasında sorunsuz çalışmasını sağlayan, teknolojiyi kullanarak geleneksel sınırlamaların üstesinden gelen gelişmiş çözümler ve eğitim sistemleri geliştiriyoruz.',
    'about.timeline.title': 'Yolculuğumuz',
    
    // Contact page
    'contact.title': 'Bize Ulaşın',
    'contact.subtitle': 'Ekibimizle iletişime geçin',
    'contact.form.name': 'Tam İsim',
    'contact.form.email': 'E-posta Adresi',
    'contact.form.subject': 'Konu',
    'contact.form.message': 'Mesajınız',
    'contact.form.submit': 'Mesaj Gönder',
    'contact.info.email': 'E-posta',
    'contact.info.location': 'Konum',
    'contact.info.company': 'Şirket Bilgileri',
    
    // Footer
    'footer.about': 'Rafiei Group Hakkında',
    'footer.products': 'Ürünler',
    'footer.legal': 'Yasal',
    'footer.privacy': 'Gizlilik Politikası',
    'footer.terms': 'Şartlar',
    'footer.sitemap': 'Site Haritası',
    'footer.copyright': '© 2025 Rafiei Group. Tüm hakları saklıdır.',
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
