import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, GraduationCap, Shield, DollarSign, Bot, Building2, CreditCard, Smartphone, Sparkles, Clock, Gift, Star, ArrowLeft, Zap, TrendingUp, Award, Users, CheckCircle2, Tag, Percent } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const DISCOUNT_CODE = 'blackfriday';
const END_DATE = new Date('2025-12-01T23:59:59');

// Gold color palette (not touching global colors)
const GOLD = {
  primary: '#FFD700',
  light: '#FFED4E',
  dark: '#B8860B',
  glow: 'rgba(255, 215, 0, 0.3)',
};

interface BusinessSection {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  accentColor: string;
  bgPattern: string;
  offers: {
    title: string;
    description: string;
    features: string[];
    discount: string;
    originalPrice?: string;
    discountedPrice?: string;
    savings?: string;
    cta: string;
    link: string;
    featured?: boolean;
  }[];
}

const BUSINESS_SECTIONS: BusinessSection[] = [
  {
    id: 'academy',
    title: 'آکادمی رفیعی',
    subtitle: 'آموزش‌های کاربردی برای درآمد دلاری',
    icon: <GraduationCap className="w-16 h-16" />,
    accentColor: '#FF6B6B',
    bgPattern: 'radial-gradient(circle at 20% 50%, rgba(255, 107, 107, 0.15) 0%, transparent 50%)',
    offers: [
      {
        title: 'دوره شروع',
        description: 'جامع‌ترین دوره برای شروع مسیر درآمد دلاری و بیزینس بین‌المللی',
        features: [
          'بیش از ۴۰ ساعت آموزش ویدیویی',
          'تمرین‌های عملی و پروژه محور',
          'تست شخصیت و مسیریابی شغلی',
          'پشتیبانی اختصاصی تیم رفیعی',
          'گواهینامه معتبر پایان دوره',
          'دسترسی مادام‌العمر به محتوا'
        ],
        discount: '۶۰٪',
        originalPrice: '$10',
        discountedPrice: '$4',
        savings: '$6',
        cta: 'خرید دوره شروع با ۶۰٪ تخفیف',
        link: 'https://academy.rafiei.co/enroll/?course=boundless',
        featured: true,
      },
      {
        title: 'سایر دوره‌های آکادمی',
        description: 'مجموعه کامل دوره‌های تخصصی برای هر مرحله از مسیر کسب‌وکار',
        features: [
          'دوره بدون مرز - راهنمای کامل کار از ایران',
          'دوره دراپ‌شیپینگ - فروش محصول بدون انبار',
          'دوره فروش فایل - ساخت محصول دیجیتال',
          'دوره آکادمی آنلاین - ساخت پلتفرم آموزشی',
          'به‌روزرسانی‌های رایگان',
          'کامیونیتی فعال دانشجویان'
        ],
        discount: '۳۰٪',
        cta: 'مشاهده همه دوره‌ها با ۳۰٪ تخفیف',
        link: 'https://academy.rafiei.co/courses',
      },
    ],
  },
  {
    id: 'vpn',
    title: 'شبکه بدون مرز',
    subtitle: 'VPN قدرتمند برای کار بین‌المللی',
    icon: <Shield className="w-16 h-16" />,
    accentColor: '#4ECDC4',
    bgPattern: 'radial-gradient(circle at 80% 50%, rgba(78, 205, 196, 0.15) 0%, transparent 50%)',
    offers: [
      {
        title: 'اشتراک شبکه بدون مرز',
        description: 'سریع‌ترین و پایدارترین VPN برای کار حرفه‌ای',
        features: [
          'سرعت بالای اتصال (بدون محدودیت)',
          'آی‌پی تمیز و اختصاصی',
          'لوکیشن‌های متنوع (آمریکا، اروپا، آسیا)',
          'پشتیبانی از تمام دستگاه‌ها',
          'قابلیت اتصال همزمان چند دستگاه',
          'پشتیبانی ۲۴/۷ فارسی',
          'تضمین بازگشت وجه'
        ],
        discount: '۴۰٪',
        cta: 'خرید اشتراک با ۴۰٪ تخفیف',
        link: 'https://t.me/getbnbot',
      },
    ],
  },
  {
    id: 'exchange',
    title: 'صرافی رفیعی',
    subtitle: 'تسویه حساب و پرداخت بین‌المللی',
    icon: <DollarSign className="w-16 h-16" />,
    accentColor: '#95E1D3',
    bgPattern: 'radial-gradient(circle at 20% 50%, rgba(149, 225, 211, 0.15) 0%, transparent 50%)',
    offers: [
      {
        title: 'خدمات صرافی',
        description: 'نقد کردن درآمد دلاری و پرداخت‌های بین‌المللی با امنیت کامل',
        features: [
          'نقد کردن درآمد از Stripe، PayPal، Wise',
          'پرداخت بین‌المللی برای خریدها',
          'تسویه حساب با ایران (ریالی)',
          'نرخ رقابتی و شفاف',
          'پردازش سریع (کمتر از ۲۴ ساعت)',
          'حداقل کارمزد با تخفیف ۵۰٪',
          'پشتیبانی اختصاصی مالی'
        ],
        discount: '۵۰٪',
        cta: 'درخواست خدمات با ۵۰٪ تخفیف کارمزد',
        link: 'https://exchange.rafiei.co/',
      },
    ],
  },
  {
    id: 'coach',
    title: 'کوچ هوشمند رفیعی',
    subtitle: 'دستیار هوش مصنوعی شخصی',
    icon: <Bot className="w-16 h-16" />,
    accentColor: '#A78BFA',
    bgPattern: 'radial-gradient(circle at 80% 50%, rgba(167, 139, 250, 0.15) 0%, transparent 50%)',
    offers: [
      {
        title: 'کردیت کوچ هوشمند',
        description: 'دستیار AI شخصی برای مسیر کاری، کسب‌وکار و زندگی',
        features: [
          'مشاوره ۲۴/۷ در هر زمینه‌ای',
          'برنامه‌ریزی و استراتژی کسب‌وکار',
          'حل مشکلات و تصمیم‌گیری',
          'یادگیری و توسعه مهارت',
          'تحلیل و بهینه‌سازی',
          'پاسخ‌های فوری و دقیق',
          'حفظ حریم خصوصی کامل'
        ],
        discount: '۶۰٪',
        cta: 'خرید کردیت با ۶۰٪ تخفیف',
        link: 'https://coach.rafiei.co/',
      },
    ],
  },
  {
    id: 'services',
    title: 'خدمات تخصصی',
    subtitle: 'ثبت شرکت، افتتاح حساب و سیم‌کارت',
    icon: <Building2 className="w-16 h-16" />,
    accentColor: '#F59E0B',
    bgPattern: 'radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.15) 0%, transparent 50%)',
    offers: [
      {
        title: 'ثبت شرکت بین‌المللی',
        description: 'ثبت شرکت در بهترین کشورها برای کسب‌وکار آنلاین',
        features: [
          'ثبت در انگلستان، دبی، کانادا، آمریکا',
          'مشاوره رایگان انتخاب کشور',
          'انجام کامل مدارک و فرآیندها',
          'دریافت شماره شرکت و مدارک',
          'راهنمایی کامل پس از ثبت',
          'پشتیبانی قانونی'
        ],
        discount: '۲۰٪',
        cta: 'درخواست ثبت شرکت با ۲۰٪ تخفیف',
        link: 'https://t.me/m/_D9w2J4BNjA0',
      },
      {
        title: 'افتتاح حساب بانکی',
        description: 'افتتاح حساب در بهترین پلتفرم‌های پرداخت بین‌المللی',
        features: [
          'Wise، Revolut، Stripe Connect',
          'راهنمایی گام به گام',
          'تایید هویت و مدارک',
          'رفع مشکلات احتمالی',
          'آموزش استفاده حرفه‌ای',
          'پشتیبانی مادام‌العمر'
        ],
        discount: '۲۰٪',
        cta: 'درخواست افتتاح حساب با ۲۰٪ تخفیف',
        link: 'https://t.me/m/_D9w2J4BNjA0',
      },
      {
        title: 'سیم‌کارت بین‌المللی',
        description: 'سیم‌کارت اختصاصی برای تایید حساب‌ها و ارتباطات',
        features: [
          'شماره‌های آمریکا، انگلیس، کانادا',
          'دریافت SMS و تماس',
          'مناسب برای تایید حساب‌ها',
          'قیمت مقرون به صرفه',
          'ارسال سریع به ایران',
          'پشتیبانی فنی'
        ],
        discount: '۲۰٪',
        cta: 'سفارش سیم‌کارت با ۲۰٪ تخفیف',
        link: 'https://t.me/m/_D9w2J4BNjA0',
      },
    ],
  },
];

const BlackFriday = () => {
  const [copied, setCopied] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const distance = END_DATE.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(DISCOUNT_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white font-vazir overflow-x-hidden" dir="rtl" style={{ backgroundColor: '#000000' }}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* Animated background with gold accents */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%)' }} />
          
          {/* Floating gold orbs */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
            style={{ background: GOLD.glow }}
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
            style={{ background: GOLD.glow }}
            animate={{
              scale: [1.4, 1, 1.4],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Sparkle effects */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: GOLD.primary,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Top Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Badge 
                className="text-xl px-10 py-4 border-2 shadow-2xl"
                style={{ 
                  backgroundColor: 'rgba(255, 215, 0, 0.2)',
                  borderColor: GOLD.primary,
                  color: GOLD.primary,
                  boxShadow: `0 0 30px ${GOLD.glow}`
                }}
              >
                <Sparkles className="w-6 h-6 ml-2" />
                بلک فرایدی بدون مرز ۲۰۲۵
                <Sparkles className="w-6 h-6 mr-2" />
              </Badge>
            </motion.div>
            
            {/* Main Headline */}
            <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-black leading-none">
              <motion.span 
                className="block"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                بزرگ‌ترین
              </motion.span>
              <motion.span 
                className="block mt-6"
                style={{
                  background: `linear-gradient(135deg, ${GOLD.light} 0%, ${GOLD.primary} 50%, ${GOLD.dark} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: `drop-shadow(0 0 40px ${GOLD.glow})`
                }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                تخفیف سال
              </motion.span>
            </h1>
            
            {/* Subheadline with icons */}
            <div className="flex items-center justify-center gap-4 flex-wrap text-2xl md:text-3xl text-gray-300 max-w-5xl mx-auto">
              <Zap className="w-8 h-8" style={{ color: GOLD.primary }} />
              <span>از آموزش تا ابزار</span>
              <Star className="w-8 h-8" style={{ color: GOLD.primary }} />
              <span>از صرافی تا هوش مصنوعی</span>
              <Gift className="w-8 h-8" style={{ color: GOLD.primary }} />
            </div>
            <p className="text-3xl md:text-4xl font-bold" style={{ color: GOLD.primary }}>
              همه با تخفیف‌های باورنکردنی تا ۶۰٪!
            </p>
          </motion.div>

          {/* Massive Discount Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="relative inline-block"
          >
            <div 
              className="text-9xl md:text-[15rem] font-black"
              style={{
                background: `linear-gradient(135deg, ${GOLD.light} 0%, ${GOLD.primary} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: `drop-shadow(0 0 60px ${GOLD.glow})`
              }}
            >
              ۶۰٪
            </div>
            <motion.div
              className="absolute -top-8 -right-8"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Tag className="w-24 h-24" style={{ color: GOLD.primary }} />
            </motion.div>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="rounded-3xl p-12 max-w-4xl mx-auto backdrop-blur-xl border-4"
            style={{
              backgroundColor: 'rgba(10, 10, 10, 0.8)',
              borderColor: GOLD.primary,
              boxShadow: `0 0 60px ${GOLD.glow}`
            }}
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <Clock className="w-10 h-10" style={{ color: GOLD.primary }} />
              <p className="text-2xl text-gray-300 font-bold">فقط این مدت فرصت داری!</p>
              <Clock className="w-10 h-10" style={{ color: GOLD.primary }} />
            </div>
            <div className="grid grid-cols-4 gap-8">
              {[
                { value: timeLeft.days, label: 'روز' },
                { value: timeLeft.hours, label: 'ساعت' },
                { value: timeLeft.minutes, label: 'دقیقه' },
                { value: timeLeft.seconds, label: 'ثانیه' },
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <div 
                    className="text-6xl md:text-7xl font-black mb-4 tabular-nums"
                    style={{ 
                      color: GOLD.primary,
                      textShadow: `0 0 30px ${GOLD.glow}`
                    }}
                  >
                    {String(item.value).padStart(2, '0')}
                  </div>
                  <div className="text-xl text-gray-400 font-bold">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Discount Code - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="rounded-3xl p-10 max-w-3xl mx-auto backdrop-blur-xl border-4"
            style={{
              background: `linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(184, 134, 11, 0.1) 100%)`,
              borderColor: GOLD.primary,
              boxShadow: `0 0 80px ${GOLD.glow}`
            }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <Percent className="w-8 h-8" style={{ color: GOLD.primary }} />
              <p className="text-2xl text-gray-300 font-bold">کد تخفیف همه محصولات</p>
              <Percent className="w-8 h-8" style={{ color: GOLD.primary }} />
            </div>
            <div className="flex items-center justify-center gap-6 flex-wrap">
              <code 
                className="text-5xl md:text-6xl font-black tracking-widest px-8 py-4 rounded-2xl border-2"
                style={{ 
                  color: GOLD.primary,
                  borderColor: GOLD.primary,
                  backgroundColor: 'rgba(255, 215, 0, 0.1)',
                  textShadow: `0 0 20px ${GOLD.glow}`
                }}
              >
                {DISCOUNT_CODE}
              </code>
              <Button
                size="icon"
                onClick={copyToClipboard}
                className="h-16 w-16 rounded-2xl border-2 transition-all duration-300"
                style={{
                  backgroundColor: copied ? GOLD.primary : 'transparent',
                  borderColor: GOLD.primary,
                  color: copied ? '#000' : GOLD.primary,
                }}
              >
                {copied ? <Check className="w-8 h-8" /> : <Copy className="w-8 h-8" />}
              </Button>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Button
              size="lg"
              className="text-2xl px-16 py-10 rounded-2xl font-black shadow-2xl transition-all duration-300 border-2"
              style={{
                background: `linear-gradient(135deg, ${GOLD.primary} 0%, ${GOLD.dark} 100%)`,
                color: '#000',
                borderColor: GOLD.light,
              }}
              onClick={() => document.getElementById('academy')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Star className="w-8 h-8 ml-3" />
              دیدن همه تخفیف‌ها
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Business Sections - Each with unique layout */}
      {BUSINESS_SECTIONS.map((business, sectionIndex) => (
        <section
          key={business.id}
          id={business.id}
          className="py-32 px-4 relative overflow-hidden"
          style={{
            background: sectionIndex % 2 === 0 
              ? 'linear-gradient(180deg, #000000 0%, #0a0a0a 100%)' 
              : 'linear-gradient(180deg, #0a0a0a 0%, #000000 100%)'
          }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20" style={{ background: business.bgPattern }} />
          
          {/* Floating discount badge */}
          <motion.div
            className="absolute top-20 left-10 hidden lg:block"
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0, -5, 0]
            }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <div 
              className="text-6xl font-black px-8 py-6 rounded-full border-4 shadow-2xl"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                borderColor: business.accentColor,
                color: business.accentColor,
                boxShadow: `0 0 40px ${business.accentColor}40`
              }}
            >
              {business.offers[0].discount}
            </div>
          </motion.div>

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Section Header - Unique style per section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-20"
            >
              <div className="flex flex-col lg:flex-row items-center gap-12 mb-12">
                {/* Icon with glow */}
                <motion.div 
                  className="rounded-3xl p-8 border-4"
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    borderColor: business.accentColor,
                    color: business.accentColor,
                    boxShadow: `0 0 60px ${business.accentColor}60`
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {business.icon}
                </motion.div>
                
                {/* Title and subtitle */}
                <div className="flex-1 text-center lg:text-right">
                  <h2 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
                    {business.title}
                  </h2>
                  <p className="text-3xl text-gray-400 mb-6">
                    {business.subtitle}
                  </p>
                  <div className="flex items-center gap-4 justify-center lg:justify-start">
                    <div 
                      className="h-2 w-20 rounded-full"
                      style={{ backgroundColor: business.accentColor }}
                    />
                    <Award className="w-8 h-8" style={{ color: business.accentColor }} />
                    <div 
                      className="h-2 w-20 rounded-full"
                      style={{ backgroundColor: business.accentColor }}
                    />
                  </div>
                </div>

                {/* Discount percentage - large */}
                <motion.div
                  className="text-8xl font-black"
                  style={{
                    color: business.accentColor,
                    textShadow: `0 0 40px ${business.accentColor}60`
                  }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {business.offers[0].discount}
                </motion.div>
              </div>
            </motion.div>

            {/* Offers - Unique layouts per section type */}
            {business.offers.length === 1 ? (
              // Single offer - Full width card
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card 
                  className="backdrop-blur-xl border-4 overflow-hidden group hover:scale-[1.02] transition-all duration-500"
                  style={{
                    backgroundColor: 'rgba(10, 10, 10, 0.9)',
                    borderColor: business.accentColor,
                    boxShadow: `0 0 60px ${business.accentColor}40`
                  }}
                >
                  <CardHeader className="pb-8 relative">
                    {/* Discount ribbon */}
                    <div 
                      className="absolute top-8 left-8 text-5xl font-black px-10 py-6 rounded-2xl border-4 rotate-12 shadow-2xl"
                      style={{
                        backgroundColor: business.accentColor,
                        color: '#000',
                        borderColor: '#fff',
                        boxShadow: `0 0 40px ${business.accentColor}`
                      }}
                    >
                      {business.offers[0].discount}
                    </div>

                    <div className="max-w-3xl">
                      <CardTitle className="text-5xl md:text-6xl font-black mb-6">
                        {business.offers[0].title}
                      </CardTitle>
                      <CardDescription className="text-2xl text-gray-300 leading-relaxed">
                        {business.offers[0].description}
                      </CardDescription>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-10">
                    {/* Features in 3 columns */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {business.offers[0].features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-start gap-4 p-4 rounded-xl border-2"
                          style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.03)',
                            borderColor: `${business.accentColor}40`
                          }}
                          whileHover={{ 
                            scale: 1.05,
                            borderColor: business.accentColor
                          }}
                        >
                          <CheckCircle2 
                            className="w-7 h-7 flex-shrink-0 mt-1" 
                            style={{ color: business.accentColor }} 
                          />
                          <span className="text-lg leading-relaxed">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Pricing if available */}
                    {business.offers[0].originalPrice && business.offers[0].discountedPrice && (
                      <div 
                        className="flex items-center justify-center gap-12 py-10 rounded-3xl border-4"
                        style={{
                          backgroundColor: 'rgba(0, 0, 0, 0.6)',
                          borderColor: business.accentColor
                        }}
                      >
                        <div className="text-center">
                          <p className="text-xl text-gray-400 mb-3">قیمت اصلی</p>
                          <p className="text-5xl line-through text-gray-500">
                            {business.offers[0].originalPrice}
                          </p>
                        </div>
                        <TrendingUp className="w-16 h-16" style={{ color: business.accentColor }} />
                        <div className="text-center">
                          <p className="text-xl mb-3" style={{ color: business.accentColor }}>بعد از تخفیف</p>
                          <p className="text-7xl font-black" style={{ color: business.accentColor }}>
                            {business.offers[0].discountedPrice}
                          </p>
                        </div>
                        {business.offers[0].savings && (
                          <div 
                            className="text-4xl font-black px-8 py-4 rounded-2xl border-4"
                            style={{
                              backgroundColor: business.accentColor,
                              color: '#000',
                              borderColor: '#fff'
                            }}
                          >
                            صرفه‌جویی {business.offers[0].savings}
                          </div>
                        )}
                      </div>
                    )}

                    {/* CTA */}
                    <div className="text-center space-y-6">
                      <Button
                        size="lg"
                        className="text-3xl px-16 py-10 w-full max-w-2xl rounded-2xl font-black shadow-2xl border-4 transition-all duration-300"
                        style={{
                          backgroundColor: business.accentColor,
                          color: '#000',
                          borderColor: '#fff',
                        }}
                        asChild
                      >
                        <a href={business.offers[0].link} target="_blank" rel="noopener noreferrer">
                          <Zap className="w-8 h-8 ml-3" />
                          {business.offers[0].cta}
                        </a>
                      </Button>
                      <p className="text-xl text-gray-400">
                        کد تخفیف: <code className="text-3xl font-black px-6 py-2 rounded-lg" style={{ color: GOLD.primary, backgroundColor: 'rgba(255, 215, 0, 0.1)' }}>{DISCOUNT_CODE}</code>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ) : (
              // Multiple offers - Grid layout
              <div className="grid lg:grid-cols-2 gap-10">
                {business.offers.map((offer, offerIndex) => (
                  <motion.div
                    key={offerIndex}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: offerIndex * 0.2 }}
                    className={offer.featured ? 'lg:col-span-2' : ''}
                  >
                    <Card 
                      className="h-full backdrop-blur-xl border-4 overflow-hidden hover:scale-[1.02] transition-all duration-500"
                      style={{
                        backgroundColor: offer.featured ? 'rgba(255, 215, 0, 0.05)' : 'rgba(10, 10, 10, 0.8)',
                        borderColor: offer.featured ? GOLD.primary : business.accentColor,
                        boxShadow: offer.featured 
                          ? `0 0 80px ${GOLD.glow}` 
                          : `0 0 40px ${business.accentColor}40`
                      }}
                    >
                      <CardHeader className="pb-6 relative">
                        {offer.featured && (
                          <motion.div
                            className="absolute -top-4 -right-4"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          >
                            <div 
                              className="text-xl font-black px-8 py-4 rounded-full border-4 shadow-2xl"
                              style={{
                                backgroundColor: GOLD.primary,
                                color: '#000',
                                borderColor: '#fff',
                                boxShadow: `0 0 40px ${GOLD.glow}`
                              }}
                            >
                              <Star className="w-6 h-6" />
                            </div>
                          </motion.div>
                        )}

                        <div className="flex items-start justify-between gap-6 mb-6">
                          <div className="flex-1">
                            {offer.featured && (
                              <Badge 
                                className="mb-6 text-xl px-8 py-3 border-2"
                                style={{
                                  backgroundColor: GOLD.primary,
                                  color: '#000',
                                  borderColor: '#fff'
                                }}
                              >
                                <Sparkles className="w-6 h-6 ml-2" />
                                پیشنهاد ویژه
                              </Badge>
                            )}
                            <CardTitle className="text-4xl md:text-5xl font-black mb-4">
                              {offer.title}
                            </CardTitle>
                            <CardDescription className="text-xl text-gray-300 leading-relaxed">
                              {offer.description}
                            </CardDescription>
                          </div>
                          
                          {/* Discount badge */}
                          <motion.div 
                            className="text-5xl font-black px-8 py-6 rounded-2xl border-4 shrink-0"
                            style={{
                              backgroundColor: offer.featured ? GOLD.primary : business.accentColor,
                              color: '#000',
                              borderColor: '#fff',
                              boxShadow: offer.featured 
                                ? `0 0 40px ${GOLD.glow}`
                                : `0 0 40px ${business.accentColor}60`
                            }}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            {offer.discount}
                          </motion.div>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-8">
                        {/* Features */}
                        <div className="grid md:grid-cols-2 gap-4">
                          {offer.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <CheckCircle2 
                                className="w-6 h-6 flex-shrink-0 mt-1" 
                                style={{ color: offer.featured ? GOLD.primary : business.accentColor }} 
                              />
                              <span className="text-base leading-relaxed">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* Pricing */}
                        {offer.originalPrice && offer.discountedPrice && (
                          <div 
                            className="flex items-center justify-center gap-8 py-8 rounded-2xl border-2"
                            style={{
                              backgroundColor: 'rgba(0, 0, 0, 0.4)',
                              borderColor: offer.featured ? GOLD.primary : business.accentColor
                            }}
                          >
                            <div className="text-center">
                              <p className="text-sm text-gray-400 mb-2">قیمت اصلی</p>
                              <p className="text-4xl line-through text-gray-500">
                                {offer.originalPrice}
                              </p>
                            </div>
                            <ArrowLeft 
                              className="w-10 h-10" 
                              style={{ color: offer.featured ? GOLD.primary : business.accentColor }} 
                            />
                            <div className="text-center">
                              <p 
                                className="text-sm mb-2"
                                style={{ color: offer.featured ? GOLD.primary : business.accentColor }}
                              >
                                بعد از تخفیف
                              </p>
                              <p 
                                className="text-6xl font-black"
                                style={{ color: offer.featured ? GOLD.primary : business.accentColor }}
                              >
                                {offer.discountedPrice}
                              </p>
                            </div>
                          </div>
                        )}

                        {/* CTA */}
                        <div className="text-center space-y-4">
                          <Button
                            size="lg"
                            className="text-2xl px-12 py-8 w-full rounded-2xl font-black shadow-2xl border-4 transition-all duration-300"
                            style={{
                              backgroundColor: offer.featured ? GOLD.primary : business.accentColor,
                              color: '#000',
                              borderColor: '#fff',
                            }}
                            asChild
                          >
                            <a href={offer.link} target="_blank" rel="noopener noreferrer">
                              {offer.cta}
                            </a>
                          </Button>
                          <p className="text-base text-gray-400">
                            کد تخفیف: <code className="text-xl font-black px-4 py-1 rounded" style={{ color: GOLD.primary, backgroundColor: 'rgba(255, 215, 0, 0.1)' }}>{DISCOUNT_CODE}</code>
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}

      {/* Why Different Section */}
      <section className="py-32 px-4 relative overflow-hidden" style={{ backgroundColor: '#000000' }}>
        {/* Gold pattern overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle, ${GOLD.primary} 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 
              className="text-6xl md:text-8xl font-black mb-8"
              style={{
                background: `linear-gradient(135deg, ${GOLD.light} 0%, ${GOLD.primary} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              چرا این بلک فرایدی متفاوت است؟
            </h2>
            <p className="text-3xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              ما فقط تخفیف نمی‌دهیم، داریم کل اکوسیستم کار بین‌المللی رو در اختیارت می‌ذاریم
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <GraduationCap className="w-14 h-14" />,
                title: 'دسترسی مادام‌العمر',
                description: 'تمام دوره‌ها و آموزش‌ها برای همیشه مال توست',
                color: '#FF6B6B'
              },
              {
                icon: <Users className="w-14 h-14" />,
                title: 'پشتیبانی واقعی',
                description: 'تیم حرفه‌ای رفیعی ۲۴/۷ کنار شماست',
                color: '#4ECDC4'
              },
              {
                icon: <Award className="w-14 h-14" />,
                title: 'تجربه اثبات‌شده',
                description: 'هزاران نفر با کمک ما موفق شدند',
                color: '#95E1D3'
              },
              {
                icon: <TrendingUp className="w-14 h-14" />,
                title: 'درآمد دلاری واقعی',
                description: 'از صفر تا ساخت بیزینس بین‌المللی',
                color: GOLD.primary
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card 
                  className="h-full backdrop-blur-xl border-4 text-center p-8 hover:scale-105 transition-all duration-500"
                  style={{
                    backgroundColor: 'rgba(10, 10, 10, 0.8)',
                    borderColor: item.color,
                    boxShadow: `0 0 40px ${item.color}40`
                  }}
                >
                  <motion.div 
                    className="mb-6 flex justify-center"
                    style={{ color: item.color }}
                    animate={{ rotate: [0, 10, 0, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-2xl font-black mb-4" style={{ color: item.color }}>
                    {item.title}
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-4" style={{ background: 'linear-gradient(180deg, #000000 0%, #0a0a0a 100%)' }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-8xl font-black mb-8">
              سوالات متداول
            </h2>
            <div className="h-2 w-40 mx-auto rounded-full" style={{ backgroundColor: GOLD.primary }} />
          </motion.div>

          <Accordion type="single" collapsible className="space-y-6">
            {[
              {
                q: 'چطور باید کد تخفیف blackfriday را وارد کنم؟',
                a: 'هنگام خرید، در قسمت کد تخفیف عبارت blackfriday را وارد کنید. تخفیف به‌صورت خودکار اعمال می‌شود و قیمت نهایی با تخفیف نمایش داده می‌شود.'
              },
              {
                q: 'تا کی این تخفیف‌ها فعال هستند؟',
                a: 'تخفیف‌های بلک فرایدی فقط تا پایان تایمر در بالای صفحه فعال است. پس از آن، قیمت‌ها به حالت عادی برمی‌گردند و این فرصت دیگر تکرار نخواهد شد.'
              },
              {
                q: 'آیا بعد از خرید، به‌صورت خودکار به دوره و سرویس دسترسی دارم؟',
                a: 'بله، بلافاصله بعد از تکمیل پرداخت، دسترسی شما فعال می‌شود و می‌توانید از تمام امکانات و محتوای خریداری‌شده استفاده کنید.'
              },
              {
                q: 'اگر سوال یا مشکلی داشتم، از کجا پشتیبانی بگیرم؟',
                a: 'می‌توانید از طریق تلگرام @rafieiacademy با تیم پشتیبانی ما در ارتباط باشید. ما ۷ روز هفته آماده پاسخگویی و کمک به شما هستیم.'
              },
              {
                q: 'آیا می‌توانم چند تخفیف را با هم استفاده کنم؟',
                a: 'خیر، فقط یک کد تخفیف برای هر خرید قابل استفاده است. کد blackfriday بیشترین تخفیف را در طول سال به شما می‌دهد و نیازی به کد دیگری ندارید.'
              },
              {
                q: 'پرداخت از ایران امکان‌پذیر است؟',
                a: 'بله، ما روش‌های پرداخت متنوعی برای کاربران ایرانی فراهم کرده‌ایم. می‌توانید با کارت شتاب، رمزارزها و سایر روش‌های داخلی خرید کنید.'
              },
            ].map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border-4 rounded-2xl px-8 backdrop-blur-xl"
                style={{
                  backgroundColor: 'rgba(10, 10, 10, 0.6)',
                  borderColor: `${GOLD.primary}40`
                }}
              >
                <AccordionTrigger 
                  className="text-2xl text-right hover:no-underline py-8 font-bold"
                  style={{ color: GOLD.primary }}
                >
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-xl text-gray-300 leading-relaxed pb-8">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center mt-16"
          >
            <p className="text-2xl text-gray-400 mb-8">
              سوال دیگری دارید؟ با پشتیبانی ما صحبت کنید
            </p>
            <Button
              size="lg"
              className="text-2xl px-16 py-8 rounded-2xl border-4 font-black transition-all duration-300"
              style={{
                backgroundColor: 'transparent',
                borderColor: GOLD.primary,
                color: GOLD.primary,
              }}
              asChild
            >
              <a href="https://t.me/rafieiacademy" target="_blank" rel="noopener noreferrer">
                ارتباط با پشتیبانی
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 relative overflow-hidden" style={{ backgroundColor: '#000000' }}>
        {/* Animated gold background */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${GOLD.glow} 0%, transparent 70%)`
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <h2 
                className="text-7xl md:text-9xl font-black mb-8 leading-tight"
                style={{
                  background: `linear-gradient(135deg, ${GOLD.light} 0%, ${GOLD.primary} 50%, ${GOLD.dark} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: `drop-shadow(0 0 40px ${GOLD.glow})`
                }}
              >
                فرصت رو از دست نده!
              </h2>
            </motion.div>
            
            <p className="text-3xl md:text-4xl text-gray-300 font-bold">
              الان تصمیم بگیر، بعداً از خودت تشکر کن
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="text-4xl px-20 py-12 rounded-3xl font-black shadow-2xl border-4 transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${GOLD.primary} 0%, ${GOLD.dark} 100%)`,
                  color: '#000',
                  borderColor: GOLD.light,
                  boxShadow: `0 0 80px ${GOLD.glow}`
                }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <Zap className="w-12 h-12 ml-4" />
                مشاهده همه تخفیف‌ها
                <Sparkles className="w-12 h-12 mr-4" />
              </Button>
            </motion.div>

            <motion.div 
              className="mt-16 p-12 backdrop-blur-xl rounded-3xl border-4"
              style={{
                backgroundColor: 'rgba(10, 10, 10, 0.8)',
                borderColor: GOLD.primary,
                boxShadow: `0 0 60px ${GOLD.glow}`
              }}
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-2xl text-gray-300 mb-6 font-bold">
                یادت نره کد تخفیف رو وارد کنی:
              </p>
              <code 
                className="text-6xl font-black px-12 py-6 rounded-2xl border-4 inline-block"
                style={{ 
                  color: GOLD.primary,
                  backgroundColor: 'rgba(255, 215, 0, 0.1)',
                  borderColor: GOLD.primary,
                  textShadow: `0 0 30px ${GOLD.glow}`
                }}
              >
                {DISCOUNT_CODE}
              </code>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlackFriday;
