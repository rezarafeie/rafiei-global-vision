
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
      services: t('companies.academy.services'),
      impact: t('companies.academy.impact'),
    },
    {
      id: 'ai-assistant',
      title: t('companies.ai_assistant.title'),
      description: t('companies.ai_assistant.description'),
      services: t('companies.ai_assistant.services'),
      impact: t('companies.ai_assistant.impact'),
    },
    {
      id: 'financial',
      title: t('companies.financial.title'),
      description: t('companies.financial.description'),
      services: t('companies.financial.services'),
      impact: t('companies.financial.impact'),
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight text-gray-800 ${language === 'fa' ? 'font-vazir' : 'font-display'}`}>
              {t('home.hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              {t('home.hero.subtitle')}
            </p>
            <Button asChild size="lg">
              <Link to="/about">
                {t('home.hero.cta')}
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Intro Section */}
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
              <div className="bg-gray-50 rounded-lg p-8 text-center transition-all hover:bg-gray-100">
                <div className="text-4xl font-bold mb-2 text-primary">10+</div>
                <p className="text-gray-700">{language === 'en' ? 'Years of Experience' : 'سال‌های تجربه'}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-8 text-center transition-all hover:bg-gray-100">
                <div className="text-4xl font-bold mb-2 text-primary">180K+</div>
                <p className="text-gray-700">{language === 'en' ? 'Social Media Followers' : 'دنبال‌کنندگان رسانه‌های اجتماعی'}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-8 text-center transition-all hover:bg-gray-100">
                <div className="text-4xl font-bold mb-2 text-primary">2000+</div>
                <p className="text-gray-700">{language === 'en' ? 'Students Worldwide' : 'دانشجویان سراسر جهان'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Companies Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <SectionTitle 
            title={t('home.companies.title')} 
            subtitle={t('home.companies.subtitle')}
            center={true} 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {companies.map((company) => (
              <CompanyCard
                key={company.id}
                id={company.id}
                title={company.title}
                description={company.description}
                services={company.services}
                impact={company.impact}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link to="/companies">{language === 'en' ? 'View All Companies' : 'مشاهده تمام شرکت‌ها'}</Link>
            </Button>
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
            <div className="p-8 rounded-lg border border-gray-100 shadow-sm text-center flex flex-col items-center transition-all hover:shadow-md hover:border-gray-200">
              <div className="mb-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Globe className="h-5 w-5 text-primary" />
              </div>
              <h3 className={`text-xl font-medium mb-3 ${language === 'fa' ? 'font-vazir' : 'font-display'}`}>
                {language === 'en' ? 'Global Business Setup' : 'راه‌اندازی کسب‌وکار جهانی'}
              </h3>
              <p className="text-gray-600 text-sm">{language === 'en' ? 'Start your borderless business with our end-to-end solutions.' : 'با راه‌حل‌های جامع ما کسب‌وکار بدون مرز خود را راه‌اندازی کنید.'}</p>
            </div>
            <div className="p-8 rounded-lg border border-gray-100 shadow-sm text-center flex flex-col items-center transition-all hover:shadow-md hover:border-gray-200">
              <div className="mb-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <h3 className={`text-xl font-medium mb-3 ${language === 'fa' ? 'font-vazir' : 'font-display'}`}>
                {language === 'en' ? 'Secure Connectivity' : 'اتصال امن'}
              </h3>
              <p className="text-gray-600 text-sm">{language === 'en' ? 'Access global platforms securely with our BNets infrastructure.' : 'با زیرساخت BNets ما به پلتفرم‌های جهانی به صورت امن دسترسی داشته باشید.'}</p>
            </div>
            <div className="p-8 rounded-lg border border-gray-100 shadow-sm text-center flex flex-col items-center transition-all hover:shadow-md hover:border-gray-200">
              <div className="mb-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Server className="h-5 w-5 text-primary" />
              </div>
              <h3 className={`text-xl font-medium mb-3 ${language === 'fa' ? 'font-vazir' : 'font-display'}`}>
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
            <h2 className={`text-3xl md:text-4xl font-medium mb-6 text-gray-800 ${language === 'fa' ? 'font-vazir' : 'font-display'}`}>
              {language === 'en' ? 'Our Vision' : 'چشم‌انداز ما'}
            </h2>
            <p className="text-xl mb-8 text-gray-600">
              {t('about.vision.text')}
            </p>
            <Button asChild variant="outline">
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
