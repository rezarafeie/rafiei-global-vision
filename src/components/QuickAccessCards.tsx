import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Gift, Zap, GraduationCap, Shield, DollarSign, Bot, Building2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const GOLD = {
  primary: '#FFD700',
  light: '#FFED4E',
  dark: '#B8860B',
  glow: 'rgba(255, 215, 0, 0.3)',
};

interface QuickAccessItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
}

const QUICK_ACCESS_ITEMS: QuickAccessItem[] = [
  {
    id: 'ai-quiz',
    title: 'کوییز هوشمند',
    icon: <Brain className="w-6 h-6" />,
    color: '#A78BFA'
  },
  {
    id: 'treasure-hunt',
    title: 'شکار گنج',
    icon: <Gift className="w-6 h-6" />,
    color: '#F59E0B'
  },
  {
    id: 'speed-click',
    title: 'چالش سرعت',
    icon: <Zap className="w-6 h-6" />,
    color: '#FF6B6B'
  },
  {
    id: 'academy',
    title: 'آکادمی',
    icon: <GraduationCap className="w-6 h-6" />,
    color: '#FF6B6B'
  },
  {
    id: 'vpn',
    title: 'شبکه بدون مرز',
    icon: <Shield className="w-6 h-6" />,
    color: '#4ECDC4'
  },
  {
    id: 'exchange',
    title: 'صرافی',
    icon: <DollarSign className="w-6 h-6" />,
    color: '#95E1D3'
  },
  {
    id: 'coach',
    title: 'کوچ هوشمند',
    icon: <Bot className="w-6 h-6" />,
    color: '#A78BFA'
  },
  {
    id: 'services',
    title: 'خدمات تخصصی',
    icon: <Building2 className="w-6 h-6" />,
    color: '#F59E0B'
  }
];

const QuickAccessCards = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-black mb-2" style={{ color: GOLD.primary }}>
          دسترسی سریع
        </h2>
        <p className="text-sm text-gray-400">
          به هر بخش که می‌خوای سریع برو
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {QUICK_ACCESS_ITEMS.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card
              className="cursor-pointer transition-all hover:scale-105 border-2"
              style={{
                borderColor: item.color,
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                boxShadow: `0 0 20px ${item.color}33`
              }}
              onClick={() => scrollToSection(item.id)}
            >
              <CardContent className="p-4 text-center space-y-2">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto"
                  style={{ backgroundColor: `${item.color}22` }}
                >
                  <div style={{ color: item.color }}>
                    {item.icon}
                  </div>
                </div>
                <p className="text-sm font-bold text-white">{item.title}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default QuickAccessCards;
