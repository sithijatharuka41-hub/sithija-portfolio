import { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { profile } from '../data/portfolio.js';
export const NAV = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
export default function Navbar({ active }) {
  const [open, setOpen] = useState(false);
  const link = (id) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)} aria-current={active === id ? 'true' : undefined}
    className={`text-sm capitalize transition ${active === id ? 'text-white' : 'text-zinc-400 hover:text-white'}`}>{id}</a>;
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-ink/70 backdrop-blur-xl">
    <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5" aria-label="Main">
      <a href="#home" className="font-display text-xl font-bold text-white" aria-label="Home">S<span className="text-violet">R</span></a>
      <div className="hidden items-center gap-7 lg:flex">{NAV.map(link)}
        <a href={profile.cv} download className="btn btn-ghost !px-4 !py-2"><Download size={14} />CV</a></div>
      <button className="lg:hidden text-white" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
    </nav>
    {open && <div className="flex flex-col gap-5 border-t border-line bg-ink px-5 py-6 lg:hidden">{NAV.map(link)}
      <a href={profile.cv} download className="btn btn-primary w-fit"><Download size={14} />Download CV</a></div>}
  </header>;
}
