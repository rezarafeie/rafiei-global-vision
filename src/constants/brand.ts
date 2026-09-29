
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
      id: 'rafiei-studio',
      name: 'Rafiei Studio',
      url: 'https://studio.rafiei.co',
      description: {
        en: 'Content and creative production workspace for building assets, campaigns and reusable media workflows',
        fa: 'فضای تولید محتوا و خلاقیت برای ساخت اسِت، کمپین و ورک‌فلوهای رسانه‌ای قابل استفاده مجدد',
        ar: 'مساحة إنتاج المحتوى والإبداع لبناء الأصول والحملات وتدفقات العمل الإعلامية القابلة لإعادة الاستخدام',
        tr: 'Varlıklar, kampanyalar ve yeniden kullanılabilir medya iş akışları oluşturmak için içerik ve yaratıcı üretim alanı',
      },
      icon: 'Clapperboard',
    },
    {
      id: 'rafiei-builder',
      name: 'Rafiei Builder',
      url: 'https://builder.rafiei.co',
      description: {
        en: 'AI-powered environment for turning prompts and business requirements into working digital products',
        fa: 'محیط مبتنی بر هوش مصنوعی برای تبدیل پرامپت و نیاز کسب‌وکار به محصولات دیجیتال عملیاتی',
        ar: 'بيئة مدعومة بالذكاء الاصطناعي لتحويل الأوامر ومتطلبات الأعمال إلى منتجات رقمية عاملة',
        tr: 'İstemleri ve iş gereksinimlerini çalışan dijital ürünlere dönüştüren yapay zeka destekli ortam',
      },
      icon: 'Hammer',
    },
    {
      id: 'aura',
      name: 'Aura',
      url: 'https://aura.rafiei.co',
      description: {
        en: 'AI trading assistant combining market context, analytics, trade workflows and decision support',
        fa: 'دستیار هوشمند ترید برای ترکیب داده بازار، تحلیل، ورک‌فلوی معامله و پشتیبانی تصمیم‌گیری',
        ar: 'مساعد تداول ذكي يجمع بين سياق السوق والتحليلات وتدفقات التداول ودعم القرار',
        tr: 'Piyasa bağlamı, analitik, işlem akışları ve karar desteğini birleştiren yapay zeka ticaret asistanı',
      },
      icon: 'TrendingUp',
    },
    {
      id: 'weavelearn',
      name: 'WeaveLearn',
      url: 'https://apps.apple.com/app/weavelearn',
      description: {
        en: 'AI coach for personalized learning and personal growth with adaptive journeys and progress tracking',
        fa: 'کوچ هوش مصنوعی برای یادگیری شخصی‌سازی‌شده و رشد فردی با مسیرهای تطبیقی و رهگیری پیشرفت',
        ar: 'مدرب ذكاء اصطناعي للتعلم المخصص والنمو الشخصي مع مسارات تكيفية وتتبع التقدم',
        tr: 'Uyarlanabilir yolculuklar ve ilerleme takibi ile kişiselleştirilmiş öğrenme için yapay zeka koçu',
      },
      icon: 'GraduationCap',
    },
    {
      id: 'rafiei-dropship',
      name: 'Rafiei Dropship',
      url: 'https://dropship.rafiei.co',
      description: {
        en: 'Dropshipping platform and workflow simplifying product discovery, import and selling operations',
        fa: 'پلتفرم و ورک‌فلوی دراپ‌شیپینگ برای ساده‌سازی کشف محصول، ایمپورت و عملیات فروش',
        ar: 'منصة دروبشيبينغ وسير عمل لتبسيط اكتشاف المنتجات والاستيراد وعمليات البيع',
        tr: 'Ürün keşfi, içe aktarma ve satış operasyonlarını basitleştiren dropshipping platformu',
      },
      icon: 'Package',
    },
    {
      id: 'rafiei-store',
      name: 'Rafiei Store',
      url: 'https://store.rafiei.co',
      description: {
        en: 'E-commerce platform for launching, operating and managing product-based online businesses',
        fa: 'پلتفرم تجارت الکترونیک برای ساخت و مدیریت فروشگاه‌ها و کسب‌وکارهای محصول‌محور',
        ar: 'منصة تجارة إلكترونية لإطلاق وتشغيل وإدارة الأعمال القائمة على المنتجات',
        tr: 'Ürün odaklı çevrimiçi işletmeleri başlatma ve yönetme için e-ticaret platformu',
      },
      icon: 'ShoppingCart',
    },
    {
      id: 'academy',
      name: 'Rafiei Academy',
      url: 'https://academy.rafiei.co',
      description: {
        en: 'Education platform for digital business, international business and execution-focused programs',
        fa: 'پلتفرم آموزشی برای کسب‌وکار دیجیتال، کسب‌وکار بین‌المللی و برنامه‌های اجرامحور',
        ar: 'منصة تعليمية للأعمال الرقمية والأعمال الدولية والبرامج القائمة على التنفيذ',
        tr: 'Dijital iş, uluslararası iş ve uygulama odaklı programlar için eğitim platformu',
      },
      icon: 'Book',
    },
    {
      id: 'eatfit',
      name: 'EatFit',
      url: 'https://eatfit.fit',
      description: {
        en: 'AI-first nutrition and fitness product with meal plans, macros, workouts and personalized health',
        fa: 'محصول AI-first در تغذیه و تناسب اندام؛ شامل برنامه غذایی، ماکرو، تمرین و تجربه شخصی‌سازی‌شده سلامت',
        ar: 'منتج تغذية ولياقة يعتمد على الذكاء الاصطناعي مع خطط وجبات وماكروز وتمارين وصحة مخصصة',
        tr: 'Öğün planları, makrolar, antrenmanlar ve kişiselleştirilmiş sağlık sunan yapay zeka öncelikli beslenme ürünü',
      },
      icon: 'Salad',
    },
    {
      id: 'rafiei-cloud',
      name: 'Rafiei Cloud',
      url: 'https://cloud.rafiei.co',
      description: {
        en: 'Central backend and cloud layer for database, authentication, storage, edge functions and logs',
        fa: 'لایه مرکزی بک‌اند و کلاود برای دیتابیس، احراز هویت، ذخیره‌سازی، توابع Edge و لاگ‌ها',
        ar: 'طبقة خلفية وسحابية مركزية لقاعدة البيانات والمصادقة والتخزين ووظائف الحافة والسجلات',
        tr: 'Veritabanı, kimlik doğrulama, depolama, edge fonksiyonları ve loglar için merkezi bulut katmanı',
      },
      icon: 'Cloud',
    },
    {
      id: 'rafiei-payment',
      name: 'Rafiei Pay',
      url: 'https://pay.rafiei.co',
      description: {
        en: 'Centralized payment and gateway management for websites and apps, unifying payment operations',
        fa: 'سیستم متمرکز مدیریت پرداخت و درگاه برای وب‌سایت‌ها و اپلیکیشن‌ها و یکپارچه‌سازی عملیات پرداخت',
        ar: 'إدارة مركزية للمدفوعات والبوابات للمواقع والتطبيقات وتوحيد عمليات الدفع',
        tr: 'Web siteleri ve uygulamalar için merkezi ödeme ve ağ geçidi yönetimi',
      },
      icon: 'CreditCard',
    },
    {
      id: 'rafiei-exchange',
      name: 'Rafiei Exchange',
      url: 'https://exchange.rafiei.co',
      description: {
        en: 'Exchange and money transfer infrastructure for digital operations and international business',
        fa: 'زیرساخت اکسچنج و انتقال پول برای عملیات دیجیتال و کسب‌وکار بین‌المللی',
        ar: 'بنية تحتية للصرافة وتحويل الأموال للعمليات الرقمية والأعمال الدولية',
        tr: 'Dijital operasyonlar ve uluslararası iş için borsa ve para transferi altyapısı',
      },
      icon: 'Wallet',
    },
    {
      id: 'agency',
      name: 'Rafiei Agency',
      url: 'https://agency.rafiei.co',
      description: {
        en: 'The group service arm for digital strategy, product, growth, marketing and execution',
        fa: 'بازوی خدماتی گروه برای استراتژی دیجیتال، محصول، رشد، مارکتینگ و اجرا',
        ar: 'الذراع الخدمي للمجموعة للاستراتيجية الرقمية والمنتج والنمو والتسويق والتنفيذ',
        tr: 'Dijital strateji, ürün, büyüme, pazarlama ve uygulama için grup hizmet kolu',
      },
      icon: 'Briefcase',
    },
    {
      id: 'synapse',
      name: 'Synapse',
      url: 'https://synapse.rafiei.co',
      description: {
        en: 'Platform for building and managing AI assistants and specialized coaching experiences',
        fa: 'پلتفرم ساخت و مدیریت دستیارهای هوش مصنوعی و تجربه‌های تخصصی کوچینگ',
        ar: 'منصة لبناء وإدارة مساعدي الذكاء الاصطناعي وتجارب التدريب المتخصصة',
        tr: 'Yapay zeka asistanları ve uzman koçluk deneyimleri oluşturma ve yönetme platformu',
      },
      icon: 'Zap',
    },
    {
      id: 'bettermx',
      name: 'BetterMX',
      url: 'https://bettermx.rafiei.co',
      description: {
        en: 'Domain email address management with forwarding to defined inboxes and centralized alias control',
        fa: 'مدیریت آدرس‌های ایمیل دامنه و فوروارد کردن آن‌ها به اینباکس‌های تعریف‌شده با مدیریت متمرکز Alias',
        ar: 'إدارة عناوين البريد الإلكتروني للنطاق مع إعادة التوجيه والتحكم المركزي في الأسماء المستعارة',
        tr: 'Tanımlı gelen kutularına yönlendirme ve merkezi takma ad kontrolü ile alan adı e-posta yönetimi',
      },
      icon: 'Forward',
    },
    {
      id: 'telegram-automation',
      name: 'Telegram Bots & Automation',
      url: 'https://rafiei.co/contact',
      description: {
        en: 'Telegram automation for onboarding, support, lead follow-up, notifications and transactional flows',
        fa: 'اتوماسیون‌های تلگرام برای آنبوردینگ، پشتیبانی، پیگیری لید، نوتیفیکیشن و فرایندهای تراکنشی',
        ar: 'أتمتة تيليجرام للتأهيل والدعم ومتابعة العملاء والإشعارات والعمليات المعاملاتية',
        tr: 'Katılım, destek, müşteri takibi, bildirimler ve işlem akışları için Telegram otomasyonu',
      },
      icon: 'Bot',
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
      id: 'boundless-network',
      name: 'Boundless Network',
      url: 'https://bnets.co',
      description: {
        en: 'Borderless smart network with more than 20 worldwide locations in one service',
        fa: 'شبکه هوشمند بدون مرز با بیش از ۲۰ موقعیت جهانی در یک سرویس',
        ar: 'شبكة ذكية بلا حدود مع أكثر من 20 موقعًا عالميًا في خدمة واحدة',
        tr: 'Tek bir hizmette 20\'den fazla dünya çapında konuma sahip sınırsız akıllı ağ',
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
