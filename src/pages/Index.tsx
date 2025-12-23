import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  ArrowRight, Users, Globe, Star, Brain, TrendingUp, Zap, BookOpen, 
  Network, Briefcase, CreditCard, Podcast, Wallet, Shield, Newspaper, 
  Layers, GraduationCap, Forward, Cloud, Hammer, PhoneCall, Flower2,
  Sparkles, Target, Lightbulb, Rocket, CheckCircle, Award, Heart
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { BRAND } from '@/constants/brand';

const Index = () => {
  const { t, language } = useLanguage();
  const isRtl = language === 'fa' || language === 'ar';

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const iconMap: Record<string, React.ReactNode> = {
    Cloud: <Cloud className="h-6 w-6" />,
    Hammer: <Hammer className="h-6 w-6" />,
    PhoneCall: <PhoneCall className="h-6 w-6" />,
    Lotus: <Flower2 className="h-6 w-6" />,
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

  const services = BRAND.products
    .filter(product => !['financial', 'bnets', 'boundless-network'].includes(product.id))
    .map(product => ({
      icon: iconMap[product.icon] || <Star className="h-6 w-6" />,
      title: product.name,
      description: product.description[language as keyof typeof product.description] || product.description.en,
      url: product.url
    }));

  const stats = [
    {
      icon: <Users className="h-7 w-7" />,
      value: '300K+',
      label: language === 'en' || language === 'tr' ? 'Monthly Followers' : 
             language === 'fa' ? 'دنبال‌کنندگان ماهانه' : 'متابعون شهريًا',
      description: 'Across all platforms'
    },
    {
      icon: <Globe className="h-7 w-7" />,
      value: '30K+',
      label: language === 'en' || language === 'tr' ? 'Monthly Users' : 
             language === 'fa' ? 'کاربران ماهانه' : 'مستخدمون شهريًا',
      description: 'Active monthly users'
    },
    {
      icon: <Star className="h-7 w-7" />,
      value: `${BRAND.products.length}+`,
      label: language === 'en' || language === 'tr' ? 'Digital Products' : 
             language === 'fa' ? 'محصولات دیجیتال' : 'منتجات رقمية',
      description: 'Innovative solutions'
    },
    {
      icon: <Award className="h-7 w-7" />,
      value: '4+',
      label: language === 'en' || language === 'tr' ? 'Countries' : 
             language === 'fa' ? 'کشورها' : 'البلدان',
      description: 'Global presence'
    }
  ];

  const features = [
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: 'Innovation First',
      description: 'Cutting-edge solutions that push the boundaries of what\'s possible in digital technology.'
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Results Driven',
      description: 'Every product and service is designed with measurable outcomes and real-world impact in mind.'
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: 'User Focused',
      description: 'We prioritize user experience, creating intuitive interfaces that delight and empower.'
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: 'Rapid Growth',
      description: 'Scalable solutions that grow with your business and adapt to changing market needs.'
    }
  ];

  const highlights = [
    'Technology & SaaS Platforms',
    'Educational Resources',
    'Media & Content Creation',
    'Business Consulting',
    'Digital Marketing',
    'Financial Technology'
  ];

  return (
    <div className={isRtl ? 'rtl text-right' : 'ltr text-left'}>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/8 via-primary/3 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-primary/15 rounded-full blur-[90px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-[280px] h-[280px] bg-primary/12 rounded-full blur-[70px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-[220px] h-[220px] bg-primary/10 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '3s' }} />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="max-w-5xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Building the Future of Digital Innovation
              </span>
            </motion.div>
            
            <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight ${isRtl ? 'font-vazir' : 'font-display'}`}>
              <span className="text-foreground">{t('home.hero.title').split(' ').slice(0, 2).join(' ')}</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                {t('home.hero.title').split(' ').slice(2).join(' ') || 'Digital Excellence'}
              </span>
            </h1>
            
            <p className={`text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed ${isRtl ? 'font-vazir' : ''}`}>
              {t('home.hero.subtitle')}
            </p>

            <motion.div 
              className="flex flex-wrap justify-center gap-3 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {highlights.map((highlight, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 rounded-full bg-card border border-border/50 text-sm font-medium text-muted-foreground hover:border-primary/30 hover:text-foreground transition-all cursor-default"
                >
                  {highlight}
                </span>
              ))}
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button asChild size="lg" className="text-base px-8 h-14">
                <Link to="/about" className="flex items-center gap-2">
                  <span>{t('home.hero.cta')}</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base px-8 h-14">
                <Link to="/contact">
                  {language === 'en' || language === 'tr' ? 'Get in Touch' : 
                   language === 'fa' ? 'تماس با ما' : 'تواصل معنا'}
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-muted/30" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-foreground ${isRtl ? 'font-vazir' : 'font-display'}`}>
                {language === 'en' || language === 'tr' ? 'Trusted by Thousands Worldwide' : 
                 language === 'fa' ? 'مورد اعتماد هزاران نفر در سراسر جهان' : 'موثوق من قبل الآلاف في جميع أنحاء العالم'}
              </h2>
              <p className={`text-xl text-muted-foreground max-w-2xl mx-auto ${isRtl ? 'font-vazir' : ''}`}>
                {t('home.intro.text')}
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {stats.map((stat, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="p-8 text-center border-border/50 bg-card hover:border-primary/30 transition-all group h-full">
                    <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                      {stat.icon}
                    </div>
                    <div className="text-4xl md:text-5xl font-bold mb-2 text-foreground">{stat.value}</div>
                    <p className={`text-foreground font-medium mb-1 ${isRtl ? 'font-vazir' : ''}`}>
                      {stat.label}
                    </p>
                    <p className="text-sm text-muted-foreground">{stat.description}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Target className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Why Choose Us</span>
              </div>
              <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-foreground ${isRtl ? 'font-vazir' : 'font-display'}`}>
                Built Different, Built Better
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We combine innovation, expertise, and passion to deliver solutions that make a real difference.
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {features.map((feature, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="p-8 border-border/50 bg-card hover:border-primary/30 transition-all group h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products & Services Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-muted/30" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Layers className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Our Ecosystem</span>
              </div>
              <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-foreground ${isRtl ? 'font-vazir' : 'font-display'}`}>
                {t('home.products.quick_access')}
              </h2>
              <p className={`text-xl text-muted-foreground max-w-2xl mx-auto ${isRtl ? 'font-vazir' : ''}`}>
                {language === 'en' || language === 'tr' ? 'Explore our comprehensive suite of digital solutions designed to empower your success.' : 
                 language === 'fa' ? 'مجموعه جامع راه‌حل‌های دیجیتال ما را کشف کنید که برای توانمندسازی موفقیت شما طراحی شده‌اند.' : 
                 'استكشف مجموعتنا الشاملة من الحلول الرقمية المصممة لتمكين نجاحك.'}
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {services.map((service, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="p-6 border-border/50 bg-card hover:border-primary/30 transition-all group h-full flex flex-col">
                    <div className="w-14 h-14 mb-4 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                      {service.icon}
                    </div>
                    <h3 className={`text-lg font-bold mb-2 text-foreground ${isRtl ? 'font-vazir' : ''}`}>
                      {service.title}
                    </h3>
                    <p className={`text-sm text-muted-foreground mb-4 flex-grow ${isRtl ? 'font-vazir' : ''}`}>
                      {service.description}
                    </p>
                    <a 
                      href={service.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                    >
                      <span>
                        {language === 'en' || language === 'tr' ? 'Learn More' : 
                         language === 'fa' ? 'بیشتر بدانید' : 'اعرف المزيد'}
                      </span>
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Button asChild size="lg" variant="outline" className="text-base px-8">
                <Link to="/about" className="flex items-center gap-2">
                  <span>View All Products</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <Rocket className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Our Vision</span>
                </div>
                <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-foreground ${isRtl ? 'font-vazir' : 'font-display'}`}>
                  Empowering Global Innovation
                </h2>
                <p className={`text-lg text-muted-foreground mb-8 leading-relaxed ${isRtl ? 'font-vazir' : ''}`}>
                  {t('about.vision.text')}
                </p>
                <div className="space-y-4">
                  {[
                    'Democratizing access to technology',
                    'Building sustainable digital solutions',
                    'Fostering global entrepreneurship',
                    'Creating meaningful impact worldwide'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                <Card className="p-6 border-border/50 bg-card hover:border-primary/30 transition-all text-center">
                  <div className="text-4xl font-bold text-primary mb-2">5+</div>
                  <p className="text-muted-foreground text-sm">Years of Innovation</p>
                </Card>
                <Card className="p-6 border-border/50 bg-card hover:border-primary/30 transition-all text-center">
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <p className="text-muted-foreground text-sm">Global Support</p>
                </Card>
                <Card className="p-6 border-border/50 bg-card hover:border-primary/30 transition-all text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <p className="text-muted-foreground text-sm">Commitment</p>
                </Card>
                <Card className="p-6 border-border/50 bg-card hover:border-primary/30 transition-all text-center">
                  <div className="text-4xl font-bold text-primary mb-2">∞</div>
                  <p className="text-muted-foreground text-sm">Possibilities</p>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-muted/30" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Start Your Journey</span>
              </div>
              
              <h2 className={`text-4xl md:text-6xl font-bold mb-6 text-foreground ${isRtl ? 'font-vazir' : 'font-display'}`}>
                {language === 'en' || language === 'tr' ? 'Ready to Build Your Future?' : 
                 language === 'fa' ? 'آماده ساخت آینده‌تان هستید؟' : 'هل أنت مستعد لبناء مستقبلك؟'}
              </h2>
              <p className={`text-xl text-muted-foreground mb-10 max-w-2xl mx-auto ${isRtl ? 'font-vazir' : ''}`}>
                Join thousands of entrepreneurs, creators, and innovators who are already transforming their ideas into reality with Rafiei Group.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-base px-8 h-14">
                  <Link to="/about" className="flex items-center gap-2">
                    <span>
                      {language === 'en' || language === 'tr' ? 'Learn About Our Mission' : 
                       language === 'fa' ? 'درباره ماموریت ما' : 'تعرف على مهمتنا'}
                    </span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base px-8 h-14">
                  <Link to="/contact">
                    {language === 'en' || language === 'tr' ? 'Contact Us Today' : 
                     language === 'fa' ? 'همین امروز تماس بگیرید' : 'اتصل بنا اليوم'}
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
