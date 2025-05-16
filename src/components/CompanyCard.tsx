
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';

interface CompanyCardProps {
  id: string;
  title: string;
  description: string;
  services?: string;
  impact?: string;
}

const CompanyCard = ({ id, title, description, services, impact }: CompanyCardProps) => {
  const { language } = useLanguage();
  
  const getImageUrl = (id: string) => {
    const images: Record<string, string> = {
      'academy': 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop',
      'ai-assistant': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2232&auto=format&fit=crop',
      'financial': 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop',
      'business': 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop',
      'ailab': 'https://images.unsplash.com/photo-1677442135406-2658ba502175?q=80&w=1932&auto=format&fit=crop',
      'bnets': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2068&auto=format&fit=crop',
      'bluecast': 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2070&auto=format&fit=crop'
    };
    
    return images[id] || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop';
  };
  
  return (
    <Card className="overflow-hidden h-full flex flex-col border-0 shadow-md hover:shadow-lg transition-all duration-300 group">
      <div className="h-40 overflow-hidden">
        <img 
          src={getImageUrl(id)} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardHeader className="pb-0">
        <CardTitle className="text-lg font-bold text-gray-800">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-4 pb-6 flex-grow flex flex-col">
        <p className="text-sm text-gray-600 mb-auto pb-4">{description}</p>
        <Button asChild variant="ghost" className="justify-start p-0 hover:bg-transparent hover:underline" size="sm">
          <Link to={`/companies/${id}`} className="flex items-center text-primary">
            {language === 'en' ? 'Learn More' : 'بیشتر بدانید'}
            {language === 'en' ? <ArrowRight className="ml-1 h-4 w-4" /> : <ArrowRight className="mr-1 h-4 w-4 rotate-180" />}
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default CompanyCard;
