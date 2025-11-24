import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Copy, Check, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const DISCOUNT_CODE = 'BLKFAIQGDSCNT';
const GOLD = {
  primary: '#FFD700',
  light: '#FFED4E',
  dark: '#B8860B',
  glow: 'rgba(255, 215, 0, 0.3)',
};

const PRODUCT_LINKS: Record<string, string> = {
  'دوره شروع': 'https://academy.rafiei.co/enroll/?course=boundless',
  'شبکه بدون مرز': 'https://t.me/getbnbot',
  'صرافی رفیعی': 'https://exchange.rafiei.co/',
  'ثبت شرکت': 'https://t.me/m/_D9w2J4BNjA0',
  'افتتاح حساب': 'https://t.me/m/_D9w2J4BNjA0',
  'کوچ هوشمند': 'https://coach.rafiei.co/',
};

const AiQuizGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Array<{question: string, answer: string}>>([]);
  const [showResult, setShowResult] = useState(false);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<any>(null);
  const [questionFlow, setQuestionFlow] = useState<string>('initial');

  const initialQuestions = [
    {
      q: 'بزرگ‌ترین هدفت از این تخفیف‌ها چیه؟',
      options: [
        { text: 'یادگیری مهارت‌های جدید و رشد شخصی', next: 'learning' },
        { text: 'راه‌اندازی بیزینس بین‌المللی', next: 'business' },
        { text: 'دسترسی امن به اینترنت و سرویس‌های خارجی', next: 'access' },
        { text: 'نقد کردن درآمد دلاری', next: 'exchange' }
      ]
    }
  ];

  const learningFlow = [
    {
      q: 'چقدر وقت می‌تونی برای یادگیری بذاری؟',
      options: [
        { text: 'کمتر از ۳ ساعت در هفته' },
        { text: '۳ تا ۷ ساعت در هفته' },
        { text: 'بیشتر از ۷ ساعت در هفته' }
      ]
    },
    {
      q: 'سطح تجربه‌ات تو آموزش آنلاین چقدره؟',
      options: [
        { text: 'اولین باره می‌خوام یک دوره بخرم' },
        { text: 'چند دوره گذروندم ولی تجربه خوبی نداشتم' },
        { text: 'دوره‌های زیادی گذروندم و می‌دونم چی می‌خوام' }
      ]
    },
    {
      q: 'دنبال یادگیری چی هستی؟',
      options: [
        { text: 'شروع کسب‌وکار آنلاین از صفر' },
        { text: 'مهارت‌های تخصصی مثل دراپ‌شیپینگ یا فروش فایل' },
        { text: 'ساخت آکادمی آنلاین و فروش دوره' }
      ]
    }
  ];

  const businessFlow = [
    {
      q: 'کجای مسیر ثبت شرکت هستی؟',
      options: [
        { text: 'هنوز فکرشم نکردم، اول می‌خوام بیزینس رو بسازم' },
        { text: 'دارم درآمد می‌گیرم، می‌خوام جدی‌ترش کنم' },
        { text: 'آماده‌ام، فقط نمی‌دونم کجا ثبت کنم' }
      ]
    },
    {
      q: 'الان بیزینست چه مرحله‌ایه؟',
      options: [
        { text: 'هنوز ایده دارم، شروع نکردم' },
        { text: 'شروع کردم ولی درآمدم کمه' },
        { text: 'درآمد خوبی دارم، می‌خوام مقیاس‌پذیرش کنم' }
      ]
    },
    {
      q: 'بیشترین نیازت چیه؟',
      options: [
        { text: 'یادگیری و آموزش' },
        { text: 'ثبت شرکت و افتتاح حساب' },
        { text: 'کوچ و راهنمایی مستمر' }
      ]
    }
  ];

  const accessFlow = [
    {
      q: 'اصلاً چرا به VPN نیاز داری؟',
      options: [
        { text: 'کار با پلتفرم‌های خارجی' },
        { text: 'دسترسی به شبکه‌های اجتماعی' },
        { text: 'امنیت و حریم خصوصی' }
      ]
    },
    {
      q: 'چقدر استفاده می‌کنی ازش؟',
      options: [
        { text: 'هر روز، چند ساعت' },
        { text: 'فقط موقع کار' },
        { text: 'گاهی وقت‌ها' }
      ]
    },
    {
      q: 'علاوه بر VPN، به چی دیگه‌ای نیاز داری؟',
      options: [
        { text: 'آموزش کسب‌وکار آنلاین' },
        { text: 'ثبت شرکت و حساب بانکی' },
        { text: 'فقط VPN کافیه' }
      ]
    }
  ];

  const exchangeFlow = [
    {
      q: 'از کجا درآمد دلاری داری؟',
      options: [
        { text: 'PayPal, Stripe, Wise' },
        { text: 'فریلنسینگ (Upwork, Fiverr)' },
        { text: 'هنوز درآمدی ندارم، دارم شروع می‌کنم' }
      ]
    },
    {
      q: 'ماهیانه چقدر درآمد داری؟',
      options: [
        { text: 'کمتر از ۵۰۰ دلار' },
        { text: '۵۰۰ تا ۲۰۰۰ دلار' },
        { text: 'بیشتر از ۲۰۰۰ دلار' }
      ]
    },
    {
      q: 'چه کمک دیگه‌ای لازم داری؟',
      options: [
        { text: 'ثبت شرکت برای رسمی کردن' },
        { text: 'آموزش برای افزایش درآمد' },
        { text: 'فقط صرافی کافیه' }
      ]
    }
  ];

  const getQuestions = () => {
    if (questionFlow === 'initial') return initialQuestions;
    
    switch (questionFlow) {
      case 'learning': return learningFlow;
      case 'business': return businessFlow;
      case 'access': return accessFlow;
      case 'exchange': return exchangeFlow;
      default: return initialQuestions;
    }
  };

  const questions = getQuestions();

  const handleAnswer = async (optionIndex: number) => {
    const currentQ = questions[currentQuestion];
    const selectedOption = currentQ.options[optionIndex];
    
    const newAnswers = [...answers, {
      question: currentQ.q,
      answer: selectedOption.text
    }];
    setAnswers(newAnswers);

    // If this is the first question, set the flow
    if (currentQuestion === 0 && 'next' in selectedOption) {
      setQuestionFlow(selectedOption.next as string);
      setCurrentQuestion(1); // Move to first question of new flow
      return;
    }

    // Move to next question or finish
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Generate AI recommendation
      setLoading(true);
      try {
        const { data, error } = await supabase.functions.invoke('ai-quiz-recommendation', {
          body: { answers: newAnswers }
        });

        if (error) {
          toast.error('خطا در دریافت پیشنهاد');
          console.error(error);
          // Use fallback
          setRecommendation({
            label: 'تو یک شروع‌کننده با انگیزه هستی',
            title: 'دوره شروع | ۶۰٪ تخفیف',
            description: 'بهترین راه برای شروع مسیر درآمد دلاری',
            recommendations: [{
              product: 'دوره شروع',
              discount: '۶۰٪',
              ctaText: 'خرید دوره شروع با ۶۰٪ تخفیف',
              ctaLink: PRODUCT_LINKS['دوره شروع']
            }]
          });
        } else {
          setRecommendation(data);
        }
      } catch (e) {
        console.error(e);
        toast.error('خطا در دریافت پیشنهاد');
      } finally {
        setLoading(false);
        setShowResult(true);
      }
    }
  };

  const copyCode = () => {
    navigator.clipboard.writeText(DISCOUNT_CODE);
    setCopied(true);
    toast.success('کد کپی شد');
    setTimeout(() => setCopied(false), 2000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setRecommendation(null);
    setQuestionFlow('initial');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-center space-y-4">
          <Brain className="w-12 h-12 animate-pulse mx-auto" style={{ color: GOLD.primary }} />
          <p className="text-gray-300">هوش مصنوعی داره بهترین پیشنهاد رو برات آماده می‌کنه...</p>
        </div>
      </div>
    );
  }

  if (showResult && recommendation) {
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

            <div className="space-y-3">
              {recommendation.recommendations?.map((rec: any, idx: number) => (
                <div key={idx} className="p-4 rounded-lg" style={{ backgroundColor: `${GOLD.primary}11`, border: `1px solid ${GOLD.dark}` }}>
                  <h4 className="text-base font-bold mb-2" style={{ color: GOLD.primary }}>
                    {rec.product} | {rec.discount} تخفیف
                  </h4>
                  <Button
                    className="w-full text-sm py-3 rounded-lg font-bold"
                    style={{ backgroundColor: GOLD.primary, color: '#000' }}
                    onClick={() => window.location.href = rec.ctaLink || PRODUCT_LINKS[rec.product]}
                  >
                    {rec.ctaText || `خرید ${rec.product}`}
                  </Button>
                </div>
              ))}
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

export default AiQuizGame;
