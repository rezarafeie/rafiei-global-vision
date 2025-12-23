import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Mail, MapPin, Building, Activity, Zap, Book, Network, Briefcase, CreditCard, Podcast, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  
  const products = [
    { id: 'ai-assistant', name: 'AI Assistant', url: 'https://ai.rafiei.co', icon: <Activity size={18} /> },
    { id: 'synapse', name: 'Synapse', url: 'https://synapse.rafiei.co', icon: <Zap size={18} /> },
    { id: 'academy', name: 'Academy', url: 'https://academy.rafiei.co', icon: <Book size={18} /> },
    { id: 'bnets', name: 'BNets', url: 'https://bnets.co', icon: <Network size={18} /> },
    { id: 'agency', name: 'Agency', url: 'https://agency.rafiei.co', icon: <Briefcase size={18} /> },
    { id: 'financial', name: 'Financial', url: 'https://financial.rafiei.co', icon: <CreditCard size={18} /> },
    { id: 'bluecast', name: 'BlueCast', url: 'https://blucast.rafiei.co', icon: <Podcast size={18} /> },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' },
    { name: 'LinkedIn', icon: 'M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z' },
    { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
    { name: 'Telegram', icon: 'M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z' }
  ];

  return (
    <footer className={`relative bg-background border-t ${language === 'fa' || language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">R</span>
              </div>
              <h3 className={`text-xl font-bold text-foreground ${language === 'fa' || language === 'ar' ? 'font-vazir' : ''}`}>
                {language === 'en' || language === 'tr' ? 'Rafiei Group' : 
                 language === 'fa' ? 'گروه رفیعی' : 'مجموعة رفيعي'}
              </h3>
            </div>
            <div className="space-y-4">
              <div>
              <div className="flex items-start space-x-2 mb-3">
                  <Building className="flex-shrink-0 h-4 w-4 text-primary mt-1" />
                  <div>
                    <p className="text-foreground font-medium">Rafiei Group</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <MapPin className="flex-shrink-0 h-4 w-4 text-primary mt-1" />
                  <div>
                    <p className="text-muted-foreground text-sm">35 Richford Grove</p>
                    <p className="text-muted-foreground text-sm">Birmingham B33 0NJ, UK</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="flex-shrink-0 h-4 w-4 text-primary" />
                  <a 
                    href="mailto:contact@rafiei.co" 
                    className="text-primary hover:text-primary/80 transition-colors text-sm"
                  >
                    contact@rafiei.co
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <a 
                    href="tel:+447476681270" 
                    className="text-primary hover:text-primary/80 transition-colors text-sm"
                  >
                    +44 7476 681270
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className={`text-xl font-bold mb-6 text-foreground ${language === 'fa' || language === 'ar' ? 'font-vazir' : ''}`}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: t('nav.home'), href: '/' },
                { label: t('nav.about'), href: '/about' },
                { label: t('nav.contact'), href: '/contact' }
              ].map((item) => (
                <li key={item.href}>
                  <Link 
                    to={item.href} 
                    className="text-muted-foreground hover:text-primary transition-all duration-200 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Theme & Language */}
            <div className="mt-8 space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3">Preferences</h4>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={toggleTheme}
                  className="w-full justify-start rounded-lg bg-muted/30 border-border/50 hover:bg-accent"
                >
                  {theme === 'dark' ? 
                    <><Sun className="h-4 w-4 mr-2 text-amber-500" /> Light Mode</> : 
                    <><Moon className="h-4 w-4 mr-2 text-slate-600" /> Dark Mode</>
                  }
                </Button>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3">Language</h4>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { code: 'en', flag: '🇬🇧', name: 'EN' },
                    { code: 'fa', flag: '🇮🇷', name: 'FA' },
                    { code: 'ar', flag: '🇸🇦', name: 'AR' },
                    { code: 'tr', flag: '🇹🇷', name: 'TR' }
                  ].map(({ code, flag, name }) => (
                    <button
                      key={code}
                      onClick={() => setLanguage(code as 'en' | 'fa' | 'ar' | 'tr')}
                      className={`flex items-center space-x-2 p-2 rounded-lg border transition-all duration-200 ${
                        language === code 
                          ? 'border-primary bg-primary/10 text-primary' 
                          : 'border-border/50 bg-muted/30 hover:bg-accent'
                      }`}
                    >
                      <span>{flag}</span>
                      <span className="text-xs font-medium">{name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className={`text-xl font-bold mb-6 text-foreground ${language === 'fa' || language === 'ar' ? 'font-vazir' : ''}`}>
              Legal
            </h3>
            <div className="space-y-4">
              <Link 
                to="/privacy" 
                className="text-muted-foreground hover:text-primary transition-colors text-sm block flex items-center group"
              >
                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                {t('footer.privacy')}
              </Link>
              <Link 
                to="/terms" 
                className="text-muted-foreground hover:text-primary transition-colors text-sm block flex items-center group"
              >
                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                {t('footer.terms')}
              </Link>
            </div>
            
            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold text-foreground mb-4">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a 
                    key={social.name}
                    href="#" 
                    aria-label={social.name} 
                    className="w-9 h-9 rounded-lg bg-muted/40 border border-border/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/30 transition-all duration-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            {t('footer.copyright')}
          </p>
          <div className="flex items-center">
            <a 
              referrerPolicy='origin' 
              target='_blank' 
              href='https://trustseal.enamad.ir/?id=657703&Code=ZXXN93ctCQvJHhtAnVEx8cD9aFssx7rY'
              rel="noopener noreferrer"
            >
              <img 
                referrerPolicy='origin' 
                src='https://trustseal.enamad.ir/logo.aspx?id=657703&Code=ZXXN93ctCQvJHhtAnVEx8cD9aFssx7rY' 
                alt='اینماد' 
                style={{ cursor: 'pointer' }} 
                className="h-20"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;