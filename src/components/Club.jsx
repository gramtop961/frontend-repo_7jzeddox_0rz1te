import React from 'react';
import { motion } from 'framer-motion';

export default function Club() {
  return (
    <section id="club" className="relative bg-black text-white py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(212,175,55,0.12),transparent_70%)] opacity-60" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-center gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <p className="tracking-[0.3em] uppercase text-xs text-neutral-400 mb-3">Club Mason Black</p>
            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold mb-6">Access Buys You Silence</h3>
            <p className="text-neutral-300 leading-relaxed mb-6">
              Behind the velvet rope is a world of black cards, private terminals, and men who wear success like a second skin. The mark of entry is subtle: a discreet dollar-sign tattoo, inked in matte black. When you own the box, you hold the key.
            </p>
            <ul className="space-y-3 text-neutral-300">
              <li>• Private events in unlisted penthouses</li>
              <li>• First access to limited releases</li>
              <li>• Concierge for bespoke scent calibrations</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:w-1/2"
          >
            <div className="relative rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-950 to-black p-8 overflow-hidden">
              <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_70%_20%,rgba(212,175,55,0.25),transparent_50%)]" />
              <div className="relative grid grid-cols-3 gap-4">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="aspect-[2/3] rounded-lg border border-zinc-800 bg-neutral-950 flex items-center justify-center">
                    <span className="text-2xl font-serif text-amber-300/90">$</span>
                  </div>
                ))}
              </div>
              <div className="relative mt-6 text-xs text-neutral-400">
                Members signal with a black $ tattoo. You’ll know it when you see it.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
