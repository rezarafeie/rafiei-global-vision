
import React from 'react';
import { BRAND } from '@/constants/brand';
import ProductCard from '@/components/ProductCard';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProductGridProps {
  className?: string;
}

const ProductGrid = ({ className }: ProductGridProps) => {
  const { t } = useLanguage();
  
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ${className}`}>
      {BRAND.products.map(product => (
        <ProductCard 
          key={product.id}
          productId={product.id}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
