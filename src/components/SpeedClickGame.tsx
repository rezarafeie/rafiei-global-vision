import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, Copy, Check, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

const DISCOUNT_CODE = 'BLKFTPSPDDCNT';
const GOLD = {
  primary: '#FFD700',
  light: '#FFED4E',
  dark: '#B8860B',
  glow: 'rgba(255, 215, 0, 0.3)',
};

const PRODUCT_LINKS = {
  START_COURSE: 'https://academy.rafiei.co/enroll/?course=boundless',
  BNETS: 'https://t.me/getbnbot',
  ICB_COMPANY: 'https://t.me/m/_D9w2J4BNjA0',
  AI_COACH_CREDITS: 'https://coach.rafiei.co/',
  REF_LINK: 'https://lovable.dev/projects/3c06c877-73e1-4cc5-8f3a-e82b67f5fb09/preview?path=%2Fblackfriday'
};

const SpeedClickGame = () => {
  const [gameState, setGameState] = useState<'idle' | 'active' | 'result'>('idle');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(5);
  const [copied, setCopied] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const played = localStorage.getItem('bf_speed_click_completed');
    if (played === 'true') {
      setGameState('result');
      setHasPlayed(true);
      // Load saved score
      const savedScore = localStorage.getItem('bf_speed_click_score');
      if (savedScore) {
        setScore(parseInt(savedScore));
      }
    }
  }, []);

  useEffect(() => {
    if (gameState === 'active' && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setGameState('result');
            localStorage.setItem('bf_speed_click_completed', 'true');
            localStorage.setItem('bf_speed_click_score', score.toString());
            setHasPlayed(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [gameState, score]);

  const startGame = () => {
    if (hasPlayed) {
      toast.error('شما قبلاً این بازی را انجام داده‌اید');
      return;
    }
    setScore(0);
    setTimeLeft(5);
    setGameState('active');
  };

  const handleClick = () => {
    if (gameState === 'active') {
      setScore(score + 1);
    }
  };

  const copyCode = () => {
    navigator.clipboard.writeText(DISCOUNT_CODE);
    setCopied(true);
    toast.success('کد کپی شد');
    setTimeout(() => setCopied(false), 2000);
  };

  const copyShareText = () => {
    const shareText = `من تو چالش کلیک بلک فرایدی رفیعی، امتیاز ${score} گرفتم! 😅 تو هم امتحان کن ببین چند می‌زنی و تخفیف بگیر: ${PRODUCT_LINKS.REF_LINK}`;
    navigator.clipboard.writeText(shareText);
    toast.success('متن کپی شد');
  };

  const getResultCategory = () => {
    if (score < 15) {
      return {
        title: 'آرام و محتاط',
        message: 'آروم و محتاط پیش میری، دوره شروع می‌تونه مسیرت رو روشن کنه.',
        recommendations: [
          {
            title: 'دوره شروع با ۶۰٪ تخفیف',
            ctaText: 'خرید دوره شروع',
            link: PRODUCT_LINKS.START_COURSE
          }
        ]
      };
    } else if (score < 35) {
      return {
        title: 'متعادل و جدی',
        message: 'هم سرعت داری هم تمرکز؛ بهترین کار اینه که همزمان روی دوره شروع و شبکه بدون مرز سرمایه‌گذاری کنی.',
        recommendations: [
          {
            title: 'دوره شروع',
            ctaText: 'خرید دوره شروع',
            link: PRODUCT_LINKS.START_COURSE
          },
          {
            title: 'شبکه بدون مرز',
            ctaText: 'خرید شبکه بدون مرز',
            link: PRODUCT_LINKS.BNETS
          }
        ]
      };
    } else {
      return {
        title: 'سریع، جدی و بدون مرز',
        message: 'تو از اونایی هستی که وقتی تصمیم می‌گیرن، اجرا می‌کنن. وقتشه بیزینس بدون مرزت رو با ثبت شرکت و کوچ هوشمند جدی کنی.',
        recommendations: [
          {
            title: 'درخواست ثبت شرکت',
            ctaText: 'درخواست ثبت شرکت',
            link: PRODUCT_LINKS.ICB_COMPANY
          },
          {
            title: 'خرید کردیت کوچ هوشمند',
            ctaText: 'خرید کردیت کوچ',
            link: PRODUCT_LINKS.AI_COACH_CREDITS
          }
        ]
      };
    }
  };

  if (gameState === 'result') {
    const result = getResultCategory();
    
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="space-y-4"
      >
        <Card className="border-2" style={{ borderColor: GOLD.primary, backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
          <CardContent className="p-5 space-y-4">
            <div className="text-center space-y-3">
              <Badge className="text-sm px-4 py-2" style={{ backgroundColor: GOLD.primary, color: '#000' }}>
                <Zap className="w-4 h-4 ml-1" />
                نتیجه چالش کلیک
              </Badge>
              
              <div 
                className="text-5xl font-black tabular-nums"
                style={{
                  background: `linear-gradient(135deg, ${GOLD.light} 0%, ${GOLD.primary} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {score}
              </div>
              <p className="text-sm text-gray-400">تعداد کلیک</p>

              <h3 className="text-xl font-black" style={{ color: GOLD.primary }}>
                {result.title}
              </h3>
              <p className="text-sm text-gray-300">
                {result.message}
              </p>
            </div>

            <div className="space-y-2">
              {result.recommendations.map((rec, idx) => (
                <Button
                  key={idx}
                  className="w-full text-sm py-3 rounded-lg font-bold"
                  style={{ 
                    backgroundColor: idx === 0 ? GOLD.primary : 'transparent',
                    color: idx === 0 ? '#000' : GOLD.primary,
                    border: idx === 0 ? 'none' : `1px solid ${GOLD.primary}`
                  }}
                  onClick={() => window.location.href = rec.link}
                >
                  {rec.ctaText}
                </Button>
              ))}
            </div>

            <div className="text-center p-3 rounded-lg" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
              <p className="text-xs text-gray-400 mb-2">کد تخفیف اختصاصی</p>
              <div className="flex items-center justify-center gap-2">
                <code className="text-lg font-mono font-bold px-3 py-1 rounded" style={{ color: GOLD.primary, backgroundColor: '#000' }}>
                  {DISCOUNT_CODE}
                </code>
                <button
                  onClick={copyCode}
                  className="p-2 rounded transition-all hover:scale-110"
                  style={{ backgroundColor: GOLD.primary }}
                >
                  {copied ? <Check className="w-4 h-4 text-black" /> : <Copy className="w-4 h-4 text-black" />}
                </button>
              </div>
            </div>

            <div className="p-3 rounded-lg border" style={{ borderColor: GOLD.dark, backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
              <p className="text-xs text-gray-400 mb-2 text-center">به دوستت هم بفرست</p>
              <Button
                variant="outline"
                className="w-full text-sm"
                onClick={copyShareText}
                style={{ borderColor: GOLD.dark, color: GOLD.primary }}
              >
                <Share2 className="w-4 h-4 ml-2" />
                کپی متن و ارسال به دوستان
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      <div className="text-center space-y-2">
        <h3 className="text-lg font-bold" style={{ color: GOLD.primary }}>
          چالش کلیک سریع
        </h3>
        <p className="text-sm text-gray-300">
          ۵ ثانیه وقت داری هرچقدر می‌تونی کلیک کنی. بعدش ببین جزو کدوم دسته‌ای و چه پیشنهادی برات داریم!
        </p>
      </div>

      {gameState === 'idle' && (
        <Button
          className="w-full text-base py-6 rounded-lg font-bold"
          style={{ backgroundColor: GOLD.primary, color: '#000' }}
          onClick={startGame}
        >
          <Zap className="w-5 h-5 ml-2" />
          شروع چالش
        </Button>
      )}

      {gameState === 'active' && (
        <Card className="border-2" style={{ borderColor: GOLD.primary, backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
          <CardContent className="p-5 space-y-4">
            <div className="text-center space-y-3">
              <div 
                className="text-5xl font-black tabular-nums"
                style={{
                  background: `linear-gradient(135deg, ${GOLD.light} 0%, ${GOLD.primary} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {timeLeft}
              </div>
              <p className="text-sm text-gray-400">ثانیه باقی‌مانده</p>

              <div className="text-center p-3 rounded-lg" style={{ backgroundColor: `${GOLD.primary}11` }}>
                <p className="text-2xl font-black tabular-nums" style={{ color: GOLD.primary }}>
                  {score}
                </p>
                <p className="text-xs text-gray-400">تعداد کلیک‌ها</p>
              </div>
            </div>

            <motion.button
              onClick={handleClick}
              className="w-full text-xl py-8 rounded-lg font-black"
              style={{ backgroundColor: GOLD.primary, color: '#000' }}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.02 }}
            >
              <Zap className="w-6 h-6 mx-auto mb-2" />
              کلیک کن!
            </motion.button>
          </CardContent>
        </Card>
      )}
    </motion.div>
  );
};

export default SpeedClickGame;
