import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";

// Fontes provisórias: seguem o layout de referência (títulos condensados).
// Trocar aqui se o cliente tiver uma fonte oficial na marca.
const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
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
      className={`${anton.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
