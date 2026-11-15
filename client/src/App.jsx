import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import Loader from './components/Loader.jsx';
import CursorGlow from './components/CursorGlow.jsx';
import Navbar, { NAV } from './components/Navbar.jsx';
import useActiveSection from './hooks/useActiveSection.js';
import Hero from './sections/Hero.jsx'; import About from './sections/About.jsx'; import Skills from './sections/Skills.jsx';
import Projects from './sections/Projects.jsx'; import Experience from './sections/Experience.jsx'; import Education from './sections/Education.jsx'; import Contact from './sections/Contact.jsx';
export default function App() {
  const [loading, setLoading] = useState(true); const [top, setTop] = useState(false); const active = useActiveSection(NAV);
  useEffect(() => { const t = setTimeout(() => setLoading(false), 1500); const s = () => setTop(window.scrollY > 600);
    window.addEventListener('scroll', s, { passive: true }); return () => { clearTimeout(t); window.removeEventListener('scroll', s); }; }, []);
  return <>
    <AnimatePresence>{loading && <Loader />}</AnimatePresence>
    <CursorGlow /><Navbar active={active} />
    <main className="relative z-10"><Hero /><About /><Skills /><Projects /><Experience /><Education /><Contact /></main>
    <footer className="relative z-10 border-t border-line py-8 text-center text-sm text-zinc-500">© {new Date().getFullYear()} Sithija Ranathunga. Built with React, Node.js &amp; MongoDB.</footer>
    {top && <button aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 z-40 rounded-full bg-violet p-3 text-white shadow-lg"><ArrowUp size={18} /></button>}
  </>;
}
