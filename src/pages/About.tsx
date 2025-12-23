import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Target, Globe, Users, Rocket, Brain, Cloud, Hammer, 
  GraduationCap, Zap, PhoneCall, Flower2, CreditCard, 
  Wallet, Briefcase, Newspaper, Layers, ChevronRight,
  Database, Lock, HardDrive, Server, MessageSquare,
  TrendingUp, BookOpen, Network, ArrowRight, Sparkles,
  Check, Quote
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import rezaRafieiPhoto from '@/assets/reza-rafiei.jpeg';

const About = () => {
  const [activeCategory, setActiveCategory] = useState('infrastructure');

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const platformCategories = {
    infrastructure: {
      title: 'Core Infrastructure',
      icon: <Server className="h-5 w-5" />,
      platforms: [
        {
          name: 'Rafiei Cloud',
          icon: <Cloud className="h-6 w-6" />,
          description: 'Complete backend-as-a-service platform',
          features: ['Database', 'Authentication', 'File Storage', 'Edge Functions', 'Serverless APIs'],
          highlight: 'Zero configuration, deployable in under 2 minutes'
        },
        {
          name: 'Rafiei Builder',
          icon: <Hammer className="h-6 w-6" />,
          description: 'Vibe-coding platform for rapid development',
          features: ['Websites', 'Web Apps', 'Dashboards', 'AI-powered Tools'],
          highlight: 'Turn ideas directly into live products by chatting with AI'
        }
      ]
    },
    ai: {
      title: 'Artificial Intelligence',
      icon: <Brain className="h-5 w-5" />,
      platforms: [
        {
          name: 'Synapse',
          icon: <Zap className="h-6 w-6" />,
          description: 'Powerful AI agent framework',
          features: ['Custom AI Assistants', 'Tool Integration', 'Workflow Automation'],
          highlight: 'The intelligence layer across the Rafiei ecosystem'
        },
        {
          name: 'AI Assistant',
          icon: <MessageSquare className="h-6 w-6" />,
          description: 'Smart Telegram-based AI assistant',
          features: ['Daily Coaching', 'Business Guidance', 'Learning Support'],
          highlight: 'AI directly in your everyday communication'
        },
        {
          name: 'Global AI Coach',
          icon: <GraduationCap className="h-6 w-6" />,
          description: 'Advanced interactive AI learning system',
          features: ['Adaptive Learning', 'Behavioral Analysis', 'AI-generated Lessons'],
          highlight: 'The future of personalized, AI-native education'
        },
        {
          name: 'Calls Analyzer',
          icon: <PhoneCall className="h-6 w-6" />,
          description: 'AI-powered call analysis system',
          features: ['Transcription', 'Performance Analysis', 'Actionable Insights'],
          highlight: 'For sales teams, managers, and growing businesses'
        },
        {
          name: 'ZenMind',
          icon: <Flower2 className="h-6 w-6" />,
          description: 'Personalized AI meditation generator',
          features: ['Custom Sessions', 'Focus Programs', 'Mental Clarity Routines'],
          highlight: 'Mental performance alongside professional growth'
        }
      ]
    },
    education: {
      title: 'Education & Knowledge',
      icon: <BookOpen className="h-5 w-5" />,
      platforms: [
        {
          name: 'Rafiei Academy',
          icon: <GraduationCap className="h-6 w-6" />,
          description: 'Leading online education platform',
          features: ['40,000+ Active Learners', 'AI & Digital Business Courses', 'Execution-focused Training'],
          highlight: 'Known for simplicity, clarity, and results'
        },
        {
          name: 'Vetamerse',
          icon: <Layers className="h-6 w-6" />,
          description: 'Web3 and Metaverse education',
          features: ['Future Technologies', 'Digital Ownership', 'Decentralization'],
          highlight: 'Preparing users for emerging digital economies'
        },
        {
          name: 'Rafiei Mag',
          icon: <Newspaper className="h-6 w-6" />,
          description: 'AI-driven technology magazine',
          features: ['Curated Insights', 'AI-generated Analysis', 'Thought Leadership'],
          highlight: 'Content as strategic infrastructure'
        }
      ]
    },
    finance: {
      title: 'Financial Infrastructure',
      icon: <Wallet className="h-5 w-5" />,
      platforms: [
        {
          name: 'Rafiei Exchange',
          icon: <TrendingUp className="h-6 w-6" />,
          description: 'Advanced cryptocurrency trading',
          features: ['Professional Tools', 'Secure Infrastructure', 'Market Analysis'],
          highlight: 'Built for serious users requiring reliability'
        },
        {
          name: 'Rafiei Payment',
          icon: <CreditCard className="h-6 w-6" />,
          description: 'International payment solutions',
          features: ['Global Transactions', 'Cross-border Settlements', 'Business Flows'],
          highlight: 'For freelancers, startups, and digital businesses'
        },
        {
          name: 'Rafiei Financial',
          icon: <Wallet className="h-6 w-6" />,
          description: 'Payment gateway services',
          features: ['Online Payments', 'Transaction Management', 'Scalable Infrastructure'],
          highlight: 'Compliance, scalability, and long-term usability'
        }
      ]
    },
    business: {
      title: 'Business Services',
      icon: <Briefcase className="h-5 w-5" />,
      platforms: [
        {
          name: 'Rafiei Agency',
          icon: <Briefcase className="h-6 w-6" />,
          description: 'Strategic digital agency',
          features: ['Digital Products', 'AI Implementation', 'International Scaling'],
          highlight: 'Execution arm for complex digital transformations'
        },
        {
          name: 'BetterMX',
          icon: <Network className="h-6 w-6" />,
          description: 'Professional email forwarding',
          features: ['Business Email', 'International Operations', 'Clean Routing'],
          highlight: 'Infrastructure-grade email solution'
        }
      ]
    }
  };

  const missionPillars = [
    { icon: <Globe className="h-6 w-6" />, text: 'Learn Globally' },
    { icon: <Rocket className="h-6 w-6" />, text: 'Build Faster' },
    { icon: <TrendingUp className="h-6 w-6" />, text: 'Scale Intelligently' },
    { icon: <Wallet className="h-6 w-6" />, text: 'Earn Internationally' },
    { icon: <Network className="h-6 w-6" />, text: 'Operate Without Borders' }
  ];

  const impactStats = [
    { value: '40K+', label: 'Educated Users' },
    { value: '15+', label: 'AI-First Platforms' },
    { value: '300K+', label: 'Community Members' },
    { value: '4+', label: 'Countries Served' }
  ];

  const visionPoints = [
    'AI is a personal partner',
    'Education is adaptive',
    'Infrastructure is invisible',
    'Borders are irrelevant',
    'Opportunity is global'
  ];

  return (
    <div className="ltr text-left overflow-hidden">
      {/* Hero Section - Bold & Impactful */}
      <section className="min-h-screen flex items-center justify-center relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="max-w-5xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Building the Future of Digital Infrastructure</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight font-display">
              <span className="text-foreground">One Ecosystem.</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                Infinite Possibilities.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              Rafiei Group is a full-stack digital ecosystem eliminating geographical, financial, and technical barriers through intelligent systems.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {missionPillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border/50 hover:border-primary/30 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <span className="text-primary">{pillar.icon}</span>
                  <span className="text-sm font-medium text-foreground">{pillar.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder Section - Personal & Powerful */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {/* Founder Photo */}
              <motion.div variants={fadeInUp} className="relative order-2 lg:order-1">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 rounded-3xl blur-2xl" />
                <div className="relative">
                  <img 
                    src={rezaRafieiPhoto} 
                    alt="Reza Rafiei - Founder & CEO of Rafiei Group" 
                    className="w-full max-w-md mx-auto rounded-2xl shadow-2xl border-4 border-card"
                  />
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <Users className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Founder & Architect</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display text-foreground">
                  Reza Rafiei
                </h2>
                
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Technology entrepreneur, AI ecosystem architect, and global education innovator focused on building borderless digital infrastructure for the next generation of entrepreneurs, creators, and businesses.
                </p>
                
                <div className="p-6 rounded-xl bg-card border border-border/50 mb-8">
                  <div className="flex items-start gap-3">
                    <Quote className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-lg font-medium text-foreground italic mb-2">
                        To eliminate geographical, financial, and technical barriers using intelligent systems.
                      </p>
                      <p className="text-sm text-muted-foreground">— Core Mission</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  Rather than building isolated products, Reza builds connected ecosystems—where education, infrastructure, AI, and finance work together seamlessly. Every product connects to a bigger vision: <span className="text-primary font-medium">AI as infrastructure, not just a feature.</span>
                </p>
              </motion.div>
            </motion.div>
            
            {/* Stats Card - Below photo and text on larger screens */}
            <motion.div 
              className="mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 border-border/50 bg-card/80 backdrop-blur">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {impactStats.map((stat, index) => (
                    <div key={index} className="text-center p-6 rounded-xl bg-muted/50">
                      <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 rounded-xl bg-primary/5 border border-primary/20">
                  <h4 className="font-semibold text-foreground mb-4">Philosophy</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Build systems that empower humans, not replace them. The group operates on a fully integrated modern tech stack: AI, cloud, automation, and finance—all working as one.
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ecosystem Platforms - Interactive Tabs */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display text-foreground">
                The Ecosystem
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A multi-layered technology group designing AI-first platforms across every critical business domain.
              </p>
            </motion.div>

            <Tabs defaultValue="infrastructure" className="w-full">
              <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent h-auto mb-12">
                {Object.entries(platformCategories).map(([key, category]) => (
                  <TabsTrigger 
                    key={key} 
                    value={key}
                    className="flex items-center gap-2 px-6 py-3 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-border/50 data-[state=active]:border-primary transition-all"
                  >
                    {category.icon}
                    <span className="hidden sm:inline">{category.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {Object.entries(platformCategories).map(([key, category]) => (
                <TabsContent key={key} value={key} className="mt-0">
                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {category.platforms.map((platform, index) => (
                      <Card 
                        key={index}
                        className="p-6 border-border/50 bg-card hover:border-primary/30 transition-all group"
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                            {platform.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-foreground mb-1">{platform.name}</h3>
                            <p className="text-sm text-muted-foreground">{platform.description}</p>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {platform.features.map((feature, idx) => (
                            <span 
                              key={idx}
                              className="px-3 py-1 rounded-full text-xs bg-muted text-muted-foreground"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center gap-2 text-sm text-primary">
                          <ChevronRight className="h-4 w-4" />
                          <span>{platform.highlight}</span>
                        </div>
                      </Card>
                    ))}
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Vision Section - Future-focused */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display text-foreground">
                Long-Term Vision
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Building toward a future where technology serves humanity without barriers.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {visionPoints.map((point, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="p-6 rounded-xl bg-card border border-border/50 text-center hover:border-primary/30 transition-all group"
                >
                  <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <p className="font-medium text-foreground">{point}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="text-center p-12 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                This is not just a group of products.
              </p>
              <p className="text-xl text-primary font-medium">
                It is a digital civilization layer for the future.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display text-foreground">
                Ready to Build Without Borders?
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Join thousands who are already leveraging the Rafiei ecosystem to learn, build, and scale globally.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-base px-8">
                  <Link to="/contact" className="flex items-center gap-2">
                    Get Started
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base px-8">
                  <Link to="/">
                    Explore Products
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
