import { motion } from 'framer-motion'
import { STATS } from '../data'

export default function StatsSection() {
  return (
    <section className="section py-20">
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
        {STATS.map(({ value, label }, i) => (
          <motion.div key={label}
            className="glass rounded-[24px] p-7 text-center"
            initial={{ opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.08 }}>
            <div className="font-display text-4xl font-bold text-white md:text-5xl">{value}</div>
            <div className="mt-2 font-body text-xs uppercase tracking-[0.35em] text-slate-400">{label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}