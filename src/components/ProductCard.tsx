
import React from 'react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import { BRAND } from '@/constants/brand';
import { Icon } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

interface ProductCardProps {
  productId: string;
  className?: string;
}

const ProductCard = ({ productId, className }: ProductCardProps) => {
  const { language, t } = useLanguage();
  const isRtl = language === 'fa' || language === 'ar';
  
  // Find the product information from our brand constants
  const product = BRAND.products.find(p => p.id === productId);
  
  if (!product) return null;
  
  // Get the description in the current language or fall back to English
  const description = product.description[language] || product.description.en;
  
  // Get the icon component dynamically
  const IconComponent = (LucideIcons as Record<string, any>)[product.icon] || LucideIcons.Globe;
  
  return (
    <a 
      href={product.url}
      target="_blank"
      rel="noopener noreferrer" 
      className={cn(
        'block w-full transition-all duration-300 p-4 rounded-lg border border-transparent',
        'hover:border-primary/20 hover:shadow-lg hover:-translate-y-1 hover:bg-card',
        'dark:hover:bg-gray-800 dark:hover:border-primary/30',
        isRtl ? 'text-right' : 'text-left',
        className
      )}
    >
      <div className="flex items-center gap-4">
        <div className="p-3 bg-primary/10 dark:bg-primary/20 rounded-full">
          <IconComponent className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className={`font-bold text-lg mb-1 ${isRtl ? 'font-vazir' : 'font-display'}`}>
            {product.name}
          </h3>
          <p className="text-muted-foreground text-sm">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
};

export default ProductCard;
