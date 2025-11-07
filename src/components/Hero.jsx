import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const GoldParticle = ({ delay = 0, size = 4, left = '50%', top = '50%' }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.6 }}
    animate={{ opacity: [0, 0.6, 0], scale: [0.8, 1, 0.8], y: [-6, 0, 6] }}
    transition={{ duration: 4, repeat: Infinity, delay }}
    className="absolute rounded-full pointer-events-none"
    style={{
      left,
      top,
      width: size,
      height: size,
      background: 'radial-gradient(circle, rgba(255,215,128,0.9) 0%, rgba(255,215,128,0.0) 60%)',
      filter: 'blur(0.5px)'
    }}
  />
);

export default function Hero() {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EQgEIs2r5cMbWroZ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Iridescent vignette + gold haze overlay */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80" />
        <div className="absolute -inset-24 opacity-[0.15]" style={{
          background: 'radial-gradient(60% 40% at 50% 0%, rgba(255,230,150,0.25) 0%, rgba(0,0,0,0) 60%)'
        }} />
        {/* Gold particles */}
        <GoldParticle delay={0.2} size={6} left="25%" top="30%" />
        <GoldParticle delay={0.6} size={4} left="60%" top="40%" />
        <GoldParticle delay={1.2} size={5} left="70%" top="65%" />
        <GoldParticle delay={1.8} size={3} left="40%" top="70%" />
        <GoldParticle delay={2.4} size={6} left="15%" top="55%" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="tracking-[0.35em] text-xs sm:text-sm text-neutral-300 uppercase mb-4"
        >
          Mason Black
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="font-serif select-none"
        >
          <p className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight">
            Smells Like Money
          </p>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-5 max-w-2xl text-sm sm:text-base text-neutral-300"
        >
          A cult of fragrance engineered for those who deal in power, precision, and quiet excess.
        </motion.p>

        <motion.a
          href="#shop"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-zinc-900 to-black px-7 py-3 text-sm uppercase tracking-widest border border-zinc-700/70 shadow-[0_0_0_1px_rgba(212,175,55,0.25)] hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]"
          style={{ boxShadow: 'inset 0 0 20px rgba(212,175,55,0.08), 0 0 0 1px rgba(212,175,55,0.25)' }}
        >
          Enter the Circle
          <span className="h-2 w-2 rounded-full bg-gradient-to-tr from-yellow-300 to-amber-500" />
        </motion.a>
      </div>

      {/* Subtle scroll cue */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center">
        <div className="flex items-center gap-2 text-xs text-neutral-400">
          <span className="h-4 w-[1px] bg-gradient-to-b from-transparent via-yellow-400/60 to-transparent" />
          Scroll
          <span className="h-4 w-[1px] bg-gradient-to-b from-transparent via-yellow-400/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
