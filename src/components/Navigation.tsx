import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
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

  const getLanguageName = (lang: string) => {
    const names: Record<string, string> = {
      en: 'English',
      fa: 'فارسی',
      ar: 'العربية',
      tr: 'Türkçe',
    };
    return names[lang] || 'English';
  };

  const isRTL = language === 'fa' || language === 'ar';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-2xl border-b border-white/10 dark:border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
      <nav className={`container mx-auto px-6 py-5 flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
        <div className="flex items-center">
          <Link to="/" className={`group flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
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
        <div className={`hidden md:flex items-center gap-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <div className={`flex items-center gap-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 group whitespace-nowrap"
              >
                {item.label}
                <span className={`absolute -bottom-1 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/50 transition-all duration-300 group-hover:w-full ${isRTL ? 'right-0' : 'left-0'}`}></span>
              </Link>
            ))}
          </div>

          <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="rounded-full w-10 h-10 bg-muted/50 backdrop-blur-sm border border-border/50 hover:bg-accent hover:scale-105 transition-all duration-200"
                >
                  <Globe className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuItem onClick={() => handleLanguageChange('en')} className={`cursor-pointer ${language === 'en' ? 'bg-primary/10 text-primary' : ''}`}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange('fa')} className={`cursor-pointer ${language === 'fa' ? 'bg-primary/10 text-primary' : ''}`}>
                  فارسی
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange('ar')} className={`cursor-pointer ${language === 'ar' ? 'bg-primary/10 text-primary' : ''}`}>
                  العربية
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange('tr')} className={`cursor-pointer ${language === 'tr' ? 'bg-primary/10 text-primary' : ''}`}>
                  Türkçe
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

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
        <div className={`md:hidden flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
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
                <Globe className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              <DropdownMenuItem onClick={() => handleLanguageChange('en')} className={`cursor-pointer ${language === 'en' ? 'bg-primary/10 text-primary' : ''}`}>
                English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguageChange('fa')} className={`cursor-pointer ${language === 'fa' ? 'bg-primary/10 text-primary' : ''}`}>
                فارسی
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguageChange('ar')} className={`cursor-pointer ${language === 'ar' ? 'bg-primary/10 text-primary' : ''}`}>
                العربية
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguageChange('tr')} className={`cursor-pointer ${language === 'tr' ? 'bg-primary/10 text-primary' : ''}`}>
                Türkçe
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
        <div className="md:hidden absolute w-full bg-background/60 backdrop-blur-2xl border-t border-white/10 dark:border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
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