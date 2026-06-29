import React, { useState } from 'react';
import { translations, Language } from '../types';
import { HelpCircle, ChevronRight, RefreshCw, CheckCircle2, Award, Sparkles, BookOpen, MessageSquareCode } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface DiagnosticQuizProps {
  currentLanguage: Language;
}

export default function DiagnosticQuiz({ currentLanguage }: DiagnosticQuizProps) {
  const t = translations[currentLanguage];
  const isPt = currentLanguage === 'pt';

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResult, setShowResult] = useState<boolean>(false);

  const questions = [
    {
      id: 1,
      text: t.quiz.question1,
      options: [
        { val: 1, text: t.quiz.q1_opt1 },
        { val: 2, text: t.quiz.q1_opt2 },
        { val: 3, text: t.quiz.q1_opt3 }
      ]
    },
    {
      id: 2,
      text: t.quiz.question2,
      options: [
        { val: 1, text: t.quiz.q2_opt1 },
        { val: 2, text: t.quiz.q2_opt2 },
        { val: 3, text: t.quiz.q2_opt3 }
      ]
    },
    {
      id: 3,
      text: t.quiz.question3,
      options: [
        { val: 1, text: t.quiz.q3_opt1 },
        { val: 2, text: t.quiz.q3_opt2 },
        { val: 3, text: t.quiz.q3_opt3 }
      ]
    },
    {
      id: 4,
      text: t.quiz.question4,
      options: [
        { val: 1, text: t.quiz.q4_opt1 },
        { val: 2, text: t.quiz.q4_opt2 },
        { val: 3, text: t.quiz.q4_opt3 }
      ]
    }
  ];

  const handleSelectOption = (questionId: number, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (currentStep < questions.length) {
      setCurrentStep(prev => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(1);
    setShowResult(false);
  };

  // Logic to determine bottleneck and custom feedback advice
  const getDiagnosis = () => {
    const q1Ans = answers[1] || 1;
    const q2Ans = answers[2] || 1;
    const q3Ans = answers[3] || 1;
    const q4Ans = answers[4] || 1;

    // Diagnose based on lowest scores
    if (q2Ans === 1 || q2Ans === 2) {
      return {
        focusArea: isPt ? 'Calculadora e Finanças do Produtor' : 'Value-focused Catalog & Financials',
        scoreText: isPt ? 'Preços Frágeis' : 'Pricing Vulnerability',
        percentage: 45,
        advice: isPt 
          ? 'Seu principal gargalo está na precificação de produtos. Focar na concorrência ou multiplicar materiais sem contar suas horas cria um teto que impede seu crescimento. Você precisa de processos formais de faturamento e planilhas de margem.'
          : 'Your critical bottleneck is product margin math. Undercutting yourself based on local competitors or ignoring physical labor limits your growth ceiling. Your strategy must focus immediately on the Catalog module.',
        recommendedModule: isPt ? 'Módulo: Catálogo, Copas e Precificação' : 'Curriculum Block: Catalog & Pricing Formulas'
      };
    }

    if (q1Ans === 1 || q1Ans === 2) {
      return {
        focusArea: isPt ? 'Estúdio de Foto com Celular e Storytelling' : 'Mobile Studio Photography & Visual Branding',
        scoreText: isPt ? 'Destaque Visual Insuficiente' : 'Unrealized Visual Value',
        percentage: 55,
        advice: isPt 
          ? 'Seu calcanhar de Aquiles é a apresentação. No digital, as fotos do produto representam 90% da decisão. Cenários caseiros escuros e falta de apelos sensoriais sabotam o desejo dos clientes naturais e veganos.'
          : 'Your visual presentation holds you back. In digital storefronts, your photos represent 90% of your value perception. Moving to a clean light-box with smartphone angles will unlock premium sales immediately.',
        recommendedModule: isPt ? 'Módulo: Estúdio de Celular & Storytelling' : 'Curriculum Block: Visual Brand Storytelling'
      };
    }

    if (q3Ans === 1 || q3Ans === 2) {
      return {
        focusArea: isPt ? 'Operação e Despacho sem Estresse' : 'Streamlined Logistics & Inventory Management',
        scoreText: isPt ? 'Estoque Informatizado Desconectado' : 'Manual Operation Overwhelm',
        percentage: 60,
        advice: isPt 
          ? 'Seus gargalos operacionais estão roubando seu tempo de produção. Anotar tudo no caderninho e tratar ordens soltas no direct causa erros e consome sua energia preciosa. Você precisa formatar um centro organizador simples.'
          : 'Operational friction is eating your actual making hours. Collecting orders through raw direct messages and taking post-it notes causes errors and burnouts. Moving to streamlined shipping and digital layouts is vital.',
        recommendedModule: isPt ? 'Módulo: Operações, Estoques e Envios' : 'Curriculum Block: Stress-free Stock & Logistics'
      };
    }

    return {
      focusArea: isPt ? 'Máquina de Aquisição Orgânica' : 'Organic Traffic & Conversion Funnels',
      scoreText: isPt ? 'Tráfego Esporádico' : 'Local Market Dependence',
      percentage: 70,
      advice: isPt 
          ? 'Você já tem produtos excelentes e preços corretos, mas depende demais de feiras locais no bairro ou indicações esporádicas. Falta construir uma linha contínua de atração orgânica nas mídias sociais para criar fãs.'
          : 'You own amazing products, but you participate heavily in local fairs or rely on occasional recommendations. You will thrive by building structured organic funnels on Instagram/TikTok to capture subscribers.',
      recommendedModule: isPt ? 'Módulo: Escalonamento Orgânico e Vendas' : 'Curriculum Block: Steady Organic Launch Secrets'
    };
  };

  const diagnosis = getDiagnosis();

  // Progress percentage
  const progressPercent = (currentStep / questions.length) * 100;

  return (
    <div id="maker-quiz" className="bg-white border border-zinc-200 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xs hover:shadow-sm transition-all duration-300">
      <div className="max-w-2xl mx-auto">
        {/* Header decoration */}
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-leaf-100 text-leaf-700 text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
            {isPt ? 'Diagnóstico' : 'Self-Assessment Quiz'}
          </span>
          <div className="h-px bg-zinc-200 flex-1"></div>
        </div>

        <h3 className="font-serif text-2xl md:text-3xl font-semibold text-zinc-900 tracking-tight leading-none mb-3">
          {t.quiz.title}
        </h3>
        <p className="font-sans text-sm md:text-base text-zinc-600 mb-8 leading-relaxed">
          {t.quiz.subtitle}
        </p>

        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              {/* Question text */}
              <div>
                <span className="font-mono text-xs font-bold text-leaf-600 block mb-1">
                  {isPt ? `Pergunta ${currentStep} de ${questions.length}` : `Step ${currentStep} of ${questions.length}`}
                </span>
                <span className="font-sans text-base md:text-lg font-semibold text-zinc-800 leading-tight">
                  {questions[currentStep - 1].text}
                </span>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {questions[currentStep - 1].options.map((opt) => {
                  const isSelected = answers[currentStep] === opt.val;
                  return (
                    <button
                      id={`quiz-q${currentStep}-opt${opt.val}`}
                      key={opt.val}
                      onClick={() => handleSelectOption(currentStep, opt.val)}
                      className={`w-full text-left p-4 rounded-xl border cursor-pointer transition-all duration-200 text-sm md:text-base flex items-start gap-3 ${
                        isSelected
                          ? 'bg-leaf-50 border-leaf-600 text-leaf-900 ring-1 ring-leaf-600'
                          : 'bg-zinc-50 border-zinc-200 text-zinc-700 hover:bg-zinc-100/60 hover:text-zinc-900'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full border shrink-0 flex items-center justify-center mt-0.5 ${
                        isSelected ? 'border-leaf-600 bg-leaf-600 text-white' : 'border-zinc-300 bg-white'
                      }`}>
                        {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                      <span>{opt.text}</span>
                    </button>
                  );
                })}
              </div>

              {/* Navigation Action */}
              <div className="flex items-center justify-between pt-4 border-t border-zinc-100">
                {/* Visual Progress bar */}
                <div className="w-1/2 bg-zinc-100 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-leaf-600 h-full transition-all duration-300" 
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>

                <button
                  id="quiz-btn-next"
                  onClick={handleNext}
                  disabled={!answers[currentStep]}
                  className={`px-5 py-2.5 rounded-xl cursor-pointer text-xs font-bold transition-all duration-200 flex items-center gap-1.5 ${
                    answers[currentStep]
                      ? 'bg-leaf-700 text-white hover:bg-leaf-800 shadow-sm'
                      : 'bg-zinc-100 text-zinc-400 cursor-not-allowed'
                  }`}
                >
                  <span>{currentStep === questions.length ? (isPt ? 'Ver Resultado' : 'Compute Diagnostics') : (isPt ? 'Próximo' : 'Next Step')}</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-leaf-50 border border-leaf-200 p-6 md:p-8 rounded-2xl md:rounded-3xl"
            >
              <div className="text-center space-y-2 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-leaf-100 text-leaf-700 mb-1">
                  <Award size={24} className="animate-bounce" />
                </div>
                <h4 className="font-serif text-xl md:text-2xl font-bold text-zinc-900">
                  {t.quiz.resultTitle}
                </h4>
                <p className="font-sans text-xs text-zinc-500 uppercase tracking-widest font-semibold">
                  {isPt ? 'Gargalo Principal Identificado' : 'Primary Operational Bottleneck'}
                </p>
              </div>

              {/* Progress visual indicator representing state match */}
              <div className="bg-white p-5 rounded-2xl border border-zinc-200/60 shadow-xs mb-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-zinc-800">{diagnosis.focusArea}</span>
                  <span className="text-xs font-mono font-bold text-amber-600 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-md">
                    {diagnosis.scoreText}
                  </span>
                </div>

                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-leaf-800 bg-leaf-100">
                        {isPt ? 'Eficiência e Alinhamento' : 'Digital Readiness Level'}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-bold inline-block text-leaf-800">
                        {diagnosis.percentage}%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2.5 text-xs flex rounded bg-zinc-100">
                    <div
                      style={{ width: `${diagnosis.percentage}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-leaf-600 transition-all duration-500"
                    />
                  </div>
                </div>

                <p className="text-xs md:text-sm text-zinc-600 leading-relaxed">
                  {diagnosis.advice}
                </p>
              </div>

              {/* Action plan triggers */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 p-3.5 bg-brand-50 border border-brand-200/80 rounded-xl">
                  <Sparkles size={16} className="text-brand-500 shrink-0" />
                  <div className="text-xs leading-none">
                    <span className="font-semibold text-brand-800 block mb-0.5">
                      {isPt ? 'Caminho Seguro de Aprendizado' : 'Personalized Lesson Blueprint'}
                    </span>
                    <span className="text-zinc-600">{diagnosis.recommendedModule}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <button
                    id="quiz-btn-reset"
                    onClick={handleReset}
                    className="flex items-center justify-center gap-1 w-full bg-white border border-zinc-200 cursor-pointer text-zinc-700 hover:text-zinc-900 hover:bg-zinc-50 py-3 rounded-xl text-xs font-bold transition-all duration-200"
                  >
                    <RefreshCw size={12} />
                    <span>{t.quiz.resultReset}</span>
                  </button>

                  <a
                    id="quiz-btn-apply"
                    href="#cta"
                    className="flex items-center justify-center gap-1 w-full bg-leaf-700 text-white hover:bg-leaf-800 py-3 rounded-xl text-xs font-bold transition-all duration-200 shadow-sm cursor-pointer"
                  >
                    <BookOpen size={12} />
                    <span>{t.quiz.resultButton}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
