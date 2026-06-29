import React, { useState } from 'react';
import { translations, Language } from '../types';
import { BookOpen, HelpCircle, Flame, ArrowUpRight, Award, Compass, HeartPulse, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface LessonPreviewProps {
  currentLanguage: Language;
}

export default function LessonPreview({ currentLanguage }: LessonPreviewProps) {
  const isPt = currentLanguage === 'pt';
  const [activeTab, setActiveTab] = useState<'brand' | 'catalog' | 'ops' | 'growth'>('brand');

  const content = {
    brand: {
      tags: isPt ? ['Aura da Marca', 'Storytelling'] : ['Brand Aura', 'Storytelling'],
      title: isPt ? 'A Fórmula da Força da Origem' : "The Origin Story Blueprint",
      intro: isPt 
        ? 'Grandes marcas vendem status. Produtores artesanais vendem verdade, ritual e cuidado manual. Utilize esta fórmula para encantar:'
        : 'Big cosmetic or culinary chains sell generic status. Artisanal makers sell pure truth, manual slowing, and rituals. Use this exact copy recipe:',
      recipe: isPt
        ? '[Sua Origem Natural] + [Selo de Compromisso de Matéria-Prima] + [História do Processo Lento] = Valor Indestrutível'
        : '[Your Natural Origin Node] + [Ingredients Compromise Stamp] + [The Slow Method Story] = Unbreakable Margin',
      example_header: isPt ? 'Exemplo de aplicação prática:' : 'Real-world copywriting example:',
      example: isPt
        ? '"Esprememos a canoura à mão e infundimos o extrato puro em óleo de coco de agricultura familiar. Uma barra que leva 40 dias para curar, garantindo uma espuma cremosa que não agride o meio ambiente."'
        : '"We squeeze raw organic carrots by hand and infuse the fresh pulp into family-farmed cold-pressed coconut oil. Each bar cures for 40 slow days so your sensitive skin feels pure moisture."',
      author: isPt ? 'Módulo 1: Alma & Posicionamento' : 'Module 1: Soul & Core Positioning'
    },
    catalog: {
      tags: isPt ? ['Impecável', 'Copy Sensorial'] : ['Sensory Copy', 'High Value'],
      title: isPt ? 'Copywriting Sensorial para Vitrines' : "Sensory Copywriting Formulas",
      intro: isPt
        ? 'Vitrinas tradicionais listam fichas técnicas frias. Para cobrar o preço justo de sabonetes, chás ou cerâmicas, descreva sensações:'
        : 'Corporate e-commerce sites list boring, dry product details. In the natural & vegan niche, people buy sensory imagery. Swap your definitions:',
      recipe: isPt
        ? 'Troque: "Vela de alfazema, 150g, aroma floral, copinho de vidro." / Por: "Vapor de lavanda fresca. Feche os olhos ao acender a vela de cera de soja pura; sinta o perfume floral calmante preencher sua sala à noite."'
        : 'Swap: "Lavender candle, 150g, floral scent, glass container." / Use: "Breathe in wild lavender. Light this clean-burning soy jar at twilight; feel the calm floral oils dissolve the pressure of your long day."',
      example_header: isPt ? 'Por que funciona?' : 'Why this is magic:',
      example: isPt
        ? 'Isso cria o desejo tátil e olfativo imediato no cérebro do comprador, neutralizando qualquer barreira de preço.'
        : 'It projects the sensory experience through the screen, justifying a 3x premium pricing instantly without questions.',
      author: isPt ? 'Módulo 2: O Catálogo Irresistível' : 'Module 2: Structural Catalog Formula'
    },
    ops: {
      tags: isPt ? ['Estoque Sustentável', 'Transporte'] : ['Plastic-Free', 'Eco Shipping'],
      title: isPt ? 'Segredo de Embalagem Orgânica Plástico-Zero' : "The Sustainable Packing Secret",
      intro: isPt
        ? 'Como enviar potes ou vidros frágeis de forma barata e sustentável sem usar aquele plástico-bolha poluente:'
        : 'Shipping fragile glass containers or heavy liquid liquids cheaply and ecologically without excessive artificial plastic wraps:',
      recipe: isPt
        ? 'Forre a caixa com serragem selecionada ou palha de madeira natural reciclada. Além de amortecer quedas de até 2 metros, perfuma e encanta na abertura.'
        : 'Line package cushions with dried pine wood wool (shavings) or shredded brown cardboard leftovers. It cushions drops of up to 6 feet while perfuming the unboxing.',
      example_header: isPt ? 'Dica Extra Eniesse:' : 'Bonus Unboxing Tip:',
      example: isPt
        ? 'Pingue duas gotas de óleo essencial de capim-limão sobre a palha antes de lacrar a embalagem. O unboxing vira uma experiência memorável.'
        : 'Drip two single sprays of pure eucalyptus or lemongrass essential oil onto the dry shavings before taping. The opening smells heavenly.',
      author: isPt ? 'Módulo 3: Distribuição Inteligente' : 'Module 3: Lean Operations & Dispatch'
    },
    growth: {
      tags: isPt ? ['Redes Sociais', 'Fãs Ativos'] : ['Social Engines', 'Frictionless Sales'],
      title: isPt ? 'Roteiro de Redes Sociais para Tímidos' : "3-Step Social Plan for Introverts",
      intro: isPt
        ? 'Tem vergonha de aparecer no vídeo do Instagram ou TikTok? Utilize este roteiro simples sem mostrar o rosto:'
        : 'Terrified of showing your skin, speaking, or recording standard dynamic camera facial videos? Try this calm script:',
      recipe: isPt
        ? '1) Grave 6 segundos bem nítidos vertendo o produto (óleo se espalhando, cera caindo). \n2) Insira uma frase curta explicando um benefício puro. \n3) Escolha uma música acústica tranquila.'
        : '1) Record 6 close-up seconds of fluid flow texture (creamy lather, candle pouring). \n2) Print 1 clean contrast text highlighting a raw botanical choice. \n3) Pack a trending acoustic ambient track.',
      example_header: isPt ? 'Exemplo de legenda do Reels:' : 'Caption text helper:',
      example: isPt
        ? '"Por que usamos óleos prensados a frio em vez do sebo industrial que entope os poros comercialmente? O link da bio te mostra os bastidores."'
        : '"Why our candles rely on hand-scooped soy instead of toxic industrial chemical paraffins that taint your air. Link in biography to read our values."',
      author: isPt ? 'Módulo 4: Propagação Orgânica' : 'Module 4: Organic Attraction Funnel'
    }
  };

  const currentData = content[activeTab];

  return (
    <div id="learning-preview" className="bg-zinc-950 text-zinc-100 p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-lg border border-zinc-800">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800 pb-5">
          <div>
            <span className="text-brand-300 text-xs font-mono font-bold uppercase tracking-wider block mb-1">
              {isPt ? 'Degustação da Plataforma' : 'Platform Course Preview'}
            </span>
            <h4 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-white leading-none">
              {isPt ? 'O que você vai aprender?' : 'The Eniesse Playbook Inside'}
            </h4>
          </div>

          {/* Core pillar buttons */}
          <div className="flex flex-wrap gap-1.5 bg-zinc-900 p-1 rounded-xl">
            {(['brand', 'catalog', 'ops', 'growth'] as const).map((tab) => {
              const label = isPt 
                ? { brand: 'Marca', catalog: 'Catálogo', ops: 'Operações', growth: 'Redes Sociais' }[tab]
                : { brand: 'Brand', catalog: 'Catalog', ops: 'Operations', growth: 'Growth' }[tab];
              
              const isSelected = activeTab === tab;
              return (
                <button
                  id={`btn-tab-${tab}`}
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-all duration-200 ${
                    isSelected 
                      ? 'bg-leaf-600 text-white shadow-md' 
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab content view */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 min-h-[300px]"
          >
            {/* Main Lesson explanation */}
            <div className="md:col-span-8 space-y-4">
              <div className="flex items-center gap-1.5 flex-wrap">
                {currentData.tags.map((tag, idx) => (
                  <span key={idx} className="bg-leaf-950 border border-leaf-800 text-leaf-300 text-[10px] font-mono font-medium px-2 py-0.5 rounded-md uppercase">
                    {tag}
                  </span>
                ))}
              </div>

              <h5 className="font-serif text-xl md:text-2xl font-bold text-white tracking-tight leading-snug">
                {currentData.title}
              </h5>

              <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                {currentData.intro}
              </p>

              {/* Blueprint recipe highlight card */}
              <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl flex items-start gap-3">
                <Quote className="text-brand-300 shrink-0 mt-1 opacity-70" size={18} />
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-wider font-mono text-zinc-500 font-bold block">
                    {isPt ? 'Fórmula Integrada' : 'Integrated Formula'}
                  </span>
                  <p className="text-zinc-100 text-sm font-medium leading-relaxed whitespace-pre-line">
                    {currentData.recipe}
                  </p>
                </div>
              </div>
            </div>

            {/* Practical example sidebar */}
            <div className="md:col-span-4 bg-zinc-900/60 border border-zinc-800/80 p-5 rounded-xl flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[11px] font-bold text-brand-300 uppercase tracking-widest font-mono block">
                  {currentData.example_header}
                </span>
                <p className="text-xs text-zinc-300 italic leading-relaxed font-sans">
                  {currentData.example}
                </p>
              </div>

              {/* Link anchor */}
              <div className="border-t border-zinc-800/60 pt-4 mt-4 flex items-center justify-between">
                <span className="text-[10px] font-mono text-zinc-500 font-semibold uppercase">
                  {currentData.author}
                </span>
                <a href="#cta" className="text-xs font-semibold text-leaf-400 hover:text-leaf-300 inline-flex items-center gap-1">
                  <span>{isPt ? 'E-book de Graça' : 'Claim Free Ebook'}</span>
                  <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
