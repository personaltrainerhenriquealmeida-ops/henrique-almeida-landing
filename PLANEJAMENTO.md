# Landing Page — Henrique Almeida, Personal Trainer

Planejamento (nenhum desenvolvimento iniciado).

**Objetivo:** landing page de página única que apresenta os **planos de assinatura** dos atendimentos e exibe as **últimas postagens do Instagram** do Henrique.

**Referências (pasta `referencias/`):**
- `referencias/01 - layout.jpeg`: layout escolhido pelo cliente ("Elevate Fitness").
- `referencias/pl 1.jpeg`: paleta de cores da identidade visual (IDV).

> `pl 2.jpeg` e `pl 3.jpeg` são imagens erradas enviadas por engano. Descartadas.

---

## 1. Design system

### Cores (da `pl 1`)

| Token | Valor |
|---|---|
| Laranja da marca | `#E85002` |
| Preto (primário) | `#000000` |
| Cinza escuro | `#333333` |
| Cinza | `#646464` |
| Cinza claro | `#A7A7A7` |
| Branco | `#F9F9F9` |
| Gradiente | `#D9C3AB → #F16001 → #C10801 → #000000` |

- **Gradiente:** a imagem numera as cores como `#000000`, `#C10801`, `#F16001`, `#D9C3AB`, mas visualmente vai de bege (esquerda) a preto (direita). Seguimos o visual. Conferir com o arquivo original da marca, se existir.
- **Contraste:** branco sobre `#E85002` dá ~3,8:1 (só passa em texto grande/negrito). Botões com texto bold grande, ou preto sobre laranja (~5,6:1). Texto corrido em branco/cinza claro sobre preto.

### Tipografia (a definir; a `pl 1` não traz fonte)
- Títulos: condensada, caixa alta, pesada, como o "FEEL STRONG." do layout. Sugestão: **Anton** ou **Bebas Neue**.
- Corpo/UI: **Inter** ou **Manrope**.
- Se o cliente tiver fonte oficial, ela substitui.

### Adaptação do layout
- Sai o fundo creme e o verde do layout de referência. Entra tema escuro (preto e cinzas) com laranja em CTAs e destaques.
- Hero: título gigante, última linha em laranja.
- A seção de 3 cards vira **Planos**, com o card do meio (mais escolhido) destacado em laranja.
- As fotos do layout são de banco de imagens e servem só de referência. O site usa fotos reais do Henrique.

---

## 2. Estrutura da página

| # | Seção | Origem |
|---|---|---|
| 1 | Header (logo, menu âncora, CTA) | layout |
| 2 | Hero (headline, CTA, prova social, foto) | layout |
| 3 | Números / faixa de credibilidade | novo |
| 4 | Sobre o Henrique | novo |
| 5 | Como funciona (3 a 4 passos) | novo |
| 6 | **Planos de assinatura** (preço, benefícios, destaque no "mais escolhido") | adapta os 3 cards |
| 7 | Resultados / depoimentos | novo |
| 8 | **Feed do Instagram** (últimos 6 a 8 posts) | novo |
| 9 | FAQ | novo |
| 10 | CTA final (faixa com foto) | layout |
| 11 | Footer (redes, contato, política de privacidade) | layout |

---

## 3. Instagram API

### Situação atual
- A **Basic Display API foi descontinuada**. O caminho hoje é a **Instagram API with Instagram Login**.
- Exige conta **Profissional** (Business ou Creator). Conta pessoal não serve.
- **Não exige Página do Facebook** vinculada.
- Permissão: `instagram_business_basic`.
- Para uma conta só (a do cliente), o **Standard Access** dispensa App Review, desde que o Henrique seja adicionado ao app como testador. **Validar na prática no spike.**

### Passo a passo
1. **Henrique:** confirmar que o Instagram é Profissional (Configurações > Tipo de conta). Se for pessoal, a troca é gratuita.
2. **Nós:** criar app na Meta for Developers (tipo Business) e adicionar o produto "Instagram > API setup with Instagram login".
3. **Nós:** adicionar o Instagram do Henrique como **Instagram Tester**. Ele aceita o convite no app do Instagram (Configurações > Apps e sites > Convites de testador).
4. Gerar o token de acesso pelo painel do app e trocar por **long-lived (60 dias)**.
5. Consumir:
   `GET https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&limit=8`
6. **Renovar o token** antes de vencer. O refresh só funciona em token com mais de 24h e ainda não expirado, e vale mais 60 dias.

### Armadilhas a tratar
- **Token expira em 60 dias.** Cron de renovação (~a cada 30 dias) e local persistente para guardar o token novo. Sem isso o feed some em silêncio.
- **URLs de imagem do Instagram expiram.** Cachear ou copiar as imagens para storage próprio na sincronização. Não usar `media_url` direto no HTML.
- **Vídeos/Reels:** usar `thumbnail_url`. **Carrossel:** `media_url` é só o primeiro item.
- **Token nunca vai para o navegador.** A chamada é feita no servidor.
- **Fallback:** se a API falhar, exibir o último cache válido.
- **Política de privacidade:** a Meta pode exigir URL para o app. Incluir a página.

---

## 4. Arquitetura sugerida

- **Front:** Next.js ou Astro, Tailwind, fontes via Google Fonts.
- **Feed:** rota de servidor que consulta a API e revalida a cada ~1h (ISR/cache).
- **Token e cache dos posts:** Supabase ou KV da Vercel. Cron diário verifica a idade do token e renova.
- **Hospedagem:** Vercel (cron e ISR).
- **Assinatura:** botão de cada plano leva a um link de pagamento (Mercado Pago, Stripe, Asaas, Kiwify etc.) ou ao WhatsApp. Decisão do cliente.

---

## 5. Fases

1. **Alinhamento:** fechar as perguntas abertas e coletar conteúdo (fotos, textos, planos).
2. **Spike Instagram:** app na Meta, token, `/me/media` funcionando e cron de renovação testado. Maior risco técnico, por isso vem primeiro.
3. **Design tokens e componentes:** cores, tipografia, botões, cards.
4. **Montagem das seções:** desktop e mobile.
5. **Integração:** feed, planos/checkout e analytics (Pixel/GA4).
6. **QA, performance, SEO** e deploy no domínio.

---

## 6. Perguntas em aberto

1. **Planos:** quantos, nomes, preços e benefícios? Recorrência (mensal, trimestral, semestral)? Presencial e online?
2. **Como assina:** pagamento online direto (qual plataforma?) ou botão abre WhatsApp?
3. **Instagram:** ~~qual o @, é Profissional?~~ Respondido: [@personalhenriquealmeida](https://www.instagram.com/personalhenriquealmeida/), conta Profissional. Falta o Henrique aceitar o convite de testador.
4. **Assets:** logo em vetor, fotos profissionais do Henrique, depoimentos e resultados reais.
5. **Tipografia:** existe fonte oficial na marca?
6. **Domínio e hospedagem:** já existe domínio? Quem paga a hospedagem?
7. **Idioma:** só português (BR)?
8. **Captura de e-mail** do footer do layout: manter ou trocar por WhatsApp?

---

## Fontes
- [Instagram API with Instagram Login (Meta)](https://developers.facebook.com/docs/instagram-platform/instagram-api-with-instagram-login)
- [Refresh Access Token (Meta)](https://developers.facebook.com/docs/instagram-platform/reference/refresh_access_token/)
- [Business Login for Instagram (Meta)](https://developers.facebook.com/documentation/instagram-platform/instagram-api-with-instagram-login/business-login)
- [Instagram Official APIs, April 2026](https://gist.github.com/jameschapman2c/65eff9f54a2d350b17a6ce5127b9fe42)
- [Instagram API Changes in 2026](https://divipeople.com/instagram-api-2026/)
