
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import SectionTitle from '@/components/SectionTitle';
import CompanyCard from '@/components/CompanyCard';

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
    {
      id: 'business',
      title: t('companies.business.title'),
      description: t('companies.business.description'),
      services: t('companies.business.services'),
      impact: t('companies.business.impact'),
    },
    {
      id: 'ailab',
      title: t('companies.ailab.title'),
      description: t('companies.ailab.description'),
      services: t('companies.ailab.services'),
      impact: t('companies.ailab.impact'),
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-charcoal text-white min-h-[90vh] flex items-center">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              {t('home.hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              {t('home.hero.subtitle')}
            </p>
            <Button asChild size="lg" className="bg-blue hover:bg-blue-dark transition-colors">
              <Link to="/about">
                {t('home.hero.cta')}
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Intro Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <SectionTitle 
              title={t('home.intro.title')} 
              center={true} 
            />
            <p className="text-lg text-center mb-12">
              {t('home.intro.text')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-charcoal-light text-white p-8 rounded-lg text-center">
                <div className="text-4xl font-bold mb-2 text-blue">10+</div>
                <p className="text-gray-300">{language === 'en' ? 'Years of Experience' : 'سال‌های تجربه'}</p>
              </div>
              <div className="bg-charcoal-light text-white p-8 rounded-lg text-center">
                <div className="text-4xl font-bold mb-2 text-blue">180K+</div>
                <p className="text-gray-300">{language === 'en' ? 'Social Media Followers' : 'دنبال‌کنندگان رسانه‌های اجتماعی'}</p>
              </div>
              <div className="bg-charcoal-light text-white p-8 rounded-lg text-center">
                <div className="text-4xl font-bold mb-2 text-blue">2000+</div>
                <p className="text-gray-300">{language === 'en' ? 'Students Worldwide' : 'دانشجویان سراسر جهان'}</p>
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
            {companies.slice(0, 3).map((company) => (
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
          
          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link to="/companies">{language === 'en' ? 'View All Companies' : 'مشاهده تمام شرکت‌ها'}</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Vision Section */}
      <section className="section-padding bg-blue text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              {language === 'en' ? 'Our Vision' : 'چشم‌انداز ما'}
            </h2>
            <p className="text-xl mb-8">
              {t('about.vision.text')}
            </p>
            <Button asChild variant="secondary">
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
