import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad2, Brain, Trophy, Zap, Copy, Check, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Product Links
const PRODUCT_LINKS = {
  START_COURSE: 'https://academy.rafiei.co/enroll/?course=boundless',
  ALL_COURSES: 'https://academy.rafiei.co/courses',
  BNETS: 'https://t.me/getbnbot',
  EXCHANGE: 'https://exchange.rafiei.co/',
  ICB_COMPANY: 'https://t.me/m/_D9w2J4BNjA0',
  ICB_ACCOUNTS: 'https://t.me/m/_D9w2J4BNjA0',
  ICB_SIM: 'https://t.me/m/_D9w2J4BNjA0',
  AI_COACH_CREDITS: 'https://coach.rafiei.co/',
  REF_LINK: 'https://lovable.dev/projects/3c06c877-73e1-4cc5-8f3a-e82b67f5fb09/preview?path=%2Fblackfriday'
};

const DISCOUNT_CODE = 'blackfriday';
const GOLD = {
  primary: '#FFD700',
  light: '#FFED4E',
  dark: '#B8860B',
  glow: 'rgba(255, 215, 0, 0.3)',
};

// AI Quiz Game Component
const AiQuizGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [copied, setCopied] = useState(false);

  const questions = [
    {
      q: 'بزرگ‌ترین هدفت از استفاده از این تخفیف‌ها چیه؟',
      options: [
        { text: 'راه‌اندازی بیزینس بین‌المللی و درآمد دلاری', profile: 'starter' },
        { text: 'یادگیری مهارت‌های جدید و رشد شخصی', profile: 'starter' },
        { text: 'دسترسی راحت و امن به اینترنت و سرویس‌های خارجی', profile: 'access' },
        { text: 'سرویس‌های مالی مثل صرافی، ثبت شرکت و حساب بانکی', profile: 'pro' }
      ]
    },
    {
      q: 'در هفته چند ساعت می‌تونی برای یادگیری وقت بذاری؟',
      options: [
        { text: 'کمتر از ۳ ساعت', profile: 'ai_coach' },
        { text: '۳ تا ۷ ساعت', profile: 'starter' },
        { text: 'بیشتر از ۷ ساعت', profile: 'pro' }
      ]
    },
    {
      q: 'سطح تجربه‌ات در بیزینس و درآمد آنلاین چقدره؟',
      options: [
        { text: 'کاملاً مبتدی', profile: 'starter' },
        { text: 'یه مقدار تجربه دارم', profile: 'access' },
        { text: 'حرفه‌ای هستم', profile: 'pro' }
      ]
    },
    {
      q: 'الان بیشتر به کدوم نزدیک‌تری؟',
      options: [
        { text: 'می‌خوام از صفر شروع کنم', profile: 'starter' },
        { text: 'یه کاری شروع کردم، می‌خوام جدی‌ترش کنم', profile: 'access' },
        { text: 'می‌خوام سیستمم رو بین‌المللی و بدون مرز کنم', profile: 'pro' }
      ]
    },
    {
      q: 'کدوم نوع کمک بیشتر به دردت می‌خوره؟',
      options: [
        { text: 'یک دوره جامع شروع مسیر', profile: 'starter' },
        { text: 'سرویس‌های فنی مثل وی‌پی‌ان و صرافی', profile: 'access' },
        { text: 'ثبت شرکت و افتتاح حساب برای جدی کردن کار', profile: 'pro' },
        { text: 'کوچ هوشمند و همراه دائمی با هوش مصنوعی', profile: 'ai_coach' }
      ]
    }
  ];

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  // TODO: Replace this with a real AI API call (e.g., Rafiei AI Coach) if needed.
  const getAiRecommendation = () => {
    const profileScores: Record<string, number> = {
      starter: 0,
      access: 0,
      pro: 0,
      ai_coach: 0
    };

    answers.forEach((answerIndex, questionIndex) => {
      const profile = questions[questionIndex].options[answerIndex].profile;
      profileScores[profile]++;
    });

    const topProfile = Object.entries(profileScores).sort((a, b) => b[1] - a[1])[0][0];

    const recommendations: Record<string, any> = {
      starter: {
        label: 'تو یک شروع‌کننده جدی هستی',
        title: 'دوره شروع | ۶۰٪ تخفیف',
        description: 'بهترین راه برای شروع مسیر درآمد دلاری و بیزینس بین‌المللی',
        ctaText: 'خرید دوره شروع با ۶۰٪ تخفیف',
        ctaLink: PRODUCT_LINKS.START_COURSE
      },
      access: {
        label: 'تو دنبال دسترسی بدون مرز هستی',
        title: 'شبکه بدون مرز | ۴۰٪ تخفیف',
        description: 'سریع‌ترین و پایدارترین VPN برای کار حرفه‌ای',
        ctaText: 'خرید اشتراک شبکه بدون مرز',
        ctaLink: PRODUCT_LINKS.BNETS
      },
      pro: {
        label: 'تو در مسیر ساخت یک بیزینس بین‌المللی هستی',
        title: 'ثبت شرکت و افتتاح حساب | ۲۰٪ تخفیف',
        description: 'وقتشه بیزینست رو جدی کنی',
        ctaText: 'درخواست ثبت شرکت با ۲۰٪ تخفیف',
        ctaText2: 'درخواست افتتاح حساب با ۲۰٪ تخفیف',
        ctaLink: PRODUCT_LINKS.ICB_COMPANY,
        ctaLink2: PRODUCT_LINKS.ICB_ACCOUNTS
      },
      ai_coach: {
        label: 'تو به یک کوچ هوشمند و همراه دائمی نیاز داری',
        title: 'کوچ هوشمند | ۶۰٪ تخفیف',
        description: 'دستیار AI شخصی برای مسیر کاری و کسب‌وکار',
        ctaText: 'خرید کردیت کوچ هوشمند',
        ctaLink: PRODUCT_LINKS.AI_COACH_CREDITS
      }
    };

    return recommendations[topProfile];
  };

  const copyCode = () => {
    navigator.clipboard.writeText(DISCOUNT_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  if (showResult) {
    const recommendation = getAiRecommendation();
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <Card className="border-2" style={{ borderColor: GOLD.primary, backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
          <CardContent className="p-5 space-y-4">
            <div className="text-center space-y-3">
              <Badge className="text-sm px-4 py-2" style={{ backgroundColor: GOLD.primary, color: '#000' }}>
                <Trophy className="w-4 h-4 ml-1" />
                نتیجه کوییز هوش مصنوعی
              </Badge>
              <h3 className="text-xl font-black" style={{ color: GOLD.primary }}>
                {recommendation.label}
              </h3>
              <p className="text-sm text-gray-300">{recommendation.description}</p>
            </div>

            <div className="p-4 rounded-lg" style={{ backgroundColor: `${GOLD.primary}11`, border: `1px solid ${GOLD.dark}` }}>
              <h4 className="text-base font-bold mb-2" style={{ color: GOLD.primary }}>
                {recommendation.title}
              </h4>
              <Button
                className="w-full text-sm py-3 rounded-lg font-bold"
                style={{ backgroundColor: GOLD.primary, color: '#000' }}
                onClick={() => window.location.href = recommendation.ctaLink}
              >
                {recommendation.ctaText}
              </Button>
              {recommendation.ctaText2 && (
                <Button
                  className="w-full text-sm py-3 rounded-lg font-bold mt-2"
                  variant="outline"
                  style={{ borderColor: GOLD.primary, color: GOLD.primary }}
                  onClick={() => window.location.href = recommendation.ctaLink2}
                >
                  {recommendation.ctaText2}
                </Button>
              )}
            </div>

            <div className="text-center p-3 rounded-lg" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
              <p className="text-xs text-gray-400 mb-2">کد تخفیف اختصاصی تو</p>
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

            <Button
              variant="outline"
              className="w-full text-sm"
              onClick={resetQuiz}
              style={{ borderColor: GOLD.dark, color: GOLD.primary }}
            >
              شروع دوباره کوییز
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      <div className="text-center space-y-2">
        <h3 className="text-lg font-bold" style={{ color: GOLD.primary }}>
          کوییز هوش مصنوعی | ببین بهترین تخفیف برای تو چیه
        </h3>
        <p className="text-sm text-gray-300">
          به چند سؤال کوتاه جواب بده تا هوش مصنوعی بهت بگه کدوم دوره و سرویس برای تو مناسبه.
        </p>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400">پیشرفت کوییز</span>
          <span style={{ color: GOLD.primary }}>{currentQuestion + 1} از {questions.length}</span>
        </div>
        <div className="h-2 rounded-full" style={{ backgroundColor: 'rgba(255, 215, 0, 0.2)' }}>
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: GOLD.primary }}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <Card className="border-2" style={{ borderColor: GOLD.dark, backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
        <CardContent className="p-5 space-y-4">
          <h4 className="text-base font-bold text-white">
            {questions[currentQuestion].q}
          </h4>

          <div className="space-y-2">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className="w-full text-right p-3 rounded-lg border-2 transition-all hover:scale-105"
                style={{
                  borderColor: GOLD.dark,
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  color: '#fff'
                }}
              >
                <span className="text-sm">{option.text}</span>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// Treasure Hunt Game Component
const TreasureHuntGame = () => {
  const [foundTreasures, setFoundTreasures] = useState<number[]>([]);
  const [completed, setCompleted] = useState(false);
  const [copied, setCopied] = useState(false);

  const treasures = [
    { id: 1, icon: '🎁', top: '15%', right: '20%' },
    { id: 2, icon: '💎', top: '45%', right: '70%' },
    { id: 3, icon: '💥', top: '65%', right: '30%' },
    { id: 4, icon: '💰', top: '25%', right: '80%' },
    { id: 5, icon: '🚀', top: '75%', right: '60%' }
  ];

  React.useEffect(() => {
    const savedCompleted = localStorage.getItem('bf_treasure_hunt_completed');
    if (savedCompleted === 'true') {
      setCompleted(true);
      setFoundTreasures([1, 2, 3, 4, 5]);
    }
  }, []);

  const handleTreasureClick = (id: number) => {
    if (!foundTreasures.includes(id)) {
      const newFound = [...foundTreasures, id];
      setFoundTreasures(newFound);
      
      if (newFound.length === 5) {
        setCompleted(true);
        localStorage.setItem('bf_treasure_hunt_completed', 'true');
      }
    }
  };

  const copyCode = () => {
    navigator.clipboard.writeText(DISCOUNT_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const resetGame = () => {
    setFoundTreasures([]);
    setCompleted(false);
    localStorage.removeItem('bf_treasure_hunt_completed');
  };

  if (completed) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="space-y-4"
      >
        <Card className="border-2" style={{ borderColor: GOLD.primary, backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
          <CardContent className="p-5 space-y-4">
            <div className="text-center space-y-3">
              <div className="text-4xl">🎉</div>
              <h3 className="text-xl font-black" style={{ color: GOLD.primary }}>
                آفرین! همه گنج‌ها رو پیدا کردی
              </h3>
              <p className="text-sm text-gray-300">
                تو جزو اون آدم‌هایی هستی که تا ته قضیه میرن؛ این یعنی احتمال موفقیتت تو بیزینس خیلی بالاست.
              </p>
            </div>

            <div className="space-y-2">
              <Button
                className="w-full text-sm py-3 rounded-lg font-bold"
                style={{ backgroundColor: GOLD.primary, color: '#000' }}
                onClick={() => window.location.href = PRODUCT_LINKS.START_COURSE}
              >
                خرید دوره شروع با ۶۰٪ تخفیف
              </Button>
              <Button
                variant="outline"
                className="w-full text-sm py-3 rounded-lg font-bold"
                style={{ borderColor: GOLD.primary, color: GOLD.primary }}
                onClick={() => window.location.href = PRODUCT_LINKS.BNETS}
              >
                خرید اشتراک شبکه بدون مرز
              </Button>
            </div>

            <div className="text-center p-3 rounded-lg" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
              <p className="text-xs text-gray-400 mb-2">کد تخفیف</p>
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

            <Button
              variant="outline"
              className="w-full text-sm"
              onClick={resetGame}
              style={{ borderColor: GOLD.dark, color: GOLD.primary }}
            >
              بازی دوباره
            </Button>
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
          شکار گنج بلک فرایدی
        </h3>
        <p className="text-sm text-gray-300">
          چند تا نماد مخفی تخفیف توی این باکس قایم کردیم. همه رو پیدا کن تا جایزه‌ات رو بگیری.
        </p>
      </div>

      <div className="text-center p-3 rounded-lg" style={{ backgroundColor: `${GOLD.primary}11` }}>
        <span className="text-sm font-bold" style={{ color: GOLD.primary }}>
          گنج‌های پیدا شده: {foundTreasures.length} از ۵
        </span>
      </div>

      <Card
        className="relative border-2 overflow-hidden"
        style={{
          borderColor: GOLD.dark,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          height: '350px'
        }}
      >
        <CardContent className="p-0 h-full relative">
          {treasures.map((treasure) => (
            <motion.button
              key={treasure.id}
              onClick={() => handleTreasureClick(treasure.id)}
              className="absolute text-3xl cursor-pointer transition-all hover:scale-125"
              style={{
                top: treasure.top,
                right: treasure.right,
                opacity: foundTreasures.includes(treasure.id) ? 0.3 : 1,
                pointerEvents: foundTreasures.includes(treasure.id) ? 'none' : 'auto'
              }}
              whileHover={{ scale: 1.3, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              {treasure.icon}
            </motion.button>
          ))}

          {foundTreasures.length > 0 && foundTreasures.length < 5 && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-4 left-1/2 transform -translate-x-1/2"
            >
              <Badge style={{ backgroundColor: GOLD.primary, color: '#000' }}>
                +1 گنج پیدا شد! 🎉
              </Badge>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

// Speed Click Game Component
const SpeedClickGame = () => {
  const [gameState, setGameState] = useState<'idle' | 'active' | 'result'>('idle');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(5);
  const [copied, setCopied] = useState(false);

  React.useEffect(() => {
    if (gameState === 'active' && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (gameState === 'active' && timeLeft === 0) {
      setGameState('result');
    }
  }, [gameState, timeLeft]);

  const startGame = () => {
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
    setTimeout(() => setCopied(false), 2000);
  };

  const copyShareText = () => {
    const shareText = `من تو چالش کلیک بلک فرایدی رفیعی، امتیاز ${score} گرفتم! 😅 تو هم امتحان کن ببین چند می‌زنی و تخفیف بگیر: ${PRODUCT_LINKS.REF_LINK}`;
    navigator.clipboard.writeText(shareText);
  };

  const getResultCategory = () => {
    if (score < 15) {
      return {
        title: 'آرام و محتاط',
        message: 'آروم و محتاط پیش میری، دوره شروع می‌تونه مسیرت رو روشن کنه.',
        ctaText: 'خرید دوره شروع با ۶۰٪ تخفیف',
        ctaLink: PRODUCT_LINKS.START_COURSE
      };
    } else if (score < 35) {
      return {
        title: 'متعادل و جدی',
        message: 'هم سرعت داری هم تمرکز؛ بهترین کار اینه که همزمان روی دوره شروع و شبکه بدون مرز سرمایه‌گذاری کنی.',
        ctaText: 'خرید دوره شروع',
        ctaLink: PRODUCT_LINKS.START_COURSE,
        ctaText2: 'خرید شبکه بدون مرز',
        ctaLink2: PRODUCT_LINKS.BNETS
      };
    } else {
      return {
        title: 'سریع، جدی و بدون مرز',
        message: 'تو از اونایی هستی که وقتی تصمیم می‌گیرن، اجرا می‌کنن. وقتشه بیزینس بدون مرزت رو با ثبت شرکت و کوچ هوشمند جدی کنی.',
        ctaText: 'درخواست ثبت شرکت',
        ctaLink: PRODUCT_LINKS.ICB_COMPANY,
        ctaText2: 'خرید کردیت کوچ هوشمند',
        ctaLink2: PRODUCT_LINKS.AI_COACH_CREDITS
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
              <div className="text-4xl">⚡</div>
              <Badge className="text-xl px-6 py-2" style={{ backgroundColor: GOLD.primary, color: '#000' }}>
                امتیاز نهایی: {score} کلیک
              </Badge>
              <h3 className="text-lg font-black" style={{ color: GOLD.primary }}>
                {result.title}
              </h3>
              <p className="text-sm text-gray-300">{result.message}</p>
            </div>

            <div className="space-y-2">
              <Button
                className="w-full text-sm py-3 rounded-lg font-bold"
                style={{ backgroundColor: GOLD.primary, color: '#000' }}
                onClick={() => window.location.href = result.ctaLink}
              >
                {result.ctaText}
              </Button>
              {result.ctaText2 && (
                <Button
                  variant="outline"
                  className="w-full text-sm py-3 rounded-lg font-bold"
                  style={{ borderColor: GOLD.primary, color: GOLD.primary }}
                  onClick={() => window.location.href = result.ctaLink2}
                >
                  {result.ctaText2}
                </Button>
              )}
            </div>

            <div className="text-center p-3 rounded-lg" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
              <p className="text-xs text-gray-400 mb-2">کد تخفیف برای تمام این پیشنهادها</p>
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

            <div className="p-3 rounded-lg space-y-2" style={{ backgroundColor: `${GOLD.primary}11` }}>
              <p className="text-xs text-gray-400 text-center">به دوستت بفرست و چالنجش کن!</p>
              <Button
                variant="outline"
                className="w-full text-xs"
                onClick={copyShareText}
                style={{ borderColor: GOLD.dark, color: GOLD.primary }}
              >
                <Copy className="w-3 h-3 ml-1" />
                کپی متن و به دوستت بفرست
              </Button>
            </div>

            <Button
              variant="outline"
              className="w-full text-sm"
              onClick={startGame}
              style={{ borderColor: GOLD.dark, color: GOLD.primary }}
            >
              بازی دوباره
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  if (gameState === 'active') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <Card className="border-2" style={{ borderColor: GOLD.primary, backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
          <CardContent className="p-6 space-y-6">
            <div className="text-center space-y-4">
              <div className="text-6xl font-black" style={{ color: GOLD.primary }}>
                {timeLeft}
              </div>
              <p className="text-sm text-gray-400">زمان باقی‌مانده</p>
              
              <div className="text-4xl font-black text-white">
                {score}
              </div>
              <p className="text-sm text-gray-400">تعداد کلیک‌ها</p>
            </div>

            <Button
              onClick={handleClick}
              className="w-full text-2xl py-12 rounded-xl font-black transition-all active:scale-95"
              style={{
                backgroundColor: GOLD.primary,
                color: '#000',
                boxShadow: `0 0 30px ${GOLD.glow}`
              }}
            >
              <Zap className="w-8 h-8 ml-2" />
              کلیک کن!
            </Button>
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
          ۵ ثانیه وقت داری هرچقدر می‌تونی روی دکمه کلیک کنی. بعدش ببین جزو کدوم دسته‌ای و چه پیشنهادی برات داریم!
        </p>
      </div>

      <Card className="border-2" style={{ borderColor: GOLD.dark, backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
        <CardContent className="p-8">
          <Button
            onClick={startGame}
            className="w-full text-xl py-8 rounded-xl font-bold"
            style={{
              backgroundColor: GOLD.primary,
              color: '#000',
              boxShadow: `0 0 20px ${GOLD.glow}`
            }}
          >
            <Zap className="w-6 h-6 ml-2" />
            شروع چالش
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// Main Games Section Component
const BlackFridayGamesSection = () => {
  const [activeTab, setActiveTab] = useState<'quiz' | 'treasure' | 'speed'>('quiz');

  const tabs = [
    { id: 'quiz' as const, label: 'کوییز هوش مصنوعی', icon: Brain },
    { id: 'treasure' as const, label: 'شکار گنج', icon: Trophy },
    { id: 'speed' as const, label: 'چالش کلیک سریع', icon: Zap }
  ];

  return (
    <section className="py-10 px-4" dir="rtl">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-3"
        >
          <Badge className="text-sm px-4 py-2" style={{ backgroundColor: GOLD.primary, color: '#000' }}>
            <Gamepad2 className="w-4 h-4 ml-1" />
            بازی‌های بلک فرایدی
          </Badge>
          <h2 className="text-2xl md:text-3xl font-black" style={{ color: GOLD.primary }}>
            بازی بلک فرایدی | جایزه‌ات تخفیف ویژه‌ست
          </h2>
          <p className="text-sm text-gray-300 max-w-2xl mx-auto">
            یکی از بازی‌ها رو انتخاب کن، چند ثانیه بازی کن و در پایان جایزه‌ات رو با کد تخفیف blackfriday بردار.
          </p>

          <div className="inline-flex p-1 rounded-lg" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', border: `1px solid ${GOLD.dark}` }}>
            <Gift className="w-4 h-4 ml-1" style={{ color: GOLD.primary }} />
            <span className="text-xs" style={{ color: GOLD.primary }}>
              کد تخفیف مشترک همه بازی‌ها: <strong>blackfriday</strong>
            </span>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-2 justify-center flex-wrap">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                  activeTab === tab.id ? 'scale-105' : ''
                }`}
                style={{
                  backgroundColor: activeTab === tab.id ? GOLD.primary : 'rgba(0, 0, 0, 0.6)',
                  color: activeTab === tab.id ? '#000' : GOLD.primary,
                  border: `2px solid ${activeTab === tab.id ? GOLD.primary : GOLD.dark}`,
                  boxShadow: activeTab === tab.id ? `0 0 20px ${GOLD.glow}` : 'none'
                }}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Game Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'quiz' && <AiQuizGame />}
            {activeTab === 'treasure' && <TreasureHuntGame />}
            {activeTab === 'speed' && <SpeedClickGame />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default BlackFridayGamesSection;
