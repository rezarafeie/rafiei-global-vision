
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
  
  return (
    <Card className="overflow-hidden h-full flex flex-col border-0 shadow-sm hover:shadow transition-all duration-300">
      <CardHeader className="pb-0">
        <CardTitle className="text-lg font-medium text-gray-800">{title}</CardTitle>
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
