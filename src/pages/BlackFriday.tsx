import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, GraduationCap, Shield, DollarSign, Bot, Building2, Clock, Gift, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AiQuizGame from '@/components/AiQuizGame';
import TreasureHuntGame from '@/components/TreasureHuntGame';

import QuickAccessCards from '@/components/QuickAccessCards';

const DISCOUNT_CODE = 'blackfriday';
const END_DATE = new Date('2025-12-01T23:59:59');

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
  offers: {
    title: string;
    description: string;
    features: string[];
    discount: string;
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
    icon: <GraduationCap className="w-6 h-6" />,
    offers: [
      {
        title: 'دوره شروع',
        description: 'جامع‌ترین دوره برای شروع مسیر درآمد دلاری و بیزینس بین‌المللی',
        features: [
          'بیش از ۴۰ ساعت آموزش ویدیویی',
          'تمرین‌های عملی و پروژه محور',
          'تست شخصیت و مسیریابی شغلی',
          'پشتیبانی اختصاصی تیم رفیعی',
          'دسترسی مادام‌العمر به محتوا'
        ],
        discount: '۶۰٪',
        cta: 'خرید با ۶۰٪ تخفیف',
        link: 'https://academy.rafiei.co/enroll/?course=boundless',
        featured: true,
      },
      {
        title: 'سایر دوره‌ها',
        description: 'مجموعه کامل دوره‌های تخصصی برای هر مرحله از مسیر کسب‌وکار',
        features: ['دوره بدون مرز', 'دوره دراپ‌شیپینگ', 'دوره فروش فایل', 'دوره آکادمی آنلاین'],
        discount: '۳۰٪',
        cta: 'مشاهده همه دوره‌ها',
        link: 'https://academy.rafiei.co/courses',
      },
    ],
  },
  {
    id: 'vpn',
    title: 'شبکه بدون مرز',
    subtitle: 'VPN قدرتمند برای کار بین‌المللی',
    icon: <Shield className="w-6 h-6" />,
    offers: [
      {
        title: 'اشتراک VPN',
        description: 'سریع‌ترین و پایدارترین VPN برای کار حرفه‌ای',
        features: ['سرعت بالا', 'آی‌پی تمیز', 'لوکیشن‌های متنوع', 'پشتیبانی ۲۴/۷'],
        discount: '۴۰٪',
        cta: 'خرید اشتراک',
        link: 'https://t.me/getbnbot',
      },
    ],
  },
  {
    id: 'exchange',
    title: 'صرافی رفیعی',
    subtitle: 'تسویه حساب و پرداخت بین‌المللی',
    icon: <DollarSign className="w-6 h-6" />,
    offers: [
      {
        title: 'خدمات صرافی',
        description: 'نقد کردن درآمد دلاری و پرداخت‌های بین‌المللی',
        features: ['نقد کردن Stripe، PayPal، Wise', 'تسویه با ایران', 'نرخ رقابتی', 'حداقل کارمزد'],
        discount: '۵۰٪',
        cta: 'درخواست خدمات',
        link: 'https://exchange.rafiei.co/',
      },
    ],
  },
  {
    id: 'coach',
    title: 'کوچ هوشمند',
    subtitle: 'دستیار هوش مصنوعی شخصی',
    icon: <Bot className="w-6 h-6" />,
    offers: [
      {
        title: 'کردیت کوچ هوشمند',
        description: 'دستیار AI شخصی برای مسیر کاری و کسب‌وکار',
        features: ['مشاوره ۲۴/۷', 'برنامه‌ریزی کسب‌وکار', 'حل مشکلات', 'حفظ حریم خصوصی'],
        discount: '۶۰٪',
        cta: 'خرید کردیت',
        link: 'https://coach.rafiei.co/',
      },
    ],
  },
  {
    id: 'services',
    title: 'خدمات تخصصی',
    subtitle: 'ثبت شرکت، حساب بانکی و سیم‌کارت',
    icon: <Building2 className="w-6 h-6" />,
    offers: [
      {
        title: 'ثبت شرکت',
        description: 'ثبت شرکت در بهترین کشورها',
        features: ['انگلستان، دبی، کانادا', 'مشاوره رایگان', 'پشتیبانی قانونی'],
        discount: '۲۰٪',
        cta: 'درخواست ثبت',
        link: 'https://t.me/m/_D9w2J4BNjA0',
      },
      {
        title: 'حساب بانکی',
        description: 'افتتاح حساب در پلتفرم‌های بین‌المللی',
        features: ['Wise، Revolut، Stripe', 'راهنمایی کامل', 'رفع مشکلات'],
        discount: '۲۰٪',
        cta: 'درخواست افتتاح',
        link: 'https://t.me/m/_D9w2J4BNjA0',
      },
      {
        title: 'سیم‌کارت بین‌المللی',
        description: 'سیم‌کارت اختصاصی برای تایید حساب‌ها',
        features: ['شماره‌های آمریکا، انگلیس', 'دریافت SMS', 'ارسال سریع'],
        discount: '۲۰٪',
        cta: 'سفارش سیم‌کارت',
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
    <div className="min-h-screen bg-black text-white overflow-x-hidden font-vazir" dir="rtl" style={{ backgroundColor: '#000000' }}>
      {/* Subtle Gold Glowing Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute top-20 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ background: GOLD.primary, opacity: 0.02 }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.015, 0.03, 0.015],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl"
          style={{ background: GOLD.light, opacity: 0.02 }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.01, 0.025, 0.01],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Hero Section - Focused on Boundless Course */}
      <section id="hero" className="relative py-24 px-4 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <Badge 
            className="text-sm px-4 py-2 border"
            style={{ 
              backgroundColor: 'rgba(255, 215, 0, 0.1)',
              borderColor: GOLD.primary,
              color: GOLD.primary,
            }}
          >
            بلک فرایدی بدون مرز
          </Badge>
          
          {/* Main Headline - Focus on Boundless */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-black" style={{ color: GOLD.primary }}>
              دوره شروع
            </h1>
            <p className="text-xl md:text-2xl text-white">
              با ۶۰٪ تخفیف ویژه بلک فرایدی
            </p>
            <p className="text-base text-gray-400 max-w-2xl mx-auto">
              جامع‌ترین دوره برای شروع مسیر درآمد دلاری از ایران
            </p>
          </div>

          {/* Countdown Timer - Compact */}
          <div className="rounded-xl p-4 max-w-lg mx-auto border" style={{ backgroundColor: 'rgba(10, 10, 10, 0.5)', borderColor: GOLD.dark }}>
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock className="w-4 h-4" style={{ color: GOLD.primary }} />
              <p className="text-sm text-gray-400">زمان باقی‌مانده</p>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[
                { value: timeLeft.days, label: 'روز' },
                { value: timeLeft.hours, label: 'ساعت' },
                { value: timeLeft.minutes, label: 'دقیقه' },
                { value: timeLeft.seconds, label: 'ثانیه' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-black tabular-nums" style={{ color: GOLD.primary }}>
                    {String(item.value).padStart(2, '0')}
                  </div>
                  <div className="text-xs text-gray-500">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Discount Code - Minimal */}
          <div className="rounded-lg p-3 max-w-md mx-auto border" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', borderColor: GOLD.dark }}>
            <p className="text-xs text-gray-400 mb-2">کد تخفیف:</p>
            <div 
              className="flex items-center justify-center gap-2 p-2 rounded cursor-pointer"
              style={{ backgroundColor: 'rgba(255, 215, 0, 0.1)' }}
              onClick={copyToClipboard}
            >
              <code className="text-xl font-mono font-bold" style={{ color: GOLD.primary }}>{DISCOUNT_CODE}</code>
              <button className="p-1 rounded" style={{ backgroundColor: GOLD.primary }}>
                {copied ? <Check className="w-4 h-4 text-black" /> : <Copy className="w-4 h-4 text-black" />}
              </button>
            </div>
          </div>

          {/* Primary CTA */}
          <Button
            size="lg"
            className="text-lg px-8 py-6 rounded-xl font-bold"
            style={{
              backgroundColor: GOLD.primary,
              color: '#000',
            }}
            onClick={() => window.location.href = 'https://academy.rafiei.co/enroll/?course=boundless'}
          >
            شروع یادگیری با ۶۰٪ تخفیف
            <ArrowRight className="w-5 h-5 mr-2" />
          </Button>

          {/* Secondary link */}
          <button
            className="text-sm underline"
            style={{ color: GOLD.primary }}
            onClick={() => document.getElementById('academy')?.scrollIntoView({ behavior: 'smooth' })}
          >
            مشاهده همه محصولات و تخفیف‌ها
          </button>
        </div>
      </section>

      {/* Quick Access Cards */}
      <QuickAccessCards />

      {/* Games Section - Compact */}
      <div className="py-12 px-4 space-y-12">
        {/* AI Quiz Game */}
        <section id="ai-quiz" className="max-w-3xl mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-xl font-bold mb-2" style={{ color: '#A78BFA' }}>
              🧠 کوییز هوش مصنوعی
            </h2>
            <p className="text-sm text-gray-400">
              بهترین محصول رو برای خودت پیدا کن
            </p>
          </div>
          <AiQuizGame />
        </section>

        {/* Treasure Hunt Game */}
        <section id="treasure-hunt" className="max-w-3xl mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-xl font-bold mb-2" style={{ color: GOLD.primary }}>
              🎁 شکار گنج
            </h2>
            <p className="text-sm text-gray-400">
              گنج‌های مخفی رو پیدا کن
            </p>
          </div>
          <TreasureHuntGame />
        </section>
      </div>

      {/* Products Section - Minimal & Clean */}
      <div id="offers" className="py-16 px-4 space-y-16">
        {BUSINESS_SECTIONS.map((section) => (
          <section key={section.id} id={section.id} className="max-w-5xl mx-auto">
            {/* Section Header - Minimal */}
            <div className="flex items-center gap-3 mb-6 pb-3 border-b" style={{ borderColor: 'rgba(255, 215, 0, 0.2)' }}>
              <div className="p-2 rounded-lg" style={{ backgroundColor: 'rgba(255, 215, 0, 0.1)', color: GOLD.primary }}>
                {section.icon}
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">{section.title}</h2>
                <p className="text-xs text-gray-500">{section.subtitle}</p>
              </div>
            </div>

            {/* Offers - Clean Cards */}
            <div className="grid gap-4 md:grid-cols-2">
              {section.offers.map((offer, index) => (
                <Card 
                  key={index}
                  className={`border ${offer.featured ? 'border-2' : ''}`}
                  style={{
                    backgroundColor: 'rgba(10, 10, 10, 0.5)',
                    borderColor: offer.featured ? GOLD.primary : 'rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <CardContent className="p-5">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-white mb-1">{offer.title}</h3>
                        <p className="text-xs text-gray-400">{offer.description}</p>
                      </div>
                      <Badge style={{ backgroundColor: GOLD.primary, color: '#000' }} className="font-bold">
                        {offer.discount}
                      </Badge>
                    </div>
                    
                    {/* Features - Compact */}
                    <ul className="space-y-1 mb-4 text-xs text-gray-300">
                      {offer.features.slice(0, 4).map((feature, i) => (
                        <li key={i} className="flex items-start gap-1">
                          <span style={{ color: GOLD.primary }}>✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Button
                      className="w-full text-sm"
                      style={{
                        backgroundColor: offer.featured ? GOLD.primary : 'transparent',
                        color: offer.featured ? '#000' : GOLD.primary,
                        borderColor: GOLD.primary,
                        borderWidth: offer.featured ? 0 : 1,
                      }}
                      variant={offer.featured ? 'default' : 'outline'}
                      onClick={() => window.location.href = offer.link}
                    >
                      {offer.cta}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Footer CTA */}
      <section className="py-16 px-4 text-center border-t" style={{ borderColor: 'rgba(255, 215, 0, 0.2)' }}>
        <h2 className="text-2xl font-bold mb-4" style={{ color: GOLD.primary }}>
          آماده شروعی؟
        </h2>
        <p className="text-gray-400 mb-6">
          با دوره شروع، مسیر درآمد دلاری رو شروع کن
        </p>
        <Button
          size="lg"
          className="text-lg px-8 py-6 rounded-xl font-bold"
          style={{
            backgroundColor: GOLD.primary,
            color: '#000',
          }}
          onClick={() => window.location.href = 'https://academy.rafiei.co/enroll/?course=boundless'}
        >
          خرید دوره شروع با ۶۰٪ تخفیف
        </Button>
      </section>
    </div>
  );
};

export default BlackFriday;
