import type { StaticImageData } from "next/image";
import hero from "@/assets/images/henrique-hero.jpg";
import essencial from "@/assets/images/henrique-essencial.jpg";
import performance from "@/assets/images/henrique-performance.jpg";
import premium from "@/assets/images/henrique-premium.jpg";

type CardImage = {
  src: StaticImageData;
  alt: string;
  /** Classe object-position: mantém o rosto dentro do recorte do card. */
  position: string;
};

/**
 * Imagens da página. `null` = ainda não temos a foto: o componente mostra o
 * espaço reservado com o gradiente da marca. Para trocar, coloque o arquivo
 * em src/assets/images e importe aqui.
 *
 * Todas as fotos vêm de publicações do Instagram do próprio Henrique. Não usar
 * fotos de alunas sem autorização delas. As imagens geradas no Magnific ficaram
 * pendentes por limite de uso da ferramenta.
 */
export const images: {
  hero: StaticImageData;
  plans: Record<string, CardImage | null>;
  ctaBand: StaticImageData | null;
} = {
  hero,
  plans: {
    essencial: {
      src: essencial,
      alt: "Henrique Almeida sorrindo na academia",
      position: "object-[50%_33%]",
    },
    performance: {
      src: performance,
      alt: "Henrique Almeida fazendo remada com halter",
      position: "object-[50%_30%]",
    },
    premium: {
      src: premium,
      alt: "Henrique Almeida correndo e sorrindo em uma prova de rua",
      position: "object-[50%_8%]",
    },
  },
  ctaBand: null,
};
