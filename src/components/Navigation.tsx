
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fa' : 'en');
  };

  const navItems = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.about'), href: '/about' },
    { label: t('nav.founder'), href: '/founder' },
    { label: t('nav.companies'), href: '/companies' },
    { label: t('nav.contact'), href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="font-display text-xl font-medium text-gray-800">
            Rafiei Holding
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <div className="flex items-center space-x-8 mr-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Button 
            variant="ghost" 
            size="sm" 
            onClick={toggleLanguage}
            className="font-medium px-3 py-1 rounded hover:bg-gray-100"
          >
            {language === 'en' ? 'فا' : 'EN'}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={toggleLanguage}
            className="font-medium mr-3 hover:bg-gray-100"
          >
            {language === 'en' ? 'فا' : 'EN'}
          </Button>

          <Button variant="ghost" size="sm" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-background/98 shadow-lg">
          <div className="container mx-auto px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="block py-3 text-sm font-medium text-gray-700 hover:text-primary transition-colors"
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
