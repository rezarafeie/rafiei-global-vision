
import React from 'react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

const SectionTitle = ({ title, subtitle, center = false, className }: SectionTitleProps) => {
  const { language } = useLanguage();
  
  return (
    <div className={cn('mb-12', center && 'text-center', className)}>
      <h2 className={`text-3xl md:text-4xl font-medium mb-4 text-gray-800 ${language === 'fa' ? 'font-vazir' : 'font-display'}`}>
        {title}
      </h2>
      {subtitle && <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
