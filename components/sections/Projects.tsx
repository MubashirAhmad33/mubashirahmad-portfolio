"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Building2 } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" aria-label="Featured projects" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="03 · Projects"
          title="Shipped work, not mockups"
          description="A selection of full-stack and frontend builds delivered across three engineering roles."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
              className="group relative flex flex-col rounded-2xl border border-surface-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-signal/40 hover:shadow-glow sm:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-lg font-semibold text-ash-bright">
                    {project.name}
                  </h3>
                  <p className="mt-1 flex items-center gap-1.5 font-mono text-xs text-ash-dim">
                    <Building2 size={12} aria-hidden="true" />
                    {project.role} · {project.company}
                  </p>
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open live demo for ${project.name} in a new tab`}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-surface-line text-ash-bright transition-colors group-hover:border-signal group-hover:text-signal"
                >
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-ash">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <Badge
                    key={tech}
                    variant={techIndex === 0 ? "signal" : "neutral"}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs text-signal opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                View live demo
                <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
