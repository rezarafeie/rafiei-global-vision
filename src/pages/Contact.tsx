import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { 
  Mail, MapPin, Send, MessageCircle, Globe, Phone, 
  Clock, Users, Zap, ArrowRight, CheckCircle, 
  Building, Sparkles, MessageSquare, Headphones
} from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

// Form validation schema
const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  subject: z.string().trim().min(1, "Subject is required").max(200, "Subject must be less than 200 characters"),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be less than 2000 characters"),
  inquiryType: z.string().min(1, "Please select an inquiry type")
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
        }
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: 'Message Sent Successfully!',
      description: 'Thank you for reaching out. We will get back to you within 24-48 hours.',
    });
    
    setFormData({ name: '', email: '', subject: '', message: '', inquiryType: '' });
    setErrors({});
    setIsSubmitting(false);
  };

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'partnership', label: 'Partnership Opportunity' },
    { value: 'support', label: 'Technical Support' },
    { value: 'sales', label: 'Sales & Pricing' },
    { value: 'media', label: 'Media & Press' },
    { value: 'careers', label: 'Careers' }
  ];

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email Us',
      description: 'Send us an email anytime. We typically respond within 24 hours.',
      value: 'contact@rafiei.co',
      href: 'mailto:contact@rafiei.co',
      action: 'Send Email'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Call Us',
      description: 'Speak directly with our team during business hours.',
      value: '+44 7476 681270',
      href: 'tel:+447476681270',
      action: 'Call Now'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Visit Us',
      description: 'Our headquarters in Birmingham, United Kingdom.',
      value: '35 Richford Grove, Birmingham B33 0NJ, UK',
      href: 'https://maps.google.com/?q=35+Richford+Grove+Birmingham+B33+0NJ+UK',
      action: 'Get Directions'
    }
  ];

  const reasons = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Fast Response',
      description: 'We respond to all inquiries within 24-48 hours'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Dedicated Support',
      description: 'Personal attention from our experienced team'
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Expert Solutions',
      description: 'Tailored recommendations for your needs'
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'Global Reach',
      description: 'Supporting clients across 4+ countries'
    }
  ];

  const faqs = [
    {
      question: 'How quickly can I expect a response?',
      answer: 'We aim to respond to all inquiries within 24-48 business hours. For urgent matters, please call us directly.'
    },
    {
      question: 'Do you offer partnerships or collaborations?',
      answer: 'Yes! We are always open to strategic partnerships. Select "Partnership Opportunity" in the inquiry type and tell us about your proposal.'
    },
    {
      question: 'Can I schedule a demo of your products?',
      answer: 'Absolutely. Reach out through the form or email us directly, and we will arrange a personalized demo session.'
    },
    {
      question: 'What support options are available?',
      answer: 'We offer email support, phone support during business hours, and comprehensive documentation for all our products.'
    }
  ];

  return (
    <div className="ltr text-left overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center justify-center relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-primary/25 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-1/3 w-[350px] h-[350px] bg-primary/20 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '2s' }} />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
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
              <MessageCircle className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">We would love to hear from you</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight font-display">
              <span className="text-foreground">Let's Build</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                Something Great Together
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Whether you have a question, want to explore a partnership, or need support—we are here to help you succeed.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border/50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <span className="text-primary">{reason.icon}</span>
                  <span className="text-sm font-medium text-foreground">{reason.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {contactMethods.map((method, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="p-6 h-full border-border/50 bg-card hover:border-primary/30 transition-all group hover:shadow-lg">
                    <div className="w-14 h-14 mb-4 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                      {method.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">{method.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{method.description}</p>
                    <p className="text-foreground font-medium mb-4">{method.value}</p>
                    <a 
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                    >
                      {method.action}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Contact Form */}
              <motion.div 
                className="lg:col-span-3"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 md:p-10 border-border/50 bg-card">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <MessageSquare className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground font-display">Send Us a Message</h2>
                      <p className="text-muted-foreground text-sm">Fill out the form and we will get back to you</p>
                    </div>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className={`h-12 ${errors.name ? 'border-destructive' : ''}`}
                        />
                        {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className={`h-12 ${errors.email ? 'border-destructive' : ''}`}
                        />
                        {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="inquiryType" className="block text-sm font-medium mb-2 text-foreground">
                        Inquiry Type *
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className={`w-full h-12 px-3 rounded-md border bg-background text-foreground ${errors.inquiryType ? 'border-destructive' : 'border-input'}`}
                      >
                        <option value="">Select an inquiry type</option>
                        {inquiryTypes.map(type => (
                          <option key={type.value} value={type.value}>{type.label}</option>
                        ))}
                      </select>
                      {errors.inquiryType && <p className="text-destructive text-sm mt-1">{errors.inquiryType}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2 text-foreground">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        className={`h-12 ${errors.subject ? 'border-destructive' : ''}`}
                      />
                      {errors.subject && <p className="text-destructive text-sm mt-1">{errors.subject}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us more about your inquiry..."
                        className={`resize-none ${errors.message ? 'border-destructive' : ''}`}
                      />
                      {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg"
                      className="w-full h-14 text-base"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="h-5 w-5" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                </Card>
              </motion.div>
              
              {/* Sidebar Info */}
              <motion.div 
                className="lg:col-span-2 space-y-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                {/* Company Info */}
                <Card className="p-6 border-border/50 bg-card">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <Building className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">Rafiei Group</h3>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <div className="text-muted-foreground">
                        <p>35 Richford Grove</p>
                        <p>Birmingham B33 0NJ</p>
                        <p>United Kingdom</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                      <a href="mailto:contact@rafiei.co" className="text-primary hover:underline">
                        contact@rafiei.co
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                      <a href="tel:+447476681270" className="text-primary hover:underline">
                        +44 7476 681270
                      </a>
                    </div>
                  </div>
                </Card>

                {/* Business Hours */}
                <Card className="p-6 border-border/50 bg-card">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <Clock className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">Business Hours</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span className="text-foreground font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="text-foreground font-medium">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="text-foreground font-medium">Closed</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-4">
                      * All times are in GMT/BST (UK timezone)
                    </p>
                  </div>
                </Card>

                {/* Quick Support */}
                <Card className="p-6 border-border/50 bg-primary/5 border-primary/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                      <Headphones className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">Need Urgent Help?</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    For urgent technical issues or time-sensitive inquiries, call us directly during business hours.
                  </p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <a href="tel:+447476681270" className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Call Now
                    </a>
                  </Button>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display text-foreground">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Quick answers to common questions about reaching out to us.
              </p>
            </motion.div>

            <motion.div 
              className="grid gap-4"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {faqs.map((faq, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="p-6 border-border/50 bg-card hover:border-primary/30 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-2">{faq.question}</h3>
                        <p className="text-muted-foreground text-sm">{faq.answer}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Ready to get started?</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display text-foreground">
                Start Your Journey Today
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Join thousands of entrepreneurs and businesses already using Rafiei Group to build, scale, and succeed globally.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-base px-8">
                  <a href="mailto:contact@rafiei.co" className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    Email Us Now
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base px-8">
                  <a href="tel:+447476681270" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Call Us
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
