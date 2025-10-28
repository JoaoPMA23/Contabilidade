﻿Você é um engenheiro front-end. Gere um projeto **Next.js 14 (App Router) + Tailwind** para uma homepage institucional de contabilidade com as seções abaixo, integrando a um back-end via `POST /api/lead`.

**Seções (ordem):**
1) Header escuro (nav: Abertura, Trocar, Área do cliente, Trabalhe; CTA “Dúvidas”).
2) Hero escuro com H1 “Procurando uma Contabilidade?” e bullets Eficaz/Qualidade/Estratégia (laranja).
3) Blocos: “Abrir minha Empresa” e “Trocar de Contador” (CTAs laranja).
4) CTA vinho “A Contabilidade pode te ajudar”.
5) “Nossos serviços” (preto, ícones laranja) — 6 cards.
6) “Como podemos te ajudar?” WhatsApp (verde) + botão.
7) “Abra sua Empresa agora” — passos 1..4.
8) “Troque de Contabilidade” — passos 1..3.
9) Mapa Google Maps.
10) Contato (form → `/api/lead`).
11) Footer escuro + botão flutuante WhatsApp.

**Requisitos técnicos:**
- TypeScript estrito; Tailwind com tema brand (dark, wine, orange, green).
- App Router; página em `app/page.tsx`.
- Formulário com honeypot + fetch `${NEXT_PUBLIC_API_BASE_URL}/api/lead`.
- SEO básico (`metadata`), `public/robots.txt`.
- Scripts npm: dev, build, start.

**Etapas:**
1. `create-next-app` em TS.
2. Tailwind (postcss, config, globals.css).
3. Tema (cores) + fontes do sistema.
4. Implementar seções.
5. Conectar formulário à API.
6. Ajustar links (Área do Cliente, WhatsApp) e embed do mapa.
7. Validar Lighthouse (≥ 90).
