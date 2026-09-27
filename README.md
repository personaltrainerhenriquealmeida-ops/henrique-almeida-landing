# Henrique Almeida — Landing Page

Landing page do personal trainer Henrique Almeida: planos de assinatura e feed
do Instagram. Planejamento completo em [PLANEJAMENTO.md](PLANEJAMENTO.md).

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS 4, com os tokens da marca em `src/app/globals.css`
- Fontes provisórias: Anton (títulos) e Inter (corpo)

## Rodando

```bash
npm install
cp .env.example .env.local   # preencher INSTAGRAM_ACCESS_TOKEN
npm run dev
```

Sem `INSTAGRAM_ACCESS_TOKEN`, o feed simplesmente não aparece.

## Publicação (GitHub Pages)

O workflow `.github/workflows/pages.yml` gera um export estático
(`GITHUB_PAGES=true`, servido em `/henrique-almeida-landing`) e publica a cada
push em `main` ou `feat/**`, e também de hora em hora para atualizar o feed do
Instagram. O token entra como secret `INSTAGRAM_ACCESS_TOKEN` do repositório.

O workflow só roda quando a variável do repositório `PAGES_ENABLED` for
`true` (evita falhas antes de o Pages existir).

Pré-requisito: Pages precisa estar habilitado (Settings > Pages > Source:
GitHub Actions). Em repositório **privado** isso exige plano pago da conta; no
plano gratuito o repositório precisa ser público. Para deixar `feat/**`
publicar, a regra de branches do ambiente `github-pages` (Settings >
Environments) precisa permitir esse padrão.

## Conteúdo provisório

Trechos marcados com `<Draft />` (etiqueta "Rascunho" na página) são textos de
exemplo. Planos, FAQ, "Sobre" e "Como funciona" dependem do que o Henrique
definir. Remover todos os `<Draft />` antes de lançar. Ainda faltam foto do
Henrique, WhatsApp/checkout, depoimentos e números reais (não inventados).

## Estrutura

```
src/
  app/                    layout, página e estilos globais
  components/             seções da página (header, hero, planos, faq, ...)
    instagram-feed.tsx    grade de posts (server component)
  content/                planos e FAQ (dados editáveis)
  lib/instagram/
    client.ts             GET /me/media, só no servidor, cache de 1h
    types.ts
referencias/              layout escolhido e paleta da marca
```

## Instagram: o que já existe e o que falta

Já existe: leitura dos últimos posts via `graph.instagram.com/me/media`,
normalização (vídeo usa `thumbnail_url`), cache de 1h e falha silenciosa.

Falta (spike):
- Criar o app na Meta, adicionar o Instagram do Henrique como testador e gerar
  o token long-lived.
- **Renovação do token** (vale 60 dias). Precisa de um lugar para guardar o
  token novo (Supabase ou KV) e de um cron.
- **Imagens expiram**: as URLs do Instagram são temporárias. Hoje o
  `next/image` as otimiza e cacheia, mas o ideal é copiar as imagens para
  storage próprio na sincronização.
- Fallback para o último cache bom quando a API falhar.
