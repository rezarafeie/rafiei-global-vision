import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Gift, Zap, Shield, TrendingUp, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

interface Offer {
  id: string;
  title: string;
  description: string;
  discount: string;
  originalPrice?: string;
  discountedPrice?: string;
  tag?: string;
  cta: string;
  link: string;
  featured?: boolean;
}

const OFFERS: Offer[] = [
  {
    id: 'course-start',
    title: 'دوره شروع',
    description: 'بیش از ۴۰ ساعت آموزش کاربردی برای شروع مسیر درآمد دلاری و بیزینس بین‌المللی',
    discount: '۶۰٪',
    originalPrice: '$10',
    discountedPrice: '$4',
    tag: 'پیشنهاد ویژه',
    cta: 'خرید دوره شروع با ۶۰٪ تخفیف',
    link: 'https://academy.rafiei.co/enroll/?course=boundless',
    featured: true,
  },
  {
    id: 'other-courses',
    title: 'سایر دوره‌های آکادمی',
    description: 'دوره بدون مرز، دراپ‌شیپینگ، فروش فایل و آکادمی آنلاین با ۳۰٪ تخفیف',
    discount: '۳۰٪',
    cta: 'مشاهده همه دوره‌ها با ۳۰٪ تخفیف',
    link: 'https://academy.rafiei.co/courses',
  },
  {
    id: 'vpn',
    title: 'شبکه بدون مرز (VPN)',
    description: 'سرعت بالا، آی‌پی تمیز، لوکیشن‌های متنوع برای کار بین‌المللی',
    discount: '۴۰٪',
    cta: 'خرید اشتراک شبکه بدون مرز با ۴۰٪ تخفیف',
    link: 'https://t.me/getbnbot',
  },
  {
    id: 'exchange',
    title: 'خدمات صرافی رفیعی',
    description: 'نقد کردن درآمد دلاری، پرداخت بین‌المللی، تسویه با ایران با ۵۰٪ تخفیف کارمزد',
    discount: '۵۰٪',
    cta: 'درخواست خدمات صرافی با ۵۰٪ تخفیف',
    link: 'https://exchange.rafiei.co/',
  },
  {
    id: 'company',
    title: 'ثبت شرکت',
    description: 'ثبت شرکت در انگلستان، دبی، کانادا و آمریکا با ۲۰٪ تخفیف',
    discount: '۲۰٪',
    cta: 'درخواست ثبت شرکت با ۲۰٪ تخفیف',
    link: 'https://t.me/m/_D9w2J4BNjA0',
  },
  {
    id: 'account',
    title: 'افتتاح حساب',
    description: 'Wise، Revolut، Stripe و سایر حساب‌های بین‌المللی با ۲۰٪ تخفیف',
    discount: '۲۰٪',
    cta: 'درخواست افتتاح حساب با ۲۰٪ تخفیف',
    link: 'https://t.me/m/_D9w2J4BNjA0',
  },
  {
    id: 'simcard',
    title: 'خرید سیم‌کارت بین‌المللی',
    description: 'سیم‌کارت‌های بین‌المللی برای تایید حساب‌ها و ارتباطات کاری',
    discount: '۲۰٪',
    cta: 'سفارش سیم‌کارت با ۲۰٪ تخفیف',
    link: 'https://t.me/m/_D9w2J4BNjA0',
  },
  {
    id: 'ai-coach',
    title: 'خرید کردیت کوچ هوشمند',
    description: 'کوچ هوشمند رفیعی - دستیار شخصی AI برای مسیر کاری و کسب‌وکار',
    discount: '۶۰٪',
    cta: 'خرید کردیت کوچ هوشمند با ۶۰٪ تخفیف',
    link: 'https://coach.rafiei.co/',
  },
];

const DISCOUNT_CODE = 'blackfriday';
const END_DATE = new Date('2025-12-01T23:59:59'); // Adjust as needed

const BlackFriday = () => {
  const [copied, setCopied] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [showStickyBar, setShowStickyBar] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(DISCOUNT_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToOffers = () => {
    document.getElementById('offers')?.scrollIntoView({ behavior: 'smooth' });
  };

  const featuredOffer = OFFERS.find(o => o.featured);
  const regularOffers = OFFERS.filter(o => !o.featured);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-foreground font-vazir" dir="rtl">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 text-lg px-6 py-2 bg-primary/20 border-primary text-primary hover:bg-primary/30">
              <Zap className="w-5 h-5 ml-2" />
              بلک فرایدی بدون مرز
            </Badge>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              بزرگ‌ترین تخفیف‌های
              <span className="block mt-2 bg-gradient-to-l from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
                سال
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              فقط برای مدت محدود؛ از دوره‌ها تا شبکه بدون مرز و خدمات صرافی، همه با تخفیف‌های وحشتناک!
            </p>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-background/50 backdrop-blur-sm border border-border rounded-2xl p-8 max-w-2xl mx-auto"
          >
            <p className="text-sm text-muted-foreground mb-4">زمان باقی‌مانده تا پایان بلک فرایدی</p>
            <div className="grid grid-cols-4 gap-4">
              {[
                { value: timeLeft.days, label: 'روز' },
                { value: timeLeft.hours, label: 'ساعت' },
                { value: timeLeft.minutes, label: 'دقیقه' },
                { value: timeLeft.seconds, label: 'ثانیه' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {String(item.value).padStart(2, '0')}
                  </div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Discount Code */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-gradient-to-l from-primary/20 to-accent/20 border border-primary/50 rounded-2xl p-6 max-w-md mx-auto"
          >
            <p className="text-sm text-muted-foreground mb-3">کد تخفیف مشترک همه محصولات</p>
            <div className="flex items-center justify-center gap-4">
              <code className="text-3xl font-bold tracking-wider">{DISCOUNT_CODE}</code>
              <Button
                size="icon"
                variant="ghost"
                onClick={copyToClipboard}
                className="hover:bg-primary/20"
              >
                {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
              </Button>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <Button
              size="lg"
              className="text-lg px-8 py-6 w-full sm:w-auto bg-primary hover:bg-primary/90 shadow-lg shadow-primary/50"
              onClick={scrollToOffers}
            >
              دیدن همه تخفیف‌ها
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 w-full sm:w-auto border-primary/50 hover:bg-primary/10"
              asChild
            >
              <a href={featuredOffer?.link} target="_blank" rel="noopener noreferrer">
                خرید دوره شروع با ۶۰٪ تخفیف
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Offer - دوره شروع */}
      {featuredOffer && (
        <section className="py-20 px-4 relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                پیشنهاد ویژه بلک فرایدی
              </h2>
              <p className="text-xl text-center text-muted-foreground mb-12">
                {featuredOffer.title} با {featuredOffer.discount} تخفیف
              </p>

              <Card className="bg-gradient-to-bl from-primary/10 via-background to-accent/10 border-primary/50 overflow-hidden">
                <CardHeader className="text-center pb-4">
                  <Badge className="mx-auto mb-4 text-base px-4 py-1 bg-primary text-primary-foreground">
                    <Gift className="w-4 h-4 ml-2" />
                    {featuredOffer.tag}
                  </Badge>
                  <CardTitle className="text-3xl md:text-4xl">{featuredOffer.title}</CardTitle>
                  <CardDescription className="text-lg mt-4">
                    {featuredOffer.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    {[
                      '+ بیش از ۴۰ ساعت آموزش کاربردی',
                      '+ همراه با تمرین، پشتیبانی و تست شخصیت',
                      '+ مناسب برای شروع مسیر درآمد دلاری و بیزینس بین‌المللی',
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-center gap-2 text-foreground">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-center gap-6 py-6">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-1">قیمت اصلی</p>
                      <p className="text-2xl line-through text-muted-foreground">{featuredOffer.originalPrice}</p>
                    </div>
                    <div className="text-6xl text-primary">←</div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-1">بعد از تخفیف</p>
                      <p className="text-4xl font-bold text-primary">{featuredOffer.discountedPrice}</p>
                    </div>
                  </div>

                  <div className="text-center space-y-4">
                    <Button
                      size="lg"
                      className="text-xl px-12 py-7 w-full md:w-auto bg-primary hover:bg-primary/90 shadow-xl shadow-primary/50"
                      asChild
                    >
                      <a href={featuredOffer.link} target="_blank" rel="noopener noreferrer">
                        همین الان ثبت‌نام کن
                      </a>
                    </Button>
                    <p className="text-sm text-muted-foreground">
                      برای اعمال تخفیف، کد <code className="text-primary font-bold">{DISCOUNT_CODE}</code> را وارد کنید.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* Grid of Offers */}
      <section id="offers" className="py-20 px-4 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">سایر تخفیف‌های ویژه</h2>
            <p className="text-xl text-muted-foreground">
              همه خدمات اکوسیستم رفیعی با تخفیف‌های باورنکردنی
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {regularOffers.map((offer, index) => (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <CardTitle className="text-2xl">{offer.title}</CardTitle>
                      <Badge className="text-lg px-3 py-1 bg-primary/20 border-primary text-primary shrink-0">
                        {offer.discount}
                      </Badge>
                    </div>
                    <CardDescription className="text-base leading-relaxed mt-3">
                      {offer.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      کد تخفیف: <code className="text-primary font-bold">{DISCOUNT_CODE}</code>
                    </p>
                    <Button
                      className="w-full bg-primary hover:bg-primary/90"
                      asChild
                    >
                      <a href={offer.link} target="_blank" rel="noopener noreferrer">
                        {offer.cta}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Different Section */}
      <section className="py-20 px-4 bg-background/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              چرا این بلک فرایدی متفاوت است؟
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              ما فقط تخفیف نمی‌دهیم؛ داریم به شما کمک می‌کنیم از ایران، بدون مرز کار کنید و درآمد دلاری بسازید.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'دسترسی مادام‌العمر به دوره‌ها',
                description: 'یک‌بار خرید کنید، برای همیشه یاد بگیرید',
              },
              {
                icon: Zap,
                title: 'پشتیبانی واقعی تیم رفیعی',
                description: 'تیم ما در کنار شماست تا موفق شوید',
              },
              {
                icon: TrendingUp,
                title: 'تجربه اثبات‌شده صدها دانشجو',
                description: 'هزاران نفر از این مسیر موفق شده‌اند',
              },
              {
                icon: Gift,
                title: 'ساخت درآمد دلاری و بیزنس',
                description: 'مسیر واقعی برای کار بین‌المللی',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center space-y-4"
              >
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">سوالات متداول</h2>
            <p className="text-xl text-muted-foreground">پاسخ سوالات رایج درباره بلک فرایدی</p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: 'چطور باید کد تخفیف blackfriday را وارد کنم؟',
                answer: 'در صفحه پرداخت، قسمت کد تخفیف را پیدا کنید و کد blackfriday را وارد کنید. تخفیف به‌صورت خودکار اعمال می‌شود.',
              },
              {
                question: 'تا کی این تخفیف‌ها فعال هستند؟',
                answer: 'تخفیف‌های بلک فرایدی فقط برای مدت محدود فعال هستند. زمان باقی‌مانده را در بالای صفحه مشاهده می‌کنید.',
              },
              {
                question: 'آیا بعد از خرید، به‌صورت خودکار به دوره و سرویس دسترسی دارم؟',
                answer: 'بله، بلافاصله بعد از خرید، دسترسی شما فعال می‌شود و می‌توانید از خدمات استفاده کنید.',
              },
              {
                question: 'اگر سوال یا مشکلی داشتم، از کجا پشتیبانی بگیرم؟',
                answer: 'تیم پشتیبانی ما آماده کمک به شماست. می‌توانید از طریق تلگرام با ما در ارتباط باشید.',
              },
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                <AccordionTrigger className="text-right text-lg hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground mb-4">سوال هنوز داری؟ به پشتیبانی در تلگرام پیام بده.</p>
            <Button variant="outline" className="border-primary/50 hover:bg-primary/10" asChild>
              <a href="https://t.me/rafieiacademy" target="_blank" rel="noopener noreferrer">
                ارتباط با پشتیبانی
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-b from-background/30 to-background">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              آخرین فرصت برای استفاده از تخفیف‌های بلک فرایدی
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              بعد از این، فرصت دیگری برای این تخفیف‌ها نخواهید داشت
            </p>
            <Button
              size="lg"
              className="text-xl px-12 py-7 bg-primary hover:bg-primary/90 shadow-xl shadow-primary/50"
              onClick={scrollToOffers}
            >
              الان تصمیم بگیر، بعداً از خودت تشکر کن
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Sticky Bar */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: showStickyBar ? 0 : 100, opacity: showStickyBar ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t border-primary/50 shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-center sm:text-right">
            <p className="font-bold">بلک فرایدی بدون مرز</p>
            <span className="text-muted-foreground">|</span>
            <p className="text-sm">
              کد تخفیف: <code className="text-primary font-bold">{DISCOUNT_CODE}</code>
            </p>
            <span className="text-muted-foreground hidden sm:inline">|</span>
            <p className="text-sm text-muted-foreground hidden sm:block">
              {timeLeft.hours}:{String(timeLeft.minutes).padStart(2, '0')} باقی‌مانده
            </p>
          </div>
          <Button
            className="bg-primary hover:bg-primary/90 w-full sm:w-auto"
            onClick={scrollToOffers}
          >
            مشاهده تخفیف‌ها
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default BlackFriday;
