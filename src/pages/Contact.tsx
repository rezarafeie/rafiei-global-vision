
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin } from 'lucide-react';
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
    
    // In a real app, you'd send this data to your backend
    console.log('Form submitted:', formData);
    
    // Show success toast
    toast({
      title: language === 'en' || language === 'tr' ? 'Message Sent' : 
             language === 'fa' ? 'پیام ارسال شد' : 'تم إرسال الرسالة',
      description: language === 'en' || language === 'tr' ? 'We have received your message and will get back to you soon.' :
                   language === 'fa' ? 'ما پیام شما را دریافت کردیم و به زودی با شما تماس خواهیم گرفت.' : 'لقد تلقينا رسالتك وسنعاود الاتصال بك قريبًا.',
    });
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className={isRtl ? 'rtl text-right' : 'ltr text-left'}>
      {/* Page Header */}
      <section className="page-header">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 heading-gradient ${isRtl ? 'font-vazir' : 'font-display'}`}>
              {t('contact.title')}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding pb-32">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <SectionTitle 
                title={language === 'en' || language === 'tr' ? 'Send us a message' : 
                       language === 'fa' ? 'برای ما پیام ارسال کنید' : 'أرسل لنا رسالة'} 
              />
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium mb-2 text-foreground ${isRtl ? 'font-vazir' : ''}`}>
                    {t('contact.form.name')}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="futuristic-border"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className={`block text-sm font-medium mb-2 text-foreground ${isRtl ? 'font-vazir' : ''}`}>
                    {t('contact.form.email')}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="futuristic-border"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className={`block text-sm font-medium mb-2 text-foreground ${isRtl ? 'font-vazir' : ''}`}>
                    {t('contact.form.subject')}
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="futuristic-border"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className={`block text-sm font-medium mb-2 text-foreground ${isRtl ? 'font-vazir' : ''}`}>
                    {t('contact.form.message')}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="futuristic-border"
                    required
                  />
                </div>
                
                <Button type="submit" className="glow-button w-full py-6 font-medium text-base">
                  {t('contact.form.submit')}
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className={`${isRtl ? 'lg:pr-12' : 'lg:pl-12'}`}>
              <SectionTitle 
                title={language === 'en' || language === 'tr' ? 'Contact Information' : 
                       language === 'fa' ? 'اطلاعات تماس' : 'معلومات الاتصال'} 
              />
              
              <div className="space-y-10">
                <div className={`flex items-start ${isRtl ? 'flex-row-reverse' : ''}`}>
                  <div className="bg-primary/10 p-4 rounded-xl flex-shrink-0 shadow-glow">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className={`${isRtl ? 'mr-6' : 'ml-6'}`}>
                    <h3 className={`font-medium text-lg mb-1 text-foreground ${isRtl ? 'font-vazir' : ''}`}>
                      {t('contact.info.email')}
                    </h3>
                    <a href="mailto:contact@rafiei.co" className="text-primary hover:text-primary/80 transition-colors">
                      contact@rafiei.co
                    </a>
                  </div>
                </div>
                
                <div className={`flex items-start ${isRtl ? 'flex-row-reverse' : ''}`}>
                  <div className="bg-primary/10 p-4 rounded-xl flex-shrink-0 shadow-glow">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className={`${isRtl ? 'mr-6' : 'ml-6'}`}>
                    <h3 className={`font-medium text-lg mb-1 text-foreground ${isRtl ? 'font-vazir' : ''}`}>
                      {t('contact.info.location')}
                    </h3>
                    <p className="text-muted-foreground mb-1">2 Frederick Street, Kings Cross</p>
                    <p className="text-muted-foreground">London, United Kingdom</p>
                  </div>
                </div>
                
                <div className="mt-16 glow-card p-8">
                  <h3 className={`text-lg font-bold mb-4 text-foreground ${isRtl ? 'font-vazir' : ''}`}>
                    {t('contact.info.company')}
                  </h3>
                  <p className="text-muted-foreground mb-2">RAFIEI LTD</p>
                  <p className="text-muted-foreground mb-2">Register Number: 14994763</p>
                  <p className="text-muted-foreground">UK Companies House</p>
                </div>
              </div>
              
              {/* Map Placeholder */}
              <div className="mt-8 h-64 futuristic-border overflow-hidden hover-lift">
                <div className="w-full h-full bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                    <p className="text-muted-foreground">Kings Cross, London</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
