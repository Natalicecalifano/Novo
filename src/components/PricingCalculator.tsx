import React, { useState } from 'react';
import { translations, Language } from '../types';
import { DollarSign, Percent, HeartHandshake, Eye, Sparkles, AlertCircle, TrendingUp, Compass, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PricingCalculatorProps {
  currentLanguage: Language;
}

export default function PricingCalculator({ currentLanguage }: PricingCalculatorProps) {
  const t = translations[currentLanguage];

  // Calculator states
  const [batchSize, setBatchSize] = useState<number>(10);
  const [materialsCost, setMaterialsCost] = useState<number>(120);
  const [laborHours, setLaborHours] = useState<number>(4);
  const [hourlyWage, setHourlyWage] = useState<number>(25);
  const [overheadPerUnit, setOverheadPerUnit] = useState<number>(4.5);
  const [margin, setMargin] = useState<number>(30);

  // Derive terms currency
  const isPt = currentLanguage === 'pt';
  const currencySymbol = isPt ? 'R$' : '$';

  // Math equations
  const totalLaborCost = laborHours * hourlyWage;
  const batchProductionCost = materialsCost + totalLaborCost;
  const productionCostPerUnit = batchSize > 0 ? (batchProductionCost / batchSize) : 0;
  const unitCOGS = productionCostPerUnit + overheadPerUnit;
  
  // Recommended Price = Cost / (1 - Margin%)
  const marginMultiplier = margin >= 100 ? 0.99 : margin / 100;
  const recommendedUnitPrice = unitCOGS / (1 - marginMultiplier);
  const grossProfitPerUnit = recommendedUnitPrice - unitCOGS;
  const marginPercentageAchieved = recommendedUnitPrice > 0 
    ? ((grossProfitPerUnit / recommendedUnitPrice) * 100).toFixed(0) 
    : '0';

  return (
    <div id="pricing-tool" className="bg-gradient-to-br from-brand-50 to-amber-50/40 border border-brand-200/60 p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-sm hover:shadow-md transition-all duration-300">
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-brand-100 text-brand-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            {isPt ? 'Ferramenta Prática' : 'Hands-on Tool'}
          </span>
          <div className="h-px bg-brand-200 flex-1"></div>
        </div>
        
        <h3 className="font-serif text-2xl md:text-3xl font-semibold text-brand-900 tracking-tight leading-none mb-3">
          {t.calculator.title}
        </h3>
        <p className="font-sans text-sm md:text-base text-zinc-600 mb-8 leading-relaxed">
          {t.calculator.subtitle}
        </p>

        {/* Form + Results Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Inputs Panel */}
          <div className="lg:col-span-7 bg-white p-5 md:p-6 rounded-2xl border border-zinc-200/60 shadow-xs space-y-5">
            <h4 className="font-sans text-sm font-semibold text-zinc-800 uppercase tracking-wider pb-3 border-b border-zinc-100 flex items-center justify-between">
              <span>{isPt ? 'Seus Custos de Produção' : 'Your True Costs'}</span>
              <Compass size={16} className="text-brand-500 animate-spin-slow" />
            </h4>

            {/* Input Groups */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-600 mb-1.5" htmlFor="calc-batch-size">
                  {isPt ? 'Tamanho do Lote (Unid.)' : 'Batch Size (Units)'}
                </label>
                <div className="relative">
                  <input
                    id="calc-batch-size"
                    type="number"
                    min="1"
                    value={batchSize}
                    onChange={(e) => setBatchSize(Math.max(1, Number(e.target.value)))}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-lg py-2 px-3 text-sm text-zinc-800 focus:outline-none focus:ring-1 focus:ring-leaf-600 focus:border-leaf-600"
                  />
                </div>
                <span className="text-[10px] text-zinc-400 mt-0.5 block">
                  {isPt ? 'Ex: Sabonetes por fornada' : 'e.g., Soaps per mold'}
                </span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-600 mb-1.5" htmlFor="calc-materials">
                  {t.calculator.materials}
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2 text-zinc-400 text-sm font-medium">{currencySymbol}</span>
                  <input
                    id="calc-materials"
                    type="number"
                    min="0"
                    step="0.1"
                    value={materialsCost}
                    onChange={(e) => setMaterialsCost(Math.max(0, Number(e.target.value)))}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-lg py-2 pl-9 pr-3 text-sm text-zinc-800 focus:outline-none focus:ring-1 focus:ring-leaf-600 focus:border-leaf-600"
                  />
                </div>
                <span className="text-[10px] text-zinc-400 mt-0.5 block">
                  {isPt ? 'Insumos e essências totais' : 'Oils, wax, essence totals'}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-600 mb-1.5" htmlFor="calc-labor-hours">
                  {t.calculator.laborTime}
                </label>
                <div className="relative">
                  <input
                    id="calc-labor-hours"
                    type="number"
                    min="0"
                    step="0.5"
                    value={laborHours}
                    onChange={(e) => setLaborHours(Math.max(0, Number(e.target.value)))}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-lg py-2 px-3 text-sm text-zinc-800 focus:outline-none focus:ring-1 focus:ring-leaf-600 focus:border-leaf-600"
                  />
                </div>
                <span className="text-[10px] text-zinc-400 mt-0.5 block">
                  {isPt ? 'Tempo de preparo e cura' : 'Active recipe + pack time'}
                </span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-600 mb-1.5" htmlFor="calc-hourly-wage">
                  {t.calculator.hourlyWage}
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2 text-zinc-400 text-sm font-medium">{currencySymbol}</span>
                  <input
                    id="calc-hourly-wage"
                    type="number"
                    min="0"
                    value={hourlyWage}
                    onChange={(e) => setHourlyWage(Math.max(0, Number(e.target.value)))}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-lg py-2 pl-9 pr-3 text-sm text-zinc-800 focus:outline-none focus:ring-1 focus:ring-leaf-600 focus:border-leaf-600"
                  />
                </div>
                <span className="text-[10px] text-zinc-400 mt-0.5 block">
                  {isPt ? 'Seu mérito por hora de foco' : 'Your focus hourly reward'}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-600 mb-1.5" htmlFor="calc-overhead">
                  {t.calculator.overhead}
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2 text-zinc-400 text-sm font-medium">{currencySymbol}</span>
                  <input
                    id="calc-overhead"
                    type="number"
                    min="0"
                    step="0.1"
                    value={overheadPerUnit}
                    onChange={(e) => setOverheadPerUnit(Math.max(0, Number(e.target.value)))}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-lg py-2 pl-9 pr-3 text-sm text-zinc-800 focus:outline-none focus:ring-1 focus:ring-leaf-600 focus:border-leaf-600"
                  />
                </div>
                <span className="text-[10px] text-zinc-400 mt-0.5 block">
                  {isPt ? 'Vidro, rótulo, fitinha, gás' : 'Bottle, labels, ribbon, gas'}
                </span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-600 mb-1.5" htmlFor="calc-margin">
                  {t.calculator.margin}
                </label>
                <div className="relative">
                  <span className="absolute right-3 top-2 text-zinc-400 text-sm font-medium">%</span>
                  <input
                    id="calc-margin"
                    type="number"
                    min="5"
                    max="95"
                    value={margin}
                    onChange={(e) => setMargin(Math.min(95, Math.max(5, Number(e.target.value))))}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-lg py-2 pl-3 pr-8 text-sm text-zinc-800 focus:outline-none focus:ring-1 focus:ring-leaf-600 focus:border-leaf-600"
                  />
                </div>
                <span className="text-[10px] text-zinc-400 mt-0.5 block">
                  {isPt ? 'Lucro líquido de salvaguarda' : 'Reinvestment/Safety index'}
                </span>
              </div>
            </div>

            {/* Slider control to play with */}
            <div className="pt-2">
              <div className="flex justify-between text-xs text-zinc-500 font-medium mb-1">
                <span>{isPt ? 'Ajuste Rápido de Margem de Reinvestimento' : 'Quick Margin Adjustment Slider'}</span>
                <span className="text-leaf-600 font-semibold">{margin}%</span>
              </div>
              <input
                id="calc-margin-slider"
                type="range"
                min="10"
                max="80"
                value={margin}
                onChange={(e) => setMargin(Number(e.target.value))}
                className="w-full h-1.5 bg-zinc-100 rounded-lg appearance-none cursor-pointer accent-leaf-600"
              />
            </div>
          </div>

          {/* Results Board */}
          <div className="lg:col-span-5 bg-leaf-900 text-zinc-100 p-6 rounded-2xl flex flex-col justify-between shadow-md h-full relative overflow-hidden">
            {/* Background design accents */}
            <div className="absolute -top-12 -right-12 w-28 h-28 bg-brand-500/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-leaf-600/10 rounded-full blur-2xl"></div>

            <div className="relative z-10 space-y-5">
              <div className="flex items-center gap-2 pb-3 border-b border-leaf-800">
                <TrendIndicator percent={marginPercentageAchieved} />
                <span className="text-xs uppercase tracking-wider text-leaf-200 font-mono font-medium">
                  {t.calculator.resultTitle}
                </span>
              </div>

              {/* Recommended Selling Price big figure */}
              <div>
                <span className="text-xs text-leaf-300 font-medium block mb-1">
                  {t.calculator.retailPrice} ({isPt ? 'Por Unidade' : 'Per Unit'})
                </span>
                <div className="flex items-baseline gap-1 text-white">
                  <span className="font-serif text-3xl md:text-4xl font-bold tracking-tight">
                    {currencySymbol} {recommendedUnitPrice.toFixed(2)}
                  </span>
                  <span className="text-sm font-mono text-leaf-300">/un</span>
                </div>
              </div>

              {/* Breakdown metrics */}
              <div className="grid grid-cols-2 gap-4 py-3 border-y border-leaf-800">
                <div>
                  <span className="text-[11px] text-leaf-300 block mb-0.5">
                    {t.calculator.costOfGood}
                  </span>
                  <span className="font-mono text-sm font-semibold text-zinc-100">
                    {currencySymbol} {unitCOGS.toFixed(2)}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] text-leaf-300 block mb-0.5">
                    {t.calculator.grossProfit}
                  </span>
                  <span className="font-mono text-sm font-semibold text-emerald-400">
                    {currencySymbol} {grossProfitPerUnit.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Advice */}
              <div className="bg-leaf-800/50 p-3.5 rounded-xl border border-leaf-700/60 flex gap-2 items-start">
                <AlertCircle size={15} className="text-brand-300 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-xs font-bold text-brand-300 block">
                    {t.calculator.adviceTitle}
                  </span>
                  <p className="text-[11px] text-zinc-300 leading-normal">
                    {t.calculator.adviceText}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA action mimics course entry */}
            <motion.a
              href="#cta"
              id="cta-calc-lock"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="mt-6 w-full text-center bg-brand-400 text-zinc-950 hover:bg-brand-300 text-xs font-bold py-3 px-4 rounded-xl shadow-md transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles size={13} />
              <span>{t.calculator.buttonCta}</span>
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrendIndicator({ percent }: { percent: string }) {
  return (
    <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-1 rounded-md">
      <TrendingUp size={14} />
    </div>
  );
}
