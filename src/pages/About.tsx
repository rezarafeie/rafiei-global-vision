import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, Globe, Users, Rocket, Brain, Cloud, Hammer, 
  GraduationCap, Zap, PhoneCall, Flower2, CreditCard, 
  Wallet, Briefcase, Newspaper, Layers, ChevronRight,
  Server, MessageSquare, Mail, Forward,
  TrendingUp, BookOpen, Network, ArrowRight, Sparkles,
  Check, Quote, Shield, Award, Clock, Heart, Lightbulb,
  LayoutGrid
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import rezaRafieiPhoto from '@/assets/reza-rafiei.jpeg';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { language } = useLanguage();
  const isRTL = language === 'fa' || language === 'ar';

  // Translations
  const texts = {
    en: {
      heroBadge: 'Building the Future of Digital Infrastructure',
      heroTitle1: 'One Ecosystem.',
      heroTitle2: 'Infinite Possibilities.',
      heroDesc: 'Rafiei Group is a full-stack digital ecosystem designed to help individuals and businesses learn globally, build faster, scale intelligently, earn internationally, and operate without borders.',
      heroSubDesc: 'Every product inside the group connects to a bigger vision:',
      heroHighlight: 'AI as infrastructure, not just a feature.',
      founderTitle: 'Meet the Founder',
      founderSubtitle: 'The vision and leadership behind the Rafiei ecosystem.',
      founderRole: 'Founder & CEO',
      founderName: 'Reza Rafiei',
      founderBadge: 'Technology Entrepreneur & AI Ecosystem Architect',
      founderHeadline: 'Building Borderless Digital Infrastructure',
      founderDesc1: 'Reza Rafiei is a technology entrepreneur, AI ecosystem architect, and global education innovator focused on building borderless digital infrastructure for the next generation of entrepreneurs, creators, and businesses.',
      founderDesc2: 'He is the founder of Rafiei Group, a multi-layered technology group that designs and operates AI-first platforms across education, finance, cloud infrastructure, automation, media, and global business services.',
      founderQuote: 'To eliminate geographical, financial, and technical barriers using intelligent systems.',
      founderQuoteLabel: '— Core Mission',
      founderDesc3: 'Rather than building isolated products, Reza builds connected ecosystems—where education, infrastructure, AI, and finance work together seamlessly. Every product connects to a bigger vision:',
      philosophyTitle: 'Philosophy',
      philosophyDesc: 'Build systems that empower humans, not replace them. The group operates on a fully integrated modern tech stack: AI, cloud, automation, and finance—all working as one. Across all platforms, Rafiei Group has achieved tens of thousands of educated users, multiple scalable AI-first systems, proven real-world adoption, and strong communities across regions.',
      coreValuesTitle: 'Core Values',
      coreValuesSubtitle: 'The principles that guide every decision and product we build.',
      journeyTitle: 'Our Journey',
      journeySubtitle: 'From a vision to a global ecosystem serving thousands.',
      ecosystemTitle: 'The Ecosystem',
      ecosystemSubtitle: 'A multi-layered technology group designing and operating AI-first platforms across education, finance, cloud infrastructure, automation, media, and global business services.',
      visionTitle: 'Long-Term Vision',
      visionSubtitle: 'Reza Rafiei and Rafiei Group are building toward a future where technology serves humanity without barriers.',
      visionStatement1: 'This is not just a group of products.',
      visionStatement2: 'It is a digital civilization layer for the future.',
      visionStatement3: 'A world where anyone, anywhere, can access the tools, knowledge, and infrastructure they need to build something meaningful—without barriers of location, capital, or technical expertise.',
      ctaTitle: 'Ready to Build Without Borders?',
      ctaDesc: 'Join thousands who are already leveraging the Rafiei ecosystem to learn, build, and scale globally.',
      ctaSubDesc: 'Whether you are an entrepreneur launching your first product, a business scaling internationally, or a creator looking to monetize globally—we have the infrastructure you need.',
      ctaButton1: 'Get Started',
      ctaButton2: 'Explore Products',
    },
    fa: {
      heroBadge: 'ساخت آینده زیرساخت دیجیتال',
      heroTitle1: 'یک اکوسیستم.',
      heroTitle2: 'امکانات بی‌نهایت.',
      heroDesc: 'گروه رفیعی یک اکوسیستم دیجیتال کامل است که برای کمک به افراد و کسب‌وکارها طراحی شده تا در سطح جهانی یاد بگیرند، سریع‌تر بسازند، هوشمندانه رشد کنند، درآمد بین‌المللی داشته باشند و بدون مرز فعالیت کنند.',
      heroSubDesc: 'هر محصول در این گروه به یک چشم‌انداز بزرگتر متصل است:',
      heroHighlight: 'هوش مصنوعی به عنوان زیرساخت، نه فقط یک ویژگی.',
      founderTitle: 'آشنایی با بنیان‌گذار',
      founderSubtitle: 'چشم‌انداز و رهبری پشت اکوسیستم رفیعی.',
      founderRole: 'بنیان‌گذار و مدیرعامل',
      founderName: 'رضا رفیعی',
      founderBadge: 'کارآفرین فناوری و معمار اکوسیستم هوش مصنوعی',
      founderHeadline: 'ساخت زیرساخت دیجیتال بدون مرز',
      founderDesc1: 'رضا رفیعی یک کارآفرین فناوری، معمار اکوسیستم هوش مصنوعی و نوآور آموزش جهانی است که بر ساخت زیرساخت دیجیتال بدون مرز برای نسل بعدی کارآفرینان، خالقان و کسب‌وکارها تمرکز دارد.',
      founderDesc2: 'او بنیان‌گذار گروه رفیعی است، یک گروه فناوری چندلایه که پلتفرم‌های مبتنی بر هوش مصنوعی را در زمینه‌های آموزش، مالی، زیرساخت ابری، اتوماسیون، رسانه و خدمات کسب‌وکار جهانی طراحی و اجرا می‌کند.',
      founderQuote: 'حذف موانع جغرافیایی، مالی و فنی با استفاده از سیستم‌های هوشمند.',
      founderQuoteLabel: '— ماموریت اصلی',
      founderDesc3: 'به جای ساختن محصولات جدا، رضا اکوسیستم‌های متصل می‌سازد—جایی که آموزش، زیرساخت، هوش مصنوعی و مالی به طور یکپارچه با هم کار می‌کنند. هر محصول به یک چشم‌انداز بزرگتر متصل است:',
      philosophyTitle: 'فلسفه',
      philosophyDesc: 'ساخت سیستم‌هایی که انسان‌ها را توانمند می‌کنند، نه جایگزین آن‌ها. این گروه بر یک پشته فناوری مدرن کاملاً یکپارچه کار می‌کند: هوش مصنوعی، ابر، اتوماسیون و مالی—همه به عنوان یک واحد. در تمام پلتفرم‌ها، گروه رفیعی به ده‌ها هزار کاربر آموزش‌دیده، چندین سیستم هوش مصنوعی مقیاس‌پذیر، پذیرش اثبات‌شده در دنیای واقعی و جوامع قوی در مناطق مختلف دست یافته است.',
      coreValuesTitle: 'ارزش‌های اصلی',
      coreValuesSubtitle: 'اصولی که هر تصمیم و محصولی که می‌سازیم را هدایت می‌کنند.',
      journeyTitle: 'سفر ما',
      journeySubtitle: 'از یک چشم‌انداز تا یک اکوسیستم جهانی که به هزاران نفر خدمت می‌کند.',
      ecosystemTitle: 'اکوسیستم',
      ecosystemSubtitle: 'یک گروه فناوری چندلایه که پلتفرم‌های مبتنی بر هوش مصنوعی را در زمینه‌های آموزش، مالی، زیرساخت ابری، اتوماسیون، رسانه و خدمات کسب‌وکار جهانی طراحی و اجرا می‌کند.',
      visionTitle: 'چشم‌انداز بلندمدت',
      visionSubtitle: 'رضا رفیعی و گروه رفیعی در حال ساختن آینده‌ای هستند که فناوری بدون مانع به بشریت خدمت می‌کند.',
      visionStatement1: 'این فقط یک گروه از محصولات نیست.',
      visionStatement2: 'این یک لایه تمدن دیجیتال برای آینده است.',
      visionStatement3: 'دنیایی که در آن هر کسی، هر کجا، می‌تواند به ابزارها، دانش و زیرساختی که برای ساختن چیزی معنادار نیاز دارد دسترسی پیدا کند—بدون موانع مکان، سرمایه یا تخصص فنی.',
      ctaTitle: 'آماده ساختن بدون مرز هستید؟',
      ctaDesc: 'به هزاران نفری بپیوندید که در حال حاضر از اکوسیستم رفیعی برای یادگیری، ساختن و رشد جهانی استفاده می‌کنند.',
      ctaSubDesc: 'چه یک کارآفرین باشید که اولین محصول خود را راه‌اندازی می‌کنید، چه یک کسب‌وکار که در سطح بین‌المللی رشد می‌کند، یا یک خالق که به دنبال کسب درآمد جهانی است—ما زیرساختی که نیاز دارید را داریم.',
      ctaButton1: 'شروع کنید',
      ctaButton2: 'محصولات را کاوش کنید',
    },
    ar: {
      heroBadge: 'بناء مستقبل البنية التحتية الرقمية',
      heroTitle1: 'نظام بيئي واحد.',
      heroTitle2: 'إمكانيات لا حصر لها.',
      heroDesc: 'مجموعة رفيعي هي نظام بيئي رقمي متكامل مصمم لمساعدة الأفراد والشركات على التعلم عالمياً، والبناء بشكل أسرع، والنمو بذكاء، والكسب دولياً، والعمل بدون حدود.',
      heroSubDesc: 'كل منتج في المجموعة يرتبط برؤية أكبر:',
      heroHighlight: 'الذكاء الاصطناعي كبنية تحتية، وليس مجرد ميزة.',
      founderTitle: 'تعرف على المؤسس',
      founderSubtitle: 'الرؤية والقيادة وراء نظام رفيعي البيئي.',
      founderRole: 'المؤسس والرئيس التنفيذي',
      founderName: 'رضا رفيعي',
      founderBadge: 'رائد أعمال تقني ومهندس أنظمة الذكاء الاصطناعي',
      founderHeadline: 'بناء بنية تحتية رقمية بلا حدود',
      founderDesc1: 'رضا رفيعي هو رائد أعمال تقني ومهندس أنظمة ذكاء اصطناعي ومبتكر تعليمي عالمي يركز على بناء بنية تحتية رقمية بلا حدود للجيل القادم من رواد الأعمال والمبدعين والشركات.',
      founderDesc2: 'هو مؤسس مجموعة رفيعي، مجموعة تقنية متعددة الطبقات تصمم وتدير منصات تعتمد على الذكاء الاصطناعي عبر التعليم والمالية والبنية التحتية السحابية والأتمتة والإعلام وخدمات الأعمال العالمية.',
      founderQuote: 'إزالة الحواجز الجغرافية والمالية والتقنية باستخدام الأنظمة الذكية.',
      founderQuoteLabel: '— المهمة الأساسية',
      founderDesc3: 'بدلاً من بناء منتجات معزولة، يبني رضا أنظمة بيئية متصلة—حيث يعمل التعليم والبنية التحتية والذكاء الاصطناعي والمالية معاً بسلاسة. كل منتج يرتبط برؤية أكبر:',
      philosophyTitle: 'الفلسفة',
      philosophyDesc: 'بناء أنظمة تمكّن البشر، لا تستبدلهم. تعمل المجموعة على مجموعة تقنية حديثة متكاملة بالكامل: الذكاء الاصطناعي، السحابة، الأتمتة، والمالية—كلها تعمل كوحدة واحدة. عبر جميع المنصات، حققت مجموعة رفيعي عشرات الآلاف من المستخدمين المتعلمين، وأنظمة ذكاء اصطناعي متعددة قابلة للتوسع، وتبني مثبت في العالم الحقيقي، ومجتمعات قوية عبر المناطق.',
      coreValuesTitle: 'القيم الأساسية',
      coreValuesSubtitle: 'المبادئ التي توجه كل قرار ومنتج نبنيه.',
      journeyTitle: 'رحلتنا',
      journeySubtitle: 'من رؤية إلى نظام بيئي عالمي يخدم الآلاف.',
      ecosystemTitle: 'النظام البيئي',
      ecosystemSubtitle: 'مجموعة تقنية متعددة الطبقات تصمم وتدير منصات تعتمد على الذكاء الاصطناعي عبر التعليم والمالية والبنية التحتية السحابية والأتمتة والإعلام وخدمات الأعمال العالمية.',
      visionTitle: 'الرؤية طويلة المدى',
      visionSubtitle: 'رضا رفيعي ومجموعة رفيعي يبنون نحو مستقبل تخدم فيه التكنولوجيا البشرية بدون حواجز.',
      visionStatement1: 'هذه ليست مجرد مجموعة من المنتجات.',
      visionStatement2: 'إنها طبقة حضارة رقمية للمستقبل.',
      visionStatement3: 'عالم يمكن فيه لأي شخص، في أي مكان، الوصول إلى الأدوات والمعرفة والبنية التحتية التي يحتاجها لبناء شيء ذي معنى—بدون حواجز الموقع أو رأس المال أو الخبرة التقنية.',
      ctaTitle: 'هل أنت مستعد للبناء بلا حدود؟',
      ctaDesc: 'انضم إلى الآلاف الذين يستفيدون بالفعل من نظام رفيعي البيئي للتعلم والبناء والنمو عالمياً.',
      ctaSubDesc: 'سواء كنت رائد أعمال يطلق منتجه الأول، أو شركة تتوسع دولياً، أو مبدعاً يتطلع إلى تحقيق الربح عالمياً—لدينا البنية التحتية التي تحتاجها.',
      ctaButton1: 'ابدأ الآن',
      ctaButton2: 'استكشف المنتجات',
    },
    tr: {
      heroBadge: 'Dijital Altyapının Geleceğini İnşa Etmek',
      heroTitle1: 'Tek Ekosistem.',
      heroTitle2: 'Sonsuz Olasılıklar.',
      heroDesc: 'Rafiei Group, bireylerin ve işletmelerin küresel olarak öğrenmelerine, daha hızlı inşa etmelerine, akıllıca ölçeklenmelerine, uluslararası kazanmalarına ve sınırsız çalışmalarına yardımcı olmak için tasarlanmış tam kapsamlı bir dijital ekosistemdir.',
      heroSubDesc: 'Gruptaki her ürün daha büyük bir vizyona bağlıdır:',
      heroHighlight: 'Yapay zeka bir altyapı olarak, sadece bir özellik değil.',
      founderTitle: 'Kurucuyla Tanışın',
      founderSubtitle: 'Rafiei ekosisteminin arkasındaki vizyon ve liderlik.',
      founderRole: 'Kurucu ve CEO',
      founderName: 'Reza Rafiei',
      founderBadge: 'Teknoloji Girişimcisi ve Yapay Zeka Ekosistem Mimarı',
      founderHeadline: 'Sınırsız Dijital Altyapı İnşa Etmek',
      founderDesc1: 'Reza Rafiei, girişimcilerin, yaratıcıların ve işletmelerin yeni nesli için sınırsız dijital altyapı inşa etmeye odaklanan bir teknoloji girişimcisi, yapay zeka ekosistem mimarı ve küresel eğitim yenilikçisidir.',
      founderDesc2: 'Eğitim, finans, bulut altyapısı, otomasyon, medya ve küresel iş hizmetleri genelinde yapay zeka öncelikli platformlar tasarlayan ve işleten çok katmanlı bir teknoloji grubu olan Rafiei Group\'un kurucusudur.',
      founderQuote: 'Akıllı sistemler kullanarak coğrafi, finansal ve teknik engelleri ortadan kaldırmak.',
      founderQuoteLabel: '— Temel Misyon',
      founderDesc3: 'Reza, izole ürünler inşa etmek yerine bağlantılı ekosistemler inşa ediyor—eğitim, altyapı, yapay zeka ve finansın sorunsuz bir şekilde birlikte çalıştığı yerler. Her ürün daha büyük bir vizyona bağlıdır:',
      philosophyTitle: 'Felsefe',
      philosophyDesc: 'İnsanları güçlendiren, yerini almayan sistemler inşa etmek. Grup, tamamen entegre modern bir teknoloji yığını üzerinde çalışır: yapay zeka, bulut, otomasyon ve finans—hepsi bir arada. Tüm platformlarda, Rafiei Group on binlerce eğitimli kullanıcıya, birden fazla ölçeklenebilir yapay zeka öncelikli sisteme, kanıtlanmış gerçek dünya benimsemesine ve bölgeler genelinde güçlü topluluklara ulaştı.',
      coreValuesTitle: 'Temel Değerler',
      coreValuesSubtitle: 'İnşa ettiğimiz her kararı ve ürünü yönlendiren ilkeler.',
      journeyTitle: 'Yolculuğumuz',
      journeySubtitle: 'Bir vizyondan binlere hizmet veren küresel bir ekosisteme.',
      ecosystemTitle: 'Ekosistem',
      ecosystemSubtitle: 'Eğitim, finans, bulut altyapısı, otomasyon, medya ve küresel iş hizmetleri genelinde yapay zeka öncelikli platformlar tasarlayan ve işleten çok katmanlı bir teknoloji grubu.',
      visionTitle: 'Uzun Vadeli Vizyon',
      visionSubtitle: 'Reza Rafiei ve Rafiei Group, teknolojinin engelsiz olarak insanlığa hizmet ettiği bir geleceğe doğru inşa ediyor.',
      visionStatement1: 'Bu sadece bir ürün grubu değil.',
      visionStatement2: 'Bu, gelecek için bir dijital uygarlık katmanıdır.',
      visionStatement3: 'Herkesin, her yerde, anlamlı bir şey inşa etmek için ihtiyaç duyduğu araçlara, bilgiye ve altyapıya erişebildiği bir dünya—konum, sermaye veya teknik uzmanlık engelleri olmadan.',
      ctaTitle: 'Sınırsız İnşa Etmeye Hazır Mısınız?',
      ctaDesc: 'Küresel olarak öğrenmek, inşa etmek ve ölçeklenmek için Rafiei ekosisteminden yararlanan binlerce kişiye katılın.',
      ctaSubDesc: 'İster ilk ürününü piyasaya süren bir girişimci, ister uluslararası ölçeklenen bir işletme, ister küresel olarak para kazanmak isteyen bir yaratıcı olun—ihtiyacınız olan altyapıya sahibiz.',
      ctaButton1: 'Başlayın',
      ctaButton2: 'Ürünleri Keşfedin',
    },
  };

  const t = texts[language] || texts.en;

  // Mission pillars translations
  const missionPillarsData = {
    en: [
      { text: 'Learn Globally', description: 'Access world-class education from anywhere' },
      { text: 'Build Faster', description: 'Launch products in days, not months' },
      { text: 'Scale Intelligently', description: 'Grow with AI-powered automation' },
      { text: 'Earn Internationally', description: 'Accept payments from anywhere' },
      { text: 'Operate Without Borders', description: 'Build a truly global business' }
    ],
    fa: [
      { text: 'یادگیری جهانی', description: 'دسترسی به آموزش در سطح جهانی از هر کجا' },
      { text: 'ساختن سریع‌تر', description: 'راه‌اندازی محصولات در چند روز، نه چند ماه' },
      { text: 'رشد هوشمندانه', description: 'رشد با اتوماسیون مبتنی بر هوش مصنوعی' },
      { text: 'درآمد بین‌المللی', description: 'دریافت پرداخت از هر کجای دنیا' },
      { text: 'فعالیت بدون مرز', description: 'ساختن یک کسب‌وکار واقعاً جهانی' }
    ],
    ar: [
      { text: 'تعلم عالمياً', description: 'الوصول إلى تعليم عالمي المستوى من أي مكان' },
      { text: 'البناء بشكل أسرع', description: 'إطلاق المنتجات في أيام، وليس أشهر' },
      { text: 'النمو بذكاء', description: 'النمو بأتمتة مدعومة بالذكاء الاصطناعي' },
      { text: 'الكسب دولياً', description: 'قبول المدفوعات من أي مكان' },
      { text: 'العمل بلا حدود', description: 'بناء عمل تجاري عالمي حقيقي' }
    ],
    tr: [
      { text: 'Küresel Öğrenin', description: 'Her yerden dünya standartlarında eğitime erişin' },
      { text: 'Daha Hızlı İnşa Edin', description: 'Ürünleri aylar değil, günler içinde başlatın' },
      { text: 'Akıllıca Ölçeklenin', description: 'Yapay zeka destekli otomasyonla büyüyün' },
      { text: 'Uluslararası Kazanın', description: 'Her yerden ödeme kabul edin' },
      { text: 'Sınırsız Çalışın', description: 'Gerçek anlamda küresel bir iş kurun' }
    ]
  };

  // Impact stats translations
  const impactStatsData = {
    en: [
      { value: '40K+', label: 'Educated Users' },
      { value: '15+', label: 'AI-First Platforms' },
      { value: '300K+', label: 'Community Members' },
      { value: '4+', label: 'Countries Served' }
    ],
    fa: [
      { value: '+۴۰ هزار', label: 'کاربر آموزش‌دیده' },
      { value: '+۱۵', label: 'پلتفرم مبتنی بر هوش مصنوعی' },
      { value: '+۳۰۰ هزار', label: 'عضو جامعه' },
      { value: '+۴', label: 'کشور تحت پوشش' }
    ],
    ar: [
      { value: '+40 ألف', label: 'مستخدم متعلم' },
      { value: '+15', label: 'منصة ذكاء اصطناعي' },
      { value: '+300 ألف', label: 'عضو مجتمع' },
      { value: '+4', label: 'دول مخدومة' }
    ],
    tr: [
      { value: '40B+', label: 'Eğitimli Kullanıcı' },
      { value: '15+', label: 'Yapay Zeka Öncelikli Platform' },
      { value: '300B+', label: 'Topluluk Üyesi' },
      { value: '4+', label: 'Hizmet Verilen Ülke' }
    ]
  };

  // Vision points translations
  const visionPointsData = {
    en: [
      { text: 'AI is a personal partner' },
      { text: 'Education is adaptive' },
      { text: 'Infrastructure is invisible' },
      { text: 'Borders are irrelevant' },
      { text: 'Opportunity is global' }
    ],
    fa: [
      { text: 'هوش مصنوعی یک شریک شخصی است' },
      { text: 'آموزش تطبیقی است' },
      { text: 'زیرساخت نامرئی است' },
      { text: 'مرزها بی‌اهمیت هستند' },
      { text: 'فرصت جهانی است' }
    ],
    ar: [
      { text: 'الذكاء الاصطناعي شريك شخصي' },
      { text: 'التعليم تكيفي' },
      { text: 'البنية التحتية غير مرئية' },
      { text: 'الحدود غير ذات صلة' },
      { text: 'الفرصة عالمية' }
    ],
    tr: [
      { text: 'Yapay zeka kişisel bir ortak' },
      { text: 'Eğitim uyarlanabilir' },
      { text: 'Altyapı görünmez' },
      { text: 'Sınırlar önemsiz' },
      { text: 'Fırsat küresel' }
    ]
  };

  // Core values translations
  const coreValuesData = {
    en: [
      { title: 'Innovation First', description: 'We embrace cutting-edge technology and constantly push boundaries to create solutions that did not exist before.' },
      { title: 'Human-Centered', description: 'Technology should empower humans, not replace them. Every product is designed with the user at the center.' },
      { title: 'Borderless Thinking', description: 'We build for a global audience, eliminating geographical barriers and creating opportunities for everyone.' },
      { title: 'Trust & Security', description: 'Security and privacy are non-negotiable. We build infrastructure you can trust with your most important assets.' },
      { title: 'Speed & Simplicity', description: 'Complex problems deserve simple solutions. We obsess over making powerful technology accessible to everyone.' },
      { title: 'Results-Driven', description: 'We measure success by the real-world impact we create. Theory without execution is just noise.' }
    ],
    fa: [
      { title: 'نوآوری در اولویت', description: 'ما از فناوری پیشرفته استقبال می‌کنیم و دائماً مرزها را برای ایجاد راه‌حل‌هایی که قبلاً وجود نداشتند، جابجا می‌کنیم.' },
      { title: 'انسان‌محور', description: 'فناوری باید انسان‌ها را توانمند کند، نه جایگزین آن‌ها. هر محصول با کاربر در مرکز طراحی شده است.' },
      { title: 'تفکر بدون مرز', description: 'ما برای مخاطبان جهانی می‌سازیم، موانع جغرافیایی را حذف می‌کنیم و فرصت‌هایی برای همه ایجاد می‌کنیم.' },
      { title: 'اعتماد و امنیت', description: 'امنیت و حریم خصوصی قابل مذاکره نیستند. ما زیرساختی می‌سازیم که می‌توانید به آن با مهم‌ترین دارایی‌هایتان اعتماد کنید.' },
      { title: 'سرعت و سادگی', description: 'مشکلات پیچیده شایسته راه‌حل‌های ساده هستند. ما بر در دسترس قرار دادن فناوری قدرتمند برای همه تمرکز داریم.' },
      { title: 'نتیجه‌محور', description: 'ما موفقیت را با تأثیر واقعی که ایجاد می‌کنیم اندازه‌گیری می‌کنیم. تئوری بدون اجرا فقط نویز است.' }
    ],
    ar: [
      { title: 'الابتكار أولاً', description: 'نتبنى التكنولوجيا المتطورة وندفع الحدود باستمرار لإنشاء حلول لم تكن موجودة من قبل.' },
      { title: 'التركيز على الإنسان', description: 'يجب أن تمكّن التكنولوجيا البشر، لا أن تستبدلهم. كل منتج مصمم مع وضع المستخدم في المركز.' },
      { title: 'التفكير بلا حدود', description: 'نبني لجمهور عالمي، ونزيل الحواجز الجغرافية وننشئ فرصاً للجميع.' },
      { title: 'الثقة والأمان', description: 'الأمان والخصوصية غير قابلين للتفاوض. نبني بنية تحتية يمكنك الوثوق بها مع أهم أصولك.' },
      { title: 'السرعة والبساطة', description: 'المشاكل المعقدة تستحق حلولاً بسيطة. نهتم بجعل التكنولوجيا القوية متاحة للجميع.' },
      { title: 'التركيز على النتائج', description: 'نقيس النجاح بالتأثير الحقيقي الذي نخلقه. النظرية بدون تنفيذ مجرد ضوضاء.' }
    ],
    tr: [
      { title: 'Önce İnovasyon', description: 'En son teknolojiyi benimsiyor ve daha önce var olmayan çözümler yaratmak için sürekli sınırları zorluyoruz.' },
      { title: 'İnsan Odaklı', description: 'Teknoloji insanları güçlendirmeli, yerini almamalı. Her ürün, kullanıcı merkezde olacak şekilde tasarlanmıştır.' },
      { title: 'Sınırsız Düşünce', description: 'Küresel bir kitle için inşa ediyoruz, coğrafi engelleri ortadan kaldırıyoruz ve herkes için fırsatlar yaratıyoruz.' },
      { title: 'Güven ve Güvenlik', description: 'Güvenlik ve gizlilik pazarlık edilemez. En önemli varlıklarınıza güvenebileceğiniz altyapı inşa ediyoruz.' },
      { title: 'Hız ve Basitlik', description: 'Karmaşık sorunlar basit çözümleri hak eder. Güçlü teknolojiyi herkes için erişilebilir kılmaya takıntılıyız.' },
      { title: 'Sonuç Odaklı', description: 'Başarıyı yarattığımız gerçek dünya etkisiyle ölçüyoruz. Uygulamasız teori sadece gürültüdür.' }
    ]
  };

  // Timeline translations
  const timelineData = {
    en: [
      { year: '2018', title: 'Foundation', description: 'Rafiei Group was established with a vision to empower individuals through education and technology.' },
      { year: '2019', title: 'Academy Launch', description: 'Launched Rafiei Academy, quickly growing to thousands of active learners across the region.' },
      { year: '2020', title: 'Global Expansion', description: 'Expanded operations to UK, Australia, and UAE, serving students and businesses worldwide.' },
      { year: '2021', title: 'Financial Services', description: 'Introduced payment and financial infrastructure to enable borderless business operations.' },
      { year: '2022', title: 'AI Innovation', description: 'Launched AI-powered educational tools, Synapse, and intelligent business assistants.' },
      { year: '2023', title: 'Cloud Infrastructure', description: 'Released Rafiei Cloud and Builder, enabling rapid application development.' },
      { year: '2024', title: 'Ecosystem Maturity', description: 'Full ecosystem integration achieved with 15+ interconnected platforms serving global users.' }
    ],
    fa: [
      { year: '۲۰۱۸', title: 'تأسیس', description: 'گروه رفیعی با چشم‌انداز توانمندسازی افراد از طریق آموزش و فناوری تأسیس شد.' },
      { year: '۲۰۱۹', title: 'راه‌اندازی آکادمی', description: 'آکادمی رفیعی راه‌اندازی شد و به سرعت به هزاران یادگیرنده فعال در منطقه رسید.' },
      { year: '۲۰۲۰', title: 'گسترش جهانی', description: 'عملیات به انگلستان، استرالیا و امارات گسترش یافت و به دانشجویان و کسب‌وکارها در سراسر جهان خدمت می‌دهد.' },
      { year: '۲۰۲۱', title: 'خدمات مالی', description: 'زیرساخت پرداخت و مالی برای امکان فعالیت‌های تجاری بدون مرز معرفی شد.' },
      { year: '۲۰۲۲', title: 'نوآوری هوش مصنوعی', description: 'ابزارهای آموزشی مبتنی بر هوش مصنوعی، سیناپس و دستیاران تجاری هوشمند راه‌اندازی شدند.' },
      { year: '۲۰۲۳', title: 'زیرساخت ابری', description: 'رفیعی کلاود و بیلدر منتشر شدند و توسعه سریع برنامه‌ها را امکان‌پذیر کردند.' },
      { year: '۲۰۲۴', title: 'بلوغ اکوسیستم', description: 'یکپارچگی کامل اکوسیستم با بیش از ۱۵ پلتفرم متصل که به کاربران جهانی خدمت می‌دهند، محقق شد.' }
    ],
    ar: [
      { year: '2018', title: 'التأسيس', description: 'تأسست مجموعة رفيعي برؤية لتمكين الأفراد من خلال التعليم والتكنولوجيا.' },
      { year: '2019', title: 'إطلاق الأكاديمية', description: 'أُطلقت أكاديمية رفيعي، ونمت بسرعة لتصل إلى آلاف المتعلمين النشطين في المنطقة.' },
      { year: '2020', title: 'التوسع العالمي', description: 'توسعت العمليات إلى المملكة المتحدة وأستراليا والإمارات، لخدمة الطلاب والشركات في جميع أنحاء العالم.' },
      { year: '2021', title: 'الخدمات المالية', description: 'قُدمت البنية التحتية للدفع والمالية لتمكين العمليات التجارية بلا حدود.' },
      { year: '2022', title: 'ابتكار الذكاء الاصطناعي', description: 'أُطلقت أدوات تعليمية مدعومة بالذكاء الاصطناعي، وسينابس، ومساعدين أعمال أذكياء.' },
      { year: '2023', title: 'البنية التحتية السحابية', description: 'أُصدر رفيعي كلاود وبيلدر، مما يتيح التطوير السريع للتطبيقات.' },
      { year: '2024', title: 'نضج النظام البيئي', description: 'تم تحقيق التكامل الكامل للنظام البيئي مع أكثر من 15 منصة مترابطة تخدم المستخدمين العالميين.' }
    ],
    tr: [
      { year: '2018', title: 'Kuruluş', description: 'Rafiei Group, eğitim ve teknoloji aracılığıyla bireyleri güçlendirme vizyonuyla kuruldu.' },
      { year: '2019', title: 'Akademi Lansmanı', description: 'Rafiei Akademi başlatıldı ve hızla bölge genelinde binlerce aktif öğrenciye ulaştı.' },
      { year: '2020', title: 'Küresel Genişleme', description: 'Operasyonlar İngiltere, Avustralya ve BAE\'ye genişletildi, dünya çapında öğrencilere ve işletmelere hizmet veriyor.' },
      { year: '2021', title: 'Finansal Hizmetler', description: 'Sınırsız iş operasyonlarını mümkün kılmak için ödeme ve finansal altyapı tanıtıldı.' },
      { year: '2022', title: 'Yapay Zeka İnovasyonu', description: 'Yapay zeka destekli eğitim araçları, Synapse ve akıllı iş asistanları başlatıldı.' },
      { year: '2023', title: 'Bulut Altyapısı', description: 'Hızlı uygulama geliştirmeyi sağlayan Rafiei Cloud ve Builder yayınlandı.' },
      { year: '2024', title: 'Ekosistem Olgunluğu', description: 'Küresel kullanıcılara hizmet veren 15\'ten fazla birbirine bağlı platformla tam ekosistem entegrasyonu sağlandı.' }
    ]
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const platformCategories = {
    all: {
      title: language === 'fa' ? 'همه محصولات' : language === 'ar' ? 'جميع المنتجات' : language === 'tr' ? 'Tüm Ürünler' : 'All Products',
      icon: <LayoutGrid className="h-5 w-5" />,
      description: language === 'fa' ? 'مرور همه پلتفرم‌ها و محصولات در اکوسیستم رفیعی.' : language === 'ar' ? 'تصفح جميع المنصات والمنتجات في نظام رفيعي البيئي.' : language === 'tr' ? 'Rafiei ekosistemindeki tüm platformları ve ürünleri görüntüleyin.' : 'Browse all platforms and products in the Rafiei ecosystem.',
      platforms: [] as any[]
    },
    infrastructure: {
      title: language === 'fa' ? 'زیرساخت اصلی' : language === 'ar' ? 'البنية التحتية الأساسية' : language === 'tr' ? 'Temel Altyapı' : 'Core Infrastructure',
      icon: <Server className="h-5 w-5" />,
      description: language === 'fa' ? 'پایه‌ای که همه چیز دیگر در اکوسیستم را تقویت می‌کند.' : language === 'ar' ? 'الأساس الذي يدعم كل شيء آخر في النظام البيئي.' : language === 'tr' ? 'Ekosistemdeki diğer her şeyi destekleyen temel.' : 'The foundation that powers everything else in the ecosystem.',
      platforms: [
        {
          name: language === 'fa' ? 'رفیعی کلاود' : language === 'ar' ? 'رفيعي كلاود' : language === 'tr' ? 'Rafiei Cloud' : 'Rafiei Cloud',
          icon: <Cloud className="h-6 w-6" />,
          description: language === 'fa' ? 'پلتفرم کامل Backend-as-a-Service شامل پایگاه داده، احراز هویت، ذخیره‌سازی فایل، توابع edge و APIهای serverless.' : language === 'ar' ? 'منصة خلفية كاملة كخدمة توفر قاعدة بيانات، مصادقة، تخزين ملفات، وظائف حافة، وواجهات برمجة تطبيقات بدون خادم.' : language === 'tr' ? 'Veritabanı, kimlik doğrulama, dosya depolama, edge fonksiyonları ve sunucusuz API\'ler sağlayan eksiksiz Backend-as-a-Service platformu.' : 'Complete backend-as-a-service platform providing database, authentication, file storage, edge functions, and serverless APIs.',
          features: language === 'fa' ? ['پایگاه داده', 'احراز هویت', 'ذخیره‌سازی فایل', 'توابع Edge', 'APIهای Serverless'] : language === 'ar' ? ['قاعدة البيانات', 'المصادقة', 'تخزين الملفات', 'وظائف Edge', 'واجهات برمجة بدون خادم'] : language === 'tr' ? ['Veritabanı', 'Kimlik Doğrulama', 'Dosya Depolama', 'Edge Fonksiyonları', 'Sunucusuz API\'ler'] : ['Database', 'Authentication', 'File Storage', 'Edge Functions', 'Serverless APIs'],
          highlight: language === 'fa' ? 'بدون پیکربندی، قابل استقرار در کمتر از ۲ دقیقه' : language === 'ar' ? 'بدون تكوين، قابل للنشر في أقل من دقيقتين' : language === 'tr' ? 'Sıfır yapılandırma, 2 dakikadan kısa sürede dağıtılabilir' : 'Zero configuration, deployable in under 2 minutes',
          details: language === 'fa' ? 'برای بنیان‌گذاران، استارتاپ‌ها و سازندگانی طراحی شده که سرعت بدون پیچیدگی می‌خواهند.' : language === 'ar' ? 'مصمم للمؤسسين والشركات الناشئة والبناة الذين يريدون السرعة بدون تعقيد.' : language === 'tr' ? 'Hız isteyen ancak karmaşıklık istemeyen kurucular, start-up\'lar ve inşaatçılar için tasarlandı.' : 'Designed for founders, startups, and builders who want speed without complexity. Rafiei Cloud abstracts away infrastructure concerns so you can focus on building your product.'
        },
        {
          name: language === 'fa' ? 'رفیعی بیلدر' : language === 'ar' ? 'رفيعي بيلدر' : language === 'tr' ? 'Rafiei Builder' : 'Rafiei Builder',
          icon: <Hammer className="h-6 w-6" />,
          description: language === 'fa' ? 'پلتفرم vibe-coding که به کاربران امکان می‌دهد وب‌سایت‌ها، اپلیکیشن‌های وب، داشبوردها و ابزارهای مبتنی بر AI را فقط با چت کردن با AI بسازند.' : language === 'ar' ? 'منصة vibe-coding تسمح للمستخدمين بإنشاء مواقع ويب، تطبيقات ويب، لوحات معلومات، وأدوات مدعومة بالذكاء الاصطناعي ببساطة عن طريق الدردشة مع الذكاء الاصطناعي.' : language === 'tr' ? 'Kullanıcıların yapay zeka ile sohbet ederek web siteleri, web uygulamaları, panolar ve yapay zeka destekli araçlar oluşturmasına olanak tanıyan bir vibe-coding platformu.' : 'A vibe-coding platform that allows users to create websites, web apps, dashboards, and AI-powered tools simply by chatting with AI.',
          features: language === 'fa' ? ['وب‌سایت‌ها', 'اپلیکیشن‌های وب', 'داشبوردها', 'ابزارهای مبتنی بر AI'] : language === 'ar' ? ['مواقع الويب', 'تطبيقات الويب', 'لوحات المعلومات', 'أدوات مدعومة بالذكاء الاصطناعي'] : language === 'tr' ? ['Web Siteleri', 'Web Uygulamaları', 'Panolar', 'Yapay Zeka Destekli Araçlar'] : ['Websites', 'Web Apps', 'Dashboards', 'AI-powered Tools'],
          highlight: language === 'fa' ? 'تبدیل ایده‌ها مستقیماً به محصولات زنده با چت کردن با AI' : language === 'ar' ? 'تحويل الأفكار مباشرة إلى منتجات حية عن طريق الدردشة مع الذكاء الاصطناعي' : language === 'tr' ? 'Yapay zeka ile sohbet ederek fikirleri doğrudan canlı ürünlere dönüştürün' : 'Turn ideas directly into live products by chatting with AI',
          details: language === 'fa' ? 'Frontend، backend و deployment را انتزاع می‌کند—ایده‌ها را بدون نوشتن یک خط کد مستقیماً به محصولات زنده تبدیل می‌کند.' : language === 'ar' ? 'يجرد الواجهة الأمامية والخلفية والنشر—يحول الأفكار مباشرة إلى منتجات حية دون كتابة سطر واحد من التعليمات البرمجية.' : language === 'tr' ? 'Frontend, backend ve dağıtımı soyutlar—tek bir satır kod yazmadan fikirleri doğrudan canlı ürünlere dönüştürür.' : 'It abstracts away frontend, backend, and deployment—turning ideas directly into live products without writing a single line of code.'
        }
      ]
    },
    ai: {
      title: language === 'fa' ? 'هوش مصنوعی' : language === 'ar' ? 'الذكاء الاصطناعي' : language === 'tr' ? 'Yapay Zeka' : 'Artificial Intelligence',
      icon: <Brain className="h-5 w-5" />,
      description: language === 'fa' ? 'ابزارها و پلتفرم‌های مبتنی بر AI که توانایی‌های انسانی را تقویت می‌کنند.' : language === 'ar' ? 'أدوات ومنصات مدعومة بالذكاء الاصطناعي تعزز القدرات البشرية.' : language === 'tr' ? 'İnsan yeteneklerini artıran yapay zeka destekli araçlar ve platformlar.' : 'AI-powered tools and platforms that augment human capabilities.',
      platforms: [
        {
          name: language === 'fa' ? 'سیناپس' : language === 'ar' ? 'سينابس' : language === 'tr' ? 'Synapse' : 'Synapse',
          icon: <Zap className="h-6 w-6" />,
          description: language === 'fa' ? 'فریم‌ورک قدرتمند عامل AI که به کاربران امکان می‌دهد دستیاران AI سفارشی در چند دقیقه بسازند و آن‌ها را به ابزارها و جریان‌های کاری واقعی متصل کنند.' : language === 'ar' ? 'إطار عمل قوي لوكيل الذكاء الاصطناعي يتيح للمستخدمين إنشاء مساعدين ذكاء اصطناعي مخصصين في دقائق، وربطهم بأدوات وسير عمل حقيقية.' : language === 'tr' ? 'Kullanıcıların dakikalar içinde özel yapay zeka asistanları oluşturmasına ve bunları gerçek araçlara ve iş akışlarına bağlamasına olanak tanıyan güçlü bir yapay zeka ajanı çerçevesi.' : 'A powerful AI agent framework that lets users create custom AI assistants in minutes, connect them to real tools and workflows.',
          features: language === 'fa' ? ['دستیاران AI سفارشی', 'یکپارچه‌سازی ابزار', 'اتوماسیون جریان کار', 'سیستم‌های چند-عامله'] : language === 'ar' ? ['مساعدين ذكاء اصطناعي مخصصين', 'تكامل الأدوات', 'أتمتة سير العمل', 'أنظمة متعددة الوكلاء'] : language === 'tr' ? ['Özel Yapay Zeka Asistanları', 'Araç Entegrasyonu', 'İş Akışı Otomasyonu', 'Çoklu Ajan Sistemleri'] : ['Custom AI Assistants', 'Tool Integration', 'Workflow Automation', 'Multi-agent Systems'],
          highlight: language === 'fa' ? 'لایه هوشمندی در سراسر اکوسیستم رفیعی' : language === 'ar' ? 'طبقة الذكاء عبر نظام رفيعي البيئي' : language === 'tr' ? 'Rafiei ekosistemi genelinde zeka katmanı' : 'The intelligence layer across the Rafiei ecosystem',
          details: language === 'fa' ? 'از سیناپس برای کوچینگ، فروش، تحلیل، آموزش و اتوماسیون استفاده کنید.' : language === 'ar' ? 'استخدم سينابس للتدريب والمبيعات والتحليل والتعليم والأتمتة.' : language === 'tr' ? 'Synapse\'i koçluk, satış, analiz, eğitim ve otomasyon için kullanın.' : 'Use Synapse for coaching, sales, analysis, education, and automation. It is the core AI infrastructure that powers intelligent features across all Rafiei products.'
        },
        {
          name: language === 'fa' ? 'دستیار هوش مصنوعی' : language === 'ar' ? 'مساعد الذكاء الاصطناعي' : language === 'tr' ? 'Yapay Zeka Asistanı' : 'AI Assistant',
          icon: <MessageSquare className="h-6 w-6" />,
          description: language === 'fa' ? 'دستیار هوشمند AI مبتنی بر تلگرام برای کوچینگ روزانه، راهنمایی کسب‌وکار، پشتیبانی یادگیری و بهره‌وری شخصی.' : language === 'ar' ? 'مساعد ذكاء اصطناعي ذكي قائم على تيليجرام مصمم للتدريب اليومي، وإرشاد الأعمال، ودعم التعلم، والإنتاجية الشخصية.' : language === 'tr' ? 'Günlük koçluk, iş rehberliği, öğrenme desteği ve kişisel verimlilik için tasarlanmış akıllı Telegram tabanlı yapay zeka asistanı.' : 'A smart Telegram-based AI assistant designed for daily coaching, business guidance, learning support, and personal productivity.',
          features: language === 'fa' ? ['کوچینگ روزانه', 'راهنمایی کسب‌وکار', 'پشتیبانی یادگیری', 'بهره‌وری شخصی'] : language === 'ar' ? ['التدريب اليومي', 'إرشاد الأعمال', 'دعم التعلم', 'الإنتاجية الشخصية'] : language === 'tr' ? ['Günlük Koçluk', 'İş Rehberliği', 'Öğrenme Desteği', 'Kişisel Verimlilik'] : ['Daily Coaching', 'Business Guidance', 'Learning Support', 'Personal Productivity'],
          highlight: language === 'fa' ? 'AI مستقیماً در محیط ارتباطی روزمره شما' : language === 'ar' ? 'الذكاء الاصطناعي مباشرة في بيئة التواصل اليومية' : language === 'tr' ? 'Günlük iletişim ortamınızda doğrudan yapay zeka' : 'AI directly in your everyday communication environment',
          details: language === 'fa' ? 'AI را مستقیماً به ارتباطات روزمره کاربران می‌آورد.' : language === 'ar' ? 'يجلب الذكاء الاصطناعي مباشرة إلى تواصل المستخدمين اليومي.' : language === 'tr' ? 'Yapay zekayı doğrudan kullanıcıların günlük iletişimine getiriyor.' : 'It brings AI directly into users everyday communication, making intelligent assistance accessible without switching apps or learning new interfaces.'
        }
      ]
    },
    education: {
      title: language === 'fa' ? 'آموزش و دانش' : language === 'ar' ? 'التعليم والمعرفة' : language === 'tr' ? 'Eğitim ve Bilgi' : 'Education & Knowledge',
      icon: <BookOpen className="h-5 w-5" />,
      description: language === 'fa' ? 'پلتفرم‌هایی که دسترسی به دانش و مهارت‌ها را دموکراتیزه می‌کنند.' : language === 'ar' ? 'منصات تعمل على إضفاء الطابع الديمقراطي على الوصول إلى المعرفة والمهارات.' : language === 'tr' ? 'Bilgi ve becerilere erişimi demokratikleştiren platformlar.' : 'Platforms that democratize access to knowledge and skills.',
      platforms: [
        {
          name: language === 'fa' ? 'آکادمی رفیعی' : language === 'ar' ? 'أكاديمية رفيعي' : language === 'tr' ? 'Rafiei Akademi' : 'Rafiei Academy',
          icon: <GraduationCap className="h-6 w-6" />,
          description: language === 'fa' ? 'یکی از تأثیرگذارترین پلتفرم‌های آموزش آنلاین در منطقه، با بیش از ۴۰,۰۰۰ یادگیرنده فعال و دوره‌هایی در زمینه درآمد بدون مرز، AI، کسب‌وکار دیجیتال و ذهنیت.' : language === 'ar' ? 'واحدة من أكثر منصات التعليم عبر الإنترنت تأثيراً في المنطقة، مع أكثر من 40,000 متعلم نشط ودورات حول الدخل بلا حدود، والذكاء الاصطناعي، والأعمال الرقمية، والعقلية.' : language === 'tr' ? 'Bölgede en etkili çevrimiçi eğitim platformlarından biri, 40.000\'den fazla aktif öğrenci ve sınırsız gelir, yapay zeka, dijital iş ve zihniyet konularında kurslar.' : 'One of the most impactful online education platforms in the region, with 40,000+ active learners and courses on borderless income, AI, digital business, and mindset.',
          features: language === 'fa' ? ['+۴۰,۰۰۰ یادگیرنده فعال', 'دوره‌های AI و کسب‌وکار دیجیتال', 'آموزش متمرکز بر اجرا', 'پشتیبانی جامعه'] : language === 'ar' ? ['+40,000 متعلم نشط', 'دورات الذكاء الاصطناعي والأعمال الرقمية', 'تدريب يركز على التنفيذ', 'دعم المجتمع'] : language === 'tr' ? ['40.000+ Aktif Öğrenci', 'Yapay Zeka ve Dijital İş Kursları', 'Uygulama Odaklı Eğitim', 'Topluluk Desteği'] : ['40,000+ Active Learners', 'AI & Digital Business Courses', 'Execution-focused Training', 'Community Support'],
          highlight: language === 'fa' ? 'معروف به سادگی، وضوح و نتایج' : language === 'ar' ? 'معروفة بالبساطة والوضوح والنتائج' : language === 'tr' ? 'Basitlik, netlik ve sonuçlarıyla tanınır' : 'Known for simplicity, clarity, and results',
          details: language === 'fa' ? 'آکادمی رفیعی به سادگی، وضوح و نتایج معروف است.' : language === 'ar' ? 'أكاديمية رفيعي معروفة بالبساطة والوضوح والنتائج.' : language === 'tr' ? 'Rafiei Akademi basitliği, netliği ve sonuçlarıyla bilinir.' : 'Rafiei Academy is known for simplicity, clarity, and results. Every course is designed to be actionable and focused on real-world execution, not just theory.'
        }
      ]
    },
    finance: {
      title: language === 'fa' ? 'زیرساخت مالی' : language === 'ar' ? 'البنية التحتية المالية' : language === 'tr' ? 'Finansal Altyapı' : 'Financial Infrastructure',
      icon: <Wallet className="h-5 w-5" />,
      description: language === 'fa' ? 'ابزارها و پلتفرم‌هایی که عملیات مالی جهانی را امکان‌پذیر می‌کنند.' : language === 'ar' ? 'أدوات ومنصات تمكّن العمليات المالية العالمية.' : language === 'tr' ? 'Küresel finansal operasyonları mümkün kılan araçlar ve platformlar.' : 'Tools and platforms that enable global financial operations.',
      platforms: [
        {
          name: language === 'fa' ? 'رفیعی اکسچنج' : language === 'ar' ? 'رفيعي للتداول' : language === 'tr' ? 'Rafiei Exchange' : 'Rafiei Exchange',
          icon: <TrendingUp className="h-6 w-6" />,
          description: language === 'fa' ? 'پلتفرم پیشرفته معاملات ارز دیجیتال با ابزارهای حرفه‌ای، زیرساخت امن و ویژگی‌های جامع تحلیل بازار.' : language === 'ar' ? 'منصة تداول عملات رقمية متقدمة تقدم أدوات تداول احترافية، بنية تحتية آمنة، وميزات تحليل سوق شاملة.' : language === 'tr' ? 'Profesyonel ticaret araçları, güvenli altyapı ve kapsamlı piyasa analizi özellikleri sunan gelişmiş kripto para ticaret platformu.' : 'An advanced cryptocurrency trading platform offering professional trading tools, secure infrastructure, and comprehensive market analysis features.',
          features: language === 'fa' ? ['ابزارهای معاملاتی حرفه‌ای', 'زیرساخت امن', 'تحلیل بازار', 'مدیریت پورتفولیو'] : language === 'ar' ? ['أدوات تداول احترافية', 'بنية تحتية آمنة', 'تحليل السوق', 'إدارة المحفظة'] : language === 'tr' ? ['Profesyonel Ticaret Araçları', 'Güvenli Altyapı', 'Piyasa Analizi', 'Portföy Yönetimi'] : ['Professional Trading Tools', 'Secure Infrastructure', 'Market Analysis', 'Portfolio Management'],
          highlight: language === 'fa' ? 'برای کاربران جدی که به قابلیت اطمینان و عملکرد نیاز دارند' : language === 'ar' ? 'مصمم للمستخدمين الجادين الذين يحتاجون إلى الموثوقية والأداء' : language === 'tr' ? 'Güvenilirlik ve performans gerektiren ciddi kullanıcılar için' : 'Built for serious users who require reliability and performance',
          details: language === 'fa' ? 'برای کاربران جدی که به قابلیت اطمینان و عملکرد نیاز دارند ساخته شده است.' : language === 'ar' ? 'مصمم للمستخدمين الجادين الذين يحتاجون إلى الموثوقية والأداء.' : language === 'tr' ? 'Güvenilirlik ve performans gerektiren ciddi kullanıcılar için tasarlandı.' : 'Built for serious users who require reliability and performance. Security is paramount, with enterprise-grade protection for all assets and transactions.'
        },
        {
          name: language === 'fa' ? 'رفیعی پیمنت' : language === 'ar' ? 'رفيعي للمدفوعات' : language === 'tr' ? 'Rafiei Payment' : 'Rafiei Payment',
          icon: <CreditCard className="h-6 w-6" />,
          description: language === 'fa' ? 'راه‌حل‌های پرداخت بین‌المللی که تراکنش‌های جهانی، تسویه‌های فرامرزی و جریان‌های پرداخت کسب‌وکار-محور را امکان‌پذیر می‌کنند.' : language === 'ar' ? 'حلول الدفع الدولية التي تمكّن المعاملات العالمية، والتسويات عبر الحدود، وتدفقات الدفع الصديقة للأعمال.' : language === 'tr' ? 'Küresel işlemleri, sınır ötesi ödemeleri ve iş dostu ödeme akışlarını mümkün kılan uluslararası ödeme çözümleri.' : 'International payment solutions enabling global transactions, cross-border settlements, and business-friendly payment flows.',
          features: language === 'fa' ? ['تراکنش‌های جهانی', 'تسویه‌های فرامرزی', 'جریان‌های کسب‌وکار-محور', 'پشتیبانی چند-ارزی'] : language === 'ar' ? ['المعاملات العالمية', 'التسويات عبر الحدود', 'تدفقات صديقة للأعمال', 'دعم متعدد العملات'] : language === 'tr' ? ['Küresel İşlemler', 'Sınır Ötesi Ödemeler', 'İş Dostu Akışlar', 'Çoklu Para Birimi Desteği'] : ['Global Transactions', 'Cross-border Settlements', 'Business-friendly Flows', 'Multi-currency Support'],
          highlight: language === 'fa' ? 'برای فریلنسرها، استارتاپ‌ها و کسب‌وکارهای دیجیتال' : language === 'ar' ? 'للمستقلين والشركات الناشئة والأعمال الرقمية' : language === 'tr' ? 'Serbest çalışanlar, start-up\'lar ve dijital işletmeler için' : 'For freelancers, startups, and digital businesses',
          details: language === 'fa' ? 'طراحی شده برای پشتیبانی از فریلنسرها، استارتاپ‌ها و کسب‌وکارهای دیجیتال.' : language === 'ar' ? 'مصمم لدعم المستقلين والشركات الناشئة والأعمال الرقمية.' : language === 'tr' ? 'Serbest çalışanları, start-up\'ları ve dijital işletmeleri desteklemek için tasarlandı.' : 'Designed to support freelancers, startups, and digital businesses who need to send and receive money across borders without friction.'
        }
      ]
    },
    business: {
      title: language === 'fa' ? 'خدمات کسب‌وکار' : language === 'ar' ? 'خدمات الأعمال' : language === 'tr' ? 'İş Hizmetleri' : 'Business Services',
      icon: <Briefcase className="h-5 w-5" />,
      description: language === 'fa' ? 'خدمات استراتژیک که به کسب‌وکارها کمک می‌کنند در سطح جهانی رشد کنند.' : language === 'ar' ? 'خدمات استراتيجية تساعد الشركات على التوسع عالمياً.' : language === 'tr' ? 'İşletmelerin küresel ölçeklenmesine yardımcı olan stratejik hizmetler.' : 'Strategic services that help businesses scale globally.',
      platforms: [
        {
          name: language === 'fa' ? 'آژانس رفیعی' : language === 'ar' ? 'وكالة رفيعي' : language === 'tr' ? 'Rafiei Ajans' : 'Rafiei Agency',
          icon: <Briefcase className="h-6 w-6" />,
          description: language === 'fa' ? 'آژانس استراتژیک که به کسب‌وکارها کمک می‌کند محصولات دیجیتال بسازند، سیستم‌های AI پیاده‌سازی کنند، عملیات را بهینه کنند و در سطح بین‌المللی رشد کنند.' : language === 'ar' ? 'وكالة استراتيجية تساعد الشركات على بناء المنتجات الرقمية، وتنفيذ أنظمة الذكاء الاصطناعي، وتحسين العمليات، والتوسع دولياً.' : language === 'tr' ? 'İşletmelerin dijital ürünler oluşturmasına, yapay zeka sistemleri uygulamasına, operasyonları optimize etmesine ve uluslararası ölçeklenmesine yardımcı olan stratejik ajans.' : 'A strategic agency helping businesses build digital products, implement AI systems, optimize operations, and scale internationally.',
          features: language === 'fa' ? ['محصولات دیجیتال', 'پیاده‌سازی AI', 'بهینه‌سازی عملیات', 'رشد بین‌المللی'] : language === 'ar' ? ['المنتجات الرقمية', 'تنفيذ الذكاء الاصطناعي', 'تحسين العمليات', 'التوسع الدولي'] : language === 'tr' ? ['Dijital Ürünler', 'Yapay Zeka Uygulaması', 'Operasyon Optimizasyonu', 'Uluslararası Ölçekleme'] : ['Digital Products', 'AI Implementation', 'Operations Optimization', 'International Scaling'],
          highlight: language === 'fa' ? 'بازوی اجرایی برای تحول‌های دیجیتال پیچیده' : language === 'ar' ? 'ذراع التنفيذ للتحولات الرقمية المعقدة' : language === 'tr' ? 'Karmaşık dijital dönüşümler için uygulama kolu' : 'Execution arm for complex digital transformations',
          details: language === 'fa' ? 'آژانس به عنوان بازوی اجرایی برای تحول‌های دیجیتال پیچیده عمل می‌کند.' : language === 'ar' ? 'تعمل الوكالة كذراع تنفيذ للتحولات الرقمية المعقدة.' : language === 'tr' ? 'Ajans, karmaşık dijital dönüşümler için bir uygulama kolu olarak hareket eder.' : 'The agency acts as an execution arm for complex digital transformations. From strategy to implementation, we partner with businesses to bring their vision to life.'
        }
      ]
    }
  };

  // Populate "all" category with all platforms
  const allPlatforms = Object.entries(platformCategories)
    .filter(([key]) => key !== 'all')
    .flatMap(([_, category]) => category.platforms);
  platformCategories.all.platforms = allPlatforms;

  const missionPillarsIcons = [
    <Globe className="h-6 w-6" />,
    <Rocket className="h-6 w-6" />,
    <TrendingUp className="h-6 w-6" />,
    <Wallet className="h-6 w-6" />,
    <Network className="h-6 w-6" />
  ];

  const missionPillars = (missionPillarsData[language] || missionPillarsData.en).map((item, index) => ({
    ...item,
    icon: missionPillarsIcons[index]
  }));

  const impactStatsIcons = [
    <Users className="h-5 w-5" />,
    <Brain className="h-5 w-5" />,
    <Heart className="h-5 w-5" />,
    <Globe className="h-5 w-5" />
  ];

  const impactStats = (impactStatsData[language] || impactStatsData.en).map((item, index) => ({
    ...item,
    icon: impactStatsIcons[index]
  }));

  const visionPointsIcons = [
    <Brain className="h-5 w-5" />,
    <GraduationCap className="h-5 w-5" />,
    <Cloud className="h-5 w-5" />,
    <Globe className="h-5 w-5" />,
    <Sparkles className="h-5 w-5" />
  ];

  const visionPoints = (visionPointsData[language] || visionPointsData.en).map((item, index) => ({
    ...item,
    icon: visionPointsIcons[index]
  }));

  const coreValuesIcons = [
    <Lightbulb className="h-8 w-8" />,
    <Users className="h-8 w-8" />,
    <Globe className="h-8 w-8" />,
    <Shield className="h-8 w-8" />,
    <Zap className="h-8 w-8" />,
    <Target className="h-8 w-8" />
  ];

  const coreValues = (coreValuesData[language] || coreValuesData.en).map((item, index) => ({
    ...item,
    icon: coreValuesIcons[index]
  }));

  const timeline = timelineData[language] || timelineData.en;

  return (
    <div className={`${isRTL ? 'rtl text-right font-vazir' : 'ltr text-left'} overflow-hidden`}>
      {/* Hero Section - Bold & Impactful */}
      <section className="min-h-screen flex items-center justify-center relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-primary/25 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-primary/20 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-[300px] h-[300px] bg-primary/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '3s' }} />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="max-w-5xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">{t.heroBadge}</span>
            </motion.div>
            
            <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight ${isRTL ? 'font-vazir' : 'font-display'}`}>
              <span className="text-foreground">{t.heroTitle1}</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                {t.heroTitle2}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              {t.heroDesc}
            </p>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
              Every product inside the group connects to a bigger vision: <span className="text-primary font-semibold">AI as infrastructure, not just a feature.</span>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
              {missionPillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:bg-card/80 transition-all group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <span className="text-primary group-hover:scale-110 transition-transform">{pillar.icon}</span>
                  <span className="text-sm font-semibold text-foreground">{pillar.text}</span>
                  <span className="text-xs text-muted-foreground text-center">{pillar.description}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder Section - Personal & Powerful */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display text-foreground">
                Meet the Founder
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The vision and leadership behind the Rafiei ecosystem.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {/* Founder Photo */}
              <motion.div variants={fadeInUp} className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 rounded-3xl blur-2xl" />
                <div className="relative">
                  <img 
                    src={rezaRafieiPhoto} 
                    alt="Reza Rafiei - Founder & CEO of Rafiei Group" 
                    className="w-full max-w-md mx-auto rounded-2xl shadow-2xl border-4 border-card"
                  />
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-card border border-border/50 rounded-xl px-6 py-3 shadow-lg">
                    <p className="text-sm font-medium text-muted-foreground">Founder & CEO</p>
                    <p className="text-lg font-bold text-foreground">Reza Rafiei</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                  <Award className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Technology Entrepreneur & AI Ecosystem Architect</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold font-display text-foreground">
                  Building Borderless Digital Infrastructure
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Reza Rafiei is a technology entrepreneur, AI ecosystem architect, and global education innovator focused on building borderless digital infrastructure for the next generation of entrepreneurs, creators, and businesses.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  He is the founder of Rafiei Group, a multi-layered technology group that designs and operates AI-first platforms across education, finance, cloud infrastructure, automation, media, and global business services.
                </p>
                
                <div className="p-6 rounded-xl bg-card border border-border/50">
                  <div className="flex items-start gap-3">
                    <Quote className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-lg font-medium text-foreground italic mb-2">
                        To eliminate geographical, financial, and technical barriers using intelligent systems.
                      </p>
                      <p className="text-sm text-muted-foreground">— Core Mission</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  Rather than building isolated products, Reza builds connected ecosystems—where education, infrastructure, AI, and finance work together seamlessly. Every product connects to a bigger vision: <span className="text-primary font-medium">AI as infrastructure, not just a feature.</span>
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {impactStats.slice(0, 2).map((stat, index) => (
                    <div key={index} className="p-4 rounded-xl bg-muted/50 text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-primary">{stat.icon}</span>
                        <span className="text-2xl font-bold text-primary">{stat.value}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
            
            {/* Stats Card */}
            <motion.div 
              className="mt-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 border-border/50 bg-card/80 backdrop-blur">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  {impactStats.map((stat, index) => (
                    <div key={index} className="text-center p-6 rounded-xl bg-muted/50 hover:bg-muted/70 transition-colors">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        {stat.icon}
                      </div>
                      <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
                
                <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                  <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Heart className="h-5 w-5 text-primary" />
                    Philosophy
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Build systems that empower humans, not replace them. The group operates on a fully integrated modern tech stack: AI, cloud, automation, and finance—all working as one. Across all platforms, Rafiei Group has achieved tens of thousands of educated users, multiple scalable AI-first systems, proven real-world adoption, and strong communities across regions.
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display text-foreground">
                Core Values
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The principles that guide every decision and product we build.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all group"
                >
                  <div className="w-14 h-14 mb-4 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display text-foreground">
                Our Journey
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                From a vision to a global ecosystem serving thousands.
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border hidden lg:block" />
              
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      <Card className="p-6 border-border/50 bg-card hover:border-primary/30 transition-all inline-block">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 mb-3">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="text-sm font-bold text-primary">{item.year}</span>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </Card>
                    </div>
                    
                    <div className="flex-shrink-0 z-10">
                      <div className="w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/30" />
                    </div>
                    
                    <div className="flex-1 hidden lg:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Platforms - Interactive Tabs */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display text-foreground">
                The Ecosystem
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A multi-layered technology group designing and operating AI-first platforms across education, finance, cloud infrastructure, automation, media, and global business services.
              </p>
            </motion.div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent h-auto mb-12">
                {Object.entries(platformCategories).map(([key, category]) => (
                  <TabsTrigger 
                    key={key} 
                    value={key}
                    className="flex items-center gap-2 px-4 md:px-6 py-3 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-border/50 data-[state=active]:border-primary transition-all hover:bg-muted/50"
                  >
                    {category.icon}
                    <span className="hidden sm:inline">{category.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {Object.entries(platformCategories).map(([key, category]) => (
                <TabsContent key={key} value={key} className="mt-0">
                  {category.description && (
                    <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                      {category.description}
                    </p>
                  )}
                  <motion.div 
                    className={`grid gap-6 ${key === 'all' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 md:grid-cols-2'}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {category.platforms.map((platform, index) => (
                      <Card 
                        key={index}
                        className="p-6 border-border/50 bg-card hover:border-primary/30 transition-all group hover:shadow-lg"
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                            {platform.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-foreground mb-1">{platform.name}</h3>
                            <p className="text-sm text-muted-foreground line-clamp-2">{platform.description}</p>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {platform.features.slice(0, 4).map((feature, idx) => (
                            <span 
                              key={idx}
                              className="px-3 py-1 rounded-full text-xs bg-muted text-muted-foreground"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center gap-2 text-sm text-primary">
                          <ChevronRight className="h-4 w-4" />
                          <span className="line-clamp-1">{platform.highlight}</span>
                        </div>
                      </Card>
                    ))}
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Vision Section - Future-focused */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display text-foreground">
                Long-Term Vision
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Reza Rafiei and Rafiei Group are building toward a future where technology serves humanity without barriers.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {visionPoints.map((point, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="p-6 rounded-xl bg-card border border-border/50 text-center hover:border-primary/30 transition-all group hover:shadow-lg"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors text-primary">
                    {point.icon}
                  </div>
                  <p className="font-medium text-foreground">{point.text}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="text-center p-12 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                This is not just a group of products.
              </p>
              <p className="text-xl text-primary font-medium mb-6">
                It is a digital civilization layer for the future.
              </p>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A world where anyone, anywhere, can access the tools, knowledge, and infrastructure they need to build something meaningful—without barriers of location, capital, or technical expertise.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display text-foreground">
                Ready to Build Without Borders?
              </h2>
              <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join thousands who are already leveraging the Rafiei ecosystem to learn, build, and scale globally.
              </p>
              <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
                Whether you are an entrepreneur launching your first product, a business scaling internationally, or a creator looking to monetize globally—we have the infrastructure you need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-base px-8">
                  <Link to="/contact" className="flex items-center gap-2">
                    Get Started
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base px-8">
                  <Link to="/">
                    Explore Products
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
