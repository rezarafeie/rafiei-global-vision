import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, Gift, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

const DISCOUNT_CODE = 'BLKFHDNTRSRDSCNT';
const GOLD = {
  primary: '#FFD700',
  light: '#FFED4E',
  dark: '#B8860B',
  glow: 'rgba(255, 215, 0, 0.3)',
};

const PRODUCT_LINKS = {
  START_COURSE: 'https://academy.rafiei.co/enroll/?course=boundless',
  BNETS: 'https://t.me/getbnbot',
};

const TreasureHuntGame = () => {
  const [foundTreasures, setFoundTreasures] = useState<number[]>([]);
  const [completed, setCompleted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [gameActive, setGameActive] = useState(false);
  const [treasures, setTreasures] = useState<Array<{id: number, icon: string, top: string, left: string}>>([]);

  useEffect(() => {
    const savedCompleted = localStorage.getItem('bf_treasure_hunt_completed');
    if (savedCompleted === 'true') {
      setCompleted(true);
      setFoundTreasures([1, 2, 3, 4, 5]);
    }
  }, []);

  const startGame = () => {
    // Generate random positions across the entire viewport
    const newTreasures = [
      { id: 1, icon: '🎁', top: `${Math.random() * 80 + 10}%`, left: `${Math.random() * 80 + 10}%` },
      { id: 2, icon: '💎', top: `${Math.random() * 80 + 10}%`, left: `${Math.random() * 80 + 10}%` },
      { id: 3, icon: '💥', top: `${Math.random() * 80 + 10}%`, left: `${Math.random() * 80 + 10}%` },
      { id: 4, icon: '💰', top: `${Math.random() * 80 + 10}%`, left: `${Math.random() * 80 + 10}%` },
      { id: 5, icon: '🚀', top: `${Math.random() * 80 + 10}%`, left: `${Math.random() * 80 + 10}%` }
    ];
    setTreasures(newTreasures);
    setGameActive(true);
    toast.success('بازی شروع شد! گنج‌ها رو پیدا کن');
  };

  const handleTreasureClick = (id: number) => {
    if (!foundTreasures.includes(id)) {
      const newFound = [...foundTreasures, id];
      setFoundTreasures(newFound);
      toast.success(`گنج ${newFound.length} پیدا شد!`);
      
      if (newFound.length === 5) {
        setCompleted(true);
        setGameActive(false);
        localStorage.setItem('bf_treasure_hunt_completed', 'true');
        toast.success('آفرین! همه گنج‌ها رو پیدا کردی 🎉');
      }
    }
  };

  const copyCode = () => {
    navigator.clipboard.writeText(DISCOUNT_CODE);
    setCopied(true);
    toast.success('کد کپی شد');
    setTimeout(() => setCopied(false), 2000);
  };

  const resetGame = () => {
    setFoundTreasures([]);
    setCompleted(false);
    setGameActive(false);
    localStorage.removeItem('bf_treasure_hunt_completed');
  };

  const closeGame = () => {
    setGameActive(false);
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
    <>
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
            ۵ نماد مخفی تخفیف رو تو کل صفحه پیدا کن و جایزه‌ات رو بگیر!
          </p>
        </div>

        {!gameActive && (
          <Button
            className="w-full text-base py-4 rounded-lg font-bold"
            style={{ backgroundColor: GOLD.primary, color: '#000' }}
            onClick={startGame}
          >
            <Gift className="w-5 h-5 ml-2" />
            شروع شکار گنج
          </Button>
        )}

        {gameActive && (
          <div className="text-center p-3 rounded-lg" style={{ backgroundColor: `${GOLD.primary}11` }}>
            <span className="text-sm font-bold" style={{ color: GOLD.primary }}>
              گنج‌های پیدا شده: {foundTreasures.length} از ۵
            </span>
          </div>
        )}
      </motion.div>

      {/* Full screen treasure overlay */}
      <AnimatePresence>
        {gameActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 pointer-events-none"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
          >
            {/* Close button */}
            <button
              onClick={closeGame}
              className="absolute top-4 left-4 p-3 rounded-full pointer-events-auto z-50"
              style={{ backgroundColor: GOLD.primary }}
            >
              <X className="w-6 h-6 text-black" />
            </button>

            {/* Progress indicator */}
            <div 
              className="absolute top-4 right-4 p-4 rounded-lg pointer-events-auto backdrop-blur-sm"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', border: `2px solid ${GOLD.primary}` }}
            >
              <p className="text-sm font-bold" style={{ color: GOLD.primary }}>
                گنج‌های پیدا شده: {foundTreasures.length} از ۵
              </p>
            </div>

            {/* Treasures scattered across screen */}
            {treasures.map((treasure) => (
              <motion.button
                key={treasure.id}
                onClick={() => handleTreasureClick(treasure.id)}
                className="absolute text-4xl md:text-5xl cursor-pointer pointer-events-auto z-40"
                style={{
                  top: treasure.top,
                  left: treasure.left,
                  opacity: foundTreasures.includes(treasure.id) ? 0 : 1,
                  pointerEvents: foundTreasures.includes(treasure.id) ? 'none' : 'auto',
                  filter: `drop-shadow(0 0 10px ${GOLD.glow})`
                }}
                initial={{ scale: 0 }}
                animate={{ 
                  scale: foundTreasures.includes(treasure.id) ? 0 : [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{
                  scale: { duration: 0.3 },
                  rotate: { duration: 2, repeat: Infinity }
                }}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
              >
                {treasure.icon}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TreasureHuntGame;
