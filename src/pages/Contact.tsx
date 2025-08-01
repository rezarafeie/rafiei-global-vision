import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Building, Send, MessageCircle, Globe } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const isRtl = language === 'fa' || language === 'ar';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: language === 'en' || language === 'tr' ? 'Message Sent' : 
             language === 'fa' ? 'پیام ارسال شد' : 'تم إرسال الرسالة',
      description: language === 'en' || language === 'tr' ? 'We have received your message and will get back to you soon.' :
                   language === 'fa' ? 'ما پیام شما را دریافت کردیم و به زودی با شما تماس خواهیم گرفت.' : 'لقد تلقينا رسالتك وسنعاود الاتصال بك قريبًا.',
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className={isRtl ? 'rtl text-right' : 'ltr text-left'}>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="floating-elements"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 flex justify-center">
              <div className="glow-card-intense p-4 inline-flex items-center space-x-2">
                <MessageCircle className="h-5 w-5 text-primary" />
                <span className={`text-sm font-medium text-foreground ${isRtl ? 'font-vazir' : ''}`}>
                  {language === 'en' || language === 'tr' ? 'Get in Touch' : 
                   language === 'fa' ? 'در تماس باشید' : 'تواصل معنا'}
                </span>
              </div>
            </div>
            
            <h1 className={`text-5xl md:text-7xl font-bold mb-8 leading-tight ${isRtl ? 'font-vazir' : 'font-display'}`}>
              <span className="heading-gradient text-glow">{t('contact.title')}</span>
            </h1>
            
            <p className={`text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed ${isRtl ? 'font-vazir' : ''}`}>
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="glow-card-intense p-12 hover-lift">
                <div className="mb-8">
                  <h2 className={`text-3xl font-bold mb-4 heading-gradient ${isRtl ? 'font-vazir' : 'font-display'}`}>
                    {language === 'en' || language === 'tr' ? 'Send us a message' : 
                     language === 'fa' ? 'پیام خود را ارسال کنید' : 'أرسل لنا رسالة'}
                  </h2>
                  <p className={`text-muted-foreground ${isRtl ? 'font-vazir' : ''}`}>
                    {language === 'en' || language === 'tr' ? 'We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.' : 
                     language === 'fa' ? 'ما دوست داریم از شما بشنویم. پیام خود را ارسال کنید و ما در اسرع وقت پاسخ خواهیم داد.' : 
                     'نحن نحب أن نسمع منك. أرسل لنا رسالة وسنرد في أقرب وقت ممكن.'}
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className={`block text-sm font-medium mb-3 text-foreground ${isRtl ? 'font-vazir' : ''}`}>
                        {t('contact.form.name')}
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="glow-card border-0 p-4 h-12 text-lg"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className={`block text-sm font-medium mb-3 text-foreground ${isRtl ? 'font-vazir' : ''}`}>
                        {t('contact.form.email')}
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="glow-card border-0 p-4 h-12 text-lg"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className={`block text-sm font-medium mb-3 text-foreground ${isRtl ? 'font-vazir' : ''}`}>
                      {t('contact.form.subject')}
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="glow-card border-0 p-4 h-12 text-lg"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className={`block text-sm font-medium mb-3 text-foreground ${isRtl ? 'font-vazir' : ''}`}>
                      {t('contact.form.message')}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="glow-card border-0 p-4 text-lg resize-none"
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="glow-button w-full py-6 text-lg flex items-center justify-center space-x-2">
                    <Send className="h-5 w-5" />
                    <span>{t('contact.form.submit')}</span>
                  </Button>
                </form>
              </div>
              
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="glow-card-intense p-12 hover-lift">
                  <div className="w-16 h-16 mb-8 glow-card rounded-2xl flex items-center justify-center">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 text-foreground ${isRtl ? 'font-vazir' : 'font-display'}`}>
                    {t('contact.info.email')}
                  </h3>
                  <p className={`text-muted-foreground mb-4 ${isRtl ? 'font-vazir' : ''}`}>
                    {language === 'en' || language === 'tr' ? 'Send us an email anytime!' : 
                     language === 'fa' ? 'هر زمان برای ما ایمیل ارسال کنید!' : 'أرسل لنا بريدًا إلكترونيًا في أي وقت!'}
                  </p>
                  <a href="mailto:contact@rafiei.co" className="text-primary hover:text-primary/80 transition-colors text-lg font-medium">
                    contact@rafiei.co
                  </a>
                </div>
                
                <div className="glow-card-intense p-12 hover-lift">
                  <div className="w-16 h-16 mb-8 glow-card rounded-2xl flex items-center justify-center">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 text-foreground ${isRtl ? 'font-vazir' : 'font-display'}`}>
                    {t('contact.info.location')}
                  </h3>
                  <div className={`text-muted-foreground space-y-1 ${isRtl ? 'font-vazir' : ''}`}>
                    <p>2 Frederick Street, Kings Cross</p>
                    <p>London, United Kingdom</p>
                  </div>
                </div>
                
                <div className="glow-card-intense p-12 hover-lift">
                  <div className="w-16 h-16 mb-8 glow-card rounded-2xl flex items-center justify-center">
                    <Building className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 text-foreground ${isRtl ? 'font-vazir' : 'font-display'}`}>
                    {t('contact.info.company')}
                  </h3>
                  <div className={`text-muted-foreground space-y-1 ${isRtl ? 'font-vazir' : ''}`}>
                    <p className="font-medium">RAFIEI LTD</p>
                    <p>Register Number: 14994763</p>
                    <p>UK Companies House</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-32 subtle-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className={`text-3xl md:text-5xl font-bold mb-6 heading-gradient ${isRtl ? 'font-vazir' : 'font-display'}`}>
                {language === 'en' || language === 'tr' ? 'Global Presence' : 
                 language === 'fa' ? 'حضور جهانی' : 'الحضور العالمي'}
              </h2>
              <p className={`text-xl text-muted-foreground max-w-3xl mx-auto ${isRtl ? 'font-vazir' : ''}`}>
                {language === 'en' || language === 'tr' ? 'Serving students and entrepreneurs worldwide' : 
                 language === 'fa' ? 'خدمت‌رسانی به دانشجویان و کارآفرینان در سراسر جهان' : 
                 'خدمة الطلاب ورجال الأعمال في جميع أنحاء العالم'}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glow-card p-8 text-center hover-lift">
                <div className="w-16 h-16 mx-auto mb-6 glow-card rounded-2xl flex items-center justify-center">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className={`text-xl font-bold mb-3 text-foreground ${isRtl ? 'font-vazir' : ''}`}>
                  {language === 'en' || language === 'tr' ? 'United Kingdom' : 
                   language === 'fa' ? 'بریتانیا' : 'المملكة المتحدة'}
                </h3>
                <p className={`text-muted-foreground ${isRtl ? 'font-vazir' : ''}`}>
                  {language === 'en' || language === 'tr' ? 'Headquarters & European Operations' : 
                   language === 'fa' ? 'دفتر مرکزی و عملیات اروپایی' : 'المقر الرئيسي والعمليات الأوروبية'}
                </p>
              </div>
              
              <div className="glow-card p-8 text-center hover-lift">
                <div className="w-16 h-16 mx-auto mb-6 glow-card rounded-2xl flex items-center justify-center">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className={`text-xl font-bold mb-3 text-foreground ${isRtl ? 'font-vazir' : ''}`}>
                  {language === 'en' || language === 'tr' ? 'Australia' : 
                   language === 'fa' ? 'استرالیا' : 'أستراليا'}
                </h3>
                <p className={`text-muted-foreground ${isRtl ? 'font-vazir' : ''}`}>
                  {language === 'en' || language === 'tr' ? 'Asia-Pacific Operations' : 
                   language === 'fa' ? 'عملیات آسیا-اقیانوسیه' : 'عمليات آسيا والمحيط الهادئ'}
                </p>
              </div>
              
              <div className="glow-card p-8 text-center hover-lift">
                <div className="w-16 h-16 mx-auto mb-6 glow-card rounded-2xl flex items-center justify-center">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className={`text-xl font-bold mb-3 text-foreground ${isRtl ? 'font-vazir' : ''}`}>
                  {language === 'en' || language === 'tr' ? 'UAE' : 
                   language === 'fa' ? 'امارات' : 'الإمارات'}
                </h3>
                <p className={`text-muted-foreground ${isRtl ? 'font-vazir' : ''}`}>
                  {language === 'en' || language === 'tr' ? 'Middle East Operations' : 
                   language === 'fa' ? 'عملیات خاورمیانه' : 'عمليات الشرق الأوسط'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;