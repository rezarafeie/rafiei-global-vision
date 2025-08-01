import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Target, Heart, Globe, Users, Lightbulb, Rocket } from 'lucide-react';

const About = () => {
  const { t, language } = useLanguage();
  const isRtl = language === 'fa' || language === 'ar';

  const timeline = [
    {
      year: '2018',
      title: language === 'en' || language === 'tr' ? 'Foundation' : 
             language === 'fa' ? 'تاسیس' : 'التأسيس',
      description: language === 'en' || language === 'tr'
        ? 'Rafiei Group was established with a vision to empower individuals through education and technology.'
        : language === 'fa'
        ? 'گروه رفیعی با چشم‌انداز توانمندسازی افراد از طریق آموزش و فناوری تأسیس شد.'
        : 'تأسست مجموعة رفيعي برؤية لتمكين الأفراد من خلال التعليم والتكنولوجيا.',
      icon: Rocket
    },
    {
      year: '2020',
      title: language === 'en' || language === 'tr' ? 'Global Expansion' : 
             language === 'fa' ? 'گسترش جهانی' : 'التوسع العالمي',
      description: language === 'en' || language === 'tr'
        ? 'Expanded operations to UK, Australia, and UAE, serving thousands of students worldwide.'
        : language === 'fa'
        ? 'گسترش عملیات به بریتانیا، استرالیا و امارات و خدمت‌رسانی به هزاران دانشجو در سراسر جهان.'
        : 'توسعت العمليات إلى المملكة المتحدة وأستراليا والإمارات، وخدمة آلاف الطلاب في جميع أنحاء العالم.',
      icon: Globe
    },
    {
      year: '2022',
      title: language === 'en' || language === 'tr' ? 'AI Innovation' : 
             language === 'fa' ? 'نوآوری هوش مصنوعی' : 'ابتكار الذكاء الاصطناعي',
      description: language === 'en' || language === 'tr'
        ? 'Launched AI-powered educational tools and intelligent business assistants.'
        : language === 'fa'
        ? 'راه‌اندازی ابزارهای آموزشی مبتنی بر هوش مصنوعی و دستیارهای هوشمند کسب‌وکار.'
        : 'أطلقت أدوات تعليمية مدعومة بالذكاء الاصطناعي ومساعدين أذكياء للأعمال.',
      icon: Lightbulb
    },
    {
      year: '2024',
      title: language === 'en' || language === 'tr' ? 'Future Ready' : 
             language === 'fa' ? 'آماده آینده' : 'جاهز للمستقبل',
      description: language === 'en' || language === 'tr'
        ? 'Building the next generation of borderless digital solutions and educational platforms.'
        : language === 'fa'
        ? 'ساخت نسل بعدی راه‌حل‌های دیجیتال بدون مرز و پلتفرم‌های آموزشی.'
        : 'بناء الجيل القادم من الحلول الرقمية بلا حدود والمنصات التعليمية.',
      icon: Target
    }
  ];

  return (
    <div className={isRtl ? 'rtl text-right' : 'ltr text-left'}>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="floating-elements"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className={`text-5xl md:text-7xl font-bold mb-8 leading-tight ${isRtl ? 'font-vazir' : 'font-display'}`}>
              <span className="heading-gradient text-glow">{t('about.title')}</span>
            </h1>
            <p className={`text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed ${isRtl ? 'font-vazir' : ''}`}>
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="glow-card-intense p-12 hover-lift">
                <div className="w-16 h-16 mb-8 glow-card rounded-2xl flex items-center justify-center">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h2 className={`text-3xl font-bold mb-6 heading-gradient ${isRtl ? 'font-vazir' : 'font-display'}`}>
                  {t('about.vision.title')}
                </h2>
                <p className={`text-lg text-muted-foreground leading-relaxed ${isRtl ? 'font-vazir' : ''}`}>
                  {t('about.vision.text')}
                </p>
              </div>
              
              <div className="glow-card-intense p-12 hover-lift">
                <div className="w-16 h-16 mb-8 glow-card rounded-2xl flex items-center justify-center">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h2 className={`text-3xl font-bold mb-6 heading-gradient ${isRtl ? 'font-vazir' : 'font-display'}`}>
                  {t('about.mission.title')}
                </h2>
                <p className={`text-lg text-muted-foreground leading-relaxed ${isRtl ? 'font-vazir' : ''}`}>
                  {t('about.mission.text')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-32 subtle-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className={`${isRtl ? 'lg:order-2' : ''}`}>
                <div className="glow-card-intense p-2 rounded-3xl hover-lift-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"
                    alt="Reza Rafiei" 
                    className="w-full h-[500px] object-cover rounded-2xl"
                  />
                </div>
              </div>
              
              <div className={`${isRtl ? 'lg:order-1' : ''}`}>
                <div className="mb-6">
                  <div className="glow-card p-4 inline-flex items-center space-x-2 mb-4">
                    <Users className="h-5 w-5 text-primary" />
                    <span className={`text-sm font-medium text-foreground ${isRtl ? 'font-vazir' : ''}`}>
                      {language === 'en' || language === 'tr' ? 'Founder & CEO' : 
                       language === 'fa' ? 'بنیانگذار و مدیرعامل' : 'المؤسس والرئيس التنفيذي'}
                    </span>
                  </div>
                </div>
                
                <h2 className={`text-4xl md:text-5xl font-bold mb-6 heading-gradient ${isRtl ? 'font-vazir' : 'font-display'}`}>
                  {isRtl ? 'رضا رفیعی' : 'Reza Rafiei'}
                </h2>
                
                <p className={`text-lg text-muted-foreground mb-8 leading-relaxed ${isRtl ? 'font-vazir' : ''}`}>
                  {language === 'en' || language === 'tr' 
                    ? 'Reza Rafiei is an entrepreneur, educator, and visionary founder behind several international ventures in education, artificial intelligence, financial services, and digital business development. With over 300,000 followers on social media and thousands of students worldwide, his mission is to empower individuals to launch borderless businesses.'
                    : language === 'fa'
                    ? 'رضا رفیعی کارآفرین، مربی و بنیانگذار چندین شرکت بین‌المللی در زمینه‌های آموزش، هوش مصنوعی، خدمات مالی و توسعه کسب‌وکار دیجیتال است. با بیش از ۳۰۰,۰۰۰ دنبال‌کننده در رسانه‌های اجتماعی و هزاران دانشجو در سراسر جهان، ماموریت او توانمندسازی افراد برای راه‌اندازی کسب‌وکارهای بدون مرز است.'
                    : 'رضا رفيعي هو رائد أعمال ومعلم ومؤسس صاحب رؤية وراء العديد من المشاريع الدولية في مجالات التعليم والذكاء الاصطناعي والخدمات المالية وتطوير الأعمال الرقمية. مع أكثر من 300,000 متابع على وسائل التواصل الاجتماعي وآلاف الطلاب حول العالم، مهمته هي تمكين الأفراد من إطلاق أعمال بلا حدود.'
                  }
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="glow-card p-6 text-center">
                    <div className="text-3xl font-bold mb-2 heading-gradient">300K+</div>
                    <p className={`text-sm text-muted-foreground ${isRtl ? 'font-vazir' : ''}`}>
                      {language === 'en' || language === 'tr' ? 'Followers' : 
                       language === 'fa' ? 'دنبال‌کننده' : 'متابع'}
                    </p>
                  </div>
                  <div className="glow-card p-6 text-center">
                    <div className="text-3xl font-bold mb-2 heading-gradient">7+</div>
                    <p className={`text-sm text-muted-foreground ${isRtl ? 'font-vazir' : ''}`}>
                      {language === 'en' || language === 'tr' ? 'Products' : 
                       language === 'fa' ? 'محصول' : 'منتج'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className={`text-3xl md:text-5xl font-bold mb-6 heading-gradient ${isRtl ? 'font-vazir' : 'font-display'}`}>
                {t('about.timeline.title')}
              </h2>
              <p className={`text-xl text-muted-foreground max-w-3xl mx-auto ${isRtl ? 'font-vazir' : ''}`}>
                {language === 'en' || language === 'tr' ? 'Our journey of innovation and growth' : 
                 language === 'fa' ? 'سفر ما در نوآوری و رشد' : 'رحلتنا في الابتكار والنمو'}
              </p>
            </div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className={`flex ${isRtl ? 'flex-row-reverse' : 'flex-row'} items-center gap-8 ${index % 2 === 0 ? '' : isRtl ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`flex-1 ${index % 2 === 0 ? (isRtl ? 'text-left' : 'text-right') : (isRtl ? 'text-right' : 'text-left')}`}>
                      <div className={`glow-card p-8 hover-lift ${index % 2 === 0 ? (isRtl ? 'ml-8' : 'mr-8') : (isRtl ? 'mr-8' : 'ml-8')}`}>
                        <div className="glow-card p-3 inline-flex items-center space-x-2 mb-4">
                          <span className="text-sm font-bold text-primary">{item.year}</span>
                        </div>
                        <h3 className={`text-2xl font-bold mb-4 text-foreground ${isRtl ? 'font-vazir' : 'font-display'}`}>
                          {item.title}
                        </h3>
                        <p className={`text-muted-foreground leading-relaxed ${isRtl ? 'font-vazir' : ''}`}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 glow-card-intense rounded-2xl flex items-center justify-center shadow-glow">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      {/* Empty space for alternating layout */}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;