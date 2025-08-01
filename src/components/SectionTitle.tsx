
import React from 'react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import { BRAND } from '@/constants/brand';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

const SectionTitle = ({ title, subtitle, center = false, className }: SectionTitleProps) => {
  const { language } = useLanguage();
  const isRtl = language === 'fa' || language === 'ar';
  const fontFamily = isRtl ? 'font-vazir' : 'font-display';
  
  return (
    <div className={cn('mb-12 relative', center && 'text-center', className)}>
      <h2 className={`text-3xl md:text-5xl font-bold mb-4 tracking-tight ${fontFamily} relative z-10 heading-gradient`}>
        {title}
        <span className="absolute bottom-0 left-0 h-1 w-16 bg-primary rounded-full"></span>
      </h2>
      {subtitle && <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
