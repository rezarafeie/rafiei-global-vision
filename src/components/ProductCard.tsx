
import React from 'react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import { Book, Activity, Zap, Network, Briefcase, CreditCard, Podcast } from 'lucide-react';

export interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  url: string;
  className?: string;
}

const getIcon = (id: string) => {
  const icons: Record<string, React.ReactNode> = {
    'ai-assistant': <Activity className="h-6 w-6" />,
    'synapse': <Zap className="h-6 w-6" />,
    'academy': <Book className="h-6 w-6" />,
    'bnets': <Network className="h-6 w-6" />,
    'agency': <Briefcase className="h-6 w-6" />,
    'financial': <CreditCard className="h-6 w-6" />,
    'bluecast': <Podcast className="h-6 w-6" />
  };
  
  return icons[id] || <Activity className="h-6 w-6" />;
};

const ProductCard = ({ id, title, description, url, className }: ProductCardProps) => {
  const { language } = useLanguage();
  
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className={cn(
        'block h-full bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700',
        'transition-all duration-300 hover:shadow-lg hover:-translate-y-1',
        'group',
        className
      )}
    >
      <div className="flex items-center space-x-3 mb-3">
        <div className="bg-primary/10 text-primary rounded-full p-3">
          {getIcon(id)}
        </div>
        <h3 className={`text-lg font-bold ${language === 'fa' || language === 'ar' ? 'font-vazir' : ''}`}>
          {title}
        </h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300 text-sm">
        {description}
      </p>
    </a>
  );
};

export default ProductCard;
