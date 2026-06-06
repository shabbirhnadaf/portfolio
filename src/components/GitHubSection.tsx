import { motion } from 'framer-motion'

const COLORS = ['bg-white/4', 'bg-accent-cyan/14', 'bg-accent-blue/24', 'bg-accent-purple/30', 'bg-accent-cyan/50']

export default function GitHubSection() {
  return (
    <section id="github" className="section py-20">
      <div className="glass rounded-[32px] p-8 md:p-10">
        <div className="mb-2 font-body text-xs uppercase tracking-[0.55em] text-accent-cyan">GitHub Activity</div>
        <h2 className="mb-8 font-display text-3xl font-bold text-white md:text-4xl">Contribution graph.</h2>

        {/* Heatmap grid */}
        <div className="grid gap-2.5">
          {Array.from({ length: 7 }).map((_, row) => (
            <div key={row} className="flex gap-2">
              {Array.from({ length: 28 }).map((__, col) => {
                const intensity = ((row * 7 + col + row + 3) % 5)
                return (
                  <motion.div key={col}
                    className={`h-4 w-4 flex-shrink-0 rounded-[3px] ${COLORS[intensity]}`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: (row * 28 + col) * 0.003 }} />
                )
              })}
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            { title: 'Consistency',   text: 'Daily learning and building momentum' },
            { title: 'Repositories',  text: 'Projects shaped around full-stack execution' },
            { title: 'Focus',         text: 'AI, web systems, and practical product engineering' },
          ].map(({ title, text }) => (
            <div key={title} className="rounded-2xl border border-white/8 bg-black/20 p-4">
              <div className="font-body text-sm font-semibold text-white">{title}</div>
              <div className="mt-1.5 font-body text-xs leading-relaxed text-slate-400">{text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}