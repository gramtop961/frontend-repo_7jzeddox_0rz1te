import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function TechStoryShop() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a full app, this would post to an API. For now, just clear.
    setEmail('');
    alert('Welcome to Club Mason Black.');
  };

  return (
    <section className="relative bg-[#0A0A0A] text-white">
      {/* Technology */}
      <div id="technology" className="container mx-auto px-6 max-w-6xl py-24 md:py-32 grid md:grid-cols-2 gap-12 items-start">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <p className="tracking-[0.3em] uppercase text-xs text-neutral-400 mb-3">Technology</p>
          <h3 className="font-serif text-3xl sm:text-4xl font-semibold mb-4">Micro Atomiser Tech</h3>
          <p className="text-neutral-300 mb-6">Precision-engineered sprayers that translate liquid wealth into an ultra-fine mist. The diffusion is immediate, the aura stays. Rooms remember.</p>
          <h4 className="font-serif text-2xl text-amber-300/90 mb-2">Cult Mason Black Mix</h4>
          <p className="text-neutral-300">A calibrated blend of smoked cashmere, black cardamom, dark vanilla, and brushed gold—layered to project quiet dominance.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
          <div className="relative rounded-2xl border border-zinc-800 bg-gradient-to-tr from-black to-zinc-900 p-8 overflow-hidden">
            <div className="absolute -inset-40 opacity-20" style={{ background: 'radial-gradient(50%_50%_at_50%_0%, rgba(212,175,55,0.35), transparent 60%)' }} />
            <div className="relative grid grid-cols-2 gap-4">
              <div className="rounded-lg border border-zinc-800 bg-neutral-950 p-6">
                <p className="text-xs text-neutral-400 uppercase tracking-widest mb-2">Dispersion</p>
                <p className="font-serif text-amber-300/90 text-lg">Ultra-fine 20μm mist</p>
              </div>
              <div className="rounded-lg border border-zinc-800 bg-neutral-950 p-6">
                <p className="text-xs text-neutral-400 uppercase tracking-widest mb-2">Sillage</p>
                <p className="font-serif text-amber-300/90 text-lg">Room-filling, weightless</p>
              </div>
              <div className="rounded-lg border border-zinc-800 bg-neutral-950 p-6">
                <p className="text-xs text-neutral-400 uppercase tracking-widest mb-2">Finish</p>
                <p className="font-serif text-amber-300/90 text-lg">Matte, magnetic</p>
              </div>
              <div className="rounded-lg border border-zinc-800 bg-neutral-950 p-6">
                <p className="text-xs text-neutral-400 uppercase tracking-widest mb-2">Signature</p>
                <p className="font-serif text-amber-300/90 text-lg">Smells Like Money</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Story */}
      <div id="story" className="container mx-auto px-6 max-w-6xl py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <p className="tracking-[0.3em] uppercase text-xs text-neutral-400 mb-3">Story</p>
          <h3 className="font-serif text-3xl sm:text-4xl font-semibold mb-6">Born from Obsession, Ambition, Wealth</h3>
          <p className="text-neutral-300 leading-relaxed">Mason Black was forged in the quiet hours when deals close and empires shift hands. We bottle the atmosphere of private clubs, leather-lined jets, and the hum of ceilings most never see. It isn’t for everyone. It isn’t meant to be.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <div className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-950 to-black p-8">
            <div className="aspect-video rounded-lg border border-zinc-800 bg-neutral-950 flex items-center justify-center">
              <span className="text-4xl font-serif text-amber-300/90">MB</span>
            </div>
            <p className="mt-4 text-neutral-400 text-sm">Cinematic lighting. Matte textures. A world where success has a smell.</p>
          </div>
        </motion.div>
      </div>

      {/* Shop + Join */}
      <div id="shop" className="container mx-auto px-6 max-w-6xl py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <p className="tracking-[0.3em] uppercase text-xs text-neutral-400 mb-3">Shop</p>
            <h3 className="font-serif text-3xl sm:text-4xl font-semibold mb-4">The Mason Black Box</h3>
            <p className="text-neutral-300 mb-6">Single SKU. No compromises. Four 20ml perfumes + velvet pocket square. Limited runs only.</p>
            <div className="flex items-center gap-4">
              <button className="rounded-full border border-amber-400/40 px-6 py-3 tracking-widest uppercase text-sm bg-gradient-to-r from-zinc-900 to-black hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]" style={{ boxShadow: 'inset 0 0 20px rgba(212,175,55,0.08), 0 0 0 1px rgba(212,175,55,0.25)' }}>
                Add to Cart — $499
              </button>
              <span className="text-xs text-neutral-400">Ships worldwide</span>
            </div>
          </motion.div>

          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-950 to-black p-6">
            <p className="tracking-[0.3em] uppercase text-xs text-neutral-400 mb-3">Join the Club</p>
            <h4 className="font-serif text-2xl sm:text-3xl font-semibold mb-4">Enter the world that smells like success</h4>
            <div className="flex items-center gap-3">
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required placeholder="Email address" className="flex-1 rounded-full bg-neutral-950 border border-zinc-800/80 px-5 py-3 text-sm outline-none focus:border-amber-400/60 focus:shadow-[0_0_20px_rgba(212,175,55,0.25)]" />
              <button type="submit" className="rounded-full border border-amber-400/40 px-6 py-3 tracking-widest uppercase text-sm bg-gradient-to-r from-zinc-900 to-black hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]" style={{ boxShadow: 'inset 0 0 20px rgba(212,175,55,0.08), 0 0 0 1px rgba(212,175,55,0.25)' }}>
                Join
              </button>
            </div>
            <p className="mt-3 text-xs text-neutral-500">Membership details delivered discreetly.</p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
