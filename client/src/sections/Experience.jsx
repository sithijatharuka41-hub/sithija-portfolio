import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';
import { experience } from '../data/portfolio.js';
export default function Experience() {
  return <section id="experience" className="mx-auto max-w-6xl px-5 py-24">
    <SectionHeading n="04" label="Experience" title="Where I've worked." />
    {experience.map((e) => <Reveal key={e.company}><div className="card relative p-8">
      <div className="flex flex-wrap items-baseline justify-between gap-2"><h3 className="font-display text-2xl text-white">{e.role} <span className="text-violet-soft">@ {e.company}</span></h3>
        <p className="font-mono text-xs text-zinc-500">{e.period} · {e.location}</p></div>
      <p className="mt-4 text-zinc-400">{e.summary}</p>
      <ul className="mt-5 grid gap-2 text-sm text-zinc-300 md:grid-cols-2">{e.points.map((p) => <li key={p} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet" />{p}</li>)}</ul></div></Reveal>)}</section>;
}
