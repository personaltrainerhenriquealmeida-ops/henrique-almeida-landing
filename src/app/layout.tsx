import type { Metadata } from "next";
import { Anton, Inter, Kaushan_Script } from "next/font/google";
import "./globals.css";

// Fontes provisórias: seguem o layout de referência (títulos condensados e
// frases manuscritas). Trocar aqui se o cliente tiver fontes oficiais.
const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const kaushan = Kaushan_Script({
  variable: "--font-kaushan",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Henrique Almeida | Personal Trainer",
  description:
    "Planos de acompanhamento com o personal trainer Henrique Almeida.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${anton.variable} ${inter.variable} ${kaushan.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
