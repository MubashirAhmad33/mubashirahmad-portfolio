import { Linkedin, Mail, Phone, ArrowUp } from "lucide-react";
import Container from "@/components/ui/Container";
import { profile } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-line bg-ink-950">
      <Container className="flex flex-col gap-8 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-sm">
          <a
            href="#hero"
            className="font-display text-base font-semibold text-ash-bright"
          >
            Mubashir<span className="text-signal">.</span>Ahmad
          </a>
          <p className="mt-3 text-sm leading-relaxed text-ash">
            Full Stack Developer building scalable, high-performance web
            applications with React.js, Next.js, and the MERN stack.
          </p>
        </div>

        <div className="flex gap-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ash-dim">
              Contact
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-2 text-ash transition-colors hover:text-signal"
                >
                  <Mail size={14} aria-hidden="true" />
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-2 text-ash transition-colors hover:text-signal"
                >
                  <Phone size={14} aria-hidden="true" />
                  {profile.phone}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ash-dim">
              Elsewhere
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-ash transition-colors hover:text-signal"
                >
                  <Linkedin size={14} aria-hidden="true" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <Container className="flex flex-col items-center justify-between gap-4 border-t border-surface-line py-6 sm:flex-row">
        <p className="font-mono text-xs text-ash-dim">
          © {year} {profile.name}. Built with Next.js &amp; Tailwind CSS.
        </p>
        <a
          href="#hero"
          className="flex items-center gap-1.5 font-mono text-xs text-ash transition-colors hover:text-signal"
        >
          Back to top <ArrowUp size={13} aria-hidden="true" />
        </a>
      </Container>
    </footer>
  );
}
