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

## Gerar ou renovar o token do Instagram

O token vale ~60 dias. Para gerar (ou gerar de novo antes de vencer):

1. Abra no navegador, logado como o Henrique no Instagram, e clique em **Permitir**:
   `https://www.instagram.com/oauth/authorize?force_reauth=true&client_id=1941016390187674&redirect_uri=https://localhost/&response_type=code&scope=instagram_business_basic`
2. A página seguinte dá erro (esperado). Copie o endereço inteiro da barra
   (`https://localhost/?code=...`). O código vale pouco tempo e só funciona uma vez.
3. Rode `node scripts/instagram-token.mjs` e informe, com digitação oculta, a
   **chave secreta do app do Instagram** (painel da Meta > Casos de uso >
   Configuração da API com login do Instagram > Mostrar) e o endereço copiado.

O script troca o código por um token long-lived e grava em `.env.local`, sem
imprimir nada sensível. O ID do app e a URL de redirecionamento podem ser
trocados com `IG_APP_ID` e `IG_REDIRECT_URI`. A URL `https://localhost/` precisa
estar cadastrada no painel (Configurar o login da empresa no Instagram).

Por que não o botão "Gerar token" do painel: ele abre um pop-up que o navegador
bloqueia com facilidade. Este caminho usa uma página normal.

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
exemplo: hoje, o título e os nomes, valores e benefícios dos planos. Os textos
do hero e da faixa de CTA também são provisórios. Remover todos os `<Draft />`
antes de lançar. Ainda faltam: logo, WhatsApp/checkout e fotos definitivas.

## Imagens

- Hero e o card "Performance" usam fotos do Instagram do próprio Henrique
  (`src/assets/images`). Fotos de reels vêm com texto por cima; por isso só duas
  serviram.
- Os cards "Essencial" e "Premium" e o fundo da faixa de CTA estão como espaço
  reservado (gradiente da marca): as imagens geradas no Magnific foram
  bloqueadas por limite de uso da ferramenta. Para preencher, coloque o arquivo
  em `src/assets/images` e importe em `src/content/images.ts`.
- A prova social do hero (seguidores e foto do perfil) vem da própria API do
  Instagram, não é texto fixo.

## Estrutura

```
src/
  app/                    layout, página e estilos globais
  components/             seções da página (header, hero, planos, faixa de CTA, footer)
    instagram-feed.tsx    grade de posts (server component)
  content/                planos e mapa de imagens (dados editáveis)
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
