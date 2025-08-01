
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
    <div className={`min-h-screen flex flex-col ${isRtl ? 'rtl font-vazir' : 'ltr'} bg-background`}>
      <Navigation />
      <main className="flex-grow pt-16 relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-20 dark:opacity-30">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute top-1/4 -left-32 w-80 h-80 bg-primary-glow/15 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/15 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
