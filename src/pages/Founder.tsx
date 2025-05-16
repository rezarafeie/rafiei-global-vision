
import React from 'react';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import SectionTitle from '@/components/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';

const Founder = () => {
  const { t, language } = useLanguage();
  
  const resumeItems = [
    { key: 'founder.resume.item1' },
    { key: 'founder.resume.item2' },
    { key: 'founder.resume.item3' },
    { key: 'founder.resume.item4' },
    { key: 'founder.resume.item5' },
    { key: 'founder.resume.item6' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-charcoal text-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-2">
              {t('founder.title')}
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              {t('founder.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {/* Profile Image */}
            <div>
              <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden mb-6">
                {/* Placeholder for founder image */}
                <div className="w-full h-full flex items-center justify-center bg-charcoal-light text-white">
                  <span className="text-xl font-display">Reza Rafiei</span>
                </div>
              </div>
              
              <div className="flex justify-center gap-4">
                <a href="#" aria-label="Twitter" className="text-charcoal hover:text-blue transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a href="#" aria-label="LinkedIn" className="text-charcoal hover:text-blue transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
                  </svg>
                </a>
                <a href="#" aria-label="Instagram" className="text-charcoal hover:text-blue transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" aria-label="Telegram" className="text-charcoal hover:text-blue transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Bio Content */}
            <div className="md:col-span-2">
              <p className="text-lg mb-8">
                {t('founder.bio')}
              </p>
              
              <Card className="mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-display font-bold mb-6">{t('founder.resume.title')}</h2>
                  
                  <ul className="space-y-4">
                    {resumeItems.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-6 h-6 rounded-full bg-blue text-white flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                          {index + 1}
                        </span>
                        <span>{t(item.key)}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-charcoal text-white p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold mb-2 text-blue">10+</div>
                  <p className="text-gray-300">{language === 'en' ? 'Years of Experience' : 'سال‌های تجربه'}</p>
                </div>
                <div className="bg-charcoal text-white p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold mb-2 text-blue">5+</div>
                  <p className="text-gray-300">{language === 'en' ? 'Companies Founded' : 'شرکت‌های تأسیس شده'}</p>
                </div>
                <div className="bg-charcoal text-white p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold mb-2 text-blue">3</div>
                  <p className="text-gray-300">{language === 'en' ? 'Global Locations' : 'موقعیت‌های جهانی'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Founder;
