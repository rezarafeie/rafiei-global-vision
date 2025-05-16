
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
      title: language === 'en' ? 'Message Sent' : 'پیام ارسال شد',
      description: language === 'en' 
        ? 'We have received your message and will get back to you soon.'
        : 'ما پیام شما را دریافت کردیم و به زودی با شما تماس خواهیم گرفت.',
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Layout>
      {/* Page Header */}
      <section className="relative overflow-hidden bg-white pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${language === 'fa' ? 'font-vazir' : 'font-display'}`}>
              {t('contact.title')}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -z-10 top-0 right-0 w-full h-full bg-gradient-to-b from-blue-50/80 to-transparent"></div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding pb-32">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <SectionTitle 
                title={language === 'en' ? 'Send us a message' : 'برای ما پیام ارسال کنید'} 
              />
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    {t('contact.form.name')}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-gray-50 border-gray-200 focus:ring-primary focus:border-primary"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    {t('contact.form.email')}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-gray-50 border-gray-200 focus:ring-primary focus:border-primary"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    {t('contact.form.message')}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-gray-50 border-gray-200 focus:ring-primary focus:border-primary"
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
                title={language === 'en' ? 'Contact Information' : 'اطلاعات تماس'} 
              />
              
              <div className="space-y-10">
                <div className="flex items-start">
                  <div className="bg-blue-50 p-4 rounded-full flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-6">
                    <h3 className="font-medium text-lg mb-1">{t('contact.info.email')}</h3>
                    <a href="mailto:contact@rafiei.co" className="text-primary hover:underline">
                      contact@rafiei.co
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-50 p-4 rounded-full flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-6">
                    <h3 className="font-medium text-lg mb-1">{t('contact.info.location')}</h3>
                    <p className="text-gray-600 mb-1">2 Frederick Street, Kings Cross</p>
                    <p className="text-gray-600">London, United Kingdom</p>
                  </div>
                </div>
                
                <div className="mt-16 bg-gray-100 rounded-xl p-8">
                  <h3 className="text-lg font-bold mb-4">Rafiei Ltd</h3>
                  <p className="text-gray-600 mb-2">Register Number: 14994763</p>
                  <p className="text-gray-600">UK Companies House</p>
                </div>
              </div>
              
              {/* Map Placeholder - In a real implementation, replace with actual Google Map */}
              <div className="mt-8 h-64 bg-gray-200 rounded-xl overflow-hidden">
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
