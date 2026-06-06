import { motion } from 'framer-motion'
import { STORY_CHAPTERS } from '../data'

export default function StorySection() {
  return (
    <section id="story" className="section py-28">
      <div className="mb-14">
        <div className="font-body text-xs uppercase tracking-[0.55em] text-accent-cyan">About</div>
        <h2 className="mt-4 font-display text-4xl font-bold text-white md:text-5xl">
          My path in software.
        </h2>
      </div>

      <div className="relative grid gap-5">
        {/* Vertical timeline line */}
        <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-accent-blue/50 via-accent-purple/30 to-transparent" aria-hidden="true" />

        {STORY_CHAPTERS.map((ch, i) => (
          <motion.div key={ch.index}
            className="glass relative overflow-hidden rounded-[28px] p-8 pl-16"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 }}>

            {/* Timeline dot */}
            <div className="absolute left-[18px] top-9 h-3.5 w-3.5 rounded-full border-2 border-white/20"
                 style={{ background: ch.color, boxShadow: `0 0 14px ${ch.color}88` }} />

            {/* Ambient glow */}
            <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full blur-[64px]"
                 style={{ background: `${ch.color}22` }} />

            <div className="font-body text-xs uppercase tracking-[0.5em]" style={{ color: ch.color }}>
              {ch.index}
            </div>
            <h3 className="mt-3 font-display text-2xl font-bold text-white md:text-3xl">{ch.title}</h3>
            <div className="mt-1.5 font-body text-base text-blue-100/80">{ch.subtitle}</div>
            <p className="mt-4 max-w-3xl font-body text-sm leading-relaxed text-slate-300 md:text-base">
              {ch.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
