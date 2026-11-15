import { useState } from 'react';
// Shows the real image; if the file is missing, shows a clearly marked placeholder (never a fake screenshot).
export default function ImageSlot({ src, alt, className = '' }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <div className={`flex items-center justify-center border border-dashed border-violet/40 bg-char p-4 text-center font-mono text-xs text-zinc-500 ${className}`}>Replace me:<br />public{src}</div>;
  return <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} className={`object-cover ${className}`} />;
}
