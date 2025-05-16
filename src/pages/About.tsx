
import React from 'react';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const { t, language } = useLanguage();

  const timelineEvents = [
    {
      year: '2018',
      title: language === 'en' ? 'Foundation' : 'تاسیس',
      description: language === 'en' 
        ? 'Rafiei Holding was established with a vision to empower individuals through education and technology.' 
        : 'هلدینگ رفیعی با چشم‌انداز توانمندسازی افراد از طریق آموزش و فناوری تأسیس شد.'
    },
    {
      year: '2019',
      title: language === 'en' ? 'Rafiei Academy Launch' : 'راه‌اندازی آکادمی رفیعی',
      description: language === 'en' 
        ? 'Our first educational platform was launched, focusing on digital entrepreneurship and online businesses.' 
        : 'اولین پلتفرم آموزشی ما با تمرکز بر کارآفرینی دیجیتال و کسب‌وکارهای آنلاین راه‌اندازی شد.'
    },
    {
      year: '2020',
      title: language === 'en' ? 'Financial Services' : 'خدمات مالی',
      description: language === 'en' 
        ? 'Expanded into financial services to solve international payment challenges for digital entrepreneurs.' 
        : 'گسترش به حوزه خدمات مالی برای حل چالش‌های پرداخت بین‌المللی برای کارآفرینان دیجیتال.'
    },
    {
      year: '2021',
      title: language === 'en' ? 'AI Development' : 'توسعه هوش مصنوعی',
      description: language === 'en' 
        ? 'Started AI research and development of intelligent assistants for business and productivity.' 
        : 'شروع تحقیق و توسعه هوش مصنوعی و دستیارهای هوشمند برای کسب‌وکار و بهره‌وری.'
    },
    {
      year: '2022',
      title: language === 'en' ? 'Global Expansion' : 'گسترش جهانی',
      description: language === 'en' 
        ? 'Established operations in the UK, Australia, and UAE to create a truly global network.' 
        : 'راه‌اندازی عملیات در بریتانیا، استرالیا و امارات برای ایجاد یک شبکه واقعاً جهانی.'
    },
    {
      year: '2023',
      title: language === 'en' ? 'AI Lab Launch' : 'راه‌اندازی آزمایشگاه هوش مصنوعی',
      description: language === 'en' 
        ? 'Dedicated AI lab for developing next-generation business solutions and educational tools.' 
        : 'آزمایشگاه اختصاصی هوش مصنوعی برای توسعه راه‌حل‌های کسب‌وکار و ابزارهای آموزشی نسل بعدی.'
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-charcoal text-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl text-gray-300">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="bg-gradient-to-br from-charcoal to-charcoal-light text-white">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4">{t('about.vision.title')}</h2>
                <p className="text-gray-200">{t('about.vision.text')}</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-blue-dark to-blue text-white">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4">{t('about.mission.title')}</h2>
                <p className="text-gray-200">{t('about.mission.text')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <SectionTitle 
            title={t('about.timeline.title')} 
            center={true}
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-300 transform md:translate-x-[-0.5px]"></div>
              
              {/* Timeline Events */}
              {timelineEvents.map((event, index) => (
                <div 
                  key={index} 
                  className={`relative mb-12 animate-fade-in ${
                    index % 2 === 0 
                      ? 'md:pr-12 md:text-right md:ml-auto md:mr-[50%]' 
                      : 'md:pl-12 md:text-left md:ml-[50%] md:mr-0'
                  }`}
                >
                  {/* Dot */}
                  <div className={`absolute top-0 w-4 h-4 rounded-full bg-blue ${
                    index % 2 === 0
                      ? 'left-[-8px] md:left-auto md:right-[-8px]'
                      : 'left-[-8px]'
                  }`}></div>
                  
                  {/* Year */}
                  <span className="inline-block bg-blue text-white text-sm font-bold rounded-full px-3 py-1 mb-2">
                    {event.year}
                  </span>
                  
                  {/* Content */}
                  <h3 className="text-xl font-display font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
