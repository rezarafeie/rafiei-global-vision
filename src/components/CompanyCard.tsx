
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
  const { t, language } = useLanguage();
  
  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all hover:shadow-lg">
      <CardHeader className="bg-charcoal-light text-white">
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-6 pb-2 flex-grow">
        <CardDescription className="text-foreground mb-4">{description}</CardDescription>
        {services && <p className="mb-2 text-sm">{services}</p>}
        {impact && <p className="text-sm text-blue font-medium">{impact}</p>}
      </CardContent>
      <CardFooter className="pt-2 pb-6">
        <Button asChild variant="outline">
          <Link to={`/companies/${id}`}>{language === 'en' ? 'Learn More' : 'بیشتر بدانید'}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CompanyCard;
