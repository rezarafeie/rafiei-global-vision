import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, GraduationCap, Shield, DollarSign, Bot, Building2, CreditCard, Smartphone, Sparkles, Clock, Gift, Star, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const DISCOUNT_CODE = 'blackfriday';
const END_DATE = new Date('2025-12-01T23:59:59');

interface BusinessSection {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  gradient: string;
  accentColor: string;
  offers: {
    title: string;
    description: string;
    features: string[];
    discount: string;
    originalPrice?: string;
    discountedPrice?: string;
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
    icon: <GraduationCap className="w-12 h-12" />,
    gradient: 'from-academy via-academy-secondary to-academy',
    accentColor: 'academy',
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
    icon: <Shield className="w-12 h-12" />,
    gradient: 'from-vpn via-vpn-secondary to-vpn',
    accentColor: 'vpn',
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
    icon: <DollarSign className="w-12 h-12" />,
    gradient: 'from-exchange via-exchange-secondary to-exchange',
    accentColor: 'exchange',
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
    icon: <Bot className="w-12 h-12" />,
    gradient: 'from-coach via-coach-secondary to-coach',
    accentColor: 'coach',
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
    icon: <Building2 className="w-12 h-12" />,
    gradient: 'from-services via-services-secondary to-services',
    accentColor: 'services',
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
    <div className="min-h-screen bg-black text-foreground font-vazir" dir="rtl">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black-light to-black" />
          <motion.div
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl"
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
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl"
            animate={{
              scale: [1.3, 1, 1.3],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <Badge className="mb-6 text-xl px-8 py-3 bg-gold/20 border-gold text-gold hover:bg-gold/30">
              <Sparkles className="w-6 h-6 ml-2" />
              بلک فرایدی بدون مرز ۲۰۲۵
            </Badge>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-tight">
              <span className="block text-foreground">بزرگ‌ترین</span>
              <span className="block mt-4 bg-gradient-to-l from-gold via-gold-light to-gold bg-clip-text text-transparent">
                تخفیف‌های سال
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              از آموزش تا ابزار، از صرافی تا هوش مصنوعی
              <br />
              <span className="text-gold font-bold">همه چیز با تخفیف‌های باورنکردنی!</span>
            </p>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-card/80 backdrop-blur-xl border-2 border-gold/30 rounded-3xl p-10 max-w-3xl mx-auto shadow-2xl shadow-gold/20"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Clock className="w-8 h-8 text-gold" />
              <p className="text-xl text-muted-foreground">زمان باقی‌مانده تا پایان بلک فرایدی</p>
            </div>
            <div className="grid grid-cols-4 gap-6">
              {[
                { value: timeLeft.days, label: 'روز' },
                { value: timeLeft.hours, label: 'ساعت' },
                { value: timeLeft.minutes, label: 'دقیقه' },
                { value: timeLeft.seconds, label: 'ثانیه' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-gold mb-3">
                    {String(item.value).padStart(2, '0')}
                  </div>
                  <div className="text-lg text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Discount Code */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-gradient-to-l from-gold/20 via-gold-dark/20 to-gold/20 border-2 border-gold rounded-3xl p-8 max-w-2xl mx-auto shadow-2xl shadow-gold/30"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Gift className="w-6 h-6 text-gold" />
              <p className="text-lg text-muted-foreground">کد تخفیف مشترک همه محصولات</p>
            </div>
            <div className="flex items-center justify-center gap-6">
              <code className="text-4xl md:text-5xl font-bold tracking-wider text-gold">
                {DISCOUNT_CODE}
              </code>
              <Button
                size="icon"
                variant="outline"
                onClick={copyToClipboard}
                className="h-14 w-14 border-gold text-gold hover:bg-gold hover:text-black"
              >
                {copied ? <Check className="w-6 h-6" /> : <Copy className="w-6 h-6" />}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Sections */}
      {BUSINESS_SECTIONS.map((business, sectionIndex) => (
        <section
          key={business.id}
          id={business.id}
          className="py-24 px-4 relative overflow-hidden"
          style={{
            background: sectionIndex % 2 === 0 
              ? 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.95))' 
              : 'linear-gradient(to bottom, rgba(0,0,0,0.95), rgba(0,0,0,1))'
          }}
        >
          {/* Section Background Gradient */}
          <div className="absolute inset-0 opacity-5">
            <div className={`absolute inset-0 bg-gradient-to-br ${business.gradient}`} />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className={`text-${business.accentColor}`}>
                  {business.icon}
                </div>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold mb-4 text-foreground">
                {business.title}
              </h2>
              <p className="text-2xl text-muted-foreground mb-8">
                {business.subtitle}
              </p>
              <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent" />
            </motion.div>

            {/* Offers Grid */}
            <div className="grid lg:grid-cols-2 gap-8">
              {business.offers.map((offer, offerIndex) => (
                <motion.div
                  key={offerIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: offerIndex * 0.1 }}
                  className={offer.featured ? 'lg:col-span-2' : ''}
                >
                  <Card 
                    className={`h-full bg-card/50 backdrop-blur-xl border-2 hover:scale-[1.02] transition-all duration-500 ${
                      offer.featured 
                        ? 'border-gold shadow-2xl shadow-gold/30' 
                        : `border-${business.accentColor}/30 hover:border-${business.accentColor}`
                    }`}
                  >
                    <CardHeader className="pb-6">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex-1">
                          {offer.featured && (
                            <Badge className="mb-4 text-base px-4 py-2 bg-gold text-black">
                              <Star className="w-4 h-4 ml-2" />
                              پیشنهاد ویژه
                            </Badge>
                          )}
                          <CardTitle className="text-3xl md:text-4xl mb-3">
                            {offer.title}
                          </CardTitle>
                          <CardDescription className="text-lg leading-relaxed">
                            {offer.description}
                          </CardDescription>
                        </div>
                        <Badge 
                          className={`text-2xl px-6 py-3 shrink-0 bg-${business.accentColor}/20 border-${business.accentColor} text-${business.accentColor}`}
                        >
                          {offer.discount}
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-8">
                      {/* Features List */}
                      <div className="grid md:grid-cols-2 gap-4">
                        {offer.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <Check className={`w-5 h-5 text-${business.accentColor} flex-shrink-0 mt-1`} />
                            <span className="text-foreground leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Pricing */}
                      {offer.originalPrice && offer.discountedPrice && (
                        <div className="flex items-center justify-center gap-8 py-6 border-y border-border">
                          <div className="text-center">
                            <p className="text-sm text-muted-foreground mb-2">قیمت اصلی</p>
                            <p className="text-3xl line-through text-muted-foreground">
                              {offer.originalPrice}
                            </p>
                          </div>
                          <ArrowLeft className={`text-${business.accentColor} w-8 h-8`} />
                          <div className="text-center">
                            <p className="text-sm text-muted-foreground mb-2">بعد از تخفیف</p>
                            <p className={`text-5xl font-bold text-${business.accentColor}`}>
                              {offer.discountedPrice}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* CTA */}
                      <div className="text-center space-y-4">
                        <Button
                          size="lg"
                          className={`text-xl px-10 py-7 w-full shadow-lg bg-gradient-to-r ${business.gradient} text-black font-bold hover:scale-105 transition-transform`}
                          asChild
                        >
                          <a href={offer.link} target="_blank" rel="noopener noreferrer">
                            {offer.cta}
                          </a>
                        </Button>
                        <p className="text-sm text-muted-foreground">
                          کد تخفیف: <code className="text-gold font-bold text-base">{DISCOUNT_CODE}</code>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Why Different Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-black via-card/50 to-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
              چرا این بلک فرایدی متفاوت است؟
            </h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
              ما فقط تخفیف نمی‌دهیم، داریم به شما کمک می‌کنیم بدون مرز کار کنید
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <GraduationCap className="w-10 h-10" />,
                title: 'دسترسی مادام‌العمر',
                description: 'تمام دوره‌ها و آموزش‌ها برای همیشه در اختیار شما'
              },
              {
                icon: <Shield className="w-10 h-10" />,
                title: 'پشتیبانی واقعی',
                description: 'تیم حرفه‌ای رفیعی همیشه کنار شماست'
              },
              {
                icon: <Star className="w-10 h-10" />,
                title: 'تجربه اثبات‌شده',
                description: 'صدها نفر با کمک ما موفق شده‌اند'
              },
              {
                icon: <DollarSign className="w-10 h-10" />,
                title: 'درآمد دلاری',
                description: 'ابزارها و آموزش برای ساخت بیزینس بین‌المللی'
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-card/50 backdrop-blur-xl border border-gold/20 hover:border-gold/50 transition-all p-6 text-center">
                  <div className="text-gold mb-4 flex justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
              سوالات متداول
            </h2>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: 'چطور باید کد تخفیف blackfriday را وارد کنم؟',
                a: 'هنگام خرید، در قسمت کد تخفیف عبارت blackfriday را وارد کنید. تخفیف به‌صورت خودکار اعمال می‌شود.'
              },
              {
                q: 'تا کی این تخفیف‌ها فعال هستند؟',
                a: 'تخفیف‌های بلک فرایدی فقط تا پایان تایمر در بالای صفحه فعال است. پس از آن، قیمت‌ها به حالت عادی برمی‌گردند.'
              },
              {
                q: 'آیا بعد از خرید، به‌صورت خودکار به دوره و سرویس دسترسی دارم؟',
                a: 'بله، بلافاصله بعد از تکمیل پرداخت، دسترسی شما فعال می‌شود و می‌توانید از خدمات استفاده کنید.'
              },
              {
                q: 'اگر سوال یا مشکلی داشتم، از کجا پشتیبانی بگیرم؟',
                a: 'می‌توانید از طریق تلگرام @rafieiacademy با تیم پشتیبانی ما در ارتباط باشید. ما ۷ روز هفته آماده پاسخگویی هستیم.'
              },
              {
                q: 'آیا می‌توانم چند تخفیف را با هم استفاده کنم؟',
                a: 'خیر، فقط یک کد تخفیف برای هر خرید قابل استفاده است. کد blackfriday بیشترین تخفیف را در طول سال به شما می‌دهد.'
              },
            ].map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gold/20 rounded-xl px-6 bg-card/30">
                <AccordionTrigger className="text-xl text-right hover:text-gold transition-colors py-6">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-lg text-muted-foreground leading-relaxed pb-6">
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
            className="text-center mt-12"
          >
            <p className="text-xl text-muted-foreground mb-6">
              سوال دیگری دارید؟ با پشتیبانی ما در تلگرام صحبت کنید
            </p>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-gold text-gold hover:bg-gold hover:text-black"
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
      <section className="py-24 px-4 bg-gradient-to-b from-black via-gold/5 to-black">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
              آخرین فرصت برای استفاده از تخفیف‌ها
            </h2>
            <p className="text-2xl text-muted-foreground mb-12">
              الان تصمیم بگیر، بعداً از خودت تشکر کن
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="text-2xl px-12 py-8 bg-gradient-to-r from-gold via-gold-light to-gold text-black font-bold hover:scale-105 transition-transform shadow-2xl shadow-gold/50"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                مشاهده همه تخفیف‌ها
              </Button>
            </div>

            <div className="mt-12 p-8 bg-card/50 backdrop-blur-xl border border-gold/30 rounded-3xl">
              <p className="text-lg text-muted-foreground mb-4">
                یادت نره کد تخفیف رو وارد کنی:
              </p>
              <code className="text-4xl font-bold text-gold">
                {DISCOUNT_CODE}
              </code>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlackFriday;
