# Área Administrativa de Leads

Projeto Next.js 14 com App Router que fornece um painel administrativo para gerenciamento de leads, notas e arquivos, com autenticação por credenciais e RBAC simples.

## Principais funcionalidades

- Login com NextAuth (Credentials) e sessões JWT
- Listagem de leads com filtros, paginação e exportação CSV
- Bulk archive/unarchive e resumo por status
- Detalhe do lead com alteração de status, atribuição de responsável, timeline de atividades e upload de arquivos
- Cadastro manual de leads e gestão de usuários (apenas administradores)
- Upload em S3 (ou armazenamento local em desenvolvimento)

## Tecnologias

- Next.js 14 (App Router) + TypeScript + Tailwind CSS
- Prisma ORM (SQLite no desenvolvimento, PostgreSQL em produção)
- NextAuth (Credentials) + bcrypt para hash de senha
- TanStack Table para tabela client-side
- Zod para validações
- @aws-sdk/client-s3 para upload opcional em S3

## Configuração

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Crie o arquivo de variáveis de ambiente:
   ```bash
   cp .env.example .env
   ```
3. Ajuste as variáveis conforme o ambiente (veja tabela abaixo).
4. Gere o cliente Prisma e rode as migrações/seed:
   ```bash
   npx prisma generate
   npx prisma migrate dev
   npx prisma db seed
   ```
5. Inicie o projeto:
   ```bash
   npm run dev
   ```

### Variáveis de ambiente

| Variável | Descrição |
| --- | --- |
| `DATABASE_PROVIDER` | `sqlite` em dev, `postgresql` em produção |
| `DATABASE_URL` | String de conexão (ex.: `file:./dev.db` para SQLite) |
| `NEXTAUTH_SECRET` | Chave usada pelo NextAuth |
| `NEXTAUTH_URL` | URL pública da aplicação |
| `AWS_REGION`, `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `S3_BUCKET`, `S3_ENDPOINT`, `S3_FORCE_PATH_STYLE` | Configurações do S3 (exigidas somente quando `UPLOAD_DRIVER=s3`) |
| `UPLOAD_DRIVER` | `local` (default) ou `s3` |
| `UPLOAD_LOCAL_DIR` | Diretório para armazenar arquivos no modo local (`./storage/uploads`) |
| `SEED_ADMIN_PASSWORD` | Senha utilizada pelo seed para o usuário admin |

### Uploads

- **Local (desenvolvimento)**: arquivos são gravados em `./storage/uploads`. Garante que o diretório exista ou será criado automaticamente.
- **S3**: defina `UPLOAD_DRIVER=s3` e informe as credenciais/endpoint bucket. A rota de download gera stream autenticada.

## Scripts npm

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor Next.js em modo desenvolvimento |
| `npm run build` | Gera build de produção |
| `npm run start` | Roda a build de produção |
| `npm run lint` | Executa ESLint |
| `npm run prisma:generate` | Gera o client Prisma |
| `npm run prisma:migrate` | Executa migrations em produção |
| `npm run prisma:push` | Sincroniza schema sem migrations (uso pontual) |

## Usuários seed

O seed cria:
- Administrador: `admin` / senha definida em `SEED_ADMIN_PASSWORD` (default `Admin@123`).
- Dois agentes (`marina`, `luiz`) com senha `Agent@123`.

Faça login em `/login` e acesse `/admin/leads` para utilizar o painel. Apenas usuários com papel `ADMIN` acessam `/admin/users`.
