"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FileDown, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ArchitectureFlow from "@/components/ui/ArchitectureFlow";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div
        className="absolute inset-0 bg-grid-pattern bg-grid [mask-image:linear-gradient(to_bottom,black,transparent)]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-radial-fade" aria-hidden="true" />

      <Container className="relative">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-surface-line bg-surface/70 px-4 py-1.5 font-mono text-xs text-ash"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-pulse-slow rounded-full bg-signal opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
              </span>
              available_for_work: true
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.08] text-ash-bright sm:text-5xl lg:text-[3.4rem]"
            >
              I build full-stack apps that hold up under{" "}
              <span className="text-signal">real traffic</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-ash sm:text-lg"
            >
              I&apos;m {profile.name}, a {profile.role} working across React.js,
              Next.js, and the MERN stack — currently shipping production
              features at <span className="text-ash-bright">Alphinex Solutions</span>.
              I care about the layer most portfolios skip: what happens to
              the UI once real data, real users, and real load show up.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Button href="#projects" variant="primary" icon={<ArrowUpRight size={16} />}>
                View projects
              </Button>
              <Button href="#contact" variant="secondary" icon={<FileDown size={16} />}>
                Get in touch
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.4 }}
              className="mt-8 flex items-center gap-2 font-mono text-xs text-ash-dim"
            >
              <MapPin size={14} aria-hidden="true" />
              {profile.location}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <ArchitectureFlow />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
