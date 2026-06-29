export type Language = 'en' | 'pt';

export interface TranslationSchema {
  nav: {
    problem: string;
    solution: string;
    how: string;
    calculator: string;
    quiz: string;
    join: string;
  };
  hero: {
    tagline: string;
    title: string;
    subtitle: string;
    cta: string;
    meta_producers: string;
    meta_no_tech: string;
    meta_start: string;
  };
  problem: {
    tag: string;
    title: string;
    subtitle: string;
    items: {
      photos: { title: string; desc: string };
      pricing: { title: string; desc: string };
      customer: { title: string; desc: string };
      fairs: { title: string; desc: string };
      catalog: { title: string; desc: string };
      shipping: { title: string; desc: string };
      guesswork: { title: string; desc: string };
      socials: { title: string; desc: string };
    };
  };
  solution: {
    tag: string;
    title: string;
    subtitle: string;
    bullets: string[];
    pillars: {
      brand: { title: string; desc: string };
      catalog: { title: string; desc: string };
      operations: { title: string; desc: string };
      growth: { title: string; desc: string };
    };
  };
  calculator: {
    title: string;
    subtitle: string;
    materials: string;
    laborTime: string;
    hourlyWage: string;
    overhead: string;
    margin: string;
    resultTitle: string;
    retailPrice: string;
    costOfGood: string;
    grossProfit: string;
    adviceTitle: string;
    adviceText: string;
    buttonCta: string;
  };
  quiz: {
    title: string;
    subtitle: string;
    question1: string;
    q1_opt1: string;
    q1_opt2: string;
    q1_opt3: string;
    question2: string;
    q2_opt1: string;
    q2_opt2: string;
    q2_opt3: string;
    question3: string;
    q3_opt1: string;
    q3_opt2: string;
    q3_opt3: string;
    question4: string;
    q4_opt1: string;
    q4_opt2: string;
    q4_opt3: string;
    resultTitle: string;
    resultButton: string;
    resultReset: string;
  };
  how: {
    tag: string;
    title: string;
    subtitle: string;
    step1: { title: string; desc: string };
    step2: { title: string; desc: string };
    step3: { title: string; desc: string };
  };
  join: {
    tag: string;
    title: string;
    subtitle: string;
    formTitle: string;
    fullName: string;
    email: string;
    phone: string;
    productType: string;
    productPlaceholder: string;
    producerStage: string;
    stage_opt1: string;
    stage_opt2: string;
    stage_opt3: string;
    agreeTerms: string;
    submit: string;
    sending: string;
    successMessage: string;
  };
  footer: {
    rights: string;
    privacy: string;
    terms: string;
    madeFor: string;
  };
}

export const translations: Record<Language, TranslationSchema> = {
  en: {
    nav: {
      problem: "The Problem",
      solution: "Our Solution",
      how: "How It Works",
      calculator: "Pricing Tool",
      quiz: "Maker Quiz",
      join: "Join Now",
    },
    hero: {
      tagline: "The leading education & acceleration platform",
      title: "For artisanal, natural & vegan producers",
      subtitle: "Eniesse Grow is the learning platform for small producers who never learned how to sell on the internet. A clear, step-by-step method to turn your craft into recurring online sales.",
      cta: "Start Learning For Free",
      meta_producers: "Made for small producers",
      meta_no_tech: "No tech skills needed",
      meta_start: "Start in minutes",
    },
    problem: {
      tag: "The Pain Point",
      title: "Your products are beautiful. Selling them online feels impossible.",
      subtitle: "You craft high-quality natural, artisanal, or vegan products with pure dedication, but the digital world wasn't built with you in mind. Most small producers lose months feeling lost alone.",
      items: {
        photos: {
          title: "Photos that don't capture the magic",
          desc: "Dark or amateur smartphone photos fail to portray the texture, aroma, and high value of your artisanal work."
        },
        pricing: {
          title: "Pricing that eats your margin",
          desc: "Guessing prices or undercutting yourself means you end up working for pennies without counting labor."
        },
        customer: {
          title: "No idea who your customer is",
          desc: "Shouting into the void without knowing who truly appreciates vegan, pure ingredients and natural items."
        },
        fairs: {
          title: "Trapped in weekend fairs",
          desc: "Tied down to physical spaces, carrying heavy boxes, and depending entirely on local foot traffic or good weather."
        },
        catalog: {
          title: "Disorganized inventory & catalogs",
          desc: "Taking orders through random direct messages, comments, and post-it notes, leading to mistakes and stress."
        },
        shipping: {
          title: "Shipping feels like a maze",
          desc: "Unsure how to package delicate glass or liquid bottles securely without paying exorbitant delivery costs."
        },
        guesswork: {
          title: "No strategy, just guessing",
          desc: "Posting randomly, hoping for the best, and getting frustrated when your effort doesn't translate into invoices."
        },
        socials: {
          title: "Invisible on social media",
          desc: "Crushed by algorithms, overwhelmed by reels, and feeling shy about showing the behind-the-scenes craft."
        }
      }
    },
    solution: {
      tag: "The Solution",
      title: "A learning platform built for makers, not marketers.",
      subtitle: "Eniesse Grow turns the chaos of online sales into a calm, guided journey with plain-language, bite-sized lessons tailored for physical craft makers.",
      bullets: [
        "Plain-language lessons without confusing digital marketing jargon",
        "Actionable templates for product photos, copy formulas, and financial sheets",
        "A proven step-by-step method designed for home kitchens and workshops",
        "A welcoming community of supportive makers walking the exact same path"
      ],
      pillars: {
        brand: {
          title: "Tell Your Maker Story",
          desc: "Learn to articulate your values, raw ingredients, and slow-process heritage to charge what your product is genuinely worth."
        },
        catalog: {
          title: "Optimized Catalogs & Pricing",
          desc: "Structure your listings with gorgeous phone photos, descriptive sensory copywriting, and robust financial calculations."
        },
        operations: {
          title: "Stress-Free Operations",
          desc: "Master stock management, eco-friendly wrapping, fragile-bottle packing, and cheap shipping alternatives."
        },
        growth: {
          title: "Continuous Organic Growth",
          desc: "Build a loyal customer base, generate buzz on Instagram/TikTok, and turn one-time buyers into active brand advocates."
        }
      }
    },
    calculator: {
      title: "Artisanal Pricing Calculator",
      subtitle: "Small producers lose months guessing prices. Input your exact numbers below to calculate a fair, profitable price that respects your manual craftsmanship.",
      materials: "Raw Materials Cost ($ / R$)",
      laborTime: "Labor Time (Hours per batch)",
      hourlyWage: "Your Target Hourly Rate ($/hr)",
      overhead: "Fixed Costs & Packaging ($ per unit)",
      margin: "Desired Profit Margin (%)",
      resultTitle: "Your Recommended Sales Strategy",
      retailPrice: "Target Selling Price",
      costOfGood: "Cost of Goods Sold (COGS)",
      grossProfit: "Gross Profit Margin per Unit",
      adviceTitle: "Advisor Verdict",
      adviceText: "Based on your inputs, this price ensures that your raw materials are covered, you are paid fairly for every minute of work, and your business retains a safe cushion to reinvest into growth, scaling, and organic ingredients.",
      buttonCta: "Lock in standard margins in Eniesse Playbook",
    },
    quiz: {
      title: "What's Holding Your Sales Back?",
      subtitle: "Take this 60-second self-diagnostic specifically created for artisanal and natural makers. Uncover your shop's primary bottleneck and receive a customized roadmap.",
      question1: "1. How do you handle your product photography?",
      q1_opt1: "Just random snap-shots on my table, light is uneven.",
      q1_opt2: "I try to use props, but they still don't look professional.",
      q1_opt3: "Clean, consistent, well-lit background with strong sensory details.",
      question2: "2. How did you decide your current prices?",
      q2_opt1: "I looked at competitors and made mine slightly cheaper.",
      q2_opt2: "I multi-plied material costs by 2 or 3 (I ignored my manual labor time).",
      q2_opt3: "Used an artisanal sheet counting hours, overheads, and profit reinvestments.",
      question3: "3. How do you accept orders and manage stock?",
      q3_opt1: "Through direct messages and WhatsApp chats, noted down on paper.",
      q3_opt2: "I have a basic link or catalog, but update inventory manually.",
      q3_opt3: "Structured e-commerce dashboard synced with real-time package labels.",
      question4: "4. Where do most of your customers come from?",
      q4_opt1: "Almost exclusively local fairs, friends, and word of mouth.",
      q4_opt2: "A few sporadic buyers from Instagram, but no consistent stream.",
      q4_opt3: "Highly consistent social media funnels and repeat subscribers.",
      resultTitle: "Your Manufacturer Diagnostics",
      resultButton: "Apply Recommended Strategy",
      resultReset: "Take Quiz Again"
    },
    how: {
      tag: "Methodology",
      title: "A simple method, three honest steps.",
      subtitle: "We stand alongside you from your very first photo setup to your first automatic online order and far beyond.",
      step1: {
        title: "1. Learn the basics",
        desc: "Build strong roots. Kick off with our free introductory e-book and short, practical audio & text lessons. No complex code or technology degree required."
      },
      step2: {
        title: "2. Apply your method",
        desc: "Build your storefront layout. Use our copy templates, pricing sheets, and photography checklist guides to establish an irresistible artisanal catalog."
      },
      step3: {
        title: "3. Launch and grow",
        desc: "Go live with confidence. Attract high-intent natural and vegan customers and transition your manual craft into structured, recurring digital income."
      }
    },
    join: {
      tag: "Secure Your Spot",
      title: "Your craft deserves to be seen by the world.",
      subtitle: "Join the producers building real, stable, and sustainable digital businesses with Eniesse Grow. Sign up below to unlock instant materials.",
      formTitle: "Create your free account",
      fullName: "Full Name",
      email: "Email Address",
      phone: "WhatsApp Number",
      productType: "What category of products do you craft?",
      productPlaceholder: "e.g., Lavender soaps, Vegan pastries, Ceramic mugs...",
      producerStage: "What is your main sales channel currently?",
      stage_opt1: "I am just starting / Haven't sold online yet",
      stage_opt2: "I sell primarily at physical fairs & local networks",
      stage_opt3: "I have an online store but want to scale/optimize margins",
      agreeTerms: "I agree to receive helpful artisan tips and program updates on WhatsApp.",
      submit: "Access Free Platform Bookmarks",
      sending: "Securing your spot...",
      successMessage: "Welcome to the family! We've saved your artisan profile. Our Eniesse Grow coordinators will reach out on WhatsApp within 24 hours to guide you to the onboarding materials. Check your inbox!"
    },
    footer: {
      rights: "© 2026 Eniesse Grow. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      madeFor: "Empowering natural, organic, and vegan artisans since 2024."
    }
  },
  pt: {
    nav: {
      problem: "O Problema",
      solution: "Nossa Solução",
      how: "Metodologia",
      calculator: "Calculadora de Preços",
      quiz: "Diagnóstico",
      join: "Cadastrar",
    },
    hero: {
      tagline: "A plataforma líder de educação e aceleração",
      title: "Para produtores artesanais, naturais e veganos",
      subtitle: "O Eniesse Grow é a plataforma de aprendizado para pequenos produtores que nunca aprenderam a vender pela internet. Um método claro, passo a passo, para transformar sua arte em vendas online recorrentes.",
      cta: "Começar a Aprender Grátis",
      meta_producers: "Feito para pequenos produtores",
      meta_no_tech: "Sem complicação tecnológica",
      meta_start: "Inicie em minutos",
    },
    problem: {
      tag: "O Desafio",
      title: "Seus produtos são lindos. Mas vender online parece impossível.",
      subtitle: "Você produz com extremo carinho produtos naturais, artesanais ou veganos, mas o mundo digital não foi desenhado pensando em você. A maioria dos pequenos produtores perde meses tentando decifrar tudo sozinho.",
      items: {
        photos: {
          title: "Fotos que não valorizam sua arte",
          desc: "Fotos escuras ou amadoras no celular falham em transmitir a textura, o aroma e o alto valor percebido de um item artesanal."
        },
        pricing: {
          title: "Preços que engolem sua margem",
          desc: "Definir preços no 'chute' ou copiando os outros faz você trabalhar de graça por não saber calcular suas horas de mão de obra."
        },
        customer: {
          title: "Sem norte sobre quem é seu cliente",
          desc: "Publicar sem saber quem realmente valoriza ingredientes puros, orgânicos e processos éticos de produção consciente."
        },
        fairs: {
          title: "Dependência de feiras físicas",
          desc: "Ficar preso a carregar caixas pesadas no final de semana, dependendo do clima e do movimento local para pagar as contas."
        },
        catalog: {
          title: "Estoque e catálogos caóticos",
          desc: "Anotar pedidos em direct do Instagram, comentários, WhatsApps soltos e caderninhos, gerando falhas e estresse."
        },
        shipping: {
          title: "Frete que parece um enigma",
          desc: "O receio de embalar e despachar vidros e líquidos frágeis e preços de transporte abusivos que espantam o cliente."
        },
        guesswork: {
          title: "Falta de método, apenas intuição",
          desc: "Postar sem constância, torcendo por vendas, e se frustrar ao ver que seus esforços de divulgação não rendem faturamento."
        },
        socials: {
          title: "Invisibilidade nas redes sociais",
          desc: "Ser engolido pelo algoritmo, ficar com vergonha de aparecer e não saber mostrar os bastidores fascinantes da produção."
        }
      }
    },
    solution: {
      tag: "A Solução",
      title: "Uma escola feita para artesãos, não para agências de marketing.",
      subtitle: "O Eniesse Grow traduz o caos das vendas digitais em uma jornada simples de seguir, com aulas curtas em linguagem humana e foco 100% no produtor artesanal.",
      bullets: [
        "Aulas com vocabulário direto e simples, livre de termos técnicos difíceis",
        "Modelos prontos para fotos de produtos, roteiros de texto e planilhas financeiras",
        "Método realista estruturado para quem trabalha na cozinha de casa ou ateliê",
        "Uma comunidade acolhedora de produtores que compartilham os mesmos desafios"
      ],
      pillars: {
        brand: {
          title: "Contar sua História",
          desc: "Aprenda a expor a sua filosofia, suas matérias-primas e a ancestralidade do processo manual para cobrar o preço justo que merece."
        },
        catalog: {
          title: "Catálogo e Precificação",
          desc: "Aprenda a montar fotos impecáveis no celular, a detalhar apelos sensoriais em textos e a usar planilhas de margem saudáveis."
        },
        operations: {
          title: "Operação Sem Trauma",
          desc: "Organize controle de estoque fácil, embalagens ecológicas, técnicas anti-vazamento no envio e convênios de frete barato."
        },
        growth: {
          title: "Crescimento Constante",
          desc: "Conquiste clientes fiéis, apareça bem no Instagram e no TikTok, e converta compradores casuais em divulgadores da sua marca."
        }
      }
    },
    calculator: {
      title: "Calculadora de Preço Artesanal",
      subtitle: "Artesãos perdem dinheiro por não cobrar a própria hora de trabalho. Insira seus custos reais abaixo para calcular um valor de venda sustentável, lucrativo e ético.",
      materials: "Custo de Matéria-Prima (por unidade/lote)",
      laborTime: "Tempo de Produção (Horas por lote)",
      hourlyWage: "Sua hora de trabalho desejada (R$/hora)",
      overhead: "Custos Fixos e Embalagem (por unidade)",
      margin: "Margem de Lucro Desejada (%)",
      resultTitle: "Sua Estratégia de Preço Recomendada",
      retailPrice: "Preço de Venda Sugerido",
      costOfGood: "Custo de Produção (CPV)",
      grossProfit: "Margem de Lucro Bruto por Unidade",
      adviceTitle: "Veredito do Consultor",
      adviceText: "Sob esta fórmula, você garante que todos os ingredientes estão pagos, recebe uma recompensa justa por cada minuto que passou produzindo de forma manual, e seu negócio retém uma reserva financeira segura para reinvestir em insumos orgânicos, embalagens elegantes e anúncios.",
      buttonCta: "Salvar margem no plano Eniesse Grow",
    },
    quiz: {
      title: "Qual é o Gargalo das suas Vendas?",
      subtitle: "Faça o auto-diagnóstico de 60 segundos desenvolvido exclusivamente para artesãos de produtos naturais e veganos. Identifique seu entrave principal e ganhe uma rota focada.",
      question1: "1. Como estão as fotos dos seus produtos atualmente?",
      q1_opt1: "Sempre bato no improviso na mesa de casa, com luz do dia oscilante.",
      q1_opt2: "Tento usar uns cenários, mas sinto que ainda parecem amadoras.",
      q1_opt3: "São nítidas, em fundo harmônico, transmitindo texturas e excelência.",
      question2: "2. Como você estipulou o preço das suas mercadorias?",
      q2_opt1: "Olhei o preço da concorrência e botei um tiquinho mais barato.",
      q2_opt2: "Multipliquei o custo dos materiais por 2 ou 3 (ignorei minhas horas de trabalho).",
      q2_opt3: "Sigo uma planilha de custos que considera matérias, tempo e reinversão.",
      question3: "3. Como você recebe seus pedidos e controla o estoque?",
      q3_opt1: "No WhatsApp e nos directs do Instagram, anotando em cadernos ou papéis.",
      q3_opt2: "Tenho um link de catálogo básico, mas preciso atualizar o estoque manualmente.",
      q3_opt3: "Painel integrado com vendas automáticas, etiqueta de frete e controle de estoque.",
      question4: "4. De onde vem a grande maioria das suas vendas?",
      q4_opt1: "Apenas da feira local do bairro, vizinhos e indicações de amigos próximos.",
      q4_opt2: "Vendas esporádicas no Instagram quando publico bastante, sem constância.",
      q4_opt3: "De funis planejados em redes sociais e clientes fiéis que compram todo mês.",
      resultTitle: "Seu Relatório de Diagnóstico",
      resultButton: "Aplicar Rota Recomendada",
      resultReset: "Refazer o Diagnóstico"
    },
    how: {
      tag: "Metodologia",
      title: "Um método simples, três passos sinceros.",
      subtitle: "Estaremos com você segurando sua mão desde a organização do seu primeiro cenário de foto até os fretes automáticos e a recorrência mensal.",
      step1: {
        title: "1. Domine os Fundamentos",
        desc: "Crie bases sólidas. Comece pelo e-book gratuito e aulas curtas em texto e áudio desenhadas para quem tem rotina corrida. Sem códigos ou teorias inúteis."
      },
      step2: {
        title: "2. Aplique a Fórmula",
        desc: "Construa sua vitrine de elite. Utilize nossos roteiros de descrição, planilhas de precificação e esquemas de luz para consolidar um catálogo hipnotizante."
      },
      step3: {
        title: "3. Lance e Multiplique",
        desc: "Ative os motores com segurança. Atraia clientes interessados em causas ecológicas, artesanais e veganas, transformando sua produção em um negócio próspero."
      }
    },
    join: {
      tag: "Garanta Sua Vaga",
      title: "Seu trabalho merece ser visto e valorizado pelo país.",
      subtitle: "Chega de trabalhar sem eira nem beira. Faça parte dos produtores que criaram negócios digitais sustentáveis, rentáveis e organizados com o Eniesse Grow.",
      formTitle: "Crie sua conta gratuita",
      fullName: "Nome Completo",
      email: "E-mail de Contato",
      phone: "Número de WhatsApp",
      productType: "Que categorias de produtos você produz?",
      productPlaceholder: "Ex: Sabonetes artesanais, doces veganos, cerâmicas, velas...",
      producerStage: "Qual é o seu principal canal de vendas hoje?",
      stage_opt1: "Estou começando agora / Ainda não vendo profissionalmente",
      stage_opt2: "Vendo principalmente em feiras físicas e boca-a-boca local",
      stage_opt3: "Já vendo online mas quero profissionalizar minhas margens",
      agreeTerms: "Aceito receber dicas práticas semanais e novidades no meu WhatsApp.",
      submit: "Quero Acessar os Conteúdos e E-book",
      sending: "Reservando seus materiais...",
      successMessage: "Excelente escolha! Seu perfil de produtor foi registrado com absoluto sucesso. Um consultor do Eniesse Grow entrará em contato via WhatsApp nas próximas 24 horas para enviar seu kit inicial de boas-vindas e liberar o acesso às planilhas. Fique atento!"
    },
    footer: {
      rights: "© 2026 Eniesse Grow. Todos os direitos reservados.",
      privacy: "Políticas de Privacidade",
      terms: "Termos de Uso",
      madeFor: "Fortalecendo o ecossistema de produtores naturais, veganos e artesanais desde 2024."
    }
  }
};
