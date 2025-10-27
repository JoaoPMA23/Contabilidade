import type { Metadata } from "next";
import ContactForm from "@/components/contact-form";
import SiteHeader from "@/components/site-header";
import { FiCheckCircle } from "react-icons/fi";

const highlights = [
  "Planejamento tributário sob medida para o seu modelo de negócio.",
  "Constituição completa: contrato social, CNPJ, inscrições estaduais e municipais.",
  "Checklist de documentos guiado com acompanhamento próximo da equipe Spolaor.",
];

const steps = [
  {
    title: "Diagnóstico inicial",
    description:
      "Entendimento do modelo de negócio, projeções e enquadramento societário ideal.",
  },
  {
    title: "Estruturação jurídica",
    description:
      "Definição da natureza jurídica, elaboração do contrato social e protocolos em órgãos competentes.",
  },
  {
    title: "Implantação contábil",
    description:
      "Configuração de sistemas, rotinas fiscais e financeiras para o início das operações.",
  },
  {
    title: "Onboarding assistido",
    description:
      "Orientações práticas para os primeiros 90 dias e acompanhamento próximo do time Spolaor.",
  },
];

export const metadata: Metadata = {
  title: "Abertura de Empresas | Spolaor Contabilidade",
  description:
    "Abra sua empresa com segurança jurídica e planejamento tributário completo. A Spolaor Contabilidade acompanha todas as etapas do processo.",
};

export default function AberturaPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <SiteHeader variant="internal" />
      <main className="flex-1">
        <section className="border-b border-slate-200 bg-[radial-gradient(circle_at_top,#fff5eb,#f8fafc)]">
          <div className="container grid gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-green">
                  Spolaor Contabilidade
                </span>
                <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
                  Abertura de empresas sem complicação
                </h1>
                <p className="max-w-xl text-base text-slate-600">
                  Cuidamos de cada etapa do processo para que você comece a operar com segurança,
                  planejamento tributário e rotinas contábeis bem estruturadas desde o primeiro dia.
                </p>
              </div>
              <ul className="space-y-3 text-sm text-slate-600">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <FiCheckCircle
                      aria-hidden="true"
                      className="mt-1 h-5 w-5 text-brand-orange"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <ContactForm
              defaultSubject="Quero abrir minha empresa"
              subjectPlaceholder="Qual atividade ou regime você deseja?"
              messagePlaceholder="Conte sobre o modelo do seu negócio e quando pretende iniciar."
              submitLabel="Solicitar consultoria"
              context="abertura"
            />
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white py-16">
          <div className="container space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold text-slate-900">Como conduzimos a abertura</h2>
              <p className="mx-auto max-w-2xl text-sm text-slate-600">
                A Spolaor acompanha cada etapa do processo para garantir compliance, enquadramento
                correto e implantação rápida.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {steps.map((step) => (
                <article
                  key={step.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container rounded-3xl bg-brand-wine px-8 py-14 text-white shadow-xl shadow-brand-wine/30 sm:px-16">
            <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
              <div className="space-y-4">
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
                  Por que Spolaor
                </span>
                <h2 className="text-3xl font-bold sm:text-4xl">
                  Foco no crescimento desde o primeiro CNPJ
                </h2>
                <p className="max-w-xl text-sm text-white/80">
                  Auxiliamos na escolha do regime tributário ideal, implantamos rotinas contábeis e
                  financeiras robustas e entregamos dashboards para você entender os números desde o
                  início.
                </p>
              </div>
              <ul className="space-y-3 rounded-2xl bg-white/10 p-6 text-sm text-white/90 shadow-inner shadow-black/20 md:p-8">
                {[
                  "Onboarding guiado e cronograma claro de entregas.",
                  "Times integrados de contabilidade, fiscal, trabalhista e BPO financeiro.",
                  "Canais dedicados para suporte durante todo o processo de abertura.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <FiCheckCircle
                      aria-hidden="true"
                      className="mt-1 h-5 w-5 text-white/80"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
