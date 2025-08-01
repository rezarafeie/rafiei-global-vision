import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import SectionTitle from '@/components/SectionTitle';
import ProductGrid from '@/components/ProductGrid';

const Index = () => {
  const { t, language } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight ${language === 'fa' || language === 'ar' ? 'font-vazir' : 'font-display'}`}>
              <span className="heading-gradient">{t('home.hero.title')}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="shadow-elegant hover:shadow-glow">
                <Link to="/about">
                  {t('home.hero.cta')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Background elements */}
        <div className="absolute -z-10 top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -z-10 bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <SectionTitle 
              title={t('home.intro.title')} 
              center={true} 
            />
            <p className="text-lg text-center mb-12 text-muted-foreground max-w-3xl mx-auto">
              {t('home.intro.text')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-8 rounded-xl bg-background border border-border/50 hover:border-primary/30 transition-all duration-300">
                <div className="text-4xl font-bold mb-3 heading-gradient">10+</div>
                <p className="text-muted-foreground">{language === 'en' || language === 'tr' ? 'Years of Experience' : language === 'fa' ? 'سال‌های تجربه' : 'سنوات الخبرة'}</p>
              </div>
              <div className="text-center p-8 rounded-xl bg-background border border-border/50 hover:border-primary/30 transition-all duration-300">
                <div className="text-4xl font-bold mb-3 heading-gradient">300K+</div>
                <p className="text-muted-foreground">{language === 'en' || language === 'tr' ? 'Monthly Followers' : language === 'fa' ? 'دنبال‌کنندگان ماهانه' : 'متابعون شهريًا'}</p>
              </div>
              <div className="text-center p-8 rounded-xl bg-background border border-border/50 hover:border-primary/30 transition-all duration-300">
                <div className="text-4xl font-bold mb-3 heading-gradient">30K+</div>
                <p className="text-muted-foreground">{language === 'en' || language === 'tr' ? 'Monthly Users' : language === 'fa' ? 'کاربران ماهانه' : 'مستخدمون شهريًا'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title={t('home.products.quick_access')} 
            center={true} 
          />
          
          <div className="mt-12">
            <ProductGrid />
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-3xl md:text-5xl font-bold mb-6 heading-gradient ${language === 'fa' || language === 'ar' ? 'font-vazir' : 'font-display'}`}>
              {language === 'en' || language === 'tr' ? 'Our Vision' : language === 'fa' ? 'چشم‌انداز ما' : 'رؤيتنا'}
            </h2>
            <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t('about.vision.text')}
            </p>
            <Button asChild variant="outline" size="lg">
              <Link to="/about">
                {language === 'en' || language === 'tr' ? 'Learn About Our Mission' : language === 'fa' ? 'درباره ماموریت ما بیشتر بدانید' : 'تعرف على مهمتنا'}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
