import React, { useState } from 'react';
import { translations, Language } from './types';
import LanguageToggle from './components/LanguageToggle';
import PricingCalculator from './components/PricingCalculator';
import DiagnosticQuiz from './components/DiagnosticQuiz';
import LessonPreview from './components/LessonPreview';
import LeadForm from './components/LeadForm';
import PricingPlans from './components/PricingPlans';
import { 
  Sprout, 
  HelpCircle, 
  CheckCircle2, 
  Award, 
  MessageCircle, 
  BookOpen, 
  Play, 
  ShoppingBag, 
  Coins, 
  Compass, 
  Truck, 
  Users, 
  Heart, 
  Instagram, 
  Workflow, 
  Calculator, 
  Smartphone, 
  Target, 
  Flame, 
  Star,
  ChevronDown
} from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('pt'); // Default to PT-BR as requested in Portuguese
  const t = translations[currentLanguage];
  const isPt = currentLanguage === 'pt';

  // Navigation state helper
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Icon mapping for problem list cards to keep UI extremely rich
  const problemIcons: Record<string, React.ReactNode> = {
    photos: <Smartphone className="text-brand-500" size={20} />,
    pricing: <Coins className="text-brand-500" size={20} />,
    customer: <Target className="text-brand-500" size={20} />,
    fairs: <ShoppingBag className="text-brand-500" size={20} />,
    catalog: <Workflow className="text-brand-500" size={20} />,
    shipping: <Truck className="text-brand-500" size={20} />,
    guesswork: <HelpCircle className="text-brand-500" size={20} />,
    socials: <Instagram className="text-brand-500" size={20} />,
  };

  return (
    <div className="min-h-screen bg-[#faf9f4] text-zinc-900 font-sans selection:bg-leaf-100 selection:text-leaf-900 overflow-x-hidden antialiased">
      
      {/* HEADER / NAVIGATION BAR */}
      <header className="sticky top-0 z-50 bg-[#faf9f4]/85 backdrop-blur-md border-b border-zinc-200/40 px-4 md:px-8 py-3.5 transition-all duration-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo brand */}
          <a href="#" className="flex items-center gap-2 select-none group" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <div className="h-9 w-9 bg-leaf-700 rounded-full flex items-center justify-center text-white shadow-sm group-hover:bg-leaf-800 transition-colors">
              <Sprout size={18} className="animate-spin-slow text-zinc-100" />
            </div>
            <div>
              <span className="font-serif text-lg md:text-xl font-bold tracking-tight text-zinc-900">
                Eniesse<span className="text-leaf-600 font-sans font-medium text-xs ml-1 bg-leaf-50 border border-leaf-100 px-1.5 py-0.5 rounded-md uppercase">Grow</span>
              </span>
            </div>
          </a>

          {/* Nav links Desktop */}
          <nav className="hidden lg:flex items-center gap-6">
            <button id="nav-btn-prob" onClick={() => handleScroll('problem')} className="text-xs font-semibold text-zinc-650 hover:text-leaf-700 transition-colors cursor-pointer">
              {t.nav.problem}
            </button>
            <button id="nav-btn-sol" onClick={() => handleScroll('solution')} className="text-xs font-semibold text-zinc-650 hover:text-leaf-700 transition-colors cursor-pointer">
              {t.nav.solution}
            </button>
            <button id="nav-btn-prac" onClick={() => handleScroll('interactive-sandbox')} className="text-xs font-semibold text-zinc-500 hover:text-leaf-700 transition-colors flex items-center gap-1 cursor-pointer">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-ping"></span>
              <span>{isPt ? 'Laboratório Prático' : 'Maker Tools'}</span>
            </button>
            <button id="nav-btn-how" onClick={() => handleScroll('how-it-works')} className="text-xs font-semibold text-zinc-650 hover:text-leaf-700 transition-colors cursor-pointer">
              {t.nav.how}
            </button>
            <button id="nav-btn-plans" onClick={() => handleScroll('plans')} className="text-xs font-semibold text-zinc-650 hover:text-leaf-700 transition-colors cursor-pointer">
              {isPt ? 'Planos & Custos' : 'Plans & Pricing'}
            </button>
          </nav>

          {/* Toggles & CTA Action */}
          <div className="flex items-center gap-3">
            {/* Float Language Selector */}
            <LanguageToggle currentLanguage={currentLanguage} onLanguageChange={setCurrentLanguage} />
            
            <button
              id="header-btn-join"
              onClick={() => handleScroll('cta')}
              className="hidden sm:inline-flex bg-leaf-700 hover:bg-leaf-800 text-white text-xs font-bold py-2 px-4 rounded-full shadow-xs hover:shadow-sm cursor-pointer transition-all duration-200"
            >
              {t.nav.join}
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="hero" className="relative pt-10 pb-20 md:pb-28 px-4 md:px-8 overflow-hidden bg-gradient-to-b from-brand-100/30 to-[#faf9f4]">
        {/* Abstract organic decoration icons/shapes */}
        <div className="absolute -top-12 -left-12 w-48 h-48 bg-brand-200/10 rounded-full blur-3xl"></div>
        <div className="absolute top-2/3 right-0 w-64 h-64 bg-leaf-100/15 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          
          {/* Tagline stamp */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <span className="inline-flex items-center gap-1.5 bg-brand-100 border border-brand-200 px-3.5 py-1 rounded-full text-xs font-semibold text-brand-800 tracking-wide uppercase select-none">
              <Star size={11} className="fill-brand-400 text-brand-500 animate-pulse" />
              <span>{t.hero.tagline}</span>
            </span>
          </motion.div>

          {/* Main Display Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-zinc-900 text-balance leading-[1.05]"
          >
            {t.hero.title}
          </motion.h1>

          {/* Subtitle description paragraph */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-sans text-base sm:text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed md:leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* Core Action triggers */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4"
          >
            <button
              id="hero-btn-cta-learn"
              onClick={() => handleScroll('cta')}
              className="w-full sm:w-auto bg-leaf-700 hover:bg-leaf-800 text-white font-bold px-8 py-4 rounded-xl text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <BookOpen size={16} />
              <span>{t.hero.cta}</span>
            </button>

            <button
              id="hero-btn-cta-tools"
              onClick={() => handleScroll('interactive-sandbox')}
              className="w-full sm:w-auto bg-white hover:bg-zinc-50 border border-zinc-200 text-zinc-700 hover:text-zinc-900 font-bold px-8 py-4 rounded-xl text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <Calculator size={15} />
              <span>{isPt ? 'Experimentar Calculadora' : 'Try Free Tools'}</span>
            </button>
          </motion.div>

          {/* Trust points stamp bar */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-10 border-t border-zinc-200/50 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs font-semibold text-zinc-500"
          >
            <span className="flex items-center gap-1.5 bg-zinc-100 border border-zinc-200/40 px-3 py-1.5 rounded-lg select-none">
              <Award size={13} className="text-leaf-600" />
              <span>{t.hero.meta_producers}</span>
            </span>
            <span className="flex items-center gap-1.5 bg-zinc-100 border border-zinc-200/40 px-3 py-1.5 rounded-lg select-none">
              <CheckCircle2 size={13} className="text-leaf-600" />
              <span>{t.hero.meta_no_tech}</span>
            </span>
            <span className="flex items-center gap-1.5 bg-zinc-100 border border-zinc-200/40 px-3 py-1.5 rounded-lg select-none">
              <Sprout size={13} className="text-leaf-600" />
              <span>{t.hero.meta_start}</span>
            </span>
          </motion.div>

          {/* Jump pointer */}
          <div className="pt-8 flex justify-center animate-bounce">
            <button aria-label="Scroll helper" onClick={() => handleScroll('problem')} className="text-zinc-400 hover:text-zinc-650 cursor-pointer">
              <ChevronDown size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION: PROBLEM METRICS AND GRID */}
      <section id="problem" className="py-20 md:py-28 px-4 md:px-8 border-t border-zinc-200/40 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Header block */}
          <div className="max-w-3xl space-y-4">
            <span className="bg-amber-100 border border-amber-200/60 text-amber-800 text-xs font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
              {t.problem.tag}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-900 leading-[1.1] text-balance">
              {t.problem.title}
            </h2>
            <p className="font-sans text-sm md:text-base text-zinc-650 leading-relaxed max-w-2xl">
              {t.problem.subtitle}
            </p>
          </div>

          {/* 8-Grid of Pain Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(Object.keys(t.problem.items) as Array<keyof typeof t.problem.items>).map((key, idx) => {
              const item = t.problem.items[key];
              return (
                <div 
                  key={idx}
                  className="bg-zinc-50 border border-zinc-200/60 p-5 rounded-2xl md:rounded-3xl hover:bg-white hover:border-zinc-300 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    {/* Floating graphic node */}
                    <div className="h-10 w-10 bg-brand-50 border border-brand-200/50 rounded-xl flex items-center justify-center group-hover:bg-brand-100 transition-colors">
                      {problemIcons[key as string] || <HelpCircle size={20} className="text-brand-500" />}
                    </div>
                    <h3 className="font-sans text-[15px] md:text-base font-bold text-zinc-800 leading-snug group-hover:text-zinc-950">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs md:text-sm text-zinc-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom message */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 md:p-6 bg-brand-50/70 border border-brand-200/40 rounded-2xl">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-rose-500 animate-ping"></div>
              <span className="text-xs md:text-sm text-brand-900 font-semibold italic">
                {isPt ? 'Você não é um profissional de marketing, você é um Produtor. E está tudo bem.' : "You are a specialized Creator, not a technical ads agency. And that is fine."}
              </span>
            </div>
            <button
              id="problem-btn-scroll"
              onClick={() => handleScroll('solution')}
              className="text-xs font-bold text-leaf-700 hover:text-leaf-800 pr-2 inline-flex items-center gap-1 cursor-pointer"
            >
              <span>{isPt ? 'Como resolvemos isso?' : 'How we change this'}</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* SECTION: PLATFORM SOLUTION AND BENEFITS */}
      <section id="solution" className="py-20 md:py-28 px-4 md:px-8 border-t border-zinc-200/40 bg-[#f7f5ee]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Description */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="bg-leaf-100 border border-leaf-200/60 text-leaf-800 text-xs font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
                {t.solution.tag}
              </span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-900 leading-[1.1]">
              {t.solution.title}
            </h2>

            <p className="font-sans text-sm md:text-base text-zinc-600 leading-relaxed">
              {t.solution.subtitle}
            </p>

            {/* Bullets items checkmarks */}
            <ul className="space-y-3.5 pt-2">
              {t.solution.bullets.map((bullet, idx) => (
                <li key={idx} className="flex gap-2 items-start text-xs md:text-sm text-zinc-700 font-medium">
                  <CheckCircle2 size={16} className="text-leaf-600 shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <button
                id="sol-btn-scroll-join"
                onClick={() => handleScroll('cta')}
                className="bg-leaf-700 hover:bg-leaf-800 text-white font-bold py-3.5 px-6 rounded-xl text-xs shadow-md cursor-pointer transition-all duration-200 inline-flex items-center gap-1"
              >
                <span>{isPt ? 'Acessar Ebook e Material Grátis' : 'Join Eniesse Family'}</span>
                <span>→</span>
              </button>
            </div>
          </div>

          {/* Right Column Curriculum Pillars Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {(Object.keys(t.solution.pillars) as Array<keyof typeof t.solution.pillars>).map((key, idx) => {
              const pillar = t.solution.pillars[key];
              const colorsMap = {
                brand: 'border-amber-200/80 bg-white shadow-xs',
                catalog: 'border-zinc-200/80 bg-white shadow-xs',
                operations: 'border-zinc-200/80 bg-white shadow-xs',
                growth: 'border-zinc-200/80 bg-white shadow-xs'
              };

              return (
                <div 
                  key={idx}
                  className={`p-6 rounded-2xl md:rounded-3xl border ${colorsMap[key] || 'bg-white'} hover:shadow-md transition-all duration-300 space-y-3 flex flex-col justify-between`}
                >
                  <div className="space-y-2">
                    {/* Badge numbering */}
                    <span className="font-mono text-[10px] text-zinc-400 font-semibold block uppercase">
                      Pilar 0{idx + 1}
                    </span>
                    <h3 className="font-sans text-[15px] md:text-base font-bold text-zinc-800 tracking-tight leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="font-sans text-xs text-zinc-500 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EXPERIMENTAL HIGHLY INTERACTIVE WORKSPACE SANDBOX SECTION */}
      <section id="interactive-sandbox" className="py-20 md:py-28 px-4 md:px-8 border-t border-zinc-200/40 bg-[#faf9f4]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="bg-leaf-50 border border-leaf-200 text-leaf-700 text-xs font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
              {isPt ? 'Laboratório Interativo Grátis' : 'Interactive Sandbox Suite'}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-900 leading-none">
              {isPt ? 'Sua Oficina de Sementes Digitais' : 'Interactive Artisan Utilities'}
            </h2>
            <p className="font-sans text-xs md:text-sm text-zinc-600 leading-relaxed">
              {isPt 
                ? 'Desenvolvemos duas calculadoras e ferramentas exclusivas para você experimentar lições legítimas que ensinamos na plataforma. Toque nas abas abaixo para usar:' 
                : 'Interact with direct, customizable calculations and diagnostics checklists that small makers use inside Eniesse Grow lessons.'}
            </p>
          </div>

          {/* Interactive tools placement grid wrapper */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column Tool selector / instructions */}
            <div className="lg:col-span-4 bg-white border border-zinc-200/70 p-5 rounded-2xl md:rounded-3xl shadow-xs space-y-6 lg:sticky lg:top-24">
              <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest font-mono block pb-2 border-b border-zinc-100">
                {isPt ? 'Escolha o Exercício' : 'Select Exercise Module'}
              </span>

              <div className="space-y-3">
                <a 
                  href="#pricing-tool" 
                  className="block p-3.5 rounded-xl border border-brand-200 bg-brand-50/50 hover:bg-brand-50 text-xs transition-colors cursor-pointer"
                >
                  <span className="font-bold text-brand-900 block mb-0.5 flex items-center gap-1.5">
                    <Calculator size={14} className="text-brand-500" />
                    <span>Calculadora de Precificação</span>
                  </span>
                  <span className="text-zinc-500 leading-normal block">
                    {isPt ? 'Ajuste seus ingredientes e trabalho unitário para salvar suas finanças.' : 'Input units, costs, hours, and desired markup.'}
                  </span>
                </a>

                <a 
                  href="#maker-quiz" 
                  className="block p-3.5 rounded-xl border border-zinc-200 hover:border-leaf-300 hover:bg-zinc-50 text-xs transition-colors cursor-pointer"
                >
                  <span className="font-bold text-zinc-800 block mb-0.5 flex items-center gap-1.5">
                    <Target size={14} className="text-leaf-600" />
                    <span>Auto-Diagnóstico de Vendas</span>
                  </span>
                  <span className="text-zinc-500 leading-normal block">
                    {isPt ? 'Responda 4 perguntas para apontar qual é seu gargalo imediato.' : '60-second test to find your catalog/shipping bottle neck.'}
                  </span>
                </a>

                <a 
                  href="#learning-preview" 
                  className="block p-3.5 rounded-xl border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 text-xs transition-colors cursor-pointer"
                >
                  <span className="font-bold text-zinc-800 block mb-0.5 flex items-center gap-1.5">
                    <BookOpen size={14} className="text-zinc-600" />
                    <span>Degustar Aulas Completas</span>
                  </span>
                  <span className="text-zinc-500 leading-normal block">
                    {isPt ? 'Leia fórmulas reais de marcas, embalagens e roteiros para celular.' : 'Read visual blueprints, ecopacking tricks, and socials scripts.'}
                  </span>
                </a>
              </div>

              {/* Artisan quote sticker */}
              <div className="bg-leaf-50/60 p-4 rounded-xl border border-leaf-100 italic space-y-2">
                <p className="text-[11px] text-zinc-650 leading-relaxed font-sans">
                  {isPt 
                    ? '"Eu não fazia ideia de que cobrar R$15 por vela estava me dando prejuízo. O simulador da Eniesse me fez ajustar a R$35 e minhas vendas continuaram ótimas porque aprendi o valor sensorial."'
                    : '"I was charging only $12 for lavender butter. After applying the blueprint, I recalculated packaging, structured sensory values, and closed at $28 comfortably!"'}
                </p>
                <span className="text-[9px] font-mono tracking-wider font-semibold uppercase text-leaf-700 block text-right">
                  — Carolina, Saboaria Alquimia
                </span>
              </div>
            </div>

            {/* Right Column Actual Live Sandbox Apps */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Tool 1 (Calculator) */}
              <PricingCalculator currentLanguage={currentLanguage} />

              {/* Tool 2 (Quiz Bottleneck) */}
              <DiagnosticQuiz currentLanguage={currentLanguage} />

              {/* Tool 3 (Tabs Playbook viewer) */}
              <LessonPreview currentLanguage={currentLanguage} />
              
            </div>
          </div>
        </div>
      </section>

      {/* METHODOLOGY: THREE HONEST STEPS */}
      <section id="how-it-works" className="py-20 md:py-28 px-4 md:px-8 bg-white border-t border-zinc-200/40">
        <div className="max-w-5xl mx-auto space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="bg-leaf-50 border border-leaf-200 text-leaf-700 text-xs font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
              {t.how.tag}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-900 leading-none">
              {t.how.title}
            </h2>
            <p className="font-sans text-xs md:text-sm text-zinc-500">
              {t.how.subtitle}
            </p>
          </div>

          {/* Cards Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(['step1', 'step2', 'step3'] as const).map((stepKey, idx) => {
              const step = t.how[stepKey];
              return (
                <div 
                  key={idx}
                  className="bg-zinc-50 border border-zinc-200/60 p-6 rounded-2xl md:rounded-3xl hover:bg-white hover:border-zinc-300 transition-all duration-300 space-y-3 relative overflow-hidden"
                >
                  <span className="font-serif text-5xl md:text-6xl text-leaf-100 font-bold absolute -top-1 -right-1 select-none pointer-events-none">
                    0{idx + 1}
                  </span>
                  
                  <div className="relative z-10 space-y-2">
                    <h3 className="font-sans text-[15px] md:text-base font-bold text-zinc-805 leading-snug">
                      {step.title}
                    </h3>
                    <p className="font-sans text-xs md:text-sm text-zinc-500 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRICING PLANS COMPONENT */}
      <PricingPlans currentLanguage={currentLanguage} onSelectPlan={() => handleScroll('cta')} />

      {/* LEAD CAPTURE CTA FORM COMPONENT CONTAINER */}
      <section className="py-20 md:py-28 px-4 md:px-8 border-t border-zinc-200/40 bg-[#fbf9f4]">
        <div className="max-w-7xl mx-auto">
          <LeadForm currentLanguage={currentLanguage} />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-zinc-950 text-zinc-400 py-12 px-4 md:px-8 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6 text-xs font-medium">
          
          <div className="space-y-2">
            <div className="flex items-center gap-1.5 text-white">
              <Sprout size={16} className="text-leaf-400" />
              <span className="font-serif font-bold text-sm tracking-tight">Eniesse Grow</span>
            </div>
            <p className="text-zinc-500 max-w-sm">
              {t.footer.madeFor}
            </p>
          </div>

          <div className="space-y-1.5 text-zinc-500">
            <p>{t.footer.rights}</p>
            <div className="flex flex-wrap gap-4 pt-1">
              <a href="#" onClick={(e) => { e.preventDefault(); handleScroll('cta'); }} className="hover:text-zinc-300 underline">{t.footer.privacy}</a>
              <a href="#" onClick={(e) => { e.preventDefault(); handleScroll('cta'); }} className="hover:text-zinc-300 underline">{t.footer.terms}</a>
              <a href="#interactive-sandbox" className="hover:text-zinc-300 underline">{isPt ? 'Calculadora e Diagnóstico' : 'Practice Tools'}</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
