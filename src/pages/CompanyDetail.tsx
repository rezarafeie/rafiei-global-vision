
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';

interface CompanyData {
  id: string;
  title: string;
  description: string;
  services: string;
  impact: string;
  details?: string;
}

const CompanyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { t, language } = useLanguage();
  
  // Get company data based on ID
  const getCompanyData = (): CompanyData | null => {
    switch (id) {
      case 'academy':
        return {
          id: 'academy',
          title: t('companies.academy.title'),
          description: t('companies.academy.description'),
          services: t('companies.academy.services'),
          impact: t('companies.academy.impact'),
          details: t('companies.academy.details'),
        };
      case 'ai-assistant':
        return {
          id: 'ai-assistant',
          title: t('companies.ai_assistant.title'),
          description: t('companies.ai_assistant.description'),
          services: t('companies.ai_assistant.services'),
          impact: t('companies.ai_assistant.impact'),
          details: t('companies.ai_assistant.details'),
        };
      case 'financial':
        return {
          id: 'financial',
          title: t('companies.financial.title'),
          description: t('companies.financial.description'),
          services: t('companies.financial.services'),
          impact: t('companies.financial.impact'),
          details: t('companies.financial.details'),
        };
      case 'business':
        return {
          id: 'business',
          title: t('companies.business.title'),
          description: t('companies.business.description'),
          services: t('companies.business.services'),
          impact: t('companies.business.impact'),
        };
      case 'ailab':
        return {
          id: 'ailab',
          title: t('companies.ailab.title'),
          description: t('companies.ailab.description'),
          services: t('companies.ailab.services'),
          impact: t('companies.ailab.impact'),
        };
      default:
        return null;
    }
  };
  
  const company = getCompanyData();
  
  // If company not found, redirect to companies page
  if (!company) {
    return <Navigate to="/companies" replace />;
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-charcoal text-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              {company.title}
            </h1>
            <p className="text-xl text-gray-300">
              {company.description}
            </p>
          </div>
        </div>
      </section>

      {/* Company Details */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image/Logo Placeholder */}
            <div className="h-80 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-xl font-display text-gray-500">{company.title}</span>
            </div>
            
            <div>
              <SectionTitle 
                title={language === 'en' ? 'Overview' : 'نمای کلی'} 
              />
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">{language === 'en' ? 'Services' : 'خدمات'}</h3>
                  <p className="text-gray-700">{company.services}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">{language === 'en' ? 'Impact' : 'تأثیر'}</h3>
                  <p className="text-gray-700">{company.impact}</p>
                </div>
                
                {company.details && (
                  <div>
                    <h3 className="text-lg font-medium mb-2">{language === 'en' ? 'Details' : 'جزئیات'}</h3>
                    <p className="text-gray-700">{company.details}</p>
                  </div>
                )}
                
                <Button className="bg-blue hover:bg-blue-dark">
                  {language === 'en' ? 'Contact Us' : 'تماس با ما'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <SectionTitle 
            title={language === 'en' ? 'Key Features' : 'ویژگی‌های کلیدی'} 
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue/10 text-blue rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">
                {language === 'en' ? 'Innovation' : 'نوآوری'}
              </h3>
              <p className="text-gray-600">
                {language === 'en' 
                  ? 'Cutting-edge solutions that push boundaries'
                  : 'راه‌حل‌های پیشرفته که مرزها را می‌شکنند'
                }
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue/10 text-blue rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">
                {language === 'en' ? 'Community' : 'جامعه'}
              </h3>
              <p className="text-gray-600">
                {language === 'en'
                  ? 'Global network of entrepreneurs and learners'
                  : 'شبکه جهانی کارآفرینان و یادگیرندگان'
                }
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue/10 text-blue rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">
                {language === 'en' ? 'Support' : 'پشتیبانی'}
              </h3>
              <p className="text-gray-600">
                {language === 'en'
                  ? 'Dedicated assistance for your journey'
                  : 'کمک اختصاصی برای مسیر شما'
                }
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CompanyDetail;
