export type Plan = {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  features: string[];
  highlight?: boolean;
};

// RASCUNHO: nomes, valores e benefícios são exemplos até o Henrique definir os planos.
export const plans: Plan[] = [
  {
    id: "essencial",
    name: "Essencial",
    tagline: "Para começar com direção",
    price: "R$ --",
    period: "/mês",
    features: [
      "Treino personalizado",
      "Ajustes mensais",
      "Suporte por mensagem",
    ],
  },
  {
    id: "performance",
    name: "Performance",
    tagline: "O mais escolhido",
    price: "R$ --",
    period: "/mês",
    highlight: true,
    features: [
      "Treino personalizado",
      "Ajustes quinzenais",
      "Acompanhamento semanal",
      "Suporte prioritário",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    tagline: "Acompanhamento de perto",
    price: "R$ --",
    period: "/mês",
    features: [
      "Tudo do Performance",
      "Avaliações periódicas",
      "Orientação de rotina e hábitos",
    ],
  },
];
