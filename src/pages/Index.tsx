import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Users, Globe, Star, Brain, TrendingUp, Zap, BookOpen, Network, Briefcase, CreditCard, Podcast, Wallet, Shield, Newspaper, Layers, GraduationCap, Forward } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { BRAND } from '@/constants/brand';

const Index = () => {
  const { t, language } = useLanguage();
  const isRtl = language === 'fa' || language === 'ar';

  const iconMap: Record<string, React.ReactNode> = {
    Brain: <Brain className="h-6 w-6" />,
    GraduationCap: <GraduationCap className="h-6 w-6" />,
    Forward: <Forward className="h-6 w-6" />,
    TrendingUp: <TrendingUp className="h-6 w-6" />,
    Zap: <Zap className="h-6 w-6" />,
    Book: <BookOpen className="h-6 w-6" />,
    Network: <Network className="h-6 w-6" />,
    Briefcase: <Briefcase className="h-6 w-6" />,
    CreditCard: <CreditCard className="h-6 w-6" />,
    Podcast: <Podcast className="h-6 w-6" />,
    Wallet: <Wallet className="h-6 w-6" />,
    Shield: <Shield className="h-6 w-6" />,
    Newspaper: <Newspaper className="h-6 w-6" />,
    Layers: <Layers className="h-6 w-6" />,
  };

  const services = BRAND.products.map(product => ({
    icon: iconMap[product.icon] || <Star className="h-6 w-6" />,
    title: product.name,
    description: product.description[language as keyof typeof product.description] || product.description.en,
    url: product.url
  }));

  return (
    <div className={isRtl ? 'rtl text-right' : 'ltr text-left'}>
      {/* Hero Section - Focused on Boundless */}
      <section className="min-h-[85vh] flex items-center justify-center py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5">
              <GraduationCap className="h-4 w-4 text-primary" />
              <span className={`text-sm text-primary ${isRtl ? 'font-vazir' : ''}`}>
                {language === 'fa' ? 'دوره شروع - آکادمی رفیعی' : 'Boundless Course - Rafiei Academy'}
              </span>
            </div>
            
            <h1 className={`text-4xl md:text-6xl font-bold text-foreground leading-tight ${isRtl ? 'font-vazir' : 'font-display'}`}>
              {language === 'fa' ? 'شروع مسیر درآمد دلاری' : 'Start Your Global Income Journey'}
            </h1>
            
            <p className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto ${isRtl ? 'font-vazir' : ''}`}>
              {language === 'fa' 
                ? 'جامع‌ترین دوره آموزشی برای کار از ایران و کسب درآمد دلاری از هر کجای دنیا' 
                : 'The most comprehensive course to work from Iran and earn global income'}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button asChild size="lg" className="text-base px-10 h-12">
                <a href="https://academy.rafiei.co/enroll/?course=boundless" className="flex items-center gap-2">
                  <span>{language === 'fa' ? 'شروع یادگیری' : 'Start Learning'}</span>
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Product Grid */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-2xl md:text-4xl font-bold mb-3 text-foreground ${isRtl ? 'font-vazir' : 'font-display'}`}>
                {language === 'fa' ? 'محصولات دیگر' : 'Other Products'}
              </h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {services.slice(0, 8).map((service, index) => (
                <a
                  key={index}
                  href={service.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 rounded-lg border border-border/50 bg-card hover:border-primary/30 transition-all"
                >
                  <div className="text-primary mb-2">{service.icon}</div>
                  <h3 className={`text-sm font-semibold text-foreground ${isRtl ? 'font-vazir' : ''}`}>
                    {service.title}
                  </h3>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;