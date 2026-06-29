// Conteudo institucional do site da Dra. Gabriela Dornelas
// Copy revisada conforme politica de comunicacao medica (sem promessas absolutas).
// Campos marcados com TODO devem ser atualizados antes do go-live.

export interface SiteContent {
  doctor: {
    name: string;
    fullName: string;
    role: string;
    crm: string;
    rqe: string;
    city: string;
    clinicName: string;
    clinicArea: string;
    tagline: string;
    instagram: string;
    instagramUrl: string;
    bioSite: string;
    bioSiteUrl: string;
    whatsappUrl: string;
    whatsappPhone: string;
    reviewUrl: string;
  };
  nav: { label: string; href: string }[];
  hero: {
    titleLines: string[];
    subtitlePre: string;
    subtitleStrong: string;
    services: { key: 'gineco' | 'hormonal' | 'emagrecimento' | 'cirurgia'; label: string }[];
    ctaLabel: string;
    locationPre: string;
    locationStrong: string;
    seal: { title: string; text: string };
  };
  stats: { items: { value: string; label: string }[] };
  integralCare: { kicker: string; title: string; paragraphs: string[]; points: string[] };
  pillars: {
    kicker: string;
    title: string;
    intro: string;
    items: { key: 'gineco' | 'hormonal' | 'emagrecimento' | 'cirurgia'; title: string; text: string }[];
  };
  lifePhases: {
    kicker: string;
    title: string;
    intro: string;
    items: { title: string; text: string }[];
    ctaCard: { title: string; text: string; ctaLabel: string };
  };
  treatments: {
    kicker: string;
    title: string;
    intro: string;
    groups: { title: string; intro: string; items: { name: string; text: string }[] }[];
  };
  process: { kicker: string; title: string; intro: string; steps: { title: string; text: string }[] };
  about: {
    kicker: string;
    title: string;
    paragraphs: string[];
    credentials: string[];
    signature: string;
    ctaLabel: string;
  };
  premiumCta: { title: string; text: string; ctaLabel: string };
  differentials: { kicker: string; title: string; intro: string; items: { title: string; text: string }[] };
  clinic: { kicker: string; title: string; text: string; points: string[] };
  faq: { kicker: string; title: string; items: { q: string; a: string }[] };
  contact: { kicker: string; title: string; text: string; infos: { label: string; value: string }[]; ctaLabel: string };
  footer: { tagline: string; legal: string; responsible: string };
}

export const content: SiteContent = {
  doctor: {
    name: 'Dra. Gabriela Dornelas',
    fullName: 'Dra. Gabriela Alves de Moura Dornelas',
    role: 'Ginecologista e Obstetra',
    crm: 'CRM/DF 27509',
    rqe: 'RQE 24605',
    city: 'Brasília/DF',
    clinicName: 'Clínica Soul Essence',
    clinicArea: 'Asa Sul · Brasília/DF',
    tagline: 'Sua médica, para todas as fases da sua vida.',
    instagram: '@dragabrieladornelass',
    instagramUrl: 'https://www.instagram.com/dragabrieladornelass/',
    bioSite: 'bio.site/dragabrieladornelass',
    bioSiteUrl: 'https://bio.site/dragabrieladornelass',
    whatsappUrl:
      'https://api.whatsapp.com/send/?phone=5561996925550&text&type=phone_number&app_absent=0',
    whatsappPhone: '5561996925550',
    reviewUrl:
      'https://www.doctoralia.com.br/adicionar-opiniao/gabriela-alves-de-moura-dornelas?doctor_id=1017193#/opiniao',
  },

  nav: [
    { label: 'Início', href: '#inicio' },
    { label: 'Cuidado integral', href: '#cuidado' },
    { label: 'Pilares', href: '#pilares' },
    { label: 'Fases da vida', href: '#fases' },
    { label: 'Tratamentos', href: '#tratamentos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Dúvidas', href: '#duvidas' },
    { label: 'Contato', href: '#contato' },
  ],

  hero: {
    titleLines: ['Saúde íntima,', 'equilíbrio hormonal', 'e autoestima.'],
    subtitlePre: 'Cuidado completo em ginecologia moderna para você se sentir bem, ',
    subtitleStrong: 'por dentro e por fora.',
    services: [
      { key: 'gineco', label: 'Ginecologia Moderna' },
      { key: 'hormonal', label: 'Reposição Hormonal' },
      { key: 'emagrecimento', label: 'Emagrecimento' },
      { key: 'cirurgia', label: 'Cirurgia Íntima' },
    ],
    ctaLabel: 'Agendar consulta',
    locationPre: 'Atendimento personalizado em ',
    locationStrong: 'Brasília/DF',
    seal: {
      title: 'Ginecologia Íntima com Excelência',
      text: 'Ciência, tecnologia e acolhimento para cuidar da sua saúde íntima.',
    },
  },

  stats: {
    items: [
      { value: '10 mil+', label: 'mulheres acompanhadas no Instagram' },
      { value: '4', label: 'pilares de cuidado integrado' },
      { value: 'RQE 24605', label: 'especialista titulada em ginecologia e obstetrícia' },
      { value: 'Brasília/DF', label: 'atendimento individualizado e discreto' },
    ],
  },

  integralCare: {
    kicker: 'Por dentro e por fora',
    title: 'Um cuidado que olha para você por inteiro',
    paragraphs: [
      'Saúde da mulher não cabe em uma única consulta isolada. Sintomas hormonais, queixas íntimas, oscilações de peso e mudanças na libido costumam estar conectados — e merecem ser avaliados em conjunto, com tempo e escuta.',
      'A proposta da Dra. Gabriela Dornelas é integrar ginecologia moderna, equilíbrio hormonal, emagrecimento e cuidado íntimo em um plano único, construído a partir da sua história, dos seus exames e dos seus objetivos.',
      'Mais do que tratar uma queixa pontual, o foco é o seu bem-estar de longo prazo: você se sentindo confortável no próprio corpo, segura nas decisões sobre a sua saúde e bem orientada em cada fase.',
    ],
    points: [
      'Avaliação que conecta hormônios, metabolismo e saúde íntima',
      'Decisões compartilhadas, com informação clara e acolhimento',
      'Abordagem moderna e segura, sempre individualizada',
    ],
  },

  pillars: {
    kicker: 'Quatro pilares',
    title: 'Como a Dra. Gabriela cuida de você',
    intro:
      'Cada mulher chega com uma necessidade diferente. Por isso, o atendimento se organiza em quatro pilares que se complementam e podem caminhar juntos no seu plano de cuidado.',
    items: [
      {
        key: 'gineco',
        title: 'Ginecologia Moderna',
        text:
          'Acompanhamento ginecológico completo, da prevenção de rotina ao cuidado de queixas específicas como dor pélvica, endometriose, alterações no ciclo e contracepção. Avaliação atualizada, baseada em evidências e centrada na sua história.',
      },
      {
        key: 'hormonal',
        title: 'Reposição Hormonal',
        text:
          'Investigação e manejo do equilíbrio hormonal em diferentes fases — do climatério à menopausa. A terapia de reposição hormonal, quando indicada, é conduzida de forma individualizada, considerando sintomas, exames e o seu perfil de saúde.',
      },
      {
        key: 'emagrecimento',
        title: 'Emagrecimento',
        text:
          'Abordagem do peso e do metabolismo conectada à saúde hormonal feminina. O objetivo é um emagrecimento sustentável e seguro, com acompanhamento médico que respeita o seu corpo e a sua rotina, sem fórmulas mágicas.',
      },
      {
        key: 'cirurgia',
        title: 'Cirurgia Íntima',
        text:
          'Cirurgias íntimas e procedimentos ginecológicos voltados ao conforto, à funcionalidade e à autoestima. Indicação criteriosa, conversa franca sobre expectativas e cuidado completo no pré e no pós-operatório.',
      },
    ],
  },

  lifePhases: {
    kicker: 'Cada fase tem o seu cuidado',
    title: 'Presente em todos os momentos da sua saúde',
    intro:
      'O corpo da mulher muda ao longo da vida, e cada etapa pede um olhar específico. Veja como o acompanhamento se adapta às fases e às necessidades mais comuns no consultório.',
    items: [
      {
        title: 'Menopausa & climatério',
        text:
          'Acolhimento para fogachos, alterações de sono, humor e ressecamento íntimo. Avaliação do equilíbrio hormonal e discussão sobre terapia de reposição hormonal quando há indicação clínica.',
      },
      {
        title: 'Pós-parto & maternidade',
        text:
          'Cuidado com a recuperação do corpo, a saúde íntima e as mudanças hormonais após o parto, com atenção ao bem-estar físico e emocional desse novo momento.',
      },
      {
        title: 'Emagrecimento & metabolismo',
        text:
          'Suporte para quem busca emagrecer com saúde e entender o papel dos hormônios no peso — incluindo o impacto do emagrecimento rápido na firmeza e no conforto da região íntima.',
      },
      {
        title: 'Saúde sexual & libido',
        text:
          'Espaço seguro para falar sobre desejo, prazer, dor na relação e ressecamento. Investigação das causas e orientação personalizada, sem julgamentos.',
      },
      {
        title: 'Endometriose & dor pélvica',
        text:
          'Investigação cuidadosa da dor pélvica e da endometriose, com diagnóstico atento e plano de cuidado voltado ao controle dos sintomas e à qualidade de vida.',
      },
    ],
    ctaCard: {
      title: 'Não sabe por onde começar?',
      text:
        'Na consulta inicial, ouvimos a sua história com calma e definimos juntas o caminho mais adequado para a fase que você está vivendo.',
      ctaLabel: 'Agendar consulta',
    },
  },

  treatments: {
    kicker: 'Tratamentos & procedimentos',
    title: 'Recursos modernos a serviço da sua saúde',
    intro:
      'Tecnologia, ciência e técnica refinada reunidas em um cuidado discreto. Cada procedimento abaixo é indicado de forma criteriosa, conforme a sua necessidade clínica e após avaliação individualizada.',
    groups: [
      {
        title: 'Saúde hormonal & menopausa',
        intro: 'Equilíbrio hormonal avaliado em profundidade para cada fase da vida.',
        items: [
          {
            name: 'Terapia de reposição hormonal (TRH)',
            text:
              'Reposição conduzida de forma individualizada para aliviar sintomas do climatério e da menopausa, sempre considerando exames, histórico e perfil de risco.',
          },
          {
            name: 'Manejo dos fogachos',
            text:
              'Avaliação e tratamento das ondas de calor, suores noturnos e alterações de sono que afetam a rotina e o bem-estar.',
          },
          {
            name: 'Contraceptivos & implantes hormonais',
            text:
              'Orientação sobre métodos contraceptivos e implantes hormonais, com escolha alinhada aos seus objetivos e à sua saúde.',
          },
          {
            name: 'Equilíbrio hormonal feminino',
            text:
              'Investigação de queixas como alterações de humor, libido, ciclo irregular e ganho de peso relacionadas ao perfil hormonal.',
          },
        ],
      },
      {
        title: 'Cirurgia íntima',
        intro: 'Procedimentos voltados ao conforto, à funcionalidade e à autoestima.',
        items: [
          {
            name: 'Labioplastia',
            text:
              'Cirurgia íntima para remodelar os pequenos lábios, indicada quando há desconforto físico, estético ou funcional, com técnica delicada e pós-operatório acompanhado.',
          },
          {
            name: 'Ninfoplastia',
            text:
              'Procedimento para reduzir e harmonizar os pequenos lábios (ninfas), buscando conforto nas atividades do dia a dia e maior bem-estar.',
          },
          {
            name: 'Capuzplastia',
            text:
              'Ajuste do capuz do clitóris para refinamento estético e funcional, geralmente associado a outros procedimentos íntimos quando indicado.',
          },
          {
            name: 'Retirada de plicoma',
            text:
              'Remoção de plicomas (excessos de pele na região íntima), com técnica cuidadosa voltada ao conforto e à harmonia da área.',
          },
        ],
      },
      {
        title: 'Emagrecimento & metabolismo',
        intro: 'Peso e metabolismo cuidados em conexão com a saúde hormonal.',
        items: [
          {
            name: 'Acompanhamento do emagrecimento',
            text:
              'Plano de emagrecimento com acompanhamento médico, focado em segurança, constância e respeito ao seu metabolismo.',
          },
          {
            name: 'Avaliação metabólica',
            text:
              'Investigação de fatores hormonais e metabólicos que influenciam o peso, o apetite e a disposição.',
          },
          {
            name: 'Lipedema',
            text:
              'Atenção ao lipedema — acúmulo doloroso de gordura que afeta principalmente pernas e braços —, com avaliação cuidadosa e orientação de manejo voltada ao alívio dos sintomas e à qualidade de vida.',
          },
          {
            name: 'Impacto do emagrecimento na saúde íntima',
            text:
              'Atenção às mudanças que a perda de peso, especialmente quando rápida, pode causar na firmeza e no conforto da região íntima.',
          },
        ],
      },
      {
        title: 'Medicina regenerativa & saúde íntima',
        intro: 'Tecnologia e regeneração a favor do conforto e da autoestima íntima.',
        items: [
          {
            name: 'Laser íntimo de CO2',
            text:
              'Tecnologia a laser indicada para queixas como ressecamento, flacidez e desconforto íntimo, com protocolo definido após avaliação individualizada.',
          },
          {
            name: 'Medicina regenerativa íntima',
            text:
              'Recursos regenerativos para qualidade dos tecidos íntimos, indicados conforme a necessidade clínica e os objetivos de cada paciente.',
          },
          {
            name: 'Clareamento íntimo',
            text:
              'Procedimento estético para uniformizar o tom da região íntima, indicado após avaliação individualizada e realizado com técnica segura e discreta.',
          },
          {
            name: 'Saúde e hidratação íntima',
            text:
              'Cuidados voltados ao conforto, à lubrificação e ao bem-estar da região íntima em diferentes fases da vida.',
          },
          {
            name: 'Bem-estar e função sexual',
            text:
              'Abordagem de queixas de ressecamento e desconforto na relação, integrando saúde íntima, hormonal e emocional.',
          },
        ],
      },
    ],
  },

  process: {
    kicker: 'Como funciona',
    title: 'Um caminho claro, do primeiro contato ao acompanhamento',
    intro:
      'Cuidado de verdade começa pela escuta. Conheça as etapas que guiam o seu atendimento, sempre com transparência e tempo para as suas perguntas.',
    steps: [
      {
        title: 'Avaliação individualizada',
        text:
          'Uma conversa atenta sobre a sua história, queixas, rotina e objetivos. É aqui que entendemos o que você sente e o que você espera do cuidado.',
      },
      {
        title: 'Diagnóstico & exames',
        text:
          'Exame clínico e, quando necessário, solicitação de exames complementares para um diagnóstico preciso e seguro.',
      },
      {
        title: 'Plano personalizado',
        text:
          'Construção de um plano de cuidado feito para você, com as opções de tratamento indicadas conforme a necessidade clínica e decididas em conjunto.',
      },
      {
        title: 'Acompanhamento contínuo',
        text:
          'Retornos e ajustes ao longo do tempo, para que o cuidado acompanhe a sua evolução em cada fase.',
      },
    ],
  },

  about: {
    kicker: 'Sobre a Dra. Gabriela',
    title: 'Ciência, sensibilidade e respeito pela mulher',
    paragraphs: [
      'A Dra. Gabriela Alves de Moura Dornelas é médica ginecologista e obstetra, dedicada à saúde íntima, ao equilíbrio hormonal e à autoestima da mulher. Seu trabalho une o rigor da medicina baseada em evidências a uma escuta acolhedora, em que cada paciente é vista por inteiro.',
      'Na Clínica Soul Essence, na Asa Sul (Brasília/DF), reúne ginecologia moderna, reposição hormonal, emagrecimento e cirurgia íntima em um cuidado integrado, pensado para acompanhar a mulher nas diferentes fases da vida — da idade reprodutiva à menopausa. Mais do que uma especialista, ela se propõe a ser a sua médica para todas as fases da sua vida.',
      'No Instagram, compartilha informação de qualidade com milhares de mulheres, levando temas antes cercados de tabu para uma conversa franca, clara e segura. Mais do que tratar sintomas, sua missão é devolver conforto, confiança e bem-estar.',
    ],
    credentials: [
      'CRM/DF 27509',
      'RQE 24605',
      'Ginecologia & Obstetrícia',
      'Saúde íntima & hormonal',
      'Brasília/DF',
    ],
    signature: 'Dra. Gabriela Dornelas',
    ctaLabel: 'Agendar consulta',
  },

  premiumCta: {
    title: 'Você merece se sentir bem por inteiro',
    text:
      'Dê o primeiro passo para um cuidado íntimo e hormonal feito sob medida para você, com acolhimento e segurança médica.',
    ctaLabel: 'Agendar consulta',
  },

  differentials: {
    kicker: 'Por que se cuidar aqui',
    title: 'Um cuidado pensado para a mulher por inteiro',
    intro:
      'Mais do que tratar uma queixa pontual, a proposta é uma relação de cuidado contínua — baseada em ciência, escuta e respeito pelo seu tempo.',
    items: [
      {
        title: 'Escuta sem pressa',
        text: 'Consultas com tempo para entender a sua história, as suas queixas e os seus objetivos antes de qualquer conduta.',
      },
      {
        title: 'Decisões compartilhadas',
        text: 'Informação clara sobre cada opção, para que as escolhas sobre a sua saúde sejam feitas em conjunto.',
      },
      {
        title: 'Discrição e acolhimento',
        text: 'Um espaço seguro e reservado para falar de temas íntimos sem constrangimento ou julgamento.',
      },
      {
        title: 'Ciência e tecnologia atual',
        text: 'Condutas baseadas em evidências e recursos modernos, indicados conforme a sua necessidade clínica.',
      },
      {
        title: 'Cuidado integrado',
        text: 'Ginecologia, hormônios, metabolismo e saúde íntima avaliados em conjunto, em um único plano.',
      },
      {
        title: 'Acompanhamento contínuo',
        text: 'Retornos e ajustes ao longo do tempo, para que o cuidado acompanhe cada fase da sua vida.',
      },
    ],
  },

  clinic: {
    kicker: 'Onde você é atendida',
    title: 'Clínica Soul Essence, na Asa Sul',
    text:
      'O atendimento acontece na Clínica Soul Essence, na Asa Sul (Brasília/DF), em um espaço pensado para o seu conforto e a sua privacidade, onde tecnologia e acolhimento caminham juntos. Aqui, cada detalhe existe para que você se sinta segura para cuidar da sua saúde íntima e hormonal.',
    points: [
      'Atendimento individualizado, com tempo e escuta para cada paciente',
      'Ambiente reservado, que preserva a sua privacidade e o seu conforto',
      'Estrutura preparada para procedimentos ginecológicos e laser íntimo de CO2',
      'Localização na Asa Sul, Brasília/DF, com agendamento facilitado',
    ],
  },

  faq: {
    kicker: 'Dúvidas frequentes',
    title: 'Respostas para o que você quer saber',
    items: [
      {
        q: 'A consulta atende por plano de saúde?',
        a:
          'O atendimento é realizado em modelo particular, com possibilidade de emissão de nota fiscal e recibo para solicitação de reembolso junto ao seu plano, conforme as regras da sua operadora. Em caso de dúvida, entre em contato para confirmar os detalhes antes do agendamento.',
      },
      {
        q: 'Como é a primeira consulta?',
        a:
          'A primeira consulta é dedicada a ouvir a sua história com calma: queixas, rotina, antecedentes e objetivos. Inclui exame clínico quando indicado e, se necessário, a solicitação de exames complementares. A partir daí, construímos juntas um plano de cuidado individualizado.',
      },
      {
        q: 'Sobre menopausa e reposição hormonal, como é decidido o tratamento?',
        a:
          'A terapia de reposição hormonal não é indicada de forma padronizada para todas as mulheres. A decisão é individualizada e considera os seus sintomas, exames e perfil de saúde. Na consulta, avaliamos os benefícios e os cuidados de cada opção para definir, em conjunto, a conduta mais adequada para o seu caso.',
      },
      {
        q: 'Como é a recuperação de uma cirurgia íntima?',
        a:
          'A recuperação varia conforme o procedimento realizado e as características de cada paciente. De modo geral, envolve repouso relativo, cuidados locais e retornos para acompanhamento. Todas as orientações de pré e pós-operatório são detalhadas antes do procedimento, e o acompanhamento é feito de perto.',
      },
      {
        q: 'O acompanhamento de emagrecimento funciona para todo mundo?',
        a:
          'Cada organismo responde de uma forma, e o emagrecimento depende de fatores hormonais, metabólicos e de estilo de vida. Por isso, não trabalhamos com promessas ou fórmulas prontas: o plano é personalizado, com acompanhamento médico voltado a um emagrecimento seguro e sustentável.',
      },
      {
        q: 'O laser íntimo de CO2 é indicado para qualquer queixa?',
        a:
          'O laser íntimo de CO2 é uma tecnologia indicada para situações específicas, como ressecamento, flacidez e desconforto íntimo. A indicação é definida após avaliação individualizada, e o número de sessões e os cuidados necessários são orientados conforme a sua necessidade clínica.',
      },
    ],
  },

  contact: {
    kicker: 'Vamos conversar',
    title: 'Agende a sua consulta',
    text:
      'Dê o primeiro passo para cuidar da sua saúde íntima, hormonal e da sua autoestima. O agendamento é simples e o atendimento, discreto e acolhedor.',
    infos: [
      { label: 'Clínica', value: 'Clínica Soul Essence — Asa Sul' },
      { label: 'Cidade', value: 'Brasília/DF' },
      { label: 'Instagram', value: '@dragabrieladornelass' },
      { label: 'Agendamento', value: 'Atendimento por agendamento prévio' },
    ],
    ctaLabel: 'Agendar consulta',
  },

  footer: {
    tagline: 'Saúde íntima, equilíbrio hormonal e autoestima — por dentro e por fora.',
    legal: '© 2026 Dra. Gabriela Dornelas. Todos os direitos reservados.',
    responsible: 'Responsável técnica: Dra. Gabriela Dornelas — CRM/DF 27509 · RQE 24605',
  },
};
