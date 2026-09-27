export const site = {
  name: "Henrique Almeida",
  role: "Personal Trainer",
  instagram: {
    handle: "personalhenriquealmeida",
    url: "https://www.instagram.com/personalhenriquealmeida/",
  },
  // Enquanto não houver WhatsApp/checkout definidos, os botões levam ao rodapé.
  plansHref: "#planos",
  contactHref: "#contato",
} as const;

export const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Planos", href: "#planos" },
  { label: "Instagram", href: "#instagram" },
  { label: "Dúvidas", href: "#duvidas" },
] as const;
