import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading.jsx';
import { skills } from '../data/portfolio.js';
export default function Skills() {
  return <section id="skills" className="mx-auto max-w-6xl px-5 py-24">
    <SectionHeading n="02" label="Skills" title="Tools I build with." />
    <div className="grid gap-5 md:grid-cols-2">{Object.entries(skills).map(([cat, items], c) =>
      <motion.div key={cat} className="card p-6" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: c * 0.08 }}>
        <h3 className="font-display text-lg text-white">{cat}</h3>
        <ul className="mt-4 flex flex-wrap gap-2">{items.map((s) => <li key={s}><motion.span whileHover={{ y: -2 }} className="tag inline-block cursor-default hover:border-violet hover:text-white">{s}</motion.span></li>)}</ul>
      </motion.div>)}</div></section>;
}
