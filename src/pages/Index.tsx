
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
      <section className="relative overflow-hidden bg-white dark:bg-gray-900 py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 leading-tight heading-gradient dark:text-white ${language === 'fa' || language === 'ar' ? 'font-vazir' : 'font-display'}`}>
              {t('home.hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
              {t('home.hero.subtitle')}
            </p>
            <Button asChild size="lg" className="rounded-full px-8 py-6 text-base font-medium">
              <Link to="/about">
                {t('home.hero.cta')}
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Background elements */}
        <div className="absolute -z-10 -top-24 -right-24 w-96 h-96 bg-blue-50 dark:bg-blue-900/10 rounded-full"></div>
        <div className="absolute -z-10 -bottom-20 -left-20 w-72 h-72 bg-blue-50 dark:bg-blue-900/10 rounded-full"></div>
      </section>
      
      {/* Intro Section with Stats */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <SectionTitle 
              title={t('home.intro.title')} 
              center={true} 
            />
            <p className="text-lg text-center mb-12 text-gray-600 dark:text-gray-300">
              {t('home.intro.text')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 text-center transition-all hover:shadow-md">
                <div className="text-4xl font-bold mb-2 text-primary">10+</div>
                <p className="text-gray-700 dark:text-gray-300">{language === 'en' || language === 'tr' ? 'Years of Experience' : language === 'fa' ? 'سال‌های تجربه' : 'سنوات الخبرة'}</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 text-center transition-all hover:shadow-md">
                <div className="text-4xl font-bold mb-2 text-primary">300K+</div>
                <p className="text-gray-700 dark:text-gray-300">{language === 'en' || language === 'tr' ? 'Monthly Followers' : language === 'fa' ? 'دنبال‌کنندگان ماهانه' : 'متابعون شهريًا'}</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 text-center transition-all hover:shadow-md">
                <div className="text-4xl font-bold mb-2 text-primary">30K+</div>
                <p className="text-gray-700 dark:text-gray-300">{language === 'en' || language === 'tr' ? 'Monthly Users' : language === 'fa' ? 'کاربران ماهانه' : 'مستخدمون شهريًا'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quick Access to Products */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800/30">
        <div className="container mx-auto">
          <SectionTitle 
            title={t('home.products.quick_access')} 
            center={true} 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                url={product.url}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-3xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white ${language === 'fa' || language === 'ar' ? 'font-vazir' : 'font-display'} heading-gradient`}>
              {language === 'en' || language === 'tr' ? 'Our Vision' : language === 'fa' ? 'چشم‌انداز ما' : 'رؤيتنا'}
            </h2>
            <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
              {t('about.vision.text')}
            </p>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 py-6">
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
