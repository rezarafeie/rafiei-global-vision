import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Users, Globe, Star, Mail, BookOpen, Brain, Forward } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Index = () => {
  const { t, language } = useLanguage();
  const isRtl = language === 'fa' || language === 'ar';

  const services = [
    {
      icon: <Star className="h-6 w-6" />,
      title: language === 'en' || language === 'tr' ? 'AI Assistant' : 
             language === 'fa' ? 'دستیار هوشمند' : 'المساعد الذكي',
      description: language === 'en' || language === 'tr' ? 'Smart Telegram-based AI coach for productivity' : 
                   language === 'fa' ? 'مربی هوشمند تلگرامی برای بهره‌وری' : 
                   'مدرب ذكي على تلغرام للإنتاجية',
      url: 'https://ai.rafiei.co'
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: language === 'en' || language === 'tr' ? 'Global AI Coach' : 
             language === 'fa' ? 'مربی جهانی هوش مصنوعی' : 'المدرب العالمي للذكاء الاصطناعي',
      description: language === 'en' || language === 'tr' ? 'AI interactive learning system for global education' : 
                   language === 'fa' ? 'سیستم یادگیری تعاملی هوش مصنوعی برای آموزش جهانی' : 
                   'نظام التعلم التفاعلي بالذكاء الاصطناعي للتعليم العالمي',
      url: 'https://globalaicoach.com'
    },
    {
      icon: <Forward className="h-6 w-6" />,
      title: language === 'en' || language === 'tr' ? 'BetterMX' : 
             language === 'fa' ? 'بترمکس' : 'بيترمكس',
      description: language === 'en' || language === 'tr' ? 'Professional email forwarding service' : 
                   language === 'fa' ? 'سرویس حرفه‌ای فورواردینگ ایمیل' : 
                   'خدمة إعادة توجيه البريد الإلكتروني المهنية',
      url: 'https://bettermx.com'
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: language === 'en' || language === 'tr' ? 'Rafiei Academy' : 
             language === 'fa' ? 'آکادمی رفیعی' : 'أكاديمية رفيعي',
      description: language === 'en' || language === 'tr' ? 'Online courses for borderless income' : 
                   language === 'fa' ? 'دوره‌های آنلاین برای کسب درآمد بدون مرز' : 
                   'دورات عبر الإنترنت للدخل بلا حدود',
      url: 'https://academy.rafiei.co'
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: language === 'en' || language === 'tr' ? 'Rafiei Exchange' : 
             language === 'fa' ? 'صرافی رفیعی' : 'صرافة رفيعي',
      description: language === 'en' || language === 'tr' ? 'Advanced cryptocurrency trading platform' : 
                   language === 'fa' ? 'پلتفرم پیشرفته معاملات ارز دیجیتال' : 
                   'منصة تداول العملات المشفرة المتقدمة',
      url: 'https://exchange.rafiei.co'
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: language === 'en' || language === 'tr' ? 'Synapse' : 
             language === 'fa' ? 'سیناپس' : 'سينابس',
      description: language === 'en' || language === 'tr' ? 'Create your own AI assistant in minutes' : 
                   language === 'fa' ? 'دستیار هوشمند خود را در چند دقیقه بسازید' : 
                   'إنشاء المساعد الذكي الخاص بك في دقائق',
      url: 'https://synapse.rafiei.co'
    }
  ];

  return (
    <div className={isRtl ? 'rtl text-right' : 'ltr text-left'}>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 text-foreground ${isRtl ? 'font-vazir' : 'font-display'}`}>
              {t('home.hero.title')}
            </h1>
            
            <p className={`text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto ${isRtl ? 'font-vazir' : ''}`}>
              {t('home.hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="text-base px-8">
                <Link to="/about" className="flex items-center gap-2">
                  <span>{t('home.hero.cta')}</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base px-8">
                <Link to="/contact">
                  {language === 'en' || language === 'tr' ? 'Get in Touch' : 
                   language === 'fa' ? 'تماس با ما' : 'تواصل معنا'}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-3xl md:text-5xl font-bold mb-4 text-foreground ${isRtl ? 'font-vazir' : 'font-display'}`}>
                {language === 'en' || language === 'tr' ? 'Trusted by Thousands' : 
                 language === 'fa' ? 'مورد اعتماد هزاران نفر' : 'موثوق من قبل الآلاف'}
              </h2>
              <p className={`text-lg text-muted-foreground max-w-2xl mx-auto ${isRtl ? 'font-vazir' : ''}`}>
                {t('home.intro.text')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-10 text-center border-border/50 bg-card hover:border-primary/30 transition-all">
                <div className="w-14 h-14 mx-auto mb-6 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <div className="text-4xl font-bold mb-3 text-foreground">300K+</div>
                <p className={`text-muted-foreground ${isRtl ? 'font-vazir' : ''}`}>
                  {language === 'en' || language === 'tr' ? 'Monthly Followers' : 
                   language === 'fa' ? 'دنبال‌کنندگان ماهانه' : 'متابعون شهريًا'}
                </p>
              </Card>
              
              <Card className="p-10 text-center border-border/50 bg-card hover:border-primary/30 transition-all">
                <div className="w-14 h-14 mx-auto mb-6 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Globe className="h-7 w-7 text-primary" />
                </div>
                <div className="text-4xl font-bold mb-3 text-foreground">30K+</div>
                <p className={`text-muted-foreground ${isRtl ? 'font-vazir' : ''}`}>
                  {language === 'en' || language === 'tr' ? 'Monthly Users' : 
                   language === 'fa' ? 'کاربران ماهانه' : 'مستخدمون شهريًا'}
                </p>
              </Card>
              
              <Card className="p-10 text-center border-border/50 bg-card hover:border-primary/30 transition-all">
                <div className="w-14 h-14 mx-auto mb-6 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Star className="h-7 w-7 text-primary" />
                </div>
                <div className="text-4xl font-bold mb-3 text-foreground">9+</div>
                <p className={`text-muted-foreground ${isRtl ? 'font-vazir' : ''}`}>
                  {language === 'en' || language === 'tr' ? 'Digital Products' : 
                   language === 'fa' ? 'محصولات دیجیتال' : 'منتجات رقمية'}
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-3xl md:text-5xl font-bold mb-4 text-foreground ${isRtl ? 'font-vazir' : 'font-display'}`}>
                {t('home.products.quick_access')}
              </h2>
              <p className={`text-lg text-muted-foreground max-w-2xl mx-auto ${isRtl ? 'font-vazir' : ''}`}>
                {language === 'en' || language === 'tr' ? 'Explore our ecosystem of digital solutions' : 
                 language === 'fa' ? 'اکوسیستم راه‌حل‌های دیجیتال ما را کشف کنید' : 
                 'استكشف نظامنا البيئي للحلول الرقمية'}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card 
                  key={index}
                  className="p-6 border-border/50 bg-card hover:border-primary/30 transition-all group"
                >
                  <div className="w-12 h-12 mb-4 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className={`text-lg font-bold mb-2 text-foreground ${isRtl ? 'font-vazir' : ''}`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm text-muted-foreground mb-4 ${isRtl ? 'font-vazir' : ''}`}>
                    {service.description}
                  </p>
                  <Button asChild variant="ghost" size="sm" className="w-full justify-start p-0 h-auto text-primary hover:text-primary/80">
                    <a href={service.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <span className="text-sm">
                        {language === 'en' || language === 'tr' ? 'Learn More' : 
                         language === 'fa' ? 'بیشتر بدانید' : 'اعرف المزيد'}
                      </span>
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className={`text-3xl md:text-5xl font-bold mb-6 text-foreground ${isRtl ? 'font-vazir' : 'font-display'}`}>
              {language === 'en' || language === 'tr' ? 'Ready to Build Your Future?' : 
               language === 'fa' ? 'آماده ساخت آینده‌تان هستید؟' : 'هل أنت مستعد لبناء مستقبلك؟'}
            </h2>
            <p className={`text-lg text-muted-foreground mb-10 max-w-xl mx-auto ${isRtl ? 'font-vazir' : ''}`}>
              {t('about.vision.text')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-base px-8">
                <Link to="/about" className="flex items-center gap-2">
                  <span>
                    {language === 'en' || language === 'tr' ? 'Learn About Our Mission' : 
                     language === 'fa' ? 'درباره ماموریت ما' : 'تعرف على مهمتنا'}
                  </span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base px-8">
                <Link to="/contact">
                  {language === 'en' || language === 'tr' ? 'Start Your Journey' : 
                   language === 'fa' ? 'سفر خود را شروع کنید' : 'ابدأ رحلتك'}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;