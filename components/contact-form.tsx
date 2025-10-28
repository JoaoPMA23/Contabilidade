"use client";

import { FormEvent, useState } from "react";
import { FiArrowRight } from "react-icons/fi";

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  honeypot: string;
};

type SubmissionStatus = "idle" | "loading" | "success" | "error";

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  honeypot: "",
};

const apiBaseUrl =
  process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") ?? "";
const LEAD_ENDPOINT = `${apiBaseUrl}/api/lead`;

type ContactFormProps = {
  defaultSubject?: string;
  subjectLabel?: string;
  subjectPlaceholder?: string;
  messagePlaceholder?: string;
  submitLabel?: string;
  successMessage?: string;
  errorMessage?: string;
  context?: string;
};

export default function ContactForm({
  defaultSubject = "",
  subjectLabel = "Assunto",
  subjectPlaceholder = "Como podemos ajudar?",
  messagePlaceholder = "Conte um pouco sobre a situação atual da sua empresa.",
  submitLabel = "Enviar mensagem",
  successMessage = "Recebemos sua mensagem! Em breve entraremos em contato.",
  errorMessage = "Não foi possível enviar sua mensagem. Tente novamente em instantes.",
  context,
}: ContactFormProps) {
  const createInitialFormState = () =>
    ({
      ...initialState,
      subject: defaultSubject,
    }) satisfies FormState;

  const [form, setForm] = useState<FormState>(() => createInitialFormState());
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [feedback, setFeedback] = useState<string>("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (form.honeypot.trim()) {
      // Honeypot preenchido sugere bot; aborta silenciosamente.
      return;
    }

    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch(LEAD_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          subject: form.subject,
          message: form.message,
          context,
        }),
      });

      if (!response.ok) {
        throw new Error(`API retornou status ${response.status}`);
      }

      setStatus("success");
      setFeedback(successMessage);
      setForm(createInitialFormState());
    } catch (error) {
      console.error("Falha ao enviar lead:", error);
      setStatus("error");
      setFeedback(errorMessage);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/60"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <TextField
          label="Nome"
          name="name"
          placeholder="Seu nome completo"
          value={form.name}
          onChange={(value) => setForm((prev) => ({ ...prev, name: value }))}
          autoComplete="name"
          required
        />
        <TextField
          label="E-mail"
          name="email"
          placeholder="voce@empresa.com"
          type="email"
          value={form.email}
          onChange={(value) => setForm((prev) => ({ ...prev, email: value }))}
          autoComplete="email"
          required
        />
        <TextField
          label="Telefone"
          name="phone"
          placeholder="(11) 99999-9999"
          value={form.phone}
          onChange={(value) => setForm((prev) => ({ ...prev, phone: value }))}
          autoComplete="tel"
          pattern="^\\+?[0-9 ()-]{8,}$"
          required
        />
        <TextField
          label={subjectLabel}
          name="subject"
          placeholder={subjectPlaceholder}
          value={form.subject}
          onChange={(value) => setForm((prev) => ({ ...prev, subject: value }))}
          required
        />
      </div>
      <div className="relative mt-4">
        <label className="sr-only" htmlFor="company">
          Não preencher
        </label>
        <input
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={form.honeypot}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, honeypot: event.target.value }))
          }
          className="absolute h-0 w-0 opacity-0"
        />
      </div>
      <div className="mt-4">
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          placeholder={messagePlaceholder}
          rows={5}
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-secondary focus:outline-none focus:ring-2 focus:ring-brand-secondary/40"
          value={form.message}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, message: event.target.value }))
          }
          required
        />
      </div>
      {feedback && (
        <p
          className={`mt-4 text-sm ${
            status === "error" ? "text-red-500" : "text-brand-primary"
          }`}
          role="status"
          aria-live="polite"
        >
          {feedback}
        </p>
      )}
      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-secondary px-6 py-3 text-sm font-semibold uppercase tracking-wide text-brand-tertiary shadow-lg shadow-brand-secondary/30 transition hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-secondary disabled:cursor-not-allowed disabled:opacity-60"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Enviando..." : submitLabel}
        <FiArrowRight aria-hidden="true" className="text-base" />
      </button>
    </form>
  );
}

type TextFieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  autoComplete?: string;
  pattern?: string;
  required?: boolean;
};

function TextField({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  autoComplete,
  pattern,
  required,
}: TextFieldProps) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-slate-700"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        type={type}
        autoComplete={autoComplete}
        pattern={pattern}
        required={required}
        className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-secondary focus:outline-none focus:ring-2 focus:ring-brand-secondary/40"
      />
    </div>
  );
}
