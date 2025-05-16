
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

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
    <Card className="overflow-hidden h-full flex flex-col transition-all hover:shadow-card-hover border border-gray-100">
      <CardHeader className="bg-primary/5 border-b border-gray-100">
        <CardTitle className="text-xl font-medium text-gray-800">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-6 pb-2 flex-grow">
        <CardDescription className="text-gray-600 mb-4 !text-sm">{description}</CardDescription>
        {services && <p className="mb-2 text-sm text-gray-600">{services}</p>}
        {impact && <p className="text-sm text-primary font-medium">{impact}</p>}
      </CardContent>
      <CardFooter className="pt-2 pb-6">
        <Button asChild variant="outline" className="shadow-sm hover:shadow-md transition-shadow">
          <Link to={`/companies/${id}`}>{language === 'en' ? 'Learn More' : 'بیشتر بدانید'}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CompanyCard;
