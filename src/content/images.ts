import type { StaticImageData } from "next/image";
import hero from "@/assets/images/henrique-hero.jpg";
import treino from "@/assets/images/henrique-treino.jpg";

/**
 * Imagens da página. `null` = ainda não temos a foto: o componente mostra o
 * espaço reservado com o gradiente da marca. Para preencher, coloque o arquivo
 * em src/assets/images e importe aqui.
 *
 * Origem: hero e cards vêm de publicações do Instagram do próprio Henrique.
 * As imagens geradas no Magnific (cards de planos e fundo da faixa de CTA)
 * ficaram pendentes por limite de uso da ferramenta.
 */
export const images: {
  hero: StaticImageData;
  plans: Record<string, StaticImageData | null>;
  ctaBand: StaticImageData | null;
} = {
  hero,
  plans: {
    essencial: null,
    performance: treino,
    premium: null,
  },
  ctaBand: null,
};
