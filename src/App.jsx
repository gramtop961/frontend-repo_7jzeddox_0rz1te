import React from 'react';
import Hero from './components/Hero';
import Product from './components/Product';
import Club from './components/Club';
import TechStoryShop from './components/TechStoryShop';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur border-b border-white/5 bg-black/40">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#" className="font-serif text-xl">Mason Black</a>
          <nav className="hidden md:flex gap-6 text-sm text-neutral-300">
            <a href="#box" className="hover:text-amber-300 transition-colors">The Box</a>
            <a href="#club" className="hover:text-amber-300 transition-colors">Club</a>
            <a href="#technology" className="hover:text-amber-300 transition-colors">Technology</a>
            <a href="#story" className="hover:text-amber-300 transition-colors">Story</a>
            <a href="#shop" className="hover:text-amber-300 transition-colors">Shop</a>
          </nav>
          <a href="#shop" className="rounded-full border border-amber-400/40 px-4 py-1.5 text-xs uppercase tracking-widest bg-gradient-to-r from-zinc-900 to-black hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]" style={{ boxShadow: 'inset 0 0 20px rgba(212,175,55,0.08), 0 0 0 1px rgba(212,175,55,0.25)' }}>
            Buy
          </a>
        </div>
      </header>

      <main className="pt-14">
        <Hero />
        <Product />
        <Club />
        <TechStoryShop />
      </main>

      <footer className="border-t border-white/5 py-8 text-center text-xs text-neutral-500 bg-black">
        © {new Date().getFullYear()} Mason Black. All rights reserved.
      </footer>
    </div>
  );
}
