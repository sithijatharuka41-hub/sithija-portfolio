import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '../data/portfolio.js';
import ImageSlot from '../components/ImageSlot.jsx';
const pos = ['left-0 top-10', 'right-0 top-24', 'left-4 bottom-16', 'right-2 bottom-6'];
export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => { const t = setInterval(() => setI((n) => (n + 1) % profile.roles.length), 2600); return () => clearInterval(t); }, []);
  return <section id="home" className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-5 pt-28 pb-16 lg:grid-cols-[1.2fr_1fr]">
    <div>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-1.5 text-xs text-zinc-300">
        <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" /><span className="relative h-2 w-2 rounded-full bg-emerald-400" /></span>Open to Opportunities</motion.p>
      <p className="mt-8 font-mono text-sm text-violet-soft">Hello, I'm Sithija.</p>
      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
        className="mt-3 font-display text-4xl font-bold leading-[1.05] text-white sm:text-6xl">Building Digital Experiences That <span className="bg-gradient-to-r from-violet to-sky bg-clip-text text-transparent">Make an Impact.</span></motion.h1>
      <p className="mt-6 max-w-xl text-lg text-zinc-400">I'm a Full Stack Software Engineer and UI/UX enthusiast passionate about transforming ideas into scalable applications and intuitive digital experiences.</p>
      <div className="mt-5 h-8 font-mono text-violet-soft" aria-live="polite"><AnimatePresence mode="wait">
        <motion.span key={i} className="block" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>{'> '}{profile.roles[i]}</motion.span></AnimatePresence></div>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a href="#projects" className="btn btn-primary">Explore My Work</a>
        <a href={profile.cv} download className="btn btn-ghost">Download CV</a>
        <a href="#contact" className="text-sm text-zinc-400 underline-offset-4 hover:text-white hover:underline">Let's Talk</a></div>
    </div>
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.2 }} className="relative mx-auto w-full max-w-sm">
      <div className="absolute inset-0 -z-0 scale-110 rounded-full bg-gradient-to-br from-violet/50 via-violet/10 to-sky/20 blur-3xl" aria-hidden />
      <div className="relative aspect-[4/5] overflow-hidden rounded-[45%_55%_50%_50%/40%_40%_60%_60%] border border-violet/30">
        <ImageSlot src={profile.photo} alt="Portrait of Sithija Ranathunga" className="h-full w-full" /></div>
      {profile.floatingTech.map((t, k) => <motion.span key={t} className={`tag absolute bg-ink/80 backdrop-blur ${pos[k]} hidden sm:block`}
        animate={{ y: [0, -8, 0] }} transition={{ duration: 4 + k, repeat: Infinity, ease: 'easeInOut' }}>{t}</motion.span>)}
    </motion.div>
  </section>;
}
