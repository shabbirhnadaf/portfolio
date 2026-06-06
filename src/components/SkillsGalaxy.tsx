import { motion } from 'framer-motion'
import { SKILLS, SKILL_COLORS } from '../data'

const categories = Object.keys(SKILLS)

export default function SkillsGalaxy() {
  return (
    <section id="skills" className="section py-28">
      <div className="mb-14 text-center">
        <div className="font-body text-xs uppercase tracking-[0.55em] text-accent-cyan">Skills</div>
        <h2 className="mt-4 font-display text-4xl font-bold text-white md:text-5xl">
          Technologies I work with.
        </h2>
      </div>

      <div className="glass relative overflow-hidden rounded-[36px] p-8 md:p-12">
        {/* Central glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-blue/12 blur-[80px]" />

        <div className="relative mx-auto flex min-h-[680px] max-w-5xl flex-wrap items-center justify-center">

          {/* Central node */}
          <div className="absolute left-1/2 top-1/2 z-20 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent-cyan/35 bg-slate-950/90 font-display text-xl font-bold tracking-[0.28em] text-white shadow-glow">
            SHABBIR
          </div>

          {/* Orbit rings */}
          {[260, 360].map((r) => (
            <div key={r} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-accent-blue/12"
                 style={{ width: r * 2, height: r * 2 }} aria-hidden="true" />
          ))}

          {/* Category cards orbiting */}
          {categories.map((cat, idx) => {
            const angle = (idx / categories.length) * Math.PI * 2 - Math.PI / 2
            const rx = 290, ry = 240
            const x = Math.cos(angle) * rx
            const y = Math.sin(angle) * ry
            const color = SKILL_COLORS[cat]

            return (
              <motion.div key={cat}
                className="absolute w-52 rounded-[22px] border border-white/8 bg-white/4 p-5 backdrop-blur-xl"
                style={{ left: `calc(50% + ${x}px - 6.5rem)`, top: `calc(50% + ${y}px - 5rem)` }}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.07, rotate: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}>

                {/* Category dot */}
                <div className="mb-3 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full" style={{ background: color, boxShadow: `0 0 8px ${color}` }} />
                  <span className="font-body text-xs font-semibold uppercase tracking-[0.35em]" style={{ color }}>
                    {cat}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {SKILLS[cat].map(skill => (
                    <span key={skill} className="rounded-full border border-white/8 bg-slate-950/60 px-2.5 py-1 font-body text-[11px] text-slate-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
