
import React, { ReactNode } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { BRAND } from '@/constants/brand';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { language } = useLanguage();
  const isRtl = language === 'fa' || language === 'ar';
  
  return (
    <div className={`min-h-screen flex flex-col ${isRtl ? 'rtl font-vazir' : 'ltr'} bg-background dark:bg-gray-900`}>
      <Navigation />
      <main className="flex-grow pt-16">
        <div className="absolute top-0 left-0 w-full h-screen overflow-hidden -z-10 opacity-10 dark:opacity-5">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/30 rounded-full filter blur-3xl"></div>
          <div className="absolute top-1/4 -left-20 w-60 h-60 bg-blue-400/30 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl"></div>
        </div>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
