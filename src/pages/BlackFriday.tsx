import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, GraduationCap, Shield, DollarSign, Bot, Building2, Sparkles, Clock, Gift, Star, ArrowLeft, Zap, Award, CheckCircle2 } from 'lucide-react';
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
    icon: <GraduationCap className="w-10 h-10" />,
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
    icon: <Shield className="w-10 h-10" />,
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
    icon: <DollarSign className="w-10 h-10" />,
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
    icon: <Bot className="w-10 h-10" />,
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
    icon: <Building2 className="w-10 h-10" />,
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
    <div className="min-h-screen bg-black text-white overflow-x-hidden font-iransans" dir="rtl" style={{ backgroundColor: '#000000' }}>
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 px-4 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%)' }} />
          
          {/* Floating gold orbs */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-48 h-48 md:w-64 md:h-64 rounded-full blur-3xl"
            style={{ background: GOLD.glow }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Sparkle effects */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 md:w-1.5 md:h-1.5 rounded-full"
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

        <div className="relative z-10 max-w-6xl mx-auto text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {/* Top Badge */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Badge 
                className="text-sm px-4 py-2 border"
                style={{ 
                  backgroundColor: 'rgba(255, 215, 0, 0.2)',
                  borderColor: GOLD.primary,
                  color: GOLD.primary,
                  boxShadow: `0 0 20px ${GOLD.glow}`
                }}
              >
                <Sparkles className="w-4 h-4 ml-1" />
                بلک فرایدی بدون مرز
                <Sparkles className="w-4 h-4 mr-1" />
              </Badge>
            </motion.div>
            
            {/* Main Headline */}
            <h1 className="text-3xl md:text-5xl font-black leading-tight">
              بزرگ‌ترین تخفیف سال
            </h1>
            <p className="text-base md:text-lg text-gray-300">
              از آموزش تا ابزار • از صرافی تا هوش مصنوعی
            </p>
          </motion.div>

          {/* Discount Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div 
              className="text-5xl md:text-7xl font-black"
              style={{
                background: `linear-gradient(135deg, ${GOLD.light} 0%, ${GOLD.primary} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: `drop-shadow(0 0 30px ${GOLD.glow})`
              }}
            >
              تا ۶۰٪ تخفیف
            </div>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="rounded-xl p-4 md:p-6 max-w-2xl mx-auto backdrop-blur-xl border-2"
            style={{
              backgroundColor: 'rgba(10, 10, 10, 0.8)',
              borderColor: GOLD.primary,
              boxShadow: `0 0 30px ${GOLD.glow}`
            }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="w-5 h-5" style={{ color: GOLD.primary }} />
              <p className="text-sm md:text-base text-gray-300 font-bold">فقط این مدت فرصت داری!</p>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[
                { value: timeLeft.days, label: 'روز' },
                { value: timeLeft.hours, label: 'ساعت' },
                { value: timeLeft.minutes, label: 'دقیقه' },
                { value: timeLeft.seconds, label: 'ثانیه' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div 
                    className="text-3xl md:text-4xl font-black mb-1 tabular-nums"
                    style={{ 
                      color: GOLD.primary,
                      textShadow: `0 0 20px ${GOLD.glow}`
                    }}
                  >
                    {String(item.value).padStart(2, '0')}
                  </div>
                  <div className="text-xs text-gray-400">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Discount Code Display */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="rounded-xl p-4 md:p-5 max-w-2xl mx-auto backdrop-blur-sm border"
            style={{
              backgroundColor: 'rgba(255, 215, 0, 0.05)',
              borderColor: GOLD.primary,
            }}
          >
            <p className="text-sm font-bold mb-3">یادت نره کد تخفیف رو وارد کنی:</p>
            <div 
              className="flex items-center justify-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all hover:scale-105"
              style={{
                backgroundColor: '#000',
                borderColor: GOLD.primary,
                boxShadow: `0 0 20px ${GOLD.glow}`
              }}
              onClick={copyToClipboard}
            >
              <code className="text-2xl md:text-3xl font-mono font-black tracking-wider" style={{ color: GOLD.primary }}>
                {DISCOUNT_CODE}
              </code>
              <button className="p-2 rounded-lg transition-all hover:scale-110" style={{ backgroundColor: GOLD.primary }}>
                {copied ? <Check className="w-5 h-5 text-black" /> : <Copy className="w-5 h-5 text-black" />}
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2">کلیک کن تا کپی بشه</p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center"
          >
            <Button
              size="lg"
              className="text-base px-6 py-4 rounded-xl font-bold transition-all hover:scale-105"
              style={{
                backgroundColor: GOLD.primary,
                color: '#000',
                boxShadow: `0 0 20px ${GOLD.glow}`
              }}
              onClick={() => document.getElementById('offers')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Gift className="w-5 h-5 ml-2" />
              مشاهده همه تخفیف‌ها
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-sm px-5 py-4 rounded-xl font-bold border-2 transition-all hover:scale-105"
              style={{
                borderColor: GOLD.primary,
                color: GOLD.primary,
                backgroundColor: 'transparent'
              }}
              onClick={() => window.location.href = 'https://academy.rafiei.co/enroll/?course=boundless'}
            >
              دوره شروع با ۶۰٪ تخفیف
              <Star className="w-4 h-4 mr-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Business Sections */}
      <div id="offers" className="space-y-10 md:space-y-12 py-8">
        {BUSINESS_SECTIONS.map((section, sectionIndex) => (
          <motion.section
            key={section.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
            className="relative px-4 py-8"
            style={{
              background: section.bgPattern,
            }}
          >
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0" style={{ 
                backgroundImage: `radial-gradient(circle, ${section.accentColor}22 1px, transparent 1px)`,
                backgroundSize: '30px 30px'
              }} />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="inline-block mb-3 p-3 rounded-xl border-2"
                  style={{
                    borderColor: section.accentColor,
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    color: section.accentColor,
                    boxShadow: `0 0 20px ${section.accentColor}44`
                  }}
                >
                  {section.icon}
                </motion.div>
                
                <h2 className="text-2xl md:text-3xl font-black mb-2" style={{ color: section.accentColor }}>
                  {section.title}
                </h2>
                <p className="text-sm text-gray-300">
                  {section.subtitle}
                </p>
              </div>

              {/* Offers Grid */}
              <div className={`grid gap-4 ${section.offers.length > 1 ? 'lg:grid-cols-2' : ''}`}>
                {section.offers.map((offer, offerIndex) => (
                  <motion.div
                    key={offerIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: offerIndex * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="group relative"
                  >
                    {/* Card Background */}
                    <div 
                      className="absolute inset-0 rounded-xl border-2 overflow-hidden"
                      style={{
                        borderColor: section.accentColor,
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        boxShadow: `0 0 30px ${section.accentColor}33`
                      }}
                    >
                      {offer.featured && (
                        <motion.div
                          className="absolute top-0 left-0 right-0 h-1"
                          style={{ backgroundColor: GOLD.primary }}
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      )}
                    </div>

                    <Card className="relative bg-transparent border-0 overflow-visible">
                      <CardHeader className="space-y-3 p-5">
                        {/* Floating Discount Badge */}
                        <motion.div
                          className="absolute -top-4 -right-4 z-20"
                          animate={{ 
                            rotate: [0, 3, 0, -3, 0],
                            scale: [1, 1.05, 1]
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          <div 
                            className="w-16 h-16 rounded-full flex items-center justify-center border-4 shadow-xl"
                            style={{
                              backgroundColor: offer.featured ? GOLD.primary : section.accentColor,
                              borderColor: '#000',
                              boxShadow: `0 0 20px ${offer.featured ? GOLD.glow : section.accentColor}66`
                            }}
                          >
                            <div className="text-center">
                              <div className="text-xl font-black text-black leading-none">{offer.discount}</div>
                              <div className="text-[10px] font-bold text-black">تخفیف</div>
                            </div>
                          </div>
                        </motion.div>

                        {offer.featured && (
                          <Badge 
                            className="w-fit text-xs px-3 py-1 border"
                            style={{
                              backgroundColor: GOLD.primary,
                              color: '#000',
                              borderColor: '#000',
                            }}
                          >
                            <Sparkles className="w-3 h-3 ml-1" />
                            پیشنهاد ویژه
                          </Badge>
                        )}

                        <CardTitle className="text-xl font-black" style={{ color: section.accentColor }}>
                          {offer.title}
                        </CardTitle>
                        <CardDescription className="text-sm text-gray-300">
                          {offer.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="space-y-4 p-5 pt-0">
                        {/* Features List */}
                        <div className="space-y-2">
                          {offer.features.map((feature, fIndex) => (
                            <motion.div
                              key={fIndex}
                              initial={{ opacity: 0, x: -15 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: fIndex * 0.05 }}
                              className="flex items-start gap-2 p-2 rounded-lg transition-all hover:scale-105"
                              style={{
                                backgroundColor: `${section.accentColor}11`,
                                border: `1px solid ${section.accentColor}33`
                              }}
                            >
                              <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: section.accentColor }} />
                              <span className="text-xs text-gray-200">{feature}</span>
                            </motion.div>
                          ))}
                        </div>

                        {/* Pricing Info */}
                        {offer.originalPrice && offer.discountedPrice && (
                          <div 
                            className="p-3 rounded-lg border"
                            style={{
                              backgroundColor: `${section.accentColor}11`,
                              borderColor: section.accentColor
                            }}
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-xs text-gray-400 line-through mb-1">قیمت اصلی: {offer.originalPrice}</p>
                                <p className="text-lg font-black" style={{ color: section.accentColor }}>
                                  بعد از تخفیف: {offer.discountedPrice}
                                </p>
                              </div>
                              {offer.savings && (
                                <div className="text-center">
                                  <div className="text-xs text-gray-400">صرفه‌جویی</div>
                                  <div className="text-lg font-black" style={{ color: GOLD.primary }}>{offer.savings}</div>
                                </div>
                              )}
                            </div>
                          </div>
                        )}

                        {/* CTA Button */}
                        <Button
                          size="lg"
                          className="w-full text-sm py-4 rounded-xl font-bold transition-all hover:scale-105 group"
                          style={{
                            backgroundColor: offer.featured ? GOLD.primary : section.accentColor,
                            color: '#000',
                            boxShadow: `0 0 20px ${offer.featured ? GOLD.glow : section.accentColor}66`
                          }}
                          onClick={() => window.location.href = offer.link}
                        >
                          {offer.cta}
                          <motion.div
                            animate={{ x: [0, 3, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <ArrowLeft className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                          </motion.div>
                        </Button>

                        {/* Discount Code Reminder */}
                        <div className="text-center p-2 rounded-lg" style={{ backgroundColor: `${GOLD.primary}11` }}>
                          <p className="text-xs text-gray-400">
                            کد تخفیف: <code className="text-sm font-mono font-bold px-2 py-1 rounded" style={{ color: GOLD.primary, backgroundColor: '#000' }}>{DISCOUNT_CODE}</code>
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        ))}
      </div>

      {/* FAQ Section */}
      <section className="py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <h2 className="text-2xl md:text-3xl font-black mb-2" style={{ color: GOLD.primary }}>
              سوالات متداول
            </h2>
            <p className="text-sm text-gray-300">
              پاسخ سوالات رایج در مورد تخفیف‌های بلک فرایدی
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-3">
            {[
              {
                q: 'چطور باید کد تخفیف blackfriday را وارد کنم؟',
                a: 'در صفحه پرداخت، قسمت "کد تخفیف" یا "Discount Code" را پیدا کنید و کد blackfriday را وارد کنید. تخفیف به صورت خودکار اعمال می‌شود.'
              },
              {
                q: 'تا کی این تخفیف‌ها فعال هستند؟',
                a: 'تخفیف‌های بلک فرایدی فقط برای مدت محدودی فعال هستند. زمان باقی‌مانده را در بالای صفحه مشاهده می‌کنید. پس از پایان زمان، دیگر امکان استفاده از این تخفیف‌ها وجود ندارد.'
              },
              {
                q: 'آیا بعد از خرید، به‌صورت خودکار به دوره و سرویس دسترسی دارم؟',
                a: 'بله، بلافاصله بعد از تکمیل پرداخت، دسترسی شما فعال می‌شود و می‌توانید از خدمات استفاده کنید.'
              },
              {
                q: 'اگر سوال یا مشکلی داشتم، از کجا پشتیبانی بگیرم؟',
                a: 'تیم پشتیبانی ما ۲۴/۷ آماده پاسخگویی به شماست. می‌توانید از طریق تلگرام یا ایمیل با ما در تماس باشید.'
              }
            ].map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="rounded-xl border px-5 overflow-hidden"
                style={{
                  backgroundColor: 'rgba(10, 10, 10, 0.8)',
                  borderColor: GOLD.dark
                }}
              >
                <AccordionTrigger className="text-sm font-bold hover:no-underline py-3" style={{ color: GOLD.primary }}>
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-xs text-gray-300 pb-3">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-6 p-5 rounded-xl" style={{ backgroundColor: `${GOLD.primary}11`, border: `1px solid ${GOLD.dark}` }}>
            <p className="text-sm text-gray-300 mb-3">
              سوال دیگه‌ای داری؟ به پشتیبانی در تلگرام پیام بده.
            </p>
            <Button
              size="lg"
              className="text-sm px-6 py-3 rounded-lg"
              style={{ backgroundColor: GOLD.primary, color: '#000' }}
              onClick={() => window.location.href = 'https://t.me/rafieiacademy'}
            >
              ارتباط با پشتیبانی
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-10 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center p-8 rounded-2xl border-2 relative overflow-hidden"
          style={{
            backgroundColor: 'rgba(10, 10, 10, 0.9)',
            borderColor: GOLD.primary,
            boxShadow: `0 0 40px ${GOLD.glow}`
          }}
        >
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                `radial-gradient(circle at 20% 50%, ${GOLD.glow} 0%, transparent 50%)`,
                `radial-gradient(circle at 80% 50%, ${GOLD.glow} 0%, transparent 50%)`,
                `radial-gradient(circle at 20% 50%, ${GOLD.glow} 0%, transparent 50%)`,
              ]
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />

          <div className="relative z-10 space-y-5">
            <Award className="w-14 h-14 mx-auto" style={{ color: GOLD.primary }} />
            <h2 className="text-2xl md:text-3xl font-black" style={{ color: GOLD.primary }}>
              آخرین فرصت!
            </h2>
            <p className="text-sm text-gray-300 max-w-2xl mx-auto">
              الان تصمیم بگیر، بعداً از خودت تشکر کن
            </p>
            <Button
              size="lg"
              className="text-base px-10 py-5 rounded-xl font-black shadow-xl hover:scale-105 transition-all"
              style={{
                backgroundColor: GOLD.primary,
                color: '#000',
                boxShadow: `0 0 30px ${GOLD.glow}`
              }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <Zap className="w-5 h-5 ml-2" />
              مشاهده تمام تخفیف‌ها
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default BlackFriday;
