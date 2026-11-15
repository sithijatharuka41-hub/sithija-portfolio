import { motion } from 'framer-motion';
export default function Loader() {
  return <motion.div className="fixed inset-0 z-[100] grid place-items-center bg-ink" exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
    <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="text-center">
      <div className="font-display text-6xl font-bold text-white">S<span className="text-violet">R</span></div>
      <motion.div className="mx-auto mt-4 h-px bg-violet" initial={{ width: 0 }} animate={{ width: 96 }} transition={{ duration: 1.1 }} />
    </motion.div></motion.div>;
}
