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
2.
Crie uma Área Administrativa para gestão de leads usando Next.js 14 (App Router) + TypeScript + Tailwind com Prisma ORM e NextAuth (credenciais). O resultado deve ser um projeto executável com páginas em /admin (protegidas), APIs em app/api/**/route.ts, camadas de validação (Zod) e upload de arquivos em S3 (ou em disco no dev).

Stack obrigatória

Next.js 14 (App Router), TypeScript, Tailwind CSS

Prisma ORM (SQLite no dev; Postgres em prod)

NextAuth (provider: Credentials; session JWT)

Zod para validação de entrada (API e server actions)

TanStack Table para tabela com filtros/paginação client

Upload: @aws-sdk/client-s3 (S3) — fallback local em dev

CSV: geração lado-servidor (stream/Response)

RBAC simples: admin, agent

Domínio e entidades

Implemente o seguinte modelo de dados (Prisma):

model User {
  id            String   @id @default(cuid())
  name          String
  email         String   @unique
  username      String   @unique
  passwordHash  String
  role          Role     @default(AGENT)
  leadsOwned    Lead[]   @relation("LeadOwner")
  notes         LeadNote[]
  files         LeadFile[]
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
}

enum Role { ADMIN AGENT }

model Lead {
  id            String     @id @default(cuid())
  companyName   String?
  cnpj          String?
  contactName   String
  email         String
  phone         String?
  subject       String?
  message       String?
  source        String?    // ex: "site"
  utm           String?
  status        LeadStatus @default(LEAD)
  ownerId       String?
  owner         User?      @relation("LeadOwner", fields: [ownerId], references: [id])
  notes         LeadNote[]
  files         LeadFile[]
  archivedAt    DateTime?
  createdAt     DateTime   @default(now())
  updatedAt     DateTime   @updatedAt
}

enum LeadStatus { LEAD PROPOSTA CONTRATO CLIENTE ARQUIVADO }

model LeadNote {
  id           String     @id @default(cuid())
  leadId       String
  lead         Lead       @relation(fields: [leadId], references: [id])
  userId       String
  user         User       @relation(fields: [userId], references: [id])
  type         NoteType   @default(NOTE)
  content      String
  nextActionAt DateTime?
  createdAt    DateTime   @default(now())
}

enum NoteType { NOTE CALL EMAIL WHATSAPP MEETING }

model LeadFile {
  id           String   @id @default(cuid())
  leadId       String
  lead         Lead     @relation(fields: [leadId], references: [id])
  userId       String
  user         User     @relation(fields: [userId], references: [id])
  key          String   // S3 key ou caminho local
  originalName String
  mime         String
  size         Int
  createdAt    DateTime @default(now())
}

Funcionalidades (escopo fechado)
Autenticação e autorização

Login em /login (Credentials: username + password), com password hash (bcrypt) e session.regenerate equivalente (JWT via NextAuth).

Middleware protegendo /admin/** (somente logado).

RBAC: admin vê tudo; agent vê leads que são owner + pode listar leads, mas não gerenciar usuários.

Leads

Listagem /admin/leads

Filtros: status, owner, período (createdAt), busca (companyName, contactName, email, cnpj, phone).

Paginação server-side (cursor/skip-take) + contadores por status.

Bulk actions: Arquivar / Desarquivar (checkbox na tabela).

Exportar CSV (respeitando filtros atuais).

Detalhe /admin/leads/[id]

Card com dados principais; troca de status (select) e atribuir responsável (select user).

Timeline de notas/atividades (create via form: tipo + content + nextActionAt).

Arquivos: upload (valida MIME/size), listagem e download autenticado.

Botões Arquivar/Desarquivar.

CRUD auxiliar

Criar lead manualmente /admin/leads/new (validação).

Usuários (somente admin): /admin/users (lista + criar básico).

API (route handlers)

GET /api/leads — lista com filtros/paginação; apenas autenticado.

POST /api/leads — cria lead.

GET /api/leads/[id] — detalhe.

PUT /api/leads/[id] — atualiza campos do lead.

POST /api/leads/[id]/status — troca status (LEAD/PROPOSTA/CONTRATO/CLIENTE/ARQUIVADO).

POST /api/leads/[id]/assign — atribui ownerId.

POST /api/leads/bulk-archive — ids[] → arquiva.

POST /api/leads/bulk-unarchive — ids[] → desarquiva.

GET /api/leads/export — CSV (stream) respeitando filtros da querystring.

POST /api/leads/[id]/notes — cria nota/atividade.

POST /api/leads/[id]/files — upload; salva metadados; retorna URL assinada p/ download.

GET /api/leads/[id]/files/[fileId] — download autenticado (gera stream da S3 ou do disco dev).

GET /api/health — ping.

Todos os handlers validam entrada com Zod, exigem sessão NextAuth e registram o userId em notas/arquivos.

UI/UX (Tailwind)

Layout Admin (sidebar/topbar) em app/(admin)/admin/layout.tsx.

Tabela (TanStack Table) com checkbox por linha, filtros no topo e badges por status:

LEAD cinza, PROPOSTA azul, CONTRATO roxo, CLIENTE verde, ARQUIVADO vermelho.

Formulários com mensagens inline; feedback de sucesso/erro (toasts).

Acessibilidade: aria-label em ícones; foco visível; contrastes ok.

Estrutura de pastas (esperada)
app/
  (public) login/page.tsx
  (admin) admin/layout.tsx
  (admin) admin/leads/page.tsx
  (admin) admin/leads/new/page.tsx
  (admin) admin/leads/[id]/page.tsx
  api/
    leads/route.ts
    leads/export/route.ts
    leads/bulk-archive/route.ts
    leads/bulk-unarchive/route.ts
    leads/[id]/route.ts
    leads/[id]/status/route.ts
    leads/[id]/assign/route.ts
    leads/[id]/notes/route.ts
    leads/[id]/files/route.ts
    leads/[id]/files/[fileId]/route.ts
    health/route.ts
components/
  admin/
    LeadsTable.tsx
    LeadFilters.tsx
    StatusBadge.tsx
    LeadForm.tsx
    LeadNotes.tsx
    LeadFiles.tsx
  ui/ (botões, inputs, modal, toast)
lib/
  auth.ts        // NextAuth config
  prisma.ts      // Prisma client singleton
  s3.ts          // S3 client e helpers
  csv.ts         // helpers de CSV
  zod-schemas.ts // schemas Zod compartilhados
middleware.ts    // proteção /admin/**
prisma/
  schema.prisma

Segurança

NextAuth Credentials; hash com bcrypt.

Proteção de /admin/** no middleware.ts checando auth().

Uploads: validar MIME real e tamanho (≤ 10 MB). Extensões: pdf, png, jpg/jpeg.

Download: somente usuário autenticado com acesso ao lead.

Env: DATABASE_URL, NEXTAUTH_SECRET, AWS_*, S3_BUCKET, etc.

Logs: salvar userId que criou nota/arquivo.

Requisitos Não Funcionais

Lighthouse (Perf/Best/Access/SEO) ≥ 90 no admin (exceto SEO).

SSR onde fizer sentido; rota de listagem pode usar server components + client table.

Código tipado (TS strict), validação com Zod, ESLint.

Aceite

Login/logout funcionando; RBAC respeitado.

Listagem com filtros+paginação; contadores por status.

Bulk archive/unarchive OK.

Detalhe do lead com troca de status, atribuição de responsável, timeline e upload/download.

Exportar CSV respeitando filtros da listagem.

Etapas (geração)

Setup Next.js + Tailwind + Prisma + NextAuth + Zod.

Prisma: schema.prisma (modelos acima) + migrations + seed: usuário admin (admin / Admin@123) e 10 leads fake.

Auth: lib/auth.ts, middleware.ts protegendo /admin/**.

API: rotas em app/api/**/route.ts com Zod + Prisma + sessões NextAuth.

UI: layout admin, tabela de leads (TanStack), filtros, badges e ações em massa.

Páginas: /admin/leads, /admin/leads/new, /admin/leads/[id].

Uploads: lib/s3.ts + rotas de upload/download; fallback local no dev.

CSV: rota GET /api/leads/export gerando stream conforme filtros.

Ajustes: toasts, validações e testes de fluxo.

Extras (opcional)

Rate limit (Upstash) nas rotas de upload/notes.

Webhook para ingestão de leads do site público (separado).

Tags e filtros salvos na URL (query params).

Entregue o código completo, com arquivos prontos, imports corretos, e um README com:

setup (cp .env.example .env, npx prisma migrate dev, npx prisma db seed, npm run dev)

variáveis .env e instruções de S3/local.