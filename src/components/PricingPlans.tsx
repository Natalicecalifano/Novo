import React from 'react';
import { translations, Language } from '../types';
import { Check, ShieldAlert, Sparkles, BookOpen, Crown, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface PricingPlansProps {
  currentLanguage: Language;
  onSelectPlan: (plan: string) => void;
}

export default function PricingPlans({ currentLanguage, onSelectPlan }: PricingPlansProps) {
  const isPt = currentLanguage === 'pt';

  const plans = [
    {
      id: 'free',
      name: isPt ? 'Kit Produtor Gratuito' : 'Free Maker Kit',
      tagline: isPt ? 'Tudo que você precisa para dar os primeiros passos' : 'The essentials to start your slow-growth brand',
      price: '0',
      period: isPt ? 'para sempre' : 'forever',
      buttonText: isPt ? 'Baixar Materiais Gratuitos' : 'Download Free Kit',
      isPopular: false,
      icon: <BookOpen className="text-emerald-700" size={24} />,
      features: isPt ? [
        'E-book completo "Guia de Boas-Vindas do Produtor"',
        'Calculadora de Precificação Geral (Ajuste suas margens)',
        'Teste de Auto-diagnóstico de Vendas Completo',
        'Degustação de 3 Aulas Fundamentais',
        'Modelos iniciais de postagens para Instagram',
        'Participação nas lives de dúvidas abertas',
      ] : [
        'Complete Ebook "The Companion Guide for Small Makers"',
        'Essential Production pricing calculators',
        'Interactive 60sec digital sales diagnostics',
        'Preview three full core playbooks',
        'Standard Instagram & bio copywriting frames',
        'Biweekly community newsletters & links',
      ]
    },
    {
      id: 'premium',
      name: isPt ? 'Aceleração Premium • Eniesse Grow' : 'Premium Acceleration • Eniesse Grow',
      tagline: isPt ? 'A mentoria e o ecossistema definitivo para escalar seu caixa' : 'The absolute full-stack learning circle for makers',
      price: isPt ? 'Sob Convite' : 'By Invitation Only',
      period: isPt ? 'Acesso vitalício ou mensal' : 'Flexible lifetime terms',
      buttonText: isPt ? 'Solicitar Entrada na Mentoria' : 'Request Board Invitation',
      isPopular: true,
      icon: <Crown className="text-amber-600 animate-pulse" size={24} />,
      features: isPt ? [
        'Mais de 50 aulas em vídeo estruturadas de ponta a ponta',
        'Planilhas de Custo e Margem Avançadas editáveis',
        'Suporte individual direto no WhatsApp de nossos conselheiros',
        'Esquemas prontos de fotos com cenários para seu smartphone',
        'Roteiros de Vídeo (Reels/TikTok) prontos para reproduzir',
        'Clube do Produtor (Descontos em fretes e frascos ecológicos)',
        'Mentorias coletivas ao vivo de análise de vitrine e cópias',
        'Certificado Eniesse de Produtor Acelerado Reconhecido',
      ] : [
        '50+ step-by-step HD tutorial video playbooks',
        'Advanced wholesale vs retail pricing modules',
        'Direct 1-on-1 advisor hotlines via WhatsApp',
        'Smartphone custom layout and studio frameworks',
        'Structured Instagram Reels storytelling prompts',
        'Artisanal shipping benefits (Exclusive label costs)',
        'Interactive group reviews & catalog auditing sessions',
        'Recognized Eniesse Certified Producer credentials',
      ]
    }
  ];

  return (
    <section id="plans" className="py-20 md:py-28 px-4 md:px-8 bg-gradient-to-b from-white to-[#fbf9f4] border-t border-zinc-200/40">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header Title Section */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="bg-amber-100 border border-amber-200 text-amber-800 text-xs font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
            {isPt ? 'Escolha o seu Futuro' : 'Your Path to Prosperity'}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-900 leading-none">
            {isPt ? 'Investimento honesto e focado' : 'Honest investment, pure focus'}
          </h2>
          <p className="font-sans text-xs md:text-sm text-zinc-500">
            {isPt 
              ? 'Oferecemos recursos inteiramente gratuitos para todos começarem com dignidade. Quando sentir segurança, junte-se ao nosso círculo de mentoria premium.'
              : 'Our introductory ebooks and interactive models are open to all. When you are ready to fully professionalize your craft, upgrade to our Premium Acceleration cohort.'}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 border ${
                plan.isPopular
                  ? 'bg-zinc-950 text-white border-zinc-800 shadow-xl scale-102 ring-2 ring-emerald-500/20'
                  : 'bg-white text-zinc-900 border-zinc-200 shadow-sm hover:border-zinc-300'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-teal-500 text-white text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1 uppercase tracking-wider shadow-md">
                  <Sparkles size={11} />
                  <span>{isPt ? 'Mais Escolhido por Produtores' : 'Most Popular Option'}</span>
                </div>
              )}

              <div className="space-y-6">
                
                {/* Logo & Plan Header */}
                <div className="flex items-start justify-between">
                  <div className={`p-3 rounded-2xl ${plan.isPopular ? 'bg-zinc-850 border border-zinc-700' : 'bg-[#faf9f4] border border-zinc-100'}`}>
                    {plan.icon}
                  </div>
                </div>

                {/* Plan Metadata */}
                <div className="space-y-2">
                  <h3 className="font-serif text-xl md:text-2xl font-bold tracking-tight">
                    {plan.name}
                  </h3>
                  <p className={`text-xs ${plan.isPopular ? 'text-zinc-400' : 'text-zinc-500'}`}>
                    {plan.tagline}
                  </p>
                </div>

                {/* Price Display */}
                <div className="pt-2 border-t border-zinc-200/10 pb-4">
                  <div className="flex items-baseline gap-1">
                    {plan.id === 'free' ? (
                      <>
                        <span className="font-serif text-4xl font-bold tracking-tight">R$ 0</span>
                        <span className={`text-xs font-medium ${plan.isPopular ? 'text-zinc-400' : 'text-zinc-500'}`}>
                          / {plan.period}
                        </span>
                      </>
                    ) : (
                      <span className="font-serif text-3xl font-bold tracking-tight text-emerald-500">
                        {plan.price}
                      </span>
                    )}
                  </div>
                  {plan.id !== 'free' && (
                    <span className={`text-[11px] block mt-1 ${plan.isPopular ? 'text-zinc-400' : 'text-zinc-500'}`}>
                      {plan.period}
                    </span>
                  )}
                </div>

                {/* Features List */}
                <ul className="space-y-3 pt-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs md:text-sm">
                      <div className={`h-4.5 w-4.5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${plan.isPopular ? 'bg-emerald-500/10 text-emerald-400' : 'bg-emerald-50 text-emerald-700'}`}>
                        <Check size={11} />
                      </div>
                      <span className={plan.isPopular ? 'text-zinc-300' : 'text-zinc-600'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

              </div>

              {/* Call to Action Button */}
              <div className="pt-8">
                <button
                  onClick={() => onSelectPlan(plan.id)}
                  className={`w-full py-3.5 px-6 rounded-xl font-bold text-xs transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                    plan.isPopular
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md hover:shadow-lg'
                      : 'bg-[#faf9f4] hover:bg-zinc-100 text-zinc-800 border border-zinc-200'
                  }`}
                >
                  <span>{plan.buttonText}</span>
                  <ArrowRight size={14} />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Anti-Clutter Micro disclaimer */}
        <div className="flex items-center justify-center gap-1.5 text-center text-[11px] text-zinc-400">
          <ShieldAlert size={12} className="text-zinc-400 shrink-0" />
          <span>{isPt ? 'Você nunca será cobrado sem o seu consentimento ativo nas mentorias.' : 'No credit-cards or contracts. Pure transparency for artisanal minds.'}</span>
        </div>

      </div>
    </section>
  );
}
