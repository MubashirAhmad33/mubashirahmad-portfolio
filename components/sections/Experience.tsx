"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Circle } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import { experience } from "@/lib/data";

export default function Experience() {
  const [activeId, setActiveId] = useState<string>(experience[0]?.id ?? "");
  const activeJob = experience.find((job) => job.id === activeId) ?? experience[0];

  if (!activeJob) return null;

  return (
    <section id="experience" aria-label="Work experience" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="02 · Experience"
          title="Three roles, one throughline: ship it, then make it scale"
          description="From frontend execution to owning full-stack delivery — here's the progression, role by role."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.4fr_0.6fr]">
          <div
            role="tablist"
            aria-label="Work experience timeline"
            aria-orientation="vertical"
            className="flex flex-row gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-1 lg:overflow-visible lg:border-l lg:border-surface-line lg:pb-0"
          >
            {experience.map((job) => {
              const isActive = job.id === activeJob.id;
              return (
                <button
                  key={job.id}
                  id={`tab-${job.id}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${job.id}`}
                  onClick={() => setActiveId(job.id)}
                  className={`relative shrink-0 rounded-xl border-transparent px-4 py-4 text-left transition-colors lg:rounded-none lg:border-l-2 lg:pl-6 ${
                    isActive
                      ? "bg-surface lg:border-l-signal lg:bg-transparent"
                      : "text-ash hover:bg-surface/60 lg:hover:bg-transparent"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {job.current && (
                      <Circle
                        size={7}
                        className="fill-signal text-signal"
                        aria-hidden="true"
                      />
                    )}
                    <span
                      className={`font-display text-sm font-semibold ${
                        isActive ? "text-signal" : "text-ash-bright"
                      }`}
                    >
                      {job.company}
                    </span>
                  </span>
                  <span className="mt-1 block whitespace-nowrap font-mono text-[11px] text-ash-dim">
                    {job.period}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            id={`panel-${activeJob.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeJob.id}`}
            tabIndex={0}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeJob.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="rounded-2xl border border-surface-line bg-surface p-6 sm:p-8"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl font-semibold text-ash-bright">
                    {activeJob.role}
                  </h3>
                  <span className="font-mono text-xs text-ash-dim">
                    {activeJob.period}
                  </span>
                </div>
                <p className="mt-1 text-sm text-spark">{activeJob.company}</p>

                <ul className="mt-6 space-y-3">
                  {activeJob.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 text-sm leading-relaxed text-ash"
                    >
                      <span
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal"
                        aria-hidden="true"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>

                {activeJob.projects.length > 0 && (
                  <div className="mt-7 border-t border-surface-line pt-6">
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ash-dim">
                      Shipped
                    </p>
                    <div className="mt-3 flex flex-wrap gap-3">
                      {activeJob.projects.map((project) => (
                        <a
                          key={project.name}
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full border border-surface-line bg-surface-raised px-4 py-2 text-xs text-ash-bright transition-colors hover:border-signal/50 hover:text-signal"
                        >
                          {project.name}
                          <ArrowUpRight size={13} aria-hidden="true" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            <div className="mt-4 flex flex-wrap gap-2">
              <Badge variant="signal">React.js</Badge>
              {activeJob.id === "exp-alphinex" && <Badge variant="spark">Next.js</Badge>}
              {activeJob.id === "exp-alright" && <Badge variant="spark">MERN Stack</Badge>}
              {activeJob.id === "exp-nausal" && <Badge variant="spark">UI/UX → Code</Badge>}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
