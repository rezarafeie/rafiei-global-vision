
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
        'group block w-full glow-card p-6 hover-lift hover:shadow-glow',
        isRtl ? 'text-right' : 'text-left',
        className
      )}
    >
      <div className="flex items-center gap-4">
        <div className="relative p-4 bg-gradient-to-br from-primary/20 to-primary-glow/10 rounded-xl group-hover:shadow-glow transition-all duration-500">
          <IconComponent className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
          <div className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="flex-1">
          <h3 className={`font-bold text-xl mb-2 text-foreground group-hover:text-primary transition-colors duration-300 ${isRtl ? 'font-vazir' : 'font-display'}`}>
            {product.name}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
};

export default ProductCard;
