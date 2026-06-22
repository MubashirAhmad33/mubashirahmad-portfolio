"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { profile, languages } from "@/lib/data";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const initialState: FormState = { name: "", email: "", message: "" };

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(values: FormState): FormErrors {
    const next: FormErrors = {};
    if (values.name.trim().length < 2) {
      next.name = "Please enter your name.";
    }
    if (!isValidEmail(values.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (values.message.trim().length < 10) {
      next.message = "Message should be at least 10 characters.";
    }
    return next;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  function handleChange(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  return (
    <section id="contact" aria-label="Contact" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="04 · Contact"
          title="Have a project in mind? Let's talk."
          description="Send a message and your email client will open with everything pre-filled — straight to my inbox, no middleman."
        />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-6">
            <div className="rounded-2xl border border-surface-line bg-surface p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ash-dim">
                Reach me directly
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a
                    href={`mailto:${profile.email}`}
                    className="flex items-center gap-3 text-ash-bright transition-colors hover:text-signal"
                  >
                    <Mail size={16} className="text-signal" aria-hidden="true" />
                    {profile.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                    className="flex items-center gap-3 text-ash-bright transition-colors hover:text-signal"
                  >
                    <Phone size={16} className="text-signal" aria-hidden="true" />
                    {profile.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-ash-bright">
                  <MapPin size={16} className="text-signal" aria-hidden="true" />
                  {profile.location}
                </li>
                <li>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-ash-bright transition-colors hover:text-signal"
                  >
                    <Linkedin size={16} className="text-signal" aria-hidden="true" />
                    LinkedIn profile
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-surface-line bg-surface p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ash-dim">
                Languages
              </p>
              <ul className="mt-4 space-y-2">
                {languages.map((language) => (
                  <li
                    key={language.name}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-ash-bright">{language.name}</span>
                    <span className="font-mono text-xs text-ash-dim">
                      {language.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            noValidate
            className="rounded-2xl border border-surface-line bg-surface p-6 sm:p-8"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block font-mono text-xs uppercase tracking-[0.1em] text-ash-dim"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={(event) => handleChange("name", event.target.value)}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className="w-full rounded-lg border border-surface-line bg-ink-950 px-4 py-3 text-sm text-ash-bright outline-none transition-colors focus:border-signal"
                />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-xs text-spark" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-mono text-xs uppercase tracking-[0.1em] text-ash-dim"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(event) => handleChange("email", event.target.value)}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className="w-full rounded-lg border border-surface-line bg-ink-950 px-4 py-3 text-sm text-ash-bright outline-none transition-colors focus:border-signal"
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-xs text-spark" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="message"
                className="mb-2 block font-mono text-xs uppercase tracking-[0.1em] text-ash-dim"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={(event) => handleChange("message", event.target.value)}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                className="w-full resize-none rounded-lg border border-surface-line bg-ink-950 px-4 py-3 text-sm text-ash-bright outline-none transition-colors focus:border-signal"
              />
              {errors.message && (
                <p id="message-error" className="mt-1.5 text-xs text-spark" role="alert">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3 text-sm font-semibold text-ink-950 transition-colors hover:bg-signal-dim"
            >
              <Send size={15} aria-hidden="true" />
              Send message
            </button>

            {submitted && (
              <p
                role="status"
                className="mt-4 flex items-center gap-2 text-sm text-signal"
              >
                <CheckCircle2 size={16} aria-hidden="true" />
                Opening your email client with the message ready to send.
              </p>
            )}
          </motion.form>
        </div>
      </Container>
    </section>
  );
}
