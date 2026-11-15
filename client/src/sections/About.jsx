import { Download } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';
import ImageSlot from '../components/ImageSlot.jsx';
import { profile } from '../data/portfolio.js';
const timeline = [['2025–2026', 'UI/UX Engineer Intern, Lyxux Ltd'], ['2025–2026', 'Treasurer, ITSC, SLIIT'], ['2026', 'BSc (Hons) Information Technology, SLIIT'], ['2026', 'IEEE-published research: NephroSense']];
export default function About() {
  return <section id="about" className="mx-auto max-w-6xl px-5 py-24">
    <SectionHeading n="01" label="About" title="More Than Just Writing Code." />
    <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
      <Reveal><ImageSlot src="/images/profile/sithija-2.png" alt="Sithija Ranathunga" className="aspect-square w-full rounded-2xl" /></Reveal>
      <Reveal delay={0.1}><div className="space-y-4 text-zinc-400">
        <p>I'm a BSc (Hons) Information Technology graduate from SLIIT with hands-on experience in full-stack software development and UI/UX engineering.</p>
        <p>During my professional internship at Lyxux Ltd, I worked on designing and developing responsive e-commerce and POS platform modules, translating Figma designs into functional frontend experiences.</p>
        <p>I also contributed to NephroSense, an IEEE-published research project focused on chronic kidney disease management, where I worked on frontend development and lifestyle management logic.</p>
        <p>I enjoy exploring new technologies, solving real-world problems, designing meaningful user experiences and building applications that combine functionality with thoughtful design.</p></div>
        <ol className="mt-8 space-y-3 border-l border-line pl-6">{timeline.map(([y, t]) => <li key={t} className="relative"><span className="absolute -left-[29px] top-2 h-2 w-2 rounded-full bg-violet" /><span className="font-mono text-xs text-violet-soft">{y}</span><p className="text-white">{t}</p></li>)}</ol>
        <a href={profile.cv} download className="btn btn-primary mt-8"><Download size={16} />Download CV</a></Reveal>
    </div></section>;
}
