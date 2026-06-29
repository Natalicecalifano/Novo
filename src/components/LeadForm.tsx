import React, { useState, useEffect } from 'react';
import { translations, Language } from '../types';
import { Send, CheckCircle, Smartphone, AlertCircle, Trash2, ShieldCheck, Database } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface LeadFormProps {
  currentLanguage: Language;
}

interface SubmittedLead {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  productType: string;
  producerStage: string;
  timestamp: string;
}

export default function LeadForm({ currentLanguage }: LeadFormProps) {
  const t = translations[currentLanguage];
  const isPt = currentLanguage === 'pt';

  // Form Fields State
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [productType, setProductType] = useState<string>('');
  const [producerStage, setProducerStage] = useState<string>('stage_opt1');
  const [agreeTerms, setAgreeTerms] = useState<boolean>(true);

  // Flow State
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [leadsList, setLeadsList] = useState<SubmittedLead[]>([]);
  const [showAdminPanel, setShowAdminPanel] = useState<boolean>(false);

  // Load registered leads from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('eniesse_grow_leads');
      if (stored) {
        setLeadsList(JSON.parse(stored));
      }
    } catch (err) {
      console.error("Local storage read error", err);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone || !productType || !agreeTerms) {
      return;
    }

    setIsSubmitting(true);

    // Simulate standard network speed
    setTimeout(() => {
      const stageLabels: Record<string, string> = {
        stage_opt1: isPt ? t.join.stage_opt1 : t.join.stage_opt1,
        stage_opt2: isPt ? t.join.stage_opt2 : t.join.stage_opt2,
        stage_opt3: isPt ? t.join.stage_opt3 : t.join.stage_opt3,
      };

      const newLead: SubmittedLead = {
        id: Math.random().toString(36).substring(2, 9),
        fullName,
        email,
        phone,
        productType,
        producerStage: stageLabels[producerStage] || producerStage,
        timestamp: new Date().toLocaleTimeString(isPt ? 'pt-BR' : 'en-US', { hour: '2-digit', minute: '2-digit' })
      };

      const updatedList = [newLead, ...leadsList];
      setLeadsList(updatedList);
      try {
        localStorage.setItem('eniesse_grow_leads', JSON.stringify(updatedList));
      } catch (err) {
        console.error("Local storage save error", err);
      }

      setIsSubmitting(false);
      setIsSuccess(true);

      // Clear fields
      setFullName('');
      setEmail('');
      setPhone('');
      setProductType('');
    }, 1200);
  };

  const handleDeleteLead = (id: string) => {
    const updated = leadsList.filter(l => l.id !== id);
    setLeadsList(updated);
    try {
      localStorage.setItem('eniesse_grow_leads', JSON.stringify(updated));
    } catch (err) {
      console.error(err);
    }
  };

  const handleResetForm = () => {
    setIsSuccess(false);
  };

  return (
    <div id="cta" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
      {/* Left Pitch Block */}
      <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
        <div>
          <span className="bg-brand-50 border border-brand-200 text-brand-700 text-xs font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
            {t.join.tag}
          </span>
        </div>

        <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-zinc-900 leading-tight tracking-tight">
          {t.join.title}
        </h3>

        <p className="font-sans text-sm md:text-base text-zinc-600 leading-relaxed">
          {t.join.subtitle}
        </p>

        {/* Benefits lists */}
        <div className="space-y-4 pt-2">
          <div className="flex gap-3 items-start">
            <div className="h-6 w-6 rounded-full bg-leaf-100 text-leaf-700 flex items-center justify-center shrink-0">
              <ShieldCheck size={14} />
            </div>
            <div className="text-sm">
              <span className="font-bold text-zinc-800 block">
                {isPt ? 'Garantia de Confidencialidade' : 'Spam-Free Promise'}
              </span>
              <span className="text-zinc-500">
                {isPt ? 'Não repassamos seus dados. Apenas te ajudamos a vender.' : 'Your details stay yours. We only help turn ingredients into growth.'}
              </span>
            </div>
          </div>

          <div className="flex gap-3 items-start">
            <div className="h-6 w-6 rounded-full bg-leaf-100 text-leaf-700 flex items-center justify-center shrink-0">
              <Smartphone size={14} />
            </div>
            <div className="text-sm">
              <span className="font-bold text-zinc-800 block">
                {isPt ? 'Orientação Integrada de WhatsApp' : 'Direct Conversation Line'}
              </span>
              <span className="text-zinc-500">
                {isPt ? 'Fale diretamente com os mentores do Eniesse, sem robôs.' : 'Real veteran makers chatting with you, no rigid automations.'}
              </span>
            </div>
          </div>
        </div>

        {/* Local persisted storage inspector shortcut */}
        {leadsList.length > 0 && (
          <div className="pt-4 border-t border-zinc-200/60">
            <button
              id="btn-toggle-admin"
              onClick={() => setShowAdminPanel(!showAdminPanel)}
              className="text-xs font-mono font-bold text-leaf-700 hover:text-leaf-800 flex items-center gap-1.5 cursor-pointer"
            >
              <Database size={13} className="animate-spin-slow" />
              <span>
                {showAdminPanel 
                  ? (isPt ? 'Esconder Gerenciamento de Leads Off-line' : 'Hide Offline Leads Log') 
                  : (isPt ? `Administrar Leads Salvos Localmente (${leadsList.length})` : `Inspect Offline Logged Leads (${leadsList.length})`)}
              </span>
            </button>
          </div>
        )}
      </div>

      {/* Right Form Card */}
      <div className="lg:col-span-7 bg-white border border-zinc-200 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-sm flex flex-col justify-between">
        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-5"
            >
              <h4 className="font-serif text-lg md:text-xl font-bold text-zinc-900 pb-2 border-b border-zinc-100">
                {t.join.formTitle}
              </h4>

              {/* Grid block */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="lead-name" className="text-xs font-bold text-zinc-600 block">
                    {t.join.fullName} *
                  </label>
                  <input
                    id="lead-name"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-2.5 px-3.5 text-sm text-zinc-800 focus:outline-none focus:ring-1 focus:ring-leaf-600 focus:border-leaf-600"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="lead-email" className="text-xs font-bold text-zinc-600 block">
                    {t.join.email} *
                  </label>
                  <input
                    id="lead-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-2.5 px-3.5 text-sm text-zinc-800 focus:outline-none focus:ring-1 focus:ring-leaf-600 focus:border-leaf-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="lead-phone" className="text-xs font-bold text-zinc-600 block">
                    {t.join.phone} *
                  </label>
                  <input
                    id="lead-phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-2.5 px-3.5 text-sm text-zinc-800 focus:outline-none focus:ring-1 focus:ring-leaf-600 focus:border-leaf-600"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="lead-product" className="text-xs font-bold text-zinc-600 block">
                    {t.join.productType} *
                  </label>
                  <input
                    id="lead-product"
                    type="text"
                    required
                    placeholder={t.join.productPlaceholder}
                    value={productType}
                    onChange={(e) => setProductType(e.target.value)}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-2.5 px-3.5 text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-leaf-600 focus:border-leaf-600"
                  />
                </div>
              </div>

              {/* Radio Selector stage current */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-zinc-600 block">
                  {t.join.producerStage}
                </span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {(['stage_opt1', 'stage_opt2', 'stage_opt3'] as const).map((stage) => {
                    const stageLabel = t.join[stage];
                    const isSelected = producerStage === stage;
                    return (
                      <button
                        id={`btn-stage-${stage}`}
                        key={stage}
                        type="button"
                        onClick={() => setProducerStage(stage)}
                        className={`text-left p-3 rounded-xl border text-xs font-medium cursor-pointer transition-all duration-200 ${
                          isSelected 
                            ? 'bg-leaf-50 border-leaf-600 text-leaf-900 ring-1 ring-leaf-600' 
                            : 'bg-zinc-50 border-zinc-200 text-zinc-700 hover:bg-zinc-100'
                        }`}
                      >
                        {stageLabel}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Terms checklist */}
              <div className="flex items-start gap-2.5 pt-2">
                <input
                  id="lead-terms"
                  type="checkbox"
                  required
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-zinc-300 text-leaf-600 focus:ring-leaf-600 cursor-pointer"
                />
                <label htmlFor="lead-terms" className="text-xs text-zinc-500 font-medium leading-normal cursor-pointer">
                  {t.join.agreeTerms}
                </label>
              </div>

              {/* Submit trigger */}
              <button
                id="lead-submit-btn"
                type="submit"
                disabled={isSubmitting}
                className={`w-full text-center bg-leaf-700 hover:bg-leaf-800 text-white font-bold py-3 px-4 rounded-xl text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-xs ${
                  isSubmitting ? 'opacity-85 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin"></div>
                    <span>{t.join.sending}</span>
                  </>
                ) : (
                  <>
                    <Send size={14} />
                    <span>{t.join.submit}</span>
                  </>
                )}
              </button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="text-center py-8 space-y-4"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-100 text-emerald-600">
                <CheckCircle size={32} className="animate-pulse" />
              </div>
              
              <h4 className="font-serif text-2xl font-bold text-zinc-900">
                {isPt ? 'Inscrição Ativada!' : 'Spot Secured!'}
              </h4>

              <p className="text-zinc-650 text-sm md:text-base leading-relaxed max-w-md mx-auto">
                {t.join.successMessage}
              </p>

              <div className="pt-6">
                <button
                  id="btn-add-another-lead"
                  onClick={handleResetForm}
                  className="text-xs font-bold text-leaf-700 hover:text-leaf-800 bg-leaf-50 hover:bg-leaf-100 transition-colors py-2.5 px-5 rounded-xl cursor-pointer"
                >
                  {isPt ? 'Fazer Outra Inscrição' : 'Register Another Artisan'}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Local storage inspection block */}
        {showAdminPanel && leadsList.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-6 pt-6 border-t border-zinc-200/80 space-y-3"
          >
            <div className="flex justify-between items-center pb-2 border-b border-zinc-100">
              <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase">
                {isPt ? 'Leads Registrados Localmente (Demonstração/Simulador)' : 'Offline Local Stored Leads Logs'}
              </span>
              <span className="text-[10px] font-mono text-zinc-400">
                {isPt ? 'Salvo no seu Navegador' : 'Saved inside LocalStorage'}
              </span>
            </div>

            <div className="max-h-[220px] overflow-y-auto space-y-2 pr-1">
              {leadsList.map((lead) => (
                <div key={lead.id} className="bg-zinc-5 w-full flex justify-between items-center p-3 rounded-lg border border-zinc-200/50 text-xs">
                  <div className="space-y-0.5 max-w-[85%]">
                    <div className="flex gap-2 items-center">
                      <span className="font-bold text-zinc-800">{lead.fullName}</span>
                      <span className="font-mono text-[9px] text-zinc-400">{lead.timestamp}</span>
                    </div>
                    <p className="text-zinc-500 overflow-hidden text-ellipsis whitespace-nowrap">
                      {lead.email} · {lead.phone}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      <span className="bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded text-[9px] font-medium leading-none">
                        {lead.productType}
                      </span>
                      <span className="bg-zinc-100 text-zinc-600 px-1.5 py-0.5 rounded text-[9px] font-medium leading-none">
                        {lead.producerStage}
                      </span>
                    </div>
                  </div>
                  <button
                    id={`btn-del-lead-${lead.id}`}
                    onClick={() => handleDeleteLead(lead.id)}
                    className="text-zinc-400 hover:text-rose-600 shrink-0 p-1.5 hover:bg-rose-50 rounded-md transition-colors cursor-pointer"
                    title={isPt ? 'Remover' : 'Delete'}
                  >
                    <Trash2 size={13} />
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
