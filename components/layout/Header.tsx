"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${isScrolled ? "bg-ink-950/85 backdrop-blur-md" : "bg-transparent"
        }`}
    >
      <Container>
        <div className="flex h-16 items-center justify-between border-b border-transparent sm:h-20">
          <a
            href="#hero"
            className="font-display text-sm font-semibold tracking-wide text-ash-bright"
          >
            Mubashir<span className="text-signal">.</span>Ahmad
          </a>

          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Primary"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-xs uppercase tracking-[0.15em] text-ash transition-colors hover:text-signal"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button href="#contact" variant="secondary" icon={<ArrowUpRight size={15} />}>
              Let&apos;s talk
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex items-center justify-center rounded-md p-2 text-ash-bright md:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>

      {isOpen && (
        <div
          id="mobile-menu"
          className="border-t border-surface-line bg-ink-950 md:hidden"
        >
          <Container>
            <nav
              className="flex flex-col gap-1 py-4"
              aria-label="Mobile primary"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-md px-2 py-3 text-sm tracking-[0.1em] text-ash transition-colors hover:bg-surface hover:text-signal"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 rounded-md bg-signal px-2 py-3 text-center text-sm font-semibold text-ink-950"
              >
                Let&apos;s talk
              </a>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
