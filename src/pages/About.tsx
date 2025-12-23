import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, Globe, Users, Rocket, Brain, Cloud, Hammer, 
  GraduationCap, Zap, PhoneCall, Flower2, CreditCard, 
  Wallet, Briefcase, Newspaper, Layers, ChevronRight,
  Server, MessageSquare, Mail, Forward,
  TrendingUp, BookOpen, Network, ArrowRight, Sparkles,
  Check, Quote, Shield, Award, Clock, Heart, Lightbulb,
  LayoutGrid
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import rezaRafieiPhoto from '@/assets/reza-rafiei.jpeg';

const About = () => {
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
    all: {
      title: 'All Products',
      icon: <LayoutGrid className="h-5 w-5" />,
      description: 'Browse all platforms and products in the Rafiei ecosystem.',
      platforms: [] as any[] // Will be populated dynamically
    },
    infrastructure: {
      title: 'Core Infrastructure',
      icon: <Server className="h-5 w-5" />,
      description: 'The foundation that powers everything else in the ecosystem.',
      platforms: [
        {
          name: 'Rafiei Cloud',
          icon: <Cloud className="h-6 w-6" />,
          description: 'Complete backend-as-a-service platform providing database, authentication, file storage, edge functions, and serverless APIs.',
          features: ['Database', 'Authentication', 'File Storage', 'Edge Functions', 'Serverless APIs'],
          highlight: 'Zero configuration, deployable in under 2 minutes',
          details: 'Designed for founders, startups, and builders who want speed without complexity. Rafiei Cloud abstracts away infrastructure concerns so you can focus on building your product.'
        },
        {
          name: 'Rafiei Builder',
          icon: <Hammer className="h-6 w-6" />,
          description: 'A vibe-coding platform that allows users to create websites, web apps, dashboards, and AI-powered tools simply by chatting with AI.',
          features: ['Websites', 'Web Apps', 'Dashboards', 'AI-powered Tools'],
          highlight: 'Turn ideas directly into live products by chatting with AI',
          details: 'It abstracts away frontend, backend, and deployment—turning ideas directly into live products without writing a single line of code.'
        }
      ]
    },
    ai: {
      title: 'Artificial Intelligence',
      icon: <Brain className="h-5 w-5" />,
      description: 'AI-powered tools and platforms that augment human capabilities.',
      platforms: [
        {
          name: 'Synapse',
          icon: <Zap className="h-6 w-6" />,
          description: 'A powerful AI agent framework that lets users create custom AI assistants in minutes, connect them to real tools and workflows.',
          features: ['Custom AI Assistants', 'Tool Integration', 'Workflow Automation', 'Multi-agent Systems'],
          highlight: 'The intelligence layer across the Rafiei ecosystem',
          details: 'Use Synapse for coaching, sales, analysis, education, and automation. It is the core AI infrastructure that powers intelligent features across all Rafiei products.'
        },
        {
          name: 'AI Assistant',
          icon: <MessageSquare className="h-6 w-6" />,
          description: 'A smart Telegram-based AI assistant designed for daily coaching, business guidance, learning support, and personal productivity.',
          features: ['Daily Coaching', 'Business Guidance', 'Learning Support', 'Personal Productivity'],
          highlight: 'AI directly in your everyday communication environment',
          details: 'It brings AI directly into users everyday communication, making intelligent assistance accessible without switching apps or learning new interfaces.'
        },
        {
          name: 'Global AI Coach',
          icon: <GraduationCap className="h-6 w-6" />,
          description: 'An advanced interactive AI learning system for global education, combining adaptive learning paths with behavioral analysis.',
          features: ['Adaptive Learning Paths', 'Behavioral Analysis', 'AI-generated Lessons', 'Interactive Exercises'],
          highlight: 'The future of personalized, AI-native education',
          details: 'This platform represents the future of personalized, AI-native education. It adapts to each learner unique style and pace, creating truly individualized learning experiences.'
        },
        {
          name: 'Calls Analyzer',
          icon: <PhoneCall className="h-6 w-6" />,
          description: 'An AI-powered system that transcribes sales and support calls, analyzes performance, extracts insights, and provides actionable improvement suggestions.',
          features: ['Call Transcription', 'Performance Analysis', 'Insight Extraction', 'Improvement Suggestions'],
          highlight: 'For sales teams, managers, and growing businesses',
          details: 'Designed for sales teams, managers, and growing businesses who want to continuously improve their communication and close more deals.'
        },
        {
          name: 'ZenMind',
          icon: <Flower2 className="h-6 w-6" />,
          description: 'A personalized AI meditation generator that creates custom mindfulness sessions, focus programs, and mental clarity routines.',
          features: ['Custom Mindfulness Sessions', 'Focus Programs', 'Mental Clarity Routines', 'Personalized Guidance'],
          highlight: 'Mental performance alongside professional growth',
          details: 'Built to support mental performance alongside professional growth. Because sustainable success requires both productivity and peace of mind.'
        }
      ]
    },
    education: {
      title: 'Education & Knowledge',
      icon: <BookOpen className="h-5 w-5" />,
      description: 'Platforms that democratize access to knowledge and skills.',
      platforms: [
        {
          name: 'Rafiei Academy',
          icon: <GraduationCap className="h-6 w-6" />,
          description: 'One of the most impactful online education platforms in the region, with 40,000+ active learners and courses on borderless income, AI, digital business, and mindset.',
          features: ['40,000+ Active Learners', 'AI & Digital Business Courses', 'Execution-focused Training', 'Community Support'],
          highlight: 'Known for simplicity, clarity, and results',
          details: 'Rafiei Academy is known for simplicity, clarity, and results. Every course is designed to be actionable and focused on real-world execution, not just theory.'
        },
        {
          name: 'Vetamerse',
          icon: <Layers className="h-6 w-6" />,
          description: 'A media and education platform focused on Web3, Metaverse, future technologies, digital ownership, and decentralization.',
          features: ['Web3 Education', 'Metaverse Content', 'Future Technologies', 'Digital Ownership'],
          highlight: 'Preparing users for emerging digital economies',
          details: 'Designed to prepare users for emerging digital economies. Understanding blockchain, NFTs, and decentralized systems is essential for the next generation of digital entrepreneurs.'
        },
        {
          name: 'Rafiei Mag',
          icon: <Newspaper className="h-6 w-6" />,
          description: 'The first AI-driven technology and business magazine in the ecosystem, delivering curated insights, AI-generated analysis, and educational thought leadership.',
          features: ['Curated Insights', 'AI-generated Analysis', 'Rebranded Global News', 'Thought Leadership'],
          highlight: 'Content as strategic infrastructure, not noise',
          details: 'Content is treated as strategic infrastructure, not noise. Every article is designed to inform, educate, and empower readers to make better decisions.'
        }
      ]
    },
    finance: {
      title: 'Financial Infrastructure',
      icon: <Wallet className="h-5 w-5" />,
      description: 'Tools and platforms that enable global financial operations.',
      platforms: [
        {
          name: 'Rafiei Exchange',
          icon: <TrendingUp className="h-6 w-6" />,
          description: 'An advanced cryptocurrency trading platform offering professional trading tools, secure infrastructure, and comprehensive market analysis features.',
          features: ['Professional Trading Tools', 'Secure Infrastructure', 'Market Analysis', 'Portfolio Management'],
          highlight: 'Built for serious users who require reliability and performance',
          details: 'Built for serious users who require reliability and performance. Security is paramount, with enterprise-grade protection for all assets and transactions.'
        },
        {
          name: 'Rafiei Payment',
          icon: <CreditCard className="h-6 w-6" />,
          description: 'International payment solutions enabling global transactions, cross-border settlements, and business-friendly payment flows.',
          features: ['Global Transactions', 'Cross-border Settlements', 'Business-friendly Flows', 'Multi-currency Support'],
          highlight: 'For freelancers, startups, and digital businesses',
          details: 'Designed to support freelancers, startups, and digital businesses who need to send and receive money across borders without friction.'
        },
        {
          name: 'Rafiei Financial',
          icon: <Wallet className="h-6 w-6" />,
          description: 'A payment gateway and financial services layer supporting online payments, transaction management, and scalable payment infrastructure.',
          features: ['Online Payments', 'Transaction Management', 'Scalable Infrastructure', 'Compliance Tools'],
          highlight: 'Compliance, scalability, and long-term usability',
          details: 'Focused on compliance, scalability, and long-term usability. Built to grow with your business from day one to enterprise scale.'
        }
      ]
    },
    business: {
      title: 'Business Services',
      icon: <Briefcase className="h-5 w-5" />,
      description: 'Strategic services that help businesses scale globally.',
      platforms: [
        {
          name: 'Rafiei Agency',
          icon: <Briefcase className="h-6 w-6" />,
          description: 'A strategic agency helping businesses build digital products, implement AI systems, optimize operations, and scale internationally.',
          features: ['Digital Products', 'AI Implementation', 'Operations Optimization', 'International Scaling'],
          highlight: 'Execution arm for complex digital transformations',
          details: 'The agency acts as an execution arm for complex digital transformations. From strategy to implementation, we partner with businesses to bring their vision to life.'
        },
        {
          name: 'BetterMX',
          icon: <Forward className="h-6 w-6" />,
          description: 'A professional email forwarding solution for businesses, founders, and international operations with reliable, clean, infrastructure-grade email routing.',
          features: ['Business Email', 'International Operations', 'Clean Routing', 'Custom Domains'],
          highlight: 'Infrastructure-grade email solution',
          details: 'Reliable, clean, and infrastructure-grade email routing. Perfect for businesses that need professional email without the complexity of managing email servers.'
        }
      ]
    }
  };

  // Populate "all" category with all platforms
  const allPlatforms = Object.entries(platformCategories)
    .filter(([key]) => key !== 'all')
    .flatMap(([_, category]) => category.platforms);
  platformCategories.all.platforms = allPlatforms;

  const missionPillars = [
    { icon: <Globe className="h-6 w-6" />, text: 'Learn Globally', description: 'Access world-class education from anywhere' },
    { icon: <Rocket className="h-6 w-6" />, text: 'Build Faster', description: 'Launch products in days, not months' },
    { icon: <TrendingUp className="h-6 w-6" />, text: 'Scale Intelligently', description: 'Grow with AI-powered automation' },
    { icon: <Wallet className="h-6 w-6" />, text: 'Earn Internationally', description: 'Accept payments from anywhere' },
    { icon: <Network className="h-6 w-6" />, text: 'Operate Without Borders', description: 'Build a truly global business' }
  ];

  const impactStats = [
    { value: '40K+', label: 'Educated Users', icon: <Users className="h-5 w-5" /> },
    { value: '15+', label: 'AI-First Platforms', icon: <Brain className="h-5 w-5" /> },
    { value: '300K+', label: 'Community Members', icon: <Heart className="h-5 w-5" /> },
    { value: '4+', label: 'Countries Served', icon: <Globe className="h-5 w-5" /> }
  ];

  const visionPoints = [
    { text: 'AI is a personal partner', icon: <Brain className="h-5 w-5" /> },
    { text: 'Education is adaptive', icon: <GraduationCap className="h-5 w-5" /> },
    { text: 'Infrastructure is invisible', icon: <Cloud className="h-5 w-5" /> },
    { text: 'Borders are irrelevant', icon: <Globe className="h-5 w-5" /> },
    { text: 'Opportunity is global', icon: <Sparkles className="h-5 w-5" /> }
  ];

  const coreValues = [
    { 
      icon: <Lightbulb className="h-8 w-8" />, 
      title: 'Innovation First', 
      description: 'We embrace cutting-edge technology and constantly push boundaries to create solutions that did not exist before.'
    },
    { 
      icon: <Users className="h-8 w-8" />, 
      title: 'Human-Centered', 
      description: 'Technology should empower humans, not replace them. Every product is designed with the user at the center.'
    },
    { 
      icon: <Globe className="h-8 w-8" />, 
      title: 'Borderless Thinking', 
      description: 'We build for a global audience, eliminating geographical barriers and creating opportunities for everyone.'
    },
    { 
      icon: <Shield className="h-8 w-8" />, 
      title: 'Trust & Security', 
      description: 'Security and privacy are non-negotiable. We build infrastructure you can trust with your most important assets.'
    },
    { 
      icon: <Zap className="h-8 w-8" />, 
      title: 'Speed & Simplicity', 
      description: 'Complex problems deserve simple solutions. We obsess over making powerful technology accessible to everyone.'
    },
    { 
      icon: <Target className="h-8 w-8" />, 
      title: 'Results-Driven', 
      description: 'We measure success by the real-world impact we create. Theory without execution is just noise.'
    }
  ];

  const timeline = [
    { year: '2018', title: 'Foundation', description: 'Rafiei Group was established with a vision to empower individuals through education and technology.' },
    { year: '2019', title: 'Academy Launch', description: 'Launched Rafiei Academy, quickly growing to thousands of active learners across the region.' },
    { year: '2020', title: 'Global Expansion', description: 'Expanded operations to UK, Australia, and UAE, serving students and businesses worldwide.' },
    { year: '2021', title: 'Financial Services', description: 'Introduced payment and financial infrastructure to enable borderless business operations.' },
    { year: '2022', title: 'AI Innovation', description: 'Launched AI-powered educational tools, Synapse, and intelligent business assistants.' },
    { year: '2023', title: 'Cloud Infrastructure', description: 'Released Rafiei Cloud and Builder, enabling rapid application development.' },
    { year: '2024', title: 'Ecosystem Maturity', description: 'Full ecosystem integration achieved with 15+ interconnected platforms serving global users.' }
  ];

  return (
    <div className="ltr text-left overflow-hidden">
      {/* Hero Section - Bold & Impactful */}
      <section className="min-h-screen flex items-center justify-center relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
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
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Rafiei Group is a full-stack digital ecosystem designed to help individuals and businesses learn globally, build faster, scale intelligently, earn internationally, and operate without borders.
            </p>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
              Every product inside the group connects to a bigger vision: <span className="text-primary font-semibold">AI as infrastructure, not just a feature.</span>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
              {missionPillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:bg-card/80 transition-all group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <span className="text-primary group-hover:scale-110 transition-transform">{pillar.icon}</span>
                  <span className="text-sm font-semibold text-foreground">{pillar.text}</span>
                  <span className="text-xs text-muted-foreground text-center">{pillar.description}</span>
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
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display text-foreground">
                Meet the Founder
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The vision and leadership behind the Rafiei ecosystem.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {/* Founder Photo */}
              <motion.div variants={fadeInUp} className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 rounded-3xl blur-2xl" />
                <div className="relative">
                  <img 
                    src={rezaRafieiPhoto} 
                    alt="Reza Rafiei - Founder & CEO of Rafiei Group" 
                    className="w-full max-w-md mx-auto rounded-2xl shadow-2xl border-4 border-card"
                  />
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-card border border-border/50 rounded-xl px-6 py-3 shadow-lg">
                    <p className="text-sm font-medium text-muted-foreground">Founder & CEO</p>
                    <p className="text-lg font-bold text-foreground">Reza Rafiei</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                  <Award className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Technology Entrepreneur & AI Ecosystem Architect</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold font-display text-foreground">
                  Building Borderless Digital Infrastructure
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Reza Rafiei is a technology entrepreneur, AI ecosystem architect, and global education innovator focused on building borderless digital infrastructure for the next generation of entrepreneurs, creators, and businesses.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  He is the founder of Rafiei Group, a multi-layered technology group that designs and operates AI-first platforms across education, finance, cloud infrastructure, automation, media, and global business services.
                </p>
                
                <div className="p-6 rounded-xl bg-card border border-border/50">
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

                <div className="grid grid-cols-2 gap-4">
                  {impactStats.slice(0, 2).map((stat, index) => (
                    <div key={index} className="p-4 rounded-xl bg-muted/50 text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-primary">{stat.icon}</span>
                        <span className="text-2xl font-bold text-primary">{stat.value}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
            
            {/* Stats Card */}
            <motion.div 
              className="mt-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 border-border/50 bg-card/80 backdrop-blur">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  {impactStats.map((stat, index) => (
                    <div key={index} className="text-center p-6 rounded-xl bg-muted/50 hover:bg-muted/70 transition-colors">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        {stat.icon}
                      </div>
                      <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
                
                <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                  <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Heart className="h-5 w-5 text-primary" />
                    Philosophy
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Build systems that empower humans, not replace them. The group operates on a fully integrated modern tech stack: AI, cloud, automation, and finance—all working as one. Across all platforms, Rafiei Group has achieved tens of thousands of educated users, multiple scalable AI-first systems, proven real-world adoption, and strong communities across regions.
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
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
                Core Values
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The principles that guide every decision and product we build.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all group"
                >
                  <div className="w-14 h-14 mb-4 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display text-foreground">
                Our Journey
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                From a vision to a global ecosystem serving thousands.
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border hidden lg:block" />
              
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      <Card className="p-6 border-border/50 bg-card hover:border-primary/30 transition-all inline-block">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 mb-3">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="text-sm font-bold text-primary">{item.year}</span>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </Card>
                    </div>
                    
                    <div className="flex-shrink-0 z-10">
                      <div className="w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/30" />
                    </div>
                    
                    <div className="flex-1 hidden lg:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Platforms - Interactive Tabs */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display text-foreground">
                The Ecosystem
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A multi-layered technology group designing and operating AI-first platforms across education, finance, cloud infrastructure, automation, media, and global business services.
              </p>
            </motion.div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent h-auto mb-12">
                {Object.entries(platformCategories).map(([key, category]) => (
                  <TabsTrigger 
                    key={key} 
                    value={key}
                    className="flex items-center gap-2 px-4 md:px-6 py-3 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-border/50 data-[state=active]:border-primary transition-all hover:bg-muted/50"
                  >
                    {category.icon}
                    <span className="hidden sm:inline">{category.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {Object.entries(platformCategories).map(([key, category]) => (
                <TabsContent key={key} value={key} className="mt-0">
                  {category.description && (
                    <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                      {category.description}
                    </p>
                  )}
                  <motion.div 
                    className={`grid gap-6 ${key === 'all' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 md:grid-cols-2'}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {category.platforms.map((platform, index) => (
                      <Card 
                        key={index}
                        className="p-6 border-border/50 bg-card hover:border-primary/30 transition-all group hover:shadow-lg"
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                            {platform.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-foreground mb-1">{platform.name}</h3>
                            <p className="text-sm text-muted-foreground line-clamp-2">{platform.description}</p>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {platform.features.slice(0, 4).map((feature, idx) => (
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
                          <span className="line-clamp-1">{platform.highlight}</span>
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
                Reza Rafiei and Rafiei Group are building toward a future where technology serves humanity without barriers.
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
                  className="p-6 rounded-xl bg-card border border-border/50 text-center hover:border-primary/30 transition-all group hover:shadow-lg"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors text-primary">
                    {point.icon}
                  </div>
                  <p className="font-medium text-foreground">{point.text}</p>
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
              <p className="text-xl text-primary font-medium mb-6">
                It is a digital civilization layer for the future.
              </p>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A world where anyone, anywhere, can access the tools, knowledge, and infrastructure they need to build something meaningful—without barriers of location, capital, or technical expertise.
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
              <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join thousands who are already leveraging the Rafiei ecosystem to learn, build, and scale globally.
              </p>
              <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
                Whether you are an entrepreneur launching your first product, a business scaling internationally, or a creator looking to monetize globally—we have the infrastructure you need.
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
