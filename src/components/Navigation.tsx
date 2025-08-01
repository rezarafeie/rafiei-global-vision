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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-elegant">
      <nav className="container mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="group flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-glow group-hover:shadow-primary/50 transition-all duration-300">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <span className="font-display text-xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              {language === 'en' || language === 'tr' ? 'Rafiei Group' : 
               language === 'fa' ? 'گروه رفیعی' : 'مجموعة رفيعي'}
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className={`flex items-center ${language === 'fa' || language === 'ar' ? 'space-x-reverse' : 'space-x-8'}`}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/50 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="flex items-center bg-muted/50 backdrop-blur-sm rounded-full p-1 border border-border/50">
              {[
                { code: 'en', flag: '🇬🇧' },
                { code: 'fa', flag: '🇮🇷' },
                { code: 'ar', flag: '🇸🇦' },
                { code: 'tr', flag: '🇹🇷' }
              ].map(({ code, flag }) => (
                <button
                  key={code}
                  onClick={() => handleLanguageChange(code as 'en' | 'fa' | 'ar' | 'tr')}
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 text-sm hover:scale-105 ${
                    language === code 
                      ? 'bg-primary text-primary-foreground shadow-sm' 
                      : 'hover:bg-accent'
                  }`}
                >
                  {flag}
                </button>
              ))}
            </div>

            {/* Theme Toggle */}
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme}
              className="rounded-full w-10 h-10 bg-muted/50 backdrop-blur-sm border border-border/50 hover:bg-accent hover:scale-105 transition-all duration-200"
            >
              {theme === 'dark' ? 
                <Sun className="h-4 w-4 text-amber-500" /> : 
                <Moon className="h-4 w-4 text-slate-600" />
              }
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme}
            className="rounded-full w-10 h-10 bg-muted/50 backdrop-blur-sm border border-border/50"
          >
            {theme === 'dark' ? 
              <Sun className="h-4 w-4 text-amber-500" /> : 
              <Moon className="h-4 w-4 text-slate-600" />
            }
          </Button>

          {/* Mobile Language Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full w-10 h-10 bg-muted/50 backdrop-blur-sm border border-border/50"
              >
                <Flag className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem onClick={() => handleLanguageChange('en')} className="cursor-pointer">
                🇬🇧 English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguageChange('fa')} className="cursor-pointer">
                🇮🇷 فارسی
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguageChange('ar')} className="cursor-pointer">
                🇸🇦 العربية
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguageChange('tr')} className="cursor-pointer">
                🇹🇷 Türkçe
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
            className="rounded-full w-10 h-10 bg-muted/50 backdrop-blur-sm border border-border/50"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-background/95 backdrop-blur-xl border-t border-border/50 shadow-elegant">
          <div className="container mx-auto px-6 py-6 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;