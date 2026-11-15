import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Award, ChevronDown } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import ImageSlot from '../components/ImageSlot.jsx';
import { projects } from '../data/portfolio.js';
const labels = { github: ['GitHub', Github], live: ['Live Demo', ExternalLink], ieee: ['View IEEE Publication', Award], figma: ['Figma', ExternalLink] };
function Project({ p, i }) {
  const [open, setOpen] = useState(false); const [shot, setShot] = useState(0);
  const links = Object.entries(p.links).filter(([, v]) => v);
  return <motion.article layout className={`card overflow-hidden ${p.featured ? 'lg:col-span-2' : ''}`}
    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ delay: (i % 2) * 0.1 }}>
    <div className={p.featured ? 'grid lg:grid-cols-2' : ''}>
      <div className="p-3">
        <div className="overflow-hidden rounded-xl"><ImageSlot src={p.images[shot]} alt={`${p.title} screenshot ${shot + 1}`} className="aspect-video w-full transition duration-500 hover:scale-105" /></div>
        {p.images.length > 1 && <div className="mt-3 flex gap-2">{p.images.map((im, k) => <button key={im} onClick={() => setShot(k)} aria-label={`Screenshot ${k + 1}`}
          className={`overflow-hidden rounded-lg border ${k === shot ? 'border-violet' : 'border-line'}`}><ImageSlot src={im} alt="" className="h-14 w-24" /></button>)}</div>}
      </div>
      <div className="p-6">
        {p.badge && <span className="font-mono text-xs tracking-widest text-violet">{p.badge}</span>}
        {p.recognition && <p className="mt-2 inline-flex items-center gap-2 rounded-full border border-violet/40 px-3 py-1 text-xs text-violet-soft"><Award size={14} />{p.recognition}</p>}
        <h3 className="mt-3 font-display text-2xl text-white">{p.title}</h3>
        <p className="mt-3 text-zinc-400">{p.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">{p.stack.map((s) => <span key={s} className="tag">{s}</span>)}</div>
        <div className="mt-5 flex flex-wrap items-center gap-4">
          <button onClick={() => setOpen(!open)} aria-expanded={open} className="btn btn-ghost !py-2">View Case Study<ChevronDown size={16} className={open ? 'rotate-180' : ''} /></button>
          {links.map(([k, v]) => { const [l, Icon] = labels[k]; return <a key={k} href={v} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm text-zinc-300 hover:text-white"><Icon size={15} />{l}</a>; })}</div>
        <AnimatePresence>{open && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
          <h4 className="mt-6 font-mono text-xs text-violet-soft">MY CONTRIBUTION</h4>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-zinc-400">{p.contribution.map((c) => <li key={c}>{c}</li>)}</ul></motion.div>}</AnimatePresence>
      </div></div></motion.article>;
}
export default function Projects() {
  return <section id="projects" className="mx-auto max-w-6xl px-5 py-24">
    <SectionHeading n="03" label="Projects" title="Selected work." />
    <div className="grid gap-6 lg:grid-cols-2">{projects.map((p, i) => <Project key={p.id} p={p} i={i} />)}</div></section>;
}
