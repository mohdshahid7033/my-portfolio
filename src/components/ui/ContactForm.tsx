import { AlertCircle, CheckCircle2, Copy, Mail, Send } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";
import { profile } from "../../data/content";

const fieldClass =
  "w-full rounded-xl border border-zinc-800 bg-zinc-950/80 px-4 py-3 text-sm text-white placeholder:text-zinc-600 transition focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400/40";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  function validate() {
    const errs: { [key: string]: string } = {};

    if (!name.trim() || name.trim().length < 2) {
      errs.name = "Please enter your name (at least 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      errs.email = "Please enter a valid email address.";
    }

    if (!subject.trim() || subject.trim().length < 3) {
      errs.subject = "Please enter a subject (at least 3 characters).";
    }

    if (!message.trim() || message.trim().length < 10) {
      errs.message = "Please enter a message (at least 10 characters).";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    // Compose the mailto URL with the validated user inputs
    const mailtoSubject = encodeURIComponent(`[Portfolio Contact] ${subject.trim()}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`,
    );

    // Open user's default email client
    window.location.href = `mailto:${profile.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
  }

  function handleCopyEmail() {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8"
    >
      <div className="mb-6">
        <h3 className="text-lg font-bold text-white">Send a Direct Message</h3>
        <p className="text-xs text-zinc-400 mt-1">
          Fill in the details below. Submitting will format and dispatch your message directly to{" "}
          <strong className="text-emerald-400">{profile.email}</strong> via your email client.
        </p>
      </div>

      <div className="space-y-4">
        {/* Name & Email */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="contact-name"
              className="mb-1.5 block text-xs font-medium text-zinc-300"
            >
              Your Name <span className="text-emerald-400">*</span>
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="e.g. Alex Morgan"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
              }}
              className={`${fieldClass} ${
                errors.name ? "border-red-500/80 focus:border-red-500" : ""
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                <AlertCircle size={12} /> {errors.name}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="mb-1.5 block text-xs font-medium text-zinc-300"
            >
              Your Email <span className="text-emerald-400">*</span>
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="e.g. alex@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
              }}
              className={`${fieldClass} ${
                errors.email ? "border-red-500/80 focus:border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                <AlertCircle size={12} /> {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Subject */}
        <div>
          <label
            htmlFor="contact-subject"
            className="mb-1.5 block text-xs font-medium text-zinc-300"
          >
            Subject <span className="text-emerald-400">*</span>
          </label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            placeholder="e.g. Cloud/DevOps Internship Opportunity"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
              if (errors.subject) setErrors((prev) => ({ ...prev, subject: "" }));
            }}
            className={`${fieldClass} ${
              errors.subject ? "border-red-500/80 focus:border-red-500" : ""
            }`}
          />
          {errors.subject && (
            <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
              <AlertCircle size={12} /> {errors.subject}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="contact-message"
            className="mb-1.5 block text-xs font-medium text-zinc-300"
          >
            Message <span className="text-emerald-400">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            placeholder="Write your message here..."
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              if (errors.message) setErrors((prev) => ({ ...prev, message: "" }));
            }}
            className={`${fieldClass} ${
              errors.message ? "border-red-500/80 focus:border-red-500" : ""
            }`}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
              <AlertCircle size={12} /> {errors.message}
            </p>
          )}
        </div>

        {/* Action Button & Status */}
        <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-7 py-3 text-xs font-bold text-black transition hover:bg-emerald-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 shadow-md shadow-emerald-500/20"
          >
            <span>Compose Email</span>
            <Send size={14} aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-emerald-400 transition"
          >
            <Copy size={13} />
            <span>{copied ? "Email Copied!" : "Copy Email Address"}</span>
          </button>
        </div>

        {/* Honest feedback notice */}
        {submitted && (
          <div
            role="status"
            className="mt-4 rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4 text-xs leading-relaxed text-emerald-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
          >
            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
              <span>
                Your message has been formatted. If your email application did not launch automatically,
                you can send directly to <strong>{profile.email}</strong>.
              </span>
            </div>
            <a
              href={`mailto:${profile.email}?subject=${encodeURIComponent(
                `[Portfolio Contact] ${subject.trim()}`,
              )}&body=${encodeURIComponent(
                `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`,
              )}`}
              className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-400 px-3 py-1.5 text-xs font-semibold text-black hover:bg-emerald-300 transition shrink-0"
            >
              <Mail size={13} />
              <span>Open in Email App</span>
            </a>
          </div>
        )}
      </div>
    </form>
  );
}
