import Link from "next/link";
import type { IconType } from "react-icons";
import {
  FiArrowRight,
  FiBarChart2,
  FiBriefcase,
  FiCheckCircle,
  FiCompass,
  FiShield,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

import ContactForm from "@/components/contact-form";
import SiteHeader from "@/components/site-header";

const heroHighlights = [
  {
    title: "Eficaz",
    description:
      "Onboarding digital com acompanhamento diário para não perder prazos.",
  },
  {
    title: "Qualidade",
    description:
      "Equipe sênior dedicada às rotinas contábil, fiscal e trabalhista.",
  },
  {
    title: "Estratégia",
    description:
      "Indicadores que entregam clareza para as decisões e crescimento sustentável.",
  },
];

const actionCards = [
  {
    title: "Abrir minha Empresa",
    description:
      "Planejamento tributário, contrato social e CNPJ liberado com segurança e rapidez.",
    href: "#abertura",
    cta: "Quero abrir agora",
  },
  {
    title: "Trocar de Contador",
    description:
      "Migração assistida, checklist completo e relacionamento próximo desde o primeiro dia.",
    href: "#trocar",
    cta: "Quero migrar",
  },
];

type ServiceItem = {
  title: string;
  description: string;
  icon: IconType;
};

const services: ServiceItem[] = [
  {
    title: "Planejamento Tributário",
    description:
      "Revisamos cenários e indicamos o regime ideal para reduzir impostos com segurança.",
    icon: FiTrendingUp,
  },
  {
    title: "BPO Financeiro",
    description:
      "Gestão ponta a ponta de contas a pagar, receber, conciliações e fluxo de caixa.",
    icon: FiBarChart2,
  },
  {
    title: "Folha & Benefícios",
    description:
      "Processos trabalhistas completos com indicadores que fortalecem a cultura.",
    icon: FiUsers,
  },
  {
    title: "Controladoria",
    description:
      "Dashboards, DRE gerencial e análise por centro de custo para orientar decisões.",
    icon: FiCompass,
  },
  {
    title: "Regularização Fiscal",
    description:
      "Tratativa de notificações, parcelamentos e emissão de certidões negativas.",
    icon: FiShield,
  },
  {
    title: "Consultoria Estratégica",
    description:
      "Sprints mensais com recomendações para crescimento, compliance e governança.",
    icon: FiBriefcase,
  },
];

const abrirSteps = [
  "Reunião de entendimento do modelo de negócios e definição do CNAE ideal.",
  "Planejamento tributário, enquadramento e desenho do contrato social.",
  "Envio da documentação, protocolos e acompanhamento dos órgãos competentes.",
  "Entrega da empresa ativa com kit de boas-vindas e playbook dos 90 primeiros dias.",
];

const trocarSteps = [
  "Checklist completo e contato com o contador atual para garantir continuidade.",
  "Auditoria das obrigações abertas com plano de regularização assistido.",
  "Onboarding financeiro com implantação dos fluxos digitais de atendimento.",
];

const rawWhatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ??
  process.env.NEXT_PUBLIC_PHONE_DISPLAY ??
  "(11) 99999-9999";
const whatsappDigits = rawWhatsappNumber.replace(/\D/g, "") || "5511999999999";
const whatsappUrl = `https://wa.me/${whatsappDigits}`;
const whatsappDisplay =
  process.env.NEXT_PUBLIC_WHATSAPP_DISPLAY ?? "(11) 99999-9999";

const clientAreaUrl =
  process.env.NEXT_PUBLIC_CLIENT_AREA_URL ??
  "https://clientes.spolaorcontabilidade.com.br";

const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contato@spolaorcontabilidade.com.br";
const talentEmail =
  process.env.NEXT_PUBLIC_TALENT_EMAIL ?? "talentos@spolaorcontabilidade.com.br";
const phoneDisplay =
  process.env.NEXT_PUBLIC_PHONE_DISPLAY ?? "(11) 99999-9999";
const address =
  process.env.NEXT_PUBLIC_ADDRESS ??
  "Av. Paulista, 1000 - Bela Vista, São Paulo - SP";

const mapEmbedUrl =
  process.env.NEXT_PUBLIC_MAPS_EMBED_URL ??
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.9442406064587!2d-46.65213752372061!3d-23.5701507787969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8a1d3bff7%3A0x7b8d0a58f3f5c33e!2sAvenida%20Paulista%2C%201000!5e0!3m2!1spt-BR!2sbr!4v1719000000000!5m2!1spt-BR!2sbr";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-brand-tertiary text-slate-900">
      <SiteHeader variant="home" />
      <main className="flex flex-1 flex-col">
        <Hero />
        <ActionBlocks />
        <PrimaryCta />
        <Services />
        <SupportSection />
        <AberturaSteps />
        <TrocaSteps />
        <Mapa />
        <Contato />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function Hero() {
  return (
    <section
      id="hero"
      className="bg-gradient-to-br from-brand-primary via-[#013863] to-brand-primary text-white"
    >
      <div className="container grid gap-12 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-secondary">
              Contabilidade estratégica
            </span>
            <h1 className="text-balance text-4xl font-bold leading-tight sm:text-5xl">
              Procurando uma Contabilidade?
            </h1>
          </div>
          <p className="max-w-xl text-lg text-white/90">
            Estar ao lado de quem empreende é assumir o compromisso com números,
            compliance e decisões rápidas. Combinamos tecnologia e especialistas
            para levar previsibilidade à rotina da sua empresa.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {heroHighlights.map((highlight) => (
              <div
                key={highlight.title}
                className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm"
              >
                <div className="flex items-center gap-2">
                  <FiCheckCircle aria-hidden="true" className="text-brand-secondary" />
                  <span className="text-sm font-semibold uppercase tracking-wide text-white">
                    {highlight.title}
                  </span>
                </div>
                <p className="mt-3 text-sm text-white/90">{highlight.description}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full bg-brand-secondary px-6 py-3 text-sm font-semibold uppercase tracking-wide text-brand-primary shadow-lg shadow-brand-secondary/40 transition hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-secondary"
            >
              Falar com especialista
              <FiArrowRight aria-hidden="true" />
            </Link>
            <a
              href={clientAreaUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Acessar área do cliente
              <FiArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-brand-secondary/30 blur-3xl opacity-40" />
          <div className="relative rounded-3xl border border-white/20 bg-white p-8 text-brand-primary shadow-2xl shadow-brand-primary/30">
            <h2 className="text-xl font-semibold text-brand-primary">
              Resultados que transformam
            </h2>
            <p className="mt-4 text-sm text-brand-primary/80">
              Reduza a carga operacional, garanta compliance e tome decisões com dados confiáveis.
              A Spolaor Contabilidade cuida dos bastidores para que você foque em crescer.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-brand-primary">
              <li className="flex items-start gap-2">
                <FiCheckCircle className="mt-1 text-brand-secondary" aria-hidden="true" />
                SLA de resposta em até 2h úteis pelos canais digitais.
              </li>
              <li className="flex items-start gap-2">
                <FiCheckCircle className="mt-1 text-brand-secondary" aria-hidden="true" />
                Time multidisciplinar em tributos, folha, BPO financeiro e controladoria.
              </li>
              <li className="flex items-start gap-2">
                <FiCheckCircle className="mt-1 text-brand-secondary" aria-hidden="true" />
                Painéis em tempo real com indicadores para lideranças e sócios.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ActionBlocks() {
  return (
    <section className="bg-white py-20">
      <div className="container grid gap-6 lg:grid-cols-2">
        {actionCards.map((card) => (
          <div
            key={card.title}
            className="flex flex-col justify-between rounded-3xl border border-brand-primary/10 bg-white p-10 shadow-lg shadow-brand-primary/5"
          >
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-900">{card.title}</h2>
              <p className="text-sm text-slate-600">{card.description}</p>
            </div>
            <Link
              href={card.href}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-brand-secondary px-6 py-3 text-sm font-semibold uppercase tracking-wide text-brand-primary shadow-brand-secondary/30 transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-secondary"
            >
              {card.cta}
              <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

function PrimaryCta() {
  return (
    <section className="bg-brand-secondary py-16 text-brand-primary">
      <div className="container flex flex-col items-center gap-6 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-primary/70">
          Consultoria dedicada
        </span>
        <h2 className="text-3xl font-semibold sm:text-4xl text-brand-primary">
          A Contabilidade pode te ajudar
        </h2>
        <p className="max-w-2xl text-sm text-brand-primary/80">
          Conectamos tecnologia, especialistas e indicadores para antecipar riscos, organizar dados
          e revelar oportunidades. Vamos construir juntos uma operação financeira escalável.
        </p>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="bg-white py-24 text-brand-primary">
      <div className="container space-y-12">
        <div className="space-y-3 text-center text-brand-primary">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-primary/70">
            Expertise completa
          </span>
          <h2 className="text-3xl font-bold">Nossos serviços</h2>
          <p className="mx-auto max-w-2xl text-sm text-brand-primary/80">
            Uma frente consultiva que integra finanças, contabilidade, pessoas e governança
            para apoiar empresas em expansão.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-brand-primary/10 bg-slate-50 p-8 shadow-lg shadow-brand-primary/5 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <service.icon aria-hidden="true" className="h-8 w-8 text-brand-secondary" />
              <h3 className="mt-6 text-xl font-semibold text-brand-primary">{service.title}</h3>
              <p className="mt-3 text-sm text-brand-primary/80">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SupportSection() {
  return (
    <section id="area-cliente" className="bg-white py-20">
      <div className="container grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-5">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-primary">
            Atendimento humano
          </span>
          <h2 className="text-3xl font-bold text-brand-primary">
            Como podemos te ajudar?
          </h2>
          <p className="max-w-xl text-sm text-slate-600">
            Fale com nossa equipe pelo WhatsApp {whatsappDisplay} ou acesse o portal para acompanhar
            indicadores, tributos e documentos em tempo real.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-[#25D366]/30 transition hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
            >
              Chamar no WhatsApp
              <FaWhatsapp aria-hidden="true" />
            </a>
            <a
              href={clientAreaUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-brand-primary px-6 py-3 text-sm font-semibold uppercase tracking-wide text-brand-primary transition hover:-translate-y-0.5 hover:bg-brand-primary hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
            >
              Área do Cliente
              <FiArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="rounded-3xl border border-brand-primary/10 bg-slate-50 p-8 shadow-lg shadow-brand-primary/10">
          <div className="space-y-4 text-sm text-slate-600">
            <p>
              <strong className="text-slate-900">SLA de retorno:</strong> 2 horas úteis no WhatsApp,
              1 dia útil em chamados.
            </p>
            <p>
              <strong className="text-slate-900">Plantão de obrigações:</strong> monitoramento fiscal
              contínuo com alertas proativos.
            </p>
            <p>
              <strong className="text-slate-900">Portal 24/7:</strong> relatórios, recibos e obrigações
              sempre atualizados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AberturaSteps() {
  return (
    <section id="abertura" className="bg-slate-100 py-20">
      <div className="container space-y-12">
        <header className="max-w-2xl space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-secondary">
            Abrir empresa
          </span>
          <h2 className="text-3xl font-bold text-brand-primary">
            Abra sua Empresa agora
          </h2>
          <p className="text-sm text-slate-600">
            Um processo guiado de ponta a ponta, com especialistas cuidando da documentação,
            planejamentos e prazos legais.
          </p>
        </header>
        <StepList steps={abrirSteps} />
      </div>
    </section>
  );
}

function TrocaSteps() {
  return (
    <section id="trocar" className="bg-white py-20">
      <div className="container space-y-12">
        <header className="max-w-2xl space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-secondary">
            Trocar de contador
          </span>
          <h2 className="text-3xl font-bold text-brand-primary">
            Troque de Contabilidade
          </h2>
          <p className="text-sm text-slate-600">
            Assumimos a comunicação com o contador atual, organizamos pendências e garantimos
            uma transição sem ruídos para a sua operação.
          </p>
        </header>
        <StepList steps={trocarSteps} />
      </div>
    </section>
  );
}

type StepListProps = {
  steps: string[];
};

function StepList({ steps }: StepListProps) {
  return (
    <ol className="grid gap-6 md:grid-cols-2">
      {steps.map((step, index) => (
        <li
          key={step}
          className="rounded-3xl border border-brand-primary/10 bg-white p-8 shadow-lg shadow-brand-primary/5"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-secondary text-sm font-semibold text-brand-primary">
            {index + 1}
          </span>
          <p className="mt-4 text-sm text-slate-600">{step}</p>
        </li>
      ))}
    </ol>
  );
}

function Mapa() {
  return (
    <section id="mapa" className="bg-slate-100 py-20">
      <div className="container space-y-6">
        <div className="space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-secondary">
            Onde estamos
          </span>
          <h2 className="text-3xl font-bold text-brand-primary">Mapa</h2>
          <p className="text-sm text-slate-600">
            Atendemos empresas em todo o Brasil com base em São Paulo e operação 100% digital.
          </p>
        </div>
        <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-lg shadow-slate-200/50">
          <iframe
            title="Localização Spolaor Contabilidade"
            src={mapEmbedUrl}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[360px] w-full border-0"
          />
        </div>
      </div>
    </section>
  );
}

function Contato() {
  return (
    <section id="contato" className="bg-white py-24">
      <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-secondary">
              Contato
            </span>
            <h2 className="text-3xl font-bold text-brand-primary">
              Fale com a nossa equipe
            </h2>
            <p className="text-sm text-slate-600">
              Responderemos em até 1 dia útil. Se preferir, chame no WhatsApp {whatsappDisplay}.
            </p>
          </div>
          <div className="space-y-4 text-sm text-slate-600">
            <p>
              <strong className="text-slate-900">E-mail:</strong>{" "}
              <a
                href={`mailto:${contactEmail}`}
                className="text-slate-900 underline decoration-brand-secondary/60 underline-offset-4 transition hover:text-brand-secondary"
              >
                {contactEmail}
              </a>
            </p>
            <p>
              <strong className="text-slate-900">Telefone:</strong> {phoneDisplay}
            </p>
            <p>
              <strong className="text-slate-900">Endereço:</strong> {address}
            </p>
          </div>
          <div
            id="trabalhe"
            className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-slate-900">
              Trabalhe com a gente
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              Estamos sempre em busca de talentos que amam números e pessoas. Envie seu CV e
              conte como podemos somar.
            </p>
            <a
              href={`mailto:${talentEmail}`}
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-primary transition hover:text-brand-secondary"
            >
              Envie seu currículo
              <FiArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
        <ContactForm context="homepage" />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-primary py-10 text-white">
      <div className="container flex flex-col gap-6 text-sm lg:flex-row lg:items-center lg:justify-between">
        <p>
          Â© {new Date().getFullYear()} Spolaor Contabilidade. Todos os direitos reservados.
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <Link href="#abertura" className="transition hover:text-brand-secondary">
            Abertura
          </Link>
          <Link href="#trocar" className="transition hover:text-brand-secondary">
            Trocar
          </Link>
          <Link href="#area-cliente" className="transition hover:text-brand-secondary">
            Área do cliente
          </Link>
          <Link href="#trabalhe" className="transition hover:text-brand-secondary">
            Trabalhe
          </Link>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/50 transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
      aria-label="Falar com a contabilidade pelo WhatsApp"
    >
      <FaWhatsapp className="h-6 w-6" aria-hidden="true" />
    </a>
  );
}
