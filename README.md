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

## Estrutura

```
src/
  app/                    layout, página e estilos globais
  components/
    instagram-feed.tsx    grade de posts (server component)
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
