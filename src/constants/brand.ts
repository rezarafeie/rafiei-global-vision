
/**
 * This file contains shared branding constants used across all Rafiei Group projects
 * These values should be synchronized with other projects
 */

export const BRAND = {
  name: {
    full: 'Rafiei Group',
    short: 'Rafiei',
  },
  // Brand colors used across all products
  colors: {
    primary: '#4285F4', // Google blue
    primary_light: '#6EA0F5',
    primary_dark: '#3367D6',
    accent: '#34A853', // Google green
    secondary: '#FBBC05', // Google yellow
    error: '#EA4335', // Google red
  },
  // Consistent typography settings
  typography: {
    fontFamily: {
      en: 'Inter, sans-serif',
      fa: 'Vazirmatn, sans-serif',
      ar: 'Vazirmatn, sans-serif',
      tr: 'Inter, sans-serif',
    },
    displayFamily: {
      en: 'Poppins, sans-serif',
      fa: 'Vazirmatn, sans-serif',
      ar: 'Vazirmatn, sans-serif',
      tr: 'Poppins, sans-serif',
    },
  },
  // Products information that will be consistent across all Rafiei Group apps
  products: [
    {
      id: 'rafiei-cloud',
      name: 'Rafiei Cloud',
      url: 'https://cloud.rafiei.co',
      description: {
        en: 'Entire backend infrastructure. Database, authentication, storage, and edge functions with zero configuration under 2 mins',
        fa: 'زیرساخت کامل بک‌اند. دیتابیس، احراز هویت، ذخیره‌سازی و توابع اج بدون پیکربندی در کمتر از ۲ دقیقه',
        ar: 'بنية تحتية خلفية كاملة. قاعدة البيانات والمصادقة والتخزين ووظائف الحافة بدون تكوين في أقل من دقيقتين',
        tr: 'Tam backend altyapısı. Veritabanı, kimlik doğrulama, depolama ve edge fonksiyonları 2 dakikada sıfır yapılandırma ile',
      },
      icon: 'Cloud',
    },
    {
      id: 'rafiei-builder',
      name: 'Rafiei Builder',
      url: 'https://builder.rafiei.co',
      description: {
        en: 'Vibe coding - create apps and websites by chatting with AI',
        fa: 'کدنویسی هوشمند - ساخت اپلیکیشن و وبسایت با چت با هوش مصنوعی',
        ar: 'برمجة ذكية - إنشاء التطبيقات والمواقع من خلال الدردشة مع الذكاء الاصطناعي',
        tr: 'Akıllı kodlama - AI ile sohbet ederek uygulama ve web siteleri oluşturun',
      },
      icon: 'Hammer',
    },
    {
      id: 'calls-analyzer',
      name: 'Calls Analyzer',
      url: 'https://calls.rafiei.co',
      description: {
        en: 'AI-powered call analyzer for insights and performance tracking',
        fa: 'تحلیل‌گر تماس مبتنی بر هوش مصنوعی برای بینش و ردیابی عملکرد',
        ar: 'محلل المكالمات المدعوم بالذكاء الاصطناعي للحصول على رؤى وتتبع الأداء',
        tr: 'İçgörüler ve performans takibi için AI destekli arama analizörü',
      },
      icon: 'PhoneCall',
    },
    {
      id: 'zenmind',
      name: 'ZenMind',
      url: 'https://zenmind.rafiei.co',
      description: {
        en: 'AI meditation generator for personalized mindfulness sessions',
        fa: 'تولیدکننده مدیتیشن هوش مصنوعی برای جلسات ذهن‌آگاهی شخصی‌سازی‌شده',
        ar: 'مولد التأمل بالذكاء الاصطناعي لجلسات اليقظة الذهنية المخصصة',
        tr: 'Kişiselleştirilmiş farkındalık seansları için AI meditasyon oluşturucu',
      },
      icon: 'Lotus',
    },
    {
      id: 'ai-assistant',
      name: 'AI Assistant', 
      url: 'https://ai.rafiei.co',
      description: {
        en: 'Smart Telegram-based AI coach',
        fa: 'دستیار هوشمند مبتنی بر تلگرام',
        ar: 'مساعد ذكي قائم على تطبيق تلغرام',
        tr: 'Telegram tabanlı akıllı AI koç',
      },
      icon: 'Brain',
    },
    {
      id: 'global-ai-coach',
      name: 'Global AI Coach',
      url: 'https://coach.rafiei.co',
      description: {
        en: 'AI interactive learning system for global education',
        fa: 'سیستم یادگیری تعاملی هوش مصنوعی برای آموزش جهانی',
        ar: 'نظام التعلم التفاعلي بالذكاء الاصطناعي للتعليم العالمي',
        tr: 'Küresel eğitim için AI etkileşimli öğrenme sistemi',
      },
      icon: 'GraduationCap',
    },
    {
      id: 'bettermx',
      name: 'BetterMX',
      url: 'https://bettermx.rafiei.co',
      description: {
        en: 'Professional email forwarding service',
        fa: 'سرویس حرفه‌ای فورواردینگ ایمیل',
        ar: 'خدمة إعادة توجيه البريد الإلكتروني المهنية',
        tr: 'Profesyonel e-posta yönlendirme hizmeti',
      },
      icon: 'Forward',
    },
    {
      id: 'rafiei-exchange',
      name: 'Rafiei Exchange',
      url: 'https://exchange.rafiei.co',
      description: {
        en: 'Advanced cryptocurrency trading platform with professional tools',
        fa: 'پلتفرم پیشرفته معاملات ارزهای دیجیتال با ابزارهای حرفه‌ای',
        ar: 'منصة تداول العملات المشفرة المتقدمة مع الأدوات المهنية',
        tr: 'Profesyonel araçlarla gelişmiş kripto para ticaret platformu',
      },
      icon: 'TrendingUp',
    },
    {
      id: 'synapse',
      name: 'Synapse', 
      url: 'https://synapse.rafiei.co',
      description: {
        en: 'Create your own AI assistant in minutes',
        fa: 'ایجاد دستیار هوشمند در چند دقیقه',
        ar: 'إنشاء المساعد الذكي الخاص بك في دقائق',
        tr: 'Dakikalar içinde kendi yapay zeka asistanınızı oluşturun',
      },
      icon: 'Zap',
    },
    {
      id: 'academy',
      name: 'Rafiei Academy', 
      url: 'https://academy.rafiei.co',
      description: {
        en: 'Online courses for borderless income',
        fa: 'دوره‌های آنلاین برای کسب درآمد بدون مرز',
        ar: 'دورات عبر الإنترنت للدخل بلا حدود',
        tr: 'Sınırsız gelir için çevrimiçi kurslar',
      },
      icon: 'Book',
    },
    {
      id: 'bnets',
      name: 'BNets', 
      url: 'https://bnets.co',
      description: {
        en: 'Borderless smart network for global connectivity',
        fa: 'شبکه هوشمند بدون مرز برای اتصال جهانی',
        ar: 'شبكة ذكية بلا حدود للاتصال العالمي',
        tr: 'Küresel bağlantı için sınırsız akıllı ağ',
      },
      icon: 'Network',
    },
    {
      id: 'agency',
      name: 'Rafiei Agency', 
      url: 'https://agency.rafiei.co',
      description: {
        en: 'Digital business development agency',
        fa: 'آژانس توسعه کسب و کار دیجیتال',
        ar: 'وكالة تطوير الأعمال الرقمية',
        tr: 'Dijital iş geliştirme ajansı',
      },
      icon: 'Briefcase',
    },
    {
      id: 'financial',
      name: 'Financial Center', 
      url: 'https://financial.rafiei.co',
      description: {
        en: 'International financial tools & Stripe onboarding',
        fa: 'ابزارهای مالی بین‌المللی و راه‌اندازی استرایپ',
        ar: 'أدوات مالية دولية وتأهيل سترايب',
        tr: 'Uluslararası finansal araçlar ve Stripe entegrasyonu',
      },
      icon: 'CreditCard',
    },
    {
      id: 'rafiei-payment',
      name: 'Rafiei Payment',
      url: 'https://pay.rafiei.co',
      description: {
        en: 'International payments services',
        fa: 'خدمات پرداخت بین‌المللی',
        ar: 'خدمات الدفع الدولية',
        tr: 'Uluslararası ödeme hizmetleri',
      },
      icon: 'CreditCard',
    },
    {
      id: 'rafiei-financial',
      name: 'Rafiei Financial',
      url: 'https://financial.rafiei.co',
      description: {
        en: 'Payment gateway and online payment services',
        fa: 'درگاه پرداخت و خدمات پرداخت آنلاین',
        ar: 'بوابة الدفع وخدمات الدفع عبر الإنترنت',
        tr: 'Ödeme ağ geçidi ve çevrimiçi ödeme hizmetleri',
      },
      icon: 'Wallet',
    },
    {
      id: 'boundless-network',
      name: 'Boundless Network',
      url: 'https://bnets.co',
      description: {
        en: 'Virtual private network with more than 20 worldwide locations in one service',
        fa: 'شبکه خصوصی مجازی با بیش از 20 موقعیت جهانی در یک سرویس',
        ar: 'شبكة خاصة افتراضية مع أكثر من 20 موقعًا عالميًا في خدمة واحدة',
        tr: 'Tek bir hizmette 20\'den fazla dünya çapında konuma sahip sanal özel ağ',
      },
      icon: 'Shield',
    },
    {
      id: 'rafiei-mag',
      name: 'Rafiei Mag',
      url: 'https://mag.rafiei.co',
      description: {
        en: 'First artificial intelligence tech and business magazine',
        fa: 'اولین مجله تکنولوژی و کسب‌وکار هوش مصنوعی',
        ar: 'أول مجلة للذكاء الاصطناعي والتكنولوجيا والأعمال',
        tr: 'İlk yapay zeka teknolojisi ve iş dergisi',
      },
      icon: 'Newspaper',
    },
    {
      id: 'vetamerse',
      name: 'Vetamerse',
      url: 'https://vetamerse.rafiei.co',
      description: {
        en: 'Metaverse and web3 media and courses',
        fa: 'رسانه و دوره‌های متاورس و وب3',
        ar: 'وسائط ودورات الميتافيرس والويب 3',
        tr: 'Metaverse ve web3 medya ve kursları',
      },
      icon: 'Layers',
    }
  ],
  // Company information
  company: {
    name: 'Rafiei Group',
    address: {
      street: '35 Richford Grove',
      area: 'Birmingham B33 0NJ',
      city: 'Birmingham',
      country: 'UK'
    },
    contact: {
      email: 'contact@rafiei.co',
    },
    social: {
      twitter: 'https://twitter.com/rafiei_co',
      instagram: 'https://instagram.com/rafiei_co',
      linkedin: 'https://linkedin.com/company/rafiei-co',
      telegram: 'https://t.me/rafiei_co'
    }
  },
  // Stats to display across all Rafiei Group products
  stats: {
    monthlyFollowers: '300,000+',
    monthlyUsers: '30,000+',
    products: '7'
  }
};

// Export breakpoints for consistent responsive design
export const BREAKPOINTS = {
  xs: 480,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
};

// Export z-index values for consistent layering
export const LAYERS = {
  base: 0,
  content: 10,
  navigation: 50,
  overlay: 75,
  modal: 100,
  toast: 1000
};
