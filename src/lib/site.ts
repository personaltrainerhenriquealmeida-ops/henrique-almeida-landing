export const site = {
  name: "Henrique Almeida",
  role: "Personal Trainer",
  instagram: {
    handle: "personalhenriquealmeida",
    url: "https://www.instagram.com/personalhenriquealmeida/",
    // Abre a conversa direta com o Henrique no Instagram.
    dmUrl: "https://ig.me/m/personalhenriquealmeida",
  },
  // Enquanto não houver WhatsApp/checkout definidos, os botões levam ao rodapé.
  plansHref: "#planos",
  contactHref: "#contato",
} as const;

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Planos", href: "#planos" },
  { label: "Instagram", href: "#instagram" },
  { label: "Contato", href: "#contato" },
] as const;
