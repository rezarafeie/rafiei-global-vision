
import React from 'react';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import SectionTitle from '@/components/SectionTitle';
import CompanyCard from '@/components/CompanyCard';

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
      {/* Hero Section */}
      <section className="page-header">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className={`text-4xl md:text-5xl font-medium mb-6 ${language === 'fa' ? 'font-vazir' : 'font-display'}`}>
              {t('companies.title')}
            </h1>
            <p className="text-lg text-gray-600">
              {t('companies.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Companies Grid */}
      <section className="section-padding bg-white">
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
        </div>
      </section>
    </Layout>
  );
};

export default Companies;
