import { GraduationCap, Award, Users } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';
import { education, leadership } from '../data/portfolio.js';
export default function Education() {
  return <section id="education" className="mx-auto max-w-6xl px-5 py-24">
    <SectionHeading n="05" label="Education" title="Learning & leadership." />
    <div className="grid gap-5 lg:grid-cols-3">
      <Reveal><div className="card h-full p-6"><GraduationCap className="text-violet" /><h3 className="mt-3 font-display text-lg text-white">{education.degree}</h3>
        <p className="mt-1 text-sm text-zinc-400">{education.school}</p><p className="mt-1 font-mono text-xs text-violet-soft">Graduated {education.graduated}</p></div></Reveal>
      <Reveal delay={0.08}><div className="card h-full p-6"><Award className="text-violet" /><h3 className="mt-3 font-display text-lg text-white">Qualifications</h3>
        <ul className="mt-3 space-y-2 text-sm text-zinc-400">{education.qualifications.map((q) => <li key={q}>{q}</li>)}</ul></div></Reveal>
      <Reveal delay={0.16}><div className="card h-full p-6"><Users className="text-violet" /><h3 className="mt-3 font-display text-lg text-white">{leadership.role}</h3>
        <p className="mt-1 font-mono text-xs text-violet-soft">{leadership.period}</p>
        <ul className="mt-3 list-disc space-y-2 pl-4 text-sm text-zinc-400">{leadership.points.map((q) => <li key={q}>{q}</li>)}</ul></div></Reveal>
    </div></section>;
}
