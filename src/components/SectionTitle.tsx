
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

const SectionTitle = ({ title, subtitle, center = false, className }: SectionTitleProps) => {
  return (
    <div className={cn('mb-12', center && 'text-center', className)}>
      <h2 className="font-display text-3xl md:text-4xl font-medium mb-4 text-gray-800">
        {title}
      </h2>
      {subtitle && <p className="text-lg text-muted-foreground max-w-3xl">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
