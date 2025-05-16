
import React, { ReactNode } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import { useLanguage } from '@/contexts/LanguageContext';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { language } = useLanguage();
  
  return (
    <div className={`min-h-screen flex flex-col ${language === 'fa' ? 'rtl font-vazir' : 'ltr'} bg-white`}>
      <Navigation />
      <main className="flex-grow pt-16">
        <div className="absolute top-0 left-0 w-full h-screen overflow-hidden -z-10 opacity-10">
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
