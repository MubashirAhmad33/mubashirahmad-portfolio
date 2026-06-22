"use client";

import { motion } from "framer-motion";
import { Monitor, Server, Webhook, Database } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface FlowNode {
  id: string;
  label: string;
  caption: string;
  icon: LucideIcon;
}

const nodes: FlowNode[] = [
  { id: "browser", label: "Browser", caption: "React UI", icon: Monitor },
  { id: "nextjs", label: "Next.js", caption: "Rendering", icon: Server },
  { id: "api", label: "API", caption: "Express / Routes", icon: Webhook },
  { id: "db", label: "MongoDB", caption: "Data layer", icon: Database },
];

const nodeVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function ArchitectureFlow() {
  return (
    <div
      className="relative w-full rounded-2xl border border-surface-line bg-surface/60 p-5 sm:p-7"
      role="img"
      aria-label="Diagram of a request flowing from the browser through Next.js and an API into a MongoDB database"
    >
      <div className="mb-5 flex items-center justify-between font-mono text-xs text-ash-dim">
        <span className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-pulse-slow rounded-full bg-signal opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
          </span>
          request_flow.trace
        </span>
        <span>~120ms</span>
      </div>

      <div className="flex flex-col items-stretch gap-0 sm:flex-row sm:items-center">
        {nodes.map((node, index) => {
          const Icon = node.icon;
          const isLast = index === nodes.length - 1;
          return (
            <div
              key={node.id}
              className="flex flex-1 flex-col items-stretch sm:flex-row sm:items-center"
            >
              <motion.div
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={nodeVariants}
                className="flex flex-1 flex-col items-center gap-2 rounded-xl border border-surface-line bg-surface-raised px-4 py-5 text-center"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-ink-950 text-signal">
                  <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <span className="font-display text-sm font-semibold text-ash-bright">
                  {node.label}
                </span>
                <span className="font-mono text-[11px] text-ash-dim">
                  {node.caption}
                </span>
              </motion.div>

              {!isLast && (
                <div
                  className="relative mx-auto my-2 h-6 w-px overflow-hidden sm:mx-2 sm:my-0 sm:h-px sm:w-10"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 bg-surface-line" />
                  <motion.div
                    className="absolute inset-0 bg-signal"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: [0, 1, 0.4] }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.15 * index + 0.4,
                      duration: 0.9,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
