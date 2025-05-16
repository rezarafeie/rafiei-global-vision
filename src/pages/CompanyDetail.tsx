
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import { CheckCircle, Globe, Shield, Users } from 'lucide-react';

interface CompanyData {
  id: string;
  title: string;
  description: string;
  services: string;
  impact: string;
  details?: string;
  image?: string;
  features?: { title: string; description: string }[];
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
          image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
          features: [
            { title: language === 'en' ? 'Global Education' : 'آموزش جهانی', description: language === 'en' ? 'Courses accessible from anywhere in the world' : 'دوره‌های قابل دسترسی از هر نقطه جهان' },
            { title: language === 'en' ? 'Practical Skills' : 'مهارت‌های عملی', description: language === 'en' ? 'Real-world skills for modern entrepreneurs' : 'مهارت‌های دنیای واقعی برای کارآفرینان مدرن' },
            { title: language === 'en' ? 'Community' : 'جامعه', description: language === 'en' ? 'Join a network of like-minded entrepreneurs' : 'به شبکه‌ای از کارآفرینان همفکر بپیوندید' },
          ]
        };
      case 'ai-assistant':
        return {
          id: 'ai-assistant',
          title: t('companies.ai_assistant.title'),
          description: t('companies.ai_assistant.description'),
          services: t('companies.ai_assistant.services'),
          impact: t('companies.ai_assistant.impact'),
          details: t('companies.ai_assistant.details'),
          image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
          features: [
            { title: language === 'en' ? 'AI-Powered' : 'قدرت هوش مصنوعی', description: language === 'en' ? 'Leveraging the latest in AI technology' : 'بهره‌گیری از آخرین فناوری‌های هوش مصنوعی' },
            { title: language === 'en' ? 'Personal Growth' : 'رشد شخصی', description: language === 'en' ? 'Tools designed to accelerate your personal development' : 'ابزارهایی طراحی شده برای تسریع رشد شخصی شما' },
            { title: language === 'en' ? 'Productivity' : 'بهره‌وری', description: language === 'en' ? 'Supercharge your workflow and efficiency' : 'تقویت گردش کار و بهره‌وری شما' },
          ]
        };
      case 'financial':
        return {
          id: 'financial',
          title: t('companies.financial.title'),
          description: t('companies.financial.description'),
          services: t('companies.financial.services'),
          impact: t('companies.financial.impact'),
          details: t('companies.financial.details'),
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
          features: [
            { title: language === 'en' ? 'Global Payments' : 'پرداخت‌های جهانی', description: language === 'en' ? 'Seamless international payment processing' : 'پردازش پرداخت بین‌المللی بدون دردسر' },
            { title: language === 'en' ? 'Compliance' : 'انطباق قانونی', description: language === 'en' ? 'Fully compliant with international regulations' : 'کاملاً منطبق با مقررات بین‌المللی' },
            { title: language === 'en' ? 'Security' : 'امنیت', description: language === 'en' ? 'Bank-grade security for all transactions' : 'امنیت در سطح بانک برای تمام تراکنش‌ها' },
          ]
        };
      case 'business':
        return {
          id: 'business',
          title: t('companies.business.title'),
          description: t('companies.business.description'),
          services: t('companies.business.services'),
          impact: t('companies.business.impact'),
          image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
          features: [
            { title: language === 'en' ? 'Business Setup' : 'راه‌اندازی کسب‌وکار', description: language === 'en' ? 'End-to-end business establishment services' : 'خدمات راه‌اندازی کسب‌وکار از ابتدا تا انتها' },
            { title: language === 'en' ? 'Digital Presence' : 'حضور دیجیتال', description: language === 'en' ? 'Create your professional online footprint' : 'ایجاد ردپای آنلاین حرفه‌ای شما' },
            { title: language === 'en' ? 'Growth Strategy' : 'استراتژی رشد', description: language === 'en' ? 'Customized plans for sustainable business growth' : 'برنامه‌های سفارشی برای رشد پایدار کسب‌وکار' },
          ]
        };
      case 'ailab':
        return {
          id: 'ailab',
          title: t('companies.ailab.title'),
          description: t('companies.ailab.description'),
          services: t('companies.ailab.services'),
          impact: t('companies.ailab.impact'),
          image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
          features: [
            { title: language === 'en' ? 'Innovation' : 'نوآوری', description: language === 'en' ? 'Cutting-edge AI research and development' : 'تحقیق و توسعه هوش مصنوعی پیشرفته' },
            { title: language === 'en' ? 'Custom Solutions' : 'راه‌حل‌های سفارشی', description: language === 'en' ? 'AI tools tailored to your specific needs' : 'ابزارهای هوش مصنوعی متناسب با نیازهای خاص شما' },
            { title: language === 'en' ? 'Future-Ready' : 'آماده آینده', description: language === 'en' ? 'Preparing businesses for the AI-driven future' : 'آماده‌سازی کسب‌وکارها برای آینده مبتنی بر هوش مصنوعی' },
          ]
        };
      case 'bnets':
        return {
          id: 'bnets',
          title: t('companies.bnets.title'),
          description: t('companies.bnets.description'),
          services: t('companies.bnets.services'),
          impact: t('companies.bnets.impact'),
          image: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833',
          features: [
            { title: language === 'en' ? 'High-Speed Network' : 'شبکه پرسرعت', description: language === 'en' ? 'Blazing fast connectivity around the globe' : 'اتصال فوق‌العاده سریع در سراسر جهان' },
            { title: language === 'en' ? 'Smart Routing' : 'مسیریابی هوشمند', description: language === 'en' ? 'Intelligent path optimization for key platforms' : 'بهینه‌سازی هوشمند مسیر برای پلتفرم‌های کلیدی' },
            { title: language === 'en' ? 'Dedicated Support' : 'پشتیبانی اختصاصی', description: language === 'en' ? '24/7 technical assistance via Telegram' : 'پشتیبانی فنی ۲۴/۷ از طریق تلگرام' },
          ]
        };
      case 'bluecast':
        return {
          id: 'bluecast',
          title: t('companies.bluecast.title'),
          description: t('companies.bluecast.description'),
          services: t('companies.bluecast.services'),
          impact: t('companies.bluecast.impact'),
          image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625',
          features: [
            { title: language === 'en' ? 'Financial Mindset' : 'ذهنیت مالی', description: language === 'en' ? 'Develop a wealth psychology' : 'توسعه روانشناسی ثروت' },
            { title: language === 'en' ? 'Digital Entrepreneurship' : 'کارآفرینی دیجیتال', description: language === 'en' ? 'Modern strategies for online business success' : 'استراتژی‌های مدرن برای موفقیت کسب‌وکار آنلاین' },
            { title: language === 'en' ? 'Personal Growth' : 'رشد شخصی', description: language === 'en' ? 'Transformative insights for limitless development' : 'بینش‌های تحول‌آفرین برای توسعه بی‌حد و مرز' },
          ]
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
      <section className="page-header">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className={`text-4xl md:text-5xl font-medium mb-6 ${language === 'fa' ? 'font-vazir' : 'font-display'}`}>
              {company.title}
            </h1>
            <p className="text-lg text-gray-600">
              {company.description}
            </p>
          </div>
        </div>
      </section>

      {/* Company Details */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image */}
            <div className="overflow-hidden rounded-lg shadow-sm">
              <img 
                src={company.image} 
                alt={company.title}
                className="w-full h-auto object-cover aspect-video"
              />
            </div>
            
            <div>
              <h2 className={`text-2xl font-medium mb-6 ${language === 'fa' ? 'font-vazir' : 'font-display'}`}>
                {language === 'en' ? 'Overview' : 'نمای کلی'}
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className={`text-lg font-medium mb-2 ${language === 'fa' ? 'font-vazir' : 'font-display'}`}>
                    {language === 'en' ? 'Services' : 'خدمات'}
                  </h3>
                  <p className="text-gray-700">{company.services}</p>
                </div>
                
                <div>
                  <h3 className={`text-lg font-medium mb-2 ${language === 'fa' ? 'font-vazir' : 'font-display'}`}>
                    {language === 'en' ? 'Impact' : 'تأثیر'}
                  </h3>
                  <p className="text-gray-700">{company.impact}</p>
                </div>
                
                {company.details && (
                  <div>
                    <h3 className={`text-lg font-medium mb-2 ${language === 'fa' ? 'font-vazir' : 'font-display'}`}>
                      {language === 'en' ? 'Details' : 'جزئیات'}
                    </h3>
                    <p className="text-gray-700">{company.details}</p>
                  </div>
                )}
                
                <Button className="mt-4">
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {company.features?.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="mb-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  {index === 0 && <Globe className="h-5 w-5 text-primary" />}
                  {index === 1 && <Shield className="h-5 w-5 text-primary" />}
                  {index === 2 && <Users className="h-5 w-5 text-primary" />}
                </div>
                <h3 className={`text-lg font-medium mb-2 ${language === 'fa' ? 'font-vazir' : 'font-display'}`}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonial/Stats Section */}
      <section className="section-padding bg-white border-t border-gray-100">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center">
              <h2 className={`text-2xl font-medium mb-12 ${language === 'fa' ? 'font-vazir' : 'font-display'}`}>
                {language === 'en' ? 'Why Choose Us' : 'چرا ما را انتخاب کنید'}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center">
                  <div className="mb-3 text-primary">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <h3 className={`text-lg font-medium ${language === 'fa' ? 'font-vazir' : 'font-display'}`}>
                    {language === 'en' ? 'Innovation' : 'نوآوری'}
                  </h3>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="mb-3 text-primary">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <h3 className={`text-lg font-medium ${language === 'fa' ? 'font-vazir' : 'font-display'}`}>
                    {language === 'en' ? 'Expertise' : 'تخصص'}
                  </h3>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="mb-3 text-primary">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <h3 className={`text-lg font-medium ${language === 'fa' ? 'font-vazir' : 'font-display'}`}>
                    {language === 'en' ? 'Global Reach' : 'دسترسی جهانی'}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CompanyDetail;
