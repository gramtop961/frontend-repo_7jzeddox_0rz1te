import React from 'react';
import { motion } from 'framer-motion';

const Feature = ({ title, desc }) => (
  <div className="space-y-1">
    <h4 className="font-serif text-lg text-amber-300/90">{title}</h4>
    <p className="text-sm text-neutral-300/90">{desc}</p>
  </div>
);

export default function Product() {
  return (
    <section id="box" className="relative w-full bg-[#0A0A0A] text-white py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 opacity-[0.07]" style={{
          backgroundImage: 'radial-gradient(circle at 20% 0%, rgba(212,175,55,0.18), transparent 40%), radial-gradient(circle at 80% 100%, rgba(212,175,55,0.12), transparent 45%)'
        }} />
      </div>

      <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 p-6 flex items-center justify-center shadow-2xl">
            <div className="relative w-full h-full rounded-xl bg-neutral-950 bg-[radial-gradient(circle_at_30%_20%,_rgba(255,215,128,0.15),_transparent_35%)] flex items-center justify-center">
              <div className="w-3/4 h-3/4 rounded-xl bg-gradient-to-b from-neutral-900 to-black border border-zinc-700/60 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 p-4">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="relative h-28 sm:h-32 rounded-lg bg-neutral-950 border border-zinc-700/60 flex items-center justify-center shadow-inner">
                      <span className="text-2xl sm:text-3xl font-serif text-amber-300/90">$</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-6 right-8 px-4 py-2 rounded-full border border-amber-400/30 bg-black/60 backdrop-blur text-xs tracking-widest uppercase">Velvet Pocket Square</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p className="tracking-[0.3em] uppercase text-xs text-neutral-400 mb-3">The Box</p>
          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold mb-6">Mason Black Signature Box</h3>
          <p className="text-neutral-300 leading-relaxed mb-8">
            Four 20ml perfumes housed in a matte-black monolith, each bottle engraved with the symbol that moves the world. Finished with a velvet pocket square subtly laced with the scent—an imprint that lingers in boardrooms and backrooms alike.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            <Feature title="Micro Atomiser" desc="Ultra-fine mist technology for a weightless, room-filling trail." />
            <Feature title="20ml x 4" desc="Perfectly portioned vials for travel, nights, and negotiations." />
            <Feature title="Engraved $" desc="Machined detail, tactile and unmistakable." />
            <Feature title="Velvet Square" desc="Pocket armour scented with the Mason Black signature." />
          </div>

          <a href="#shop" className="inline-block rounded-full border border-amber-400/40 px-6 py-3 tracking-widest uppercase text-sm bg-gradient-to-r from-zinc-900 to-black hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]" style={{ boxShadow: 'inset 0 0 20px rgba(212,175,55,0.08), 0 0 0 1px rgba(212,175,55,0.25)' }}>
            Own The Room
          </a>
        </motion.div>
      </div>
    </section>
  );
}
