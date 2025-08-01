import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import SectionTitle from '@/components/SectionTitle';
import ProductCard from '@/components/ProductCard';
import { Activity, Zap, Book, Network, Briefcase, CreditCard, Podcast } from 'lucide-react';

const Index = () => {
  const { t, language } = useLanguage();
  
  const products = [
    {
      id: 'ai-assistant',
      title: t('products.ai_assistant.title'),
      description: t('products.ai_assistant.description'),
      url: 'https://ai.rafiei.co',
      icon: <Activity className="h-8 w-8 text-primary" />
    },
    {
      id: 'synapse',
      title: t('products.synapse.title'),
      description: t('products.synapse.description'),
      url: 'https://synapse.rafiei.co',
      icon: <Zap className="h-8 w-8 text-primary" />
    },
    {
      id: 'academy',
      title: t('products.academy.title'),
      description: t('products.academy.description'),
      url: 'https://academy.rafiei.co',
      icon: <Book className="h-8 w-8 text-primary" />
    },
    {
      id: 'bnets',
      title: t('products.bnets.title'),
      description: t('products.bnets.description'),
      url: 'https://bnets.co',
      icon: <Network className="h-8 w-8 text-primary" />
    },
    {
      id: 'agency',
      title: t('products.agency.title'),
      description: t('products.agency.description'),
      url: 'https://agency.rafiei.co',
      icon: <Briefcase className="h-8 w-8 text-primary" />
    },
    {
      id: 'financial',
      title: t('products.financial.title'),
      description: t('products.financial.description'),
      url: 'https://financial.rafiei.co',
      icon: <CreditCard className="h-8 w-8 text-primary" />
    },
    {
      id: 'bluecast',
      title: t('products.bluecast.title'),
      description: t('products.bluecast.description'),
      url: 'https://blucast.rafiei.co',
      icon: <Podcast className="h-8 w-8 text-primary" />
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden hero-gradient py-32 md:py-40">
        <div className="stripe-container">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className={`text-5xl md:text-7xl font-bold mb-8 leading-tight text-white text-glow ${language === 'fa' || language === 'ar' ? 'font-vazir' : 'font-display'}`}>
              {t('home.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="glow-button text-lg">
                <Link to="/about">
                  {t('home.hero.cta')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Enhanced background elements */}
        <div className="absolute -z-10 -top-32 -right-32 w-96 h-96 bg-primary-glow/30 rounded-full blur-3xl"></div>
        <div className="absolute -z-10 -bottom-24 -left-24 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl"></div>
      </section>
      
      {/* Intro Section with Stats */}
      <section className="section-padding subtle-gradient">
        <div className="stripe-container">
          <div className="max-w-5xl mx-auto">
            <SectionTitle 
              title={t('home.intro.title')} 
              center={true} 
            />
            <p className="text-xl text-center mb-16 text-muted-foreground max-w-3xl mx-auto">
              {t('home.intro.text')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glow-card p-10 text-center group">
                <div className="text-5xl font-bold mb-4 heading-gradient">10+</div>
                <p className="text-foreground/80 text-lg font-medium">{language === 'en' || language === 'tr' ? 'Years of Experience' : language === 'fa' ? 'سال‌های تجربه' : 'سنوات الخبرة'}</p>
              </div>
              <div className="glow-card p-10 text-center group">
                <div className="text-5xl font-bold mb-4 heading-gradient">300K+</div>
                <p className="text-foreground/80 text-lg font-medium">{language === 'en' || language === 'tr' ? 'Monthly Followers' : language === 'fa' ? 'دنبال‌کنندگان ماهانه' : 'متابعون شهريًا'}</p>
              </div>
              <div className="glow-card p-10 text-center group">
                <div className="text-5xl font-bold mb-4 heading-gradient">30K+</div>
                <p className="text-foreground/80 text-lg font-medium">{language === 'en' || language === 'tr' ? 'Monthly Users' : language === 'fa' ? 'کاربران ماهانه' : 'مستخدمون شهريًا'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quick Access to Products */}
      <section className="section-padding bg-background">
        <div className="stripe-container">
          <SectionTitle 
            title={t('home.products.quick_access')} 
            center={true} 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-16">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                productId={product.id}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section-padding subtle-gradient">
        <div className="stripe-container">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className={`text-4xl md:text-6xl font-bold mb-8 heading-gradient ${language === 'fa' || language === 'ar' ? 'font-vazir' : 'font-display'}`}>
              {language === 'en' || language === 'tr' ? 'Our Vision' : language === 'fa' ? 'چشم‌انداز ما' : 'رؤيتنا'}
            </h2>
            <p className="text-xl mb-12 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('about.vision.text')}
            </p>
            <Button asChild variant="outline" className="glow-button border-primary/30 bg-transparent text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/about">
                {language === 'en' || language === 'tr' ? 'Learn About Our Mission' : language === 'fa' ? 'درباره ماموریت ما بیشتر بدانید' : 'تعرف على مهمتنا'}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
