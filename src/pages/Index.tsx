
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import SectionTitle from '@/components/SectionTitle';
import CompanyCard from '@/components/CompanyCard';
import { Globe, Server, Shield } from 'lucide-react';

const Index = () => {
  const { t, language } = useLanguage();
  
  const companies = [
    {
      id: 'academy',
      title: t('companies.academy.title'),
      description: t('companies.academy.description'),
    },
    {
      id: 'ai-assistant',
      title: t('companies.ai_assistant.title'),
      description: t('companies.ai_assistant.description'),
    },
    {
      id: 'financial',
      title: t('companies.financial.title'),
      description: t('companies.financial.description'),
    },
    {
      id: 'business',
      title: t('companies.business.title'),
      description: t('companies.business.description'),
    },
    {
      id: 'ailab',
      title: t('companies.ailab.title'),
      description: t('companies.ailab.description'),
    },
    {
      id: 'bnets',
      title: t('companies.bnets.title'),
      description: t('companies.bnets.description'),
    },
    {
      id: 'bluecast',
      title: t('companies.bluecast.title'),
      description: t('companies.bluecast.description'),
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-800 ${language === 'fa' ? 'font-vazir' : 'font-display'}`}>
              {t('home.hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
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
        <div className="absolute -z-10 -top-24 -right-24 w-96 h-96 bg-blue-50 rounded-full"></div>
        <div className="absolute -z-10 -bottom-20 -left-20 w-72 h-72 bg-blue-50 rounded-full"></div>
      </section>
      
      {/* Intro Section with Stats */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <SectionTitle 
              title={t('home.intro.title')} 
              center={true} 
            />
            <p className="text-lg text-center mb-12 text-gray-600">
              {t('home.intro.text')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-8 text-center transition-all hover:bg-gray-100 hover:shadow-md">
                <div className="text-4xl font-bold mb-2 text-primary">10+</div>
                <p className="text-gray-700">{language === 'en' ? 'Years of Experience' : 'سال‌های تجربه'}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 text-center transition-all hover:bg-gray-100 hover:shadow-md">
                <div className="text-4xl font-bold mb-2 text-primary">300K+</div>
                <p className="text-gray-700">{language === 'en' ? 'Monthly Followers' : 'دنبال‌کنندگان ماهانه'}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 text-center transition-all hover:bg-gray-100 hover:shadow-md">
                <div className="text-4xl font-bold mb-2 text-primary">30K+</div>
                <p className="text-gray-700">{language === 'en' ? 'Monthly Users' : 'کاربران ماهانه'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Companies Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <SectionTitle 
            title={t('home.companies.title')} 
            subtitle={t('home.companies.subtitle')}
            center={true} 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companies.map((company) => (
              <CompanyCard
                key={company.id}
                id={company.id}
                title={company.title}
                description={company.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <SectionTitle 
            title={language === 'en' ? 'Featured Services' : 'خدمات ویژه'} 
            center={true} 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-xl border border-gray-200 shadow-sm text-center flex flex-col items-center transition-all hover:shadow-md hover:border-gray-300">
              <div className="mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${language === 'fa' ? 'font-vazir' : 'font-display'}`}>
                {language === 'en' ? 'Global Business Setup' : 'راه‌اندازی کسب‌وکار جهانی'}
              </h3>
              <p className="text-gray-600 text-sm">{language === 'en' ? 'Start your borderless business with our end-to-end solutions.' : 'با راه‌حل‌های جامع ما کسب‌وکار بدون مرز خود را راه‌اندازی کنید.'}</p>
            </div>
            <div className="p-8 rounded-xl border border-gray-200 shadow-sm text-center flex flex-col items-center transition-all hover:shadow-md hover:border-gray-300">
              <div className="mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${language === 'fa' ? 'font-vazir' : 'font-display'}`}>
                {language === 'en' ? 'Secure Connectivity' : 'اتصال امن'}
              </h3>
              <p className="text-gray-600 text-sm">{language === 'en' ? 'Access global platforms securely with our BNets infrastructure.' : 'با زیرساخت BNets ما به پلتفرم‌های جهانی به صورت امن دسترسی داشته باشید.'}</p>
            </div>
            <div className="p-8 rounded-xl border border-gray-200 shadow-sm text-center flex flex-col items-center transition-all hover:shadow-md hover:border-gray-300">
              <div className="mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Server className="h-8 w-8 text-primary" />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${language === 'fa' ? 'font-vazir' : 'font-display'}`}>
                {language === 'en' ? 'AI Integration' : 'ادغام هوش مصنوعی'}
              </h3>
              <p className="text-gray-600 text-sm">{language === 'en' ? 'Leverage our AI solutions to automate and optimize your workflows.' : 'با استفاده از راه‌حل‌های هوش مصنوعی ما، جریان‌های کاری خود را خودکار و بهینه کنید.'}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Vision Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-3xl md:text-5xl font-bold mb-6 text-gray-800 ${language === 'fa' ? 'font-vazir' : 'font-display'}`}>
              {language === 'en' ? 'Our Vision' : 'چشم‌انداز ما'}
            </h2>
            <p className="text-xl mb-8 text-gray-600">
              {t('about.vision.text')}
            </p>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 py-6">
              <Link to="/about">
                {language === 'en' ? 'Learn About Our Mission' : 'درباره ماموریت ما بیشتر بدانید'}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
