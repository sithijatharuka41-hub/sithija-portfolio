import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';
import { sendContact } from '../services/api.js';
import { profile } from '../data/portfolio.js';
const empty = { name: '', email: '', subject: '', message: '', website: '' };
export default function Contact() {
  const [f, setF] = useState(empty); const [status, setStatus] = useState({ type: 'idle', msg: '' });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const submit = async (e) => {
    e.preventDefault();
    const err = !f.name.trim() ? 'Please enter your name.' : !/^\S+@\S+\.\S+$/.test(f.email) ? 'Please enter a valid email.' : f.subject.trim().length < 3 ? 'Subject is too short.' : f.message.trim().length < 10 ? 'Message must be at least 10 characters.' : '';
    if (err) return setStatus({ type: 'error', msg: err });
    setStatus({ type: 'loading', msg: '' });
    try { const r = await sendContact(f); setStatus({ type: 'success', msg: r.message }); setF(empty); }
    catch (x) { setStatus({ type: 'error', msg: x.message }); }
  };
  const input = 'w-full rounded-xl border border-line bg-ink px-4 py-3 text-white placeholder-zinc-600 transition focus:border-violet focus:outline-none';
  const info = [[Mail, profile.email, `mailto:${profile.email}`], [Phone, profile.phone, `tel:${profile.phone.replace(/\s/g, '')}`], [MapPin, profile.location], [Linkedin, 'LinkedIn', profile.linkedin], [Github, 'GitHub', profile.github]];
  return <section id="contact" className="mx-auto max-w-6xl px-5 py-24">
    <SectionHeading n="06" label="Contact" title="Have an Opportunity or an Interesting Project?" />
    <div className="grid gap-12 lg:grid-cols-2">
      <Reveal><p className="text-lg text-zinc-400">I'm always interested in connecting with people, exploring new opportunities and contributing to meaningful software projects. Let's build something great together.</p>
        <ul className="mt-8 space-y-4">{info.map(([Icon, t, href]) => <li key={t} className="flex items-center gap-3"><Icon size={18} className="text-violet" />
          {href ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="text-zinc-300 hover:text-white">{t}</a> : <span className="text-zinc-300">{t}</span>}</li>)}</ul></Reveal>
      <Reveal delay={0.1}><form onSubmit={submit} noValidate className="card space-y-4 p-6">
        <div className="grid gap-4 sm:grid-cols-2"><label className="sr-only" htmlFor="n">Full name</label><input id="n" className={input} placeholder="Full Name" value={f.name} onChange={set('name')} autoComplete="name" />
          <label className="sr-only" htmlFor="e">Email</label><input id="e" type="email" className={input} placeholder="Email Address" value={f.email} onChange={set('email')} autoComplete="email" /></div>
        <label className="sr-only" htmlFor="s">Subject</label><input id="s" className={input} placeholder="Subject" value={f.subject} onChange={set('subject')} />
        <label className="sr-only" htmlFor="m">Message</label><textarea id="m" rows={5} className={input} placeholder="Message" value={f.message} onChange={set('message')} />
        <input tabIndex={-1} autoComplete="off" aria-hidden className="hidden" name="website" value={f.website} onChange={set('website')} />
        <button className="btn btn-primary" disabled={status.type === 'loading'}><Send size={16} />{status.type === 'loading' ? 'Sending…' : 'Send Message'}</button>
        <p role="status" aria-live="polite" className={`text-sm ${status.type === 'success' ? 'text-emerald-400' : 'text-red-400'}`}>{status.msg}</p></form></Reveal>
    </div></section>;
}
