import { motion } from 'framer-motion'
import { DSA_TOPICS } from '../data'

export default function DSASection() {
  return (
    <section className="section py-20">
      <div className="glass rounded-[32px] p-8 md:p-10">
        <div className="mb-2 font-body text-xs uppercase tracking-[0.55em] text-accent-cyan">Problem Solving</div>
        <h2 className="mb-10 font-display text-3xl font-bold text-white md:text-4xl">DSA progress.</h2>
        <div className="space-y-6">
          {DSA_TOPICS.map(({ name, progress }, i) => (
            <motion.div key={name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}>
              <div className="mb-2.5 flex justify-between font-body text-sm text-slate-300">
                <span>{name}</span>
                <span className="text-slate-400">{progress}%</span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-white/6">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 + 0.2 }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
