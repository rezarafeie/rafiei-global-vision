
import React from 'react';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import SectionTitle from '@/components/SectionTitle';
import CompanyCard from '@/components/CompanyCard';
import { ArrowRight } from 'lucide-react';

const Companies = () => {
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
    {
      id: 'bnets',
      title: t('companies.bnets.title'),
      description: t('companies.bnets.description'),
      services: t('companies.bnets.services'),
      impact: t('companies.bnets.impact'),
    },
    {
      id: 'bluecast',
      title: t('companies.bluecast.title'),
      description: t('companies.bluecast.description'),
      services: t('companies.bluecast.services'),
      impact: t('companies.bluecast.impact'),
    },
  ];

  return (
    <Layout>
      {/* Page Header */}
      <section className="relative overflow-hidden bg-white pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${language === 'fa' ? 'font-vazir' : 'font-display'}`}>
              {t('companies.title')}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              {t('companies.subtitle')}
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -z-10 top-0 right-0 w-full h-full bg-gradient-to-b from-blue-50/80 to-transparent"></div>
      </section>

      {/* Companies Grid */}
      <section className="section-padding bg-white pb-32">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          
          <div className="mt-16 text-center">
            <p className="inline-flex items-center text-primary font-medium hover:underline">
              <span>{language === 'en' ? 'Discover how our companies work together' : 'کشف کنید چگونه شرکت‌های ما با هم کار می‌کنند'}</span>
              <ArrowRight className="h-4 w-4 ml-1" />
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Companies;
