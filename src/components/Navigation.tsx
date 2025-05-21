
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { Menu, X, Sun, Moon, Flag } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navigation = () => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLanguageChange = (lang: 'en' | 'fa' | 'ar' | 'tr') => {
    setLanguage(lang);
  };

  const navItems = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.about'), href: '/about' },
    { label: t('nav.contact'), href: '/contact' },
  ];

  const getFlagEmoji = (lang: string) => {
    const flags: Record<string, string> = {
      en: '🇬🇧',
      fa: '🇮🇷',
      ar: '🇸🇦',
      tr: '🇹🇷',
    };
    return flags[lang] || '🇬🇧';
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md shadow-sm dark:bg-gray-900/90 dark:border-b dark:border-gray-800">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="font-display text-xl font-bold text-gray-800 dark:text-white">
            {language === 'en' || language === 'tr' ? 'Rafiei Group' : 
             language === 'fa' ? 'گروه رفیعی' : 'مجموعة رفيعي'}
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <div className={`flex items-center ${language === 'fa' || language === 'ar' ? 'space-x-reverse' : 'space-x-6'}`}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors dark:text-gray-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="flex space-x-2 items-center border border-gray-200 dark:border-gray-700 rounded-full p-1">
              <button
                onClick={() => handleLanguageChange('en')}
                className={`text-sm p-1 px-2 rounded-full ${language === 'en' ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
              >
                🇬🇧
              </button>
              <button
                onClick={() => handleLanguageChange('fa')}
                className={`text-sm p-1 px-2 rounded-full ${language === 'fa' ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
              >
                🇮🇷
              </button>
              <button
                onClick={() => handleLanguageChange('ar')}
                className={`text-sm p-1 px-2 rounded-full ${language === 'ar' ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
              >
                🇸🇦
              </button>
              <button
                onClick={() => handleLanguageChange('tr')}
                className={`text-sm p-1 px-2 rounded-full ${language === 'tr' ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
              >
                🇹🇷
              </button>
            </div>

            {/* Theme Toggle */}
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme}
              className="rounded-full"
            >
              {theme === 'dark' ? 
                <Sun className="h-5 w-5 text-yellow-400" /> : 
                <Moon className="h-5 w-5 text-gray-700" />
              }
            </Button>

            {/* Login/Register Buttons */}
            <Button asChild size="sm" variant="outline" className="mr-2">
              <Link to="/login">{t('nav.login')}</Link>
            </Button>
            <Button asChild size="sm">
              <Link to="/register">{t('nav.register')}</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme}
            className="mr-2"
          >
            {theme === 'dark' ? 
              <Sun className="h-5 w-5 text-yellow-400" /> : 
              <Moon className="h-5 w-5" />
            }
          </Button>

          {/* Mobile Language Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2">
                <Flag className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => handleLanguageChange('en')}>
                🇬🇧 English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguageChange('fa')}>
                🇮🇷 فارسی
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguageChange('ar')}>
                🇸🇦 العربية
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguageChange('tr')}>
                🇹🇷 Türkçe
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-background/98 dark:bg-gray-900/98 shadow-lg border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="block py-3 text-sm font-medium text-gray-700 hover:text-primary transition-colors dark:text-gray-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex space-x-2 mt-4">
              <Button asChild size="sm" variant="outline" className="flex-1">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>{t('nav.login')}</Link>
              </Button>
              <Button asChild size="sm" className="flex-1">
                <Link to="/register" onClick={() => setIsMenuOpen(false)}>{t('nav.register')}</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
