﻿# Requisitos do Sistema — Site Institucional + Integração API

## Escopo
- Homepage institucional (Next.js + Tailwind) com seções: Hero, Abertura x Troca, CTA, Serviços, WhatsApp,
  Passos (Abertura/Troca), Mapa, Contato, Rodapé.
- Integração com back-end (CodeIgniter 4) para captação de leads.

## Requisitos Funcionais
1. RF-01 Exibir conteúdo institucional (títulos, textos, CTAs) conforme layout.
2. RF-02 Captar leads via formulário (nome, e-mail, telefone, assunto, mensagem) — POST /api/lead.
3. RF-03 Mensagens de sucesso/erro após envio.
4. RF-04 Botão de WhatsApp fixo + CTA.
5. RF-05 Mapa Google Maps com endereço do escritório.
6. RF-06 Link para Área do Cliente.
7. RF-07 Link Trabalhe Conosco (página ou e-mail).
8. RF-08 SEO básico (title, description, robots.txt).
9. RF-09 Analytics (opcional).
10. RF-10 Acessibilidade básica (rótulos, contraste, ícones com aria-label).

## Requisitos Não Funcionais
1. RNF-01 Performance: alvo ≥ 90 no Lighthouse; LCP < 2.5s (rede 4G).
2. RNF-02 Segurança: HTTPS, CORS restrito, honeypot no formulário; sem dados sensíveis no client.
3. RNF-03 Disponibilidade: site estático/CDN; API apenas para leads.
4. RNF-04 Manutenibilidade: componentização; TypeScript estrito.
5. RNF-05 Compatibilidade: 2 últimas versões de navegadores modernos.
6. RNF-06 Escalabilidade: front desacoplado (Jamstack) e API separada.

## Critérios de Aceite
- CA-01 Formulário válido + API 2xx → mensagem de sucesso.
- CA-02 Falha na API → mensagem de erro sem perder dados digitados.
- CA-03 Navegação por âncoras funcional.
- CA-04 Lighthouse (Perf/Best/Access/SEO) ≥ 90.

## Implantação
- Vercel/Netlify (recomendado) ou servidor com Node 18+.
