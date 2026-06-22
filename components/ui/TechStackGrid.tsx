"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";

export default function TechStackGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {skillGroups.map((group, index) => (
        <motion.div
          key={group.id}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08, duration: 0.45, ease: "easeOut" }}
          className="rounded-2xl border border-surface-line bg-surface p-5"
        >
          <div className="flex items-baseline justify-between">
            <h3 className="font-display text-base font-semibold text-ash-bright">
              {group.layer}
            </h3>
            <span className="font-mono text-[11px] text-ash-dim">
              0{index + 1}
            </span>
          </div>
          <p className="mt-1 font-mono text-xs text-signal">{group.caption}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <li
                key={item}
                className="rounded-full border border-surface-line bg-surface-raised px-3 py-1 text-xs text-ash"
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
