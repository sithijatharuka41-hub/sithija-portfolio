import Reveal from './Reveal.jsx';
export default function SectionHeading({ n, label, title }) {
  return <Reveal className="mb-12"><p className="font-mono text-xs tracking-widest text-violet">{n} / {label.toUpperCase()}</p>
    <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-5xl">{title}</h2></Reveal>;
}
