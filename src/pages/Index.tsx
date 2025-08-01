import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Sparkles, Users, Globe, Zap, ArrowRight, Star } from 'lucide-react';

const Index = () => {
  const { t, language } = useLanguage();
  const isRtl = language === 'fa' || language === 'ar';

  return (
    <div className={isRtl ? 'rtl text-right' : 'ltr text-left'}>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="floating-elements"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-6 flex justify-center">
              <div className="glow-card-intense p-4 inline-flex items-center space-x-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <span className={`text-sm font-medium text-foreground ${isRtl ? 'font-vazir' : ''}`}>
                  {language === 'en' || language === 'tr' ? 'Building the Future' : 
                   language === 'fa' ? 'ساخت آینده' : 'بناء المستقبل'}
                </span>
              </div>
            </div>
            
            <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight ${isRtl ? 'font-vazir' : 'font-display'}`}>
              <span className="heading-gradient text-glow">{t('home.hero.title')}</span>
            </h1>
            
            <p className={`text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed ${isRtl ? 'font-vazir' : ''}`}>
              {t('home.hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button asChild className="glow-button px-12 py-6 text-lg">
                <Link to="/about" className="flex items-center space-x-2">
                  <span>{t('home.hero.cta')}</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="glow-button-outline px-12 py-6 text-lg">
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
      <section className="py-32 subtle-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className={`text-3xl md:text-5xl font-bold mb-6 heading-gradient ${isRtl ? 'font-vazir' : 'font-display'}`}>
                {language === 'en' || language === 'tr' ? 'Trusted by Thousands' : 
                 language === 'fa' ? 'مورد اعتماد هزاران نفر' : 'موثوق من قبل الآلاف'}
              </h2>
              <p className={`text-xl text-muted-foreground max-w-3xl mx-auto ${isRtl ? 'font-vazir' : ''}`}>
                {t('home.intro.text')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glow-card p-12 text-center hover-lift">
                <div className="w-16 h-16 mx-auto mb-6 glow-card-intense rounded-2xl flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div className="text-5xl font-bold mb-4 heading-gradient">300K+</div>
                <p className={`text-muted-foreground text-lg ${isRtl ? 'font-vazir' : ''}`}>
                  {language === 'en' || language === 'tr' ? 'Monthly Followers' : 
                   language === 'fa' ? 'دنبال‌کنندگان ماهانه' : 'متابعون شهريًا'}
                </p>
              </div>
              
              <div className="glow-card p-12 text-center hover-lift">
                <div className="w-16 h-16 mx-auto mb-6 glow-card-intense rounded-2xl flex items-center justify-center">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <div className="text-5xl font-bold mb-4 heading-gradient">30K+</div>
                <p className={`text-muted-foreground text-lg ${isRtl ? 'font-vazir' : ''}`}>
                  {language === 'en' || language === 'tr' ? 'Monthly Users' : 
                   language === 'fa' ? 'کاربران ماهانه' : 'مستخدمون شهريًا'}
                </p>
              </div>
              
              <div className="glow-card p-12 text-center hover-lift">
                <div className="w-16 h-16 mx-auto mb-6 glow-card-intense rounded-2xl flex items-center justify-center">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <div className="text-5xl font-bold mb-4 heading-gradient">7+</div>
                <p className={`text-muted-foreground text-lg ${isRtl ? 'font-vazir' : ''}`}>
                  {language === 'en' || language === 'tr' ? 'Digital Products' : 
                   language === 'fa' ? 'محصولات دیجیتال' : 'منتجات رقمية'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className={`text-3xl md:text-5xl font-bold mb-6 heading-gradient ${isRtl ? 'font-vazir' : 'font-display'}`}>
                {t('home.products.quick_access')}
              </h2>
              <p className={`text-xl text-muted-foreground max-w-3xl mx-auto ${isRtl ? 'font-vazir' : ''}`}>
                {language === 'en' || language === 'tr' ? 'Discover our ecosystem of AI-powered tools and educational platforms' : 
                 language === 'fa' ? 'اکوسیستم ابزارهای هوش مصنوعی و پلتفرم‌های آموزشی ما را کشف کنید' : 
                 'اكتشف نظامنا البيئي للأدوات المدعومة بالذكاء الاصطناعي والمنصات التعليمية'}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Featured Products */}
              <div className="lg:col-span-2 glow-card-intense p-8 hover-lift-lg">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 glow-card rounded-xl flex items-center justify-center">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold mb-2 text-foreground ${isRtl ? 'font-vazir' : ''}`}>
                      {language === 'en' || language === 'tr' ? 'AI Assistant' : 
                       language === 'fa' ? 'دستیار هوشمند' : 'المساعد الذكي'}
                    </h3>
                    <p className={`text-muted-foreground mb-4 ${isRtl ? 'font-vazir' : ''}`}>
                      {language === 'en' || language === 'tr' ? 'Smart Telegram-based AI coach for productivity and growth' : 
                       language === 'fa' ? 'مربی هوشمند مبتنی بر تلگرام برای بهره‌وری و رشد' : 
                       'مدرب ذكي قائم على تلغرام للإنتاجية والنمو'}
                    </p>
                    <Button asChild variant="outline" className="glow-button-outline">
                      <Link to="https://ai.rafiei.co" target="_blank">
                        {language === 'en' || language === 'tr' ? 'Explore AI Assistant' : 
                         language === 'fa' ? 'کاوش در دستیار هوشمند' : 'استكشف المساعد الذكي'}
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="glow-card p-8 hover-lift">
                <div className="w-12 h-12 mb-6 glow-card rounded-xl flex items-center justify-center">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h3 className={`text-xl font-bold mb-3 text-foreground ${isRtl ? 'font-vazir' : ''}`}>
                  {language === 'en' || language === 'tr' ? 'Rafiei Exchange' : 
                   language === 'fa' ? 'صرافی رفیعی' : 'صرافة رفيعي'}
                </h3>
                <p className={`text-muted-foreground mb-4 ${isRtl ? 'font-vazir' : ''}`}>
                  {language === 'en' || language === 'tr' ? 'Advanced cryptocurrency trading platform' : 
                   language === 'fa' ? 'پلتفرم پیشرفته معاملات ارز دیجیتال' : 
                   'منصة تداول العملات المشفرة المتقدمة'}
                </p>
                <Button asChild variant="outline" size="sm" className="glow-button-outline">
                  <Link to="https://exchange.rafiei.co" target="_blank">
                    {language === 'en' || language === 'tr' ? 'Visit Exchange' : 
                     language === 'fa' ? 'مراجعه به صرافی' : 'زيارة الصرافة'}
                  </Link>
                </Button>
              </div>
              
              <div className="glow-card p-8 hover-lift">
                <div className="w-12 h-12 mb-6 glow-card rounded-xl flex items-center justify-center">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className={`text-xl font-bold mb-3 text-foreground ${isRtl ? 'font-vazir' : ''}`}>
                  {language === 'en' || language === 'tr' ? 'Rafiei Academy' : 
                   language === 'fa' ? 'آکادمی رفیعی' : 'أكاديمية رفيعي'}
                </h3>
                <p className={`text-muted-foreground mb-4 ${isRtl ? 'font-vazir' : ''}`}>
                  {language === 'en' || language === 'tr' ? 'Online courses for borderless income' : 
                   language === 'fa' ? 'دوره‌های آنلاین برای کسب درآمد بدون مرز' : 
                   'دورات عبر الإنترنت للدخل بلا حدود'}
                </p>
                <Button asChild variant="outline" size="sm" className="glow-button-outline">
                  <Link to="https://academy.rafiei.co" target="_blank">
                    {language === 'en' || language === 'tr' ? 'Join Academy' : 
                     language === 'fa' ? 'ملحق شدن به آکادمی' : 'انضم إلى الأكاديمية'}
                  </Link>
                </Button>
              </div>
              
              <div className="glow-card p-8 hover-lift">
                <div className="w-12 h-12 mb-6 glow-card rounded-xl flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className={`text-xl font-bold mb-3 text-foreground ${isRtl ? 'font-vazir' : ''}`}>
                  {language === 'en' || language === 'tr' ? 'Synapse' : 
                   language === 'fa' ? 'سیناپس' : 'سينابس'}
                </h3>
                <p className={`text-muted-foreground mb-4 ${isRtl ? 'font-vazir' : ''}`}>
                  {language === 'en' || language === 'tr' ? 'Create your own AI assistant in minutes' : 
                   language === 'fa' ? 'دستیار هوشمند خود را در چند دقیقه بسازید' : 
                   'إنشاء المساعد الذكي الخاص بك في دقائق'}
                </p>
                <Button asChild variant="outline" size="sm" className="glow-button-outline">
                  <Link to="https://synapse.rafiei.co" target="_blank">
                    {language === 'en' || language === 'tr' ? 'Try Synapse' : 
                     language === 'fa' ? 'امتحان سیناپس' : 'جرب سينابس'}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision CTA */}
      <section className="py-32 subtle-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-3xl md:text-5xl font-bold mb-8 heading-gradient ${isRtl ? 'font-vazir' : 'font-display'}`}>
              {language === 'en' || language === 'tr' ? 'Ready to Build Your Future?' : 
               language === 'fa' ? 'آماده ساخت آینده‌تان هستید؟' : 'هل أنت مستعد لبناء مستقبلك؟'}
            </h2>
            <p className={`text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed ${isRtl ? 'font-vazir' : ''}`}>
              {t('about.vision.text')}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild className="glow-button px-12 py-6 text-lg">
                <Link to="/about" className="flex items-center space-x-2">
                  <span>
                    {language === 'en' || language === 'tr' ? 'Learn About Our Mission' : 
                     language === 'fa' ? 'درباره ماموریت ما بیشتر بدانید' : 'تعرف على مهمتنا'}
                  </span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="glow-button-outline px-12 py-6 text-lg">
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