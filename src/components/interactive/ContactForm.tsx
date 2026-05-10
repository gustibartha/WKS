"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { submitContactForm, type ContactFormState } from "@/app/kontak/actions";
import { services } from "@/data/services";
import { cn } from "@/lib/cn";

const initialState: ContactFormState = { status: "idle", message: "" };

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);

  if (state.status === "success") {
    return (
      <div className="bg-white border border-emerald-300 p-8 md:p-10 text-center">
        <div className="mx-auto w-14 h-14 rounded-full bg-emerald-100 grid place-items-center">
          <CheckCircle2 className="text-emerald-600" size={28} />
        </div>
        <h3 className="mt-5 font-display text-2xl tracking-wide uppercase">
          Pesan Terkirim
        </h3>
        <p className="mt-3 text-steel leading-relaxed max-w-md mx-auto">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5" noValidate>
      {/* Honeypot — hidden from users, catches bots */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="absolute -left-[9999px]"
      />

      {state.status === "error" && (
        <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 text-red-800 text-sm">
          <AlertCircle size={18} className="shrink-0 mt-0.5" />
          <span>{state.message}</span>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-4">
        <Field
          label="Nama Lengkap"
          name="name"
          type="text"
          placeholder="Nama Anda"
          required
          error={state.errors?.name}
        />
        <Field
          label="Email"
          name="email"
          type="email"
          placeholder="email@perusahaan.com"
          required
          error={state.errors?.email}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field
          label="No. Telepon / WhatsApp"
          name="phone"
          type="tel"
          placeholder="+62 8xx xxxx xxxx"
          required
          error={state.errors?.phone}
        />
        <SelectField
          label="Layanan yang Diminati"
          name="service"
          options={[
            { value: "", label: "Pilih layanan (opsional)" },
            ...services.map((s) => ({ value: s.title, label: s.title })),
            { value: "Lainnya", label: "Lainnya / Konsultasi Umum" },
          ]}
        />
      </div>

      <TextareaField
        label="Pesan / Kebutuhan"
        name="message"
        placeholder="Ceritakan kebutuhan proyek Anda — lokasi, skala, timeline, dll."
        rows={5}
        required
        error={state.errors?.message}
      />

      <SubmitButton />
    </form>
  );
}

function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="block font-mono text-xs tracking-[0.18em] uppercase text-ink mb-2">
      {children}
    </label>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  required,
  error,
}: {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <div>
      <Label htmlFor={name}>
        {label} {required && <span className="text-brand">*</span>}
      </Label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className={cn(
          "w-full bg-offwhite border px-4 py-3 text-base text-ink placeholder:text-steel-soft transition-colors",
          "focus:outline-none focus:border-brand",
          error ? "border-red-400" : "border-hairline"
        )}
      />
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: { value: string; label: string }[];
}) {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <select
        id={name}
        name={name}
        defaultValue=""
        className="w-full bg-offwhite border border-hairline px-4 py-3 text-base text-ink focus:outline-none focus:border-brand transition-colors"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function TextareaField({
  label,
  name,
  placeholder,
  rows = 4,
  required,
  error,
}: {
  label: string;
  name: string;
  placeholder?: string;
  rows?: number;
  required?: boolean;
  error?: string;
}) {
  return (
    <div>
      <Label htmlFor={name}>
        {label} {required && <span className="text-brand">*</span>}
      </Label>
      <textarea
        id={name}
        name={name}
        rows={rows}
        placeholder={placeholder}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className={cn(
          "w-full bg-offwhite border px-4 py-3 text-base text-ink placeholder:text-steel-soft resize-none transition-colors",
          "focus:outline-none focus:border-brand",
          error ? "border-red-400" : "border-hairline"
        )}
      />
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="group w-full inline-flex items-center justify-center gap-3 bg-ink text-offwhite py-4 px-6 font-display tracking-[0.2em] text-base uppercase hover:bg-brand transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {pending ? (
        <>
          <Loader2 size={18} className="animate-spin" />
          Mengirim...
        </>
      ) : (
        <>
          Kirim Pesan
          <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
        </>
      )}
    </button>
  );
}
