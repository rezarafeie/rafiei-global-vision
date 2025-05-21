
import React, { useState } from 'react';
import Layout from '@/components/Layout';
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
    <Layout>
      {/* Page Header */}
      <section className="relative overflow-hidden bg-white dark:bg-gray-900 pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 heading-gradient dark:text-white ${language === 'fa' || language === 'ar' ? 'font-vazir' : 'font-display'}`}>
              {t('contact.title')}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -z-10 top-0 right-0 w-full h-full bg-gradient-to-b from-blue-50/80 to-transparent dark:from-blue-900/5 dark:to-transparent"></div>
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
                  <label htmlFor="name" className="block text-sm font-medium mb-2 dark:text-gray-300">
                    {t('contact.form.name')}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-gray-50 border-gray-200 focus:ring-primary focus:border-primary dark:bg-gray-800 dark:border-gray-700"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 dark:text-gray-300">
                    {t('contact.form.email')}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-gray-50 border-gray-200 focus:ring-primary focus:border-primary dark:bg-gray-800 dark:border-gray-700"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 dark:text-gray-300">
                    {t('contact.form.subject')}
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-gray-50 border-gray-200 focus:ring-primary focus:border-primary dark:bg-gray-800 dark:border-gray-700"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 dark:text-gray-300">
                    {t('contact.form.message')}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-gray-50 border-gray-200 focus:ring-primary focus:border-primary dark:bg-gray-800 dark:border-gray-700"
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full py-6 font-medium text-base">
                  {t('contact.form.submit')}
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="lg:pl-12">
              <SectionTitle 
                title={language === 'en' || language === 'tr' ? 'Contact Information' : 
                       language === 'fa' ? 'اطلاعات تماس' : 'معلومات الاتصال'} 
              />
              
              <div className="space-y-10">
                <div className="flex items-start">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-full flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-6">
                    <h3 className="font-medium text-lg mb-1 dark:text-white">{t('contact.info.email')}</h3>
                    <a href="mailto:contact@rafiei.co" className="text-primary hover:underline">
                      contact@rafiei.co
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-full flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-6">
                    <h3 className="font-medium text-lg mb-1 dark:text-white">{t('contact.info.location')}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-1">2 Frederick Street, Kings Cross</p>
                    <p className="text-gray-600 dark:text-gray-300">London, United Kingdom</p>
                  </div>
                </div>
                
                <div className="mt-16 bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
                  <h3 className="text-lg font-bold mb-4 dark:text-white">{t('contact.info.company')}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">RAFIEI LTD</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">Register Number: 14994763</p>
                  <p className="text-gray-600 dark:text-gray-300">UK Companies House</p>
                </div>
              </div>
              
              {/* Map Placeholder - In a real implementation, replace with actual Google Map */}
              <div className="mt-8 h-64 bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden">
                <img 
                  src="https://maps.googleapis.com/maps/api/staticmap?center=Kings+Cross,London,UK&zoom=14&size=600x400&markers=color:red%7CKings+Cross,London,UK&key=YOUR_API_KEY" 
                  alt="Map" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
