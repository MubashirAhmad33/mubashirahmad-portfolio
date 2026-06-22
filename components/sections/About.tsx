"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import TechStackGrid from "@/components/ui/TechStackGrid";
import { profile, education, coreValues } from "@/lib/data";

export default function About() {
  return (
    <section id="about" aria-label="About me" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="01 · About"
          title="Background, values, and the stack I build with"
          description="A short version of how I got here, what I optimize for, and the layers I work across day to day."
        />

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-start gap-5"
            >
              <Image
                src="/avatar.svg"
                alt="Geometric monogram representing Mubashir Ahmad"
                width={88}
                height={88}
                className="rounded-2xl border border-surface-line"
              />
              <p className="text-sm leading-relaxed text-ash">
                {profile.summary}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl border border-surface-line bg-surface p-6"
            >
              <div className="flex items-center gap-2 text-ash-bright">
                <GraduationCap size={18} className="text-spark" aria-hidden="true" />
                <h3 className="font-display text-sm font-semibold">
                  Education
                </h3>
              </div>
              <ul className="mt-4 space-y-4">
                {education.map((item) => (
                  <li
                    key={item.id}
                    className="border-l border-surface-line pl-4"
                  >
                    <p className="text-sm font-medium text-ash-bright">
                      {item.degree}
                    </p>
                    <p className="mt-0.5 text-xs text-ash">
                      {item.institution}
                    </p>
                    <p className="mt-0.5 font-mono text-[11px] text-ash-dim">
                      {item.period}
                    </p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="space-y-10">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {coreValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="rounded-2xl border border-surface-line bg-surface p-5"
                >
                  <p className="font-mono text-[11px] text-spark">
                    0{index + 1}
                  </p>
                  <h3 className="mt-2 font-display text-sm font-semibold text-ash-bright">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-ash">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-ash-dim">
                Tech stack, by layer
              </h3>
              <div className="mt-4">
                <TechStackGrid />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
