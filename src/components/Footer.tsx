
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Mail, MapPin, Building, Activity, Zap, Book, Network, Briefcase, CreditCard, Podcast, Sun, Moon, Flag } from 'lucide-react';
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

  return (
    <footer className={`bg-gray-50 border-t border-gray-100 text-gray-600 dark:bg-gray-900 dark:border-gray-800 dark:text-gray-300 ${language === 'fa' || language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <h3 className={`text-xl font-bold mb-4 text-gray-800 dark:text-white ${language === 'fa' || language === 'ar' ? 'font-vazir' : ''}`}>
              {language === 'en' || language === 'tr' ? 'Rafiei Group' : 
               language === 'fa' ? 'گروه رفیعی' : 'مجموعة رفيعي'}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Building className="flex-shrink-0 h-5 w-5 text-primary mt-0.5 mr-2" />
                <div>
                  <p className="text-gray-700 font-medium dark:text-gray-300">RAFIEI LTD</p>
                  <p className="text-gray-600 text-sm dark:text-gray-400">Register Number: 14994763</p>
                  <p className="text-gray-600 text-sm dark:text-gray-400">UK Companies House</p>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="flex-shrink-0 h-5 w-5 text-primary mt-0.5 mr-2" />
                <div>
                  <p className="text-gray-600 dark:text-gray-400">2 Frederick Street, Kings Cross</p>
                  <p className="text-gray-600 dark:text-gray-400">London, United Kingdom</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="flex-shrink-0 h-5 w-5 text-primary mt-0.5 mr-2" />
                <a href="mailto:contact@rafiei.co" className="text-primary hover:underline">
                  contact@rafiei.co
                </a>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className={`text-xl font-bold mb-4 text-gray-800 dark:text-white ${language === 'fa' || language === 'ar' ? 'font-vazir' : ''}`}>
              {t('nav.contact')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary transition-colors dark:text-gray-400">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary transition-colors dark:text-gray-400">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors dark:text-gray-400">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
            
            {/* Theme & Language */}
            <div className="mt-6 space-y-4">
              <div className="flex items-center space-x-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={toggleTheme}
                  className="rounded-full w-full justify-start"
                >
                  {theme === 'dark' ? 
                    <><Sun className="h-4 w-4 mr-2" /> Light Mode</> : 
                    <><Moon className="h-4 w-4 mr-2" /> Dark Mode</>
                  }
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setLanguage('en')}
                  className={`text-sm p-2 rounded-md border ${language === 'en' ? 'border-primary text-primary' : 'border-gray-200 dark:border-gray-700'}`}
                >
                  🇬🇧
                </button>
                <button
                  onClick={() => setLanguage('fa')}
                  className={`text-sm p-2 rounded-md border ${language === 'fa' ? 'border-primary text-primary' : 'border-gray-200 dark:border-gray-700'}`}
                >
                  🇮🇷
                </button>
                <button
                  onClick={() => setLanguage('ar')}
                  className={`text-sm p-2 rounded-md border ${language === 'ar' ? 'border-primary text-primary' : 'border-gray-200 dark:border-gray-700'}`}
                >
                  🇸🇦
                </button>
                <button
                  onClick={() => setLanguage('tr')}
                  className={`text-sm p-2 rounded-md border ${language === 'tr' ? 'border-primary text-primary' : 'border-gray-200 dark:border-gray-700'}`}
                >
                  🇹🇷
                </button>
              </div>
            </div>
          </div>
          
          {/* Products */}
          <div>
            <h3 className={`text-xl font-bold mb-4 text-gray-800 dark:text-white ${language === 'fa' || language === 'ar' ? 'font-vazir' : ''}`}>
              {t('home.products.title')}
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {products.map((product) => (
                <a 
                  key={product.id} 
                  href={product.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex flex-col items-center justify-center p-3 rounded-lg border border-gray-200 hover:border-primary hover:text-primary transition-colors dark:border-gray-700"
                >
                  {product.icon}
                  <span className="text-xs mt-1">{product.name}</span>
                </a>
              ))}
            </div>
            
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">{t('footer.legal')}</h4>
              <div className="space-y-2">
                <Link to="/privacy" className="text-gray-600 hover:text-primary transition-colors dark:text-gray-400 text-sm block">
                  {t('footer.privacy')}
                </Link>
                <Link to="/terms" className="text-gray-600 hover:text-primary transition-colors dark:text-gray-400 text-sm block">
                  {t('footer.terms')}
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">{t('footer.copyright')}</p>
          <div className="flex mt-4 md:mt-0 space-x-4">
            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" aria-label="Telegram" className="text-gray-400 hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
