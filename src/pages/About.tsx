
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
      title: language === 'en' || language === 'tr' ? 'Foundation' : 
             language === 'fa' ? 'تاسیس' : 'التأسيس',
      description: language === 'en' || language === 'tr'
        ? 'Rafiei Group was established with a vision to empower individuals through education and technology.' 
        : language === 'fa'
        ? 'گروه رفیعی با چشم‌انداز توانمندسازی افراد از طریق آموزش و فناوری تأسیس شد.'
        : 'تأسست مجموعة رفيعي برؤية لتمكين الأفراد من خلال التعليم والتكنولوجيا.'
    },
    {
      year: '2019',
      title: language === 'en' || language === 'tr' ? 'Rafiei Academy Launch' : 
             language === 'fa' ? 'راه‌اندازی آکادمی رفیعی' : 'إطلاق أكاديمية رفيعي',
      description: language === 'en' || language === 'tr'
        ? 'Our first educational platform was launched, focusing on digital entrepreneurship and online businesses.' 
        : language === 'fa'
        ? 'اولین پلتفرم آموزشی ما با تمرکز بر کارآفرینی دیجیتال و کسب‌وکارهای آنلاین راه‌اندازی شد.'
        : 'تم إطلاق منصتنا التعليمية الأولى، مع التركيز على ريادة الأعمال الرقمية والأعمال عبر الإنترنت.'
    },
    {
      year: '2020',
      title: language === 'en' || language === 'tr' ? 'Financial Services' : 
             language === 'fa' ? 'خدمات مالی' : 'الخدمات المالية',
      description: language === 'en' || language === 'tr'
        ? 'Expanded into financial services to solve international payment challenges for digital entrepreneurs.' 
        : language === 'fa'
        ? 'گسترش به حوزه خدمات مالی برای حل چالش‌های پرداخت بین‌المللی برای کارآفرینان دیجیتال.'
        : 'توسعت إلى الخدمات المالية لحل تحديات المدفوعات الدولية لرواد الأعمال الرقمية.'
    },
    {
      year: '2021',
      title: language === 'en' || language === 'tr' ? 'AI Development' : 
             language === 'fa' ? 'توسعه هوش مصنوعی' : 'تطوير الذكاء الاصطناعي',
      description: language === 'en' || language === 'tr'
        ? 'Started AI research and development of intelligent assistants for business and productivity.' 
        : language === 'fa'
        ? 'شروع تحقیق و توسعه هوش مصنوعی و دستیارهای هوشمند برای کسب‌وکار و بهره‌وری.'
        : 'بدأ البحث والتطوير في الذكاء الاصطناعي والمساعدين الذكيين للأعمال والإنتاجية.'
    },
    {
      year: '2022',
      title: language === 'en' || language === 'tr' ? 'Global Expansion' : 
             language === 'fa' ? 'گسترش جهانی' : 'التوسع العالمي',
      description: language === 'en' || language === 'tr'
        ? 'Established operations in the UK, Australia, and UAE to create a truly global network.' 
        : language === 'fa'
        ? 'راه‌اندازی عملیات در بریتانیا، استرالیا و امارات برای ایجاد یک شبکه واقعاً جهانی.'
        : 'أسست عمليات في المملكة المتحدة وأستراليا والإمارات العربية المتحدة لإنشاء شبكة عالمية حقًا.'
    },
    {
      year: '2023',
      title: language === 'en' || language === 'tr' ? 'Synapse Launch' : 
             language === 'fa' ? 'راه‌اندازی سیناپس' : 'إطلاق سينابس',
      description: language === 'en' || language === 'tr'
        ? 'Launched Synapse, a customizable AI agent creation platform for coaches, creators, and businesses.' 
        : language === 'fa'
        ? 'راه‌اندازی سیناپس، یک پلتفرم قابل تنظیم برای ایجاد عامل‌های هوش مصنوعی برای مربیان، سازندگان و کسب‌وکارها.'
        : 'أطلقت سينابس، وهي منصة قابلة للتخصيص لإنشاء وكيل ذكاء اصطناعي للمدربين والمبدعين والشركات.'
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 heading-gradient dark:text-white ${language === 'fa' || language === 'ar' ? 'font-vazir' : 'font-display'}`}>
              {t('about.title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 text-white dark:from-gray-800 dark:to-gray-900">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">{t('about.vision.title')}</h2>
                <p className="text-gray-200">{t('about.vision.text')}</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-blue-700 to-blue-600 text-white dark:from-blue-800 dark:to-blue-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">{t('about.mission.title')}</h2>
                <p className="text-gray-200">{t('about.mission.text')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Reza Rafiei" 
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div>
                <h2 className={`text-3xl font-bold mb-4 heading-gradient dark:text-white ${language === 'fa' || language === 'ar' ? 'font-vazir' : 'font-display'}`}>
                  Reza Rafiei
                </h2>
                <p className="text-sm text-primary font-medium mb-4">
                  {language === 'en' || language === 'tr' ? 'Founder & CEO' : 
                   language === 'fa' ? 'بنیانگذار و مدیرعامل' : 'المؤسس والرئيس التنفيذي'}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {language === 'en' || language === 'tr' 
                    ? 'Reza Rafiei is an entrepreneur, educator, and visionary founder behind several international ventures in education, artificial intelligence, financial services, and digital business development. With over 300,000 followers on social media and thousands of students worldwide, his mission is to empower individuals to launch borderless businesses.'
                    : language === 'fa'
                    ? 'رضا رفیعی کارآفرین، مربی و بنیانگذار چندین شرکت بین‌المللی در زمینه‌های آموزش، هوش مصنوعی، خدمات مالی و توسعه کسب‌وکار دیجیتال است. با بیش از ۳۰۰,۰۰۰ دنبال‌کننده در رسانه‌های اجتماعی و هزاران دانشجو در سراسر جهان، ماموریت او توانمندسازی افراد برای راه‌اندازی کسب‌وکارهای بدون مرز است.'
                    : 'رضا رفيعي هو رائد أعمال ومعلم ومؤسس صاحب رؤية وراء العديد من المشاريع الدولية في مجالات التعليم والذكاء الاصطناعي والخدمات المالية وتطوير الأعمال الرقمية. مع أكثر من 300,000 متابع على وسائل التواصل الاجتماعي وآلاف الطلاب حول العالم، مهمته هي تمكين الأفراد من إطلاق أعمال بلا حدود.'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800/30">
        <div className="container mx-auto">
          <SectionTitle 
            title={t('about.timeline.title')} 
            center={true}
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-700 transform md:translate-x-[-0.5px]"></div>
              
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
                  <div className={`absolute top-0 w-4 h-4 rounded-full bg-primary ${
                    index % 2 === 0
                      ? 'left-[-8px] md:left-auto md:right-[-8px]'
                      : 'left-[-8px]'
                  }`}></div>
                  
                  {/* Year */}
                  <span className="inline-block bg-primary text-white text-sm font-bold rounded-full px-3 py-1 mb-2">
                    {event.year}
                  </span>
                  
                  {/* Content */}
                  <h3 className={`text-xl font-bold mb-2 dark:text-white ${language === 'fa' || language === 'ar' ? 'font-vazir' : 'font-display'}`}>
                    {event.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{event.description}</p>
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
