
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
      id: 'blucast',
      name: 'BlookCast', 
      url: 'https://blucast.rafiei.co',
      description: {
        en: 'Podcast on the psychology of money & entrepreneurship',
        fa: 'پادکست درباره روانشناسی پول و کارآفرینی',
        ar: 'بودكاست عن علم نفس المال وريادة الأعمال',
        tr: 'Para psikolojisi ve girişimcilik üzerine podcast',
      },
      icon: 'Podcast',
    }
  ],
  // Company information
  company: {
    name: 'RAFIEI LTD',
    number: '14994763',
    address: {
      street: '2 Frederick Street',
      area: 'Kings Cross',
      city: 'London',
      country: 'United Kingdom'
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
