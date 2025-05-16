
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
      {/* Hero Section */}
      <section className="bg-charcoal text-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-gray-300">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
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
                    required
                  />
                </div>
                
                <Button type="submit" className="bg-blue hover:bg-blue-dark w-full">
                  {t('contact.form.submit')}
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="lg:pl-12">
              <SectionTitle 
                title={language === 'en' ? 'Contact Information' : 'اطلاعات تماس'} 
              />
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-blue/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">{t('contact.info.email')}</h3>
                    <a href="mailto:info@rafieiholding.com" className="text-blue hover:underline">
                      info@rafieiholding.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">{t('contact.info.phone')}</h3>
                    <p>+44 20 1234 5678</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">{t('contact.info.location')}</h3>
                    <p className="text-gray-600">London, United Kingdom</p>
                  </div>
                </div>
              </div>
              
              {/* Map Placeholder */}
              <div className="mt-8 h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">
                  {language === 'en' ? 'Map Placeholder' : 'مکان نقشه'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
