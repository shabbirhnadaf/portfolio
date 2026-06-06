import { Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Download, Mail, Sparkles } from 'lucide-react'
import TechSphere from './TechSphere'
import MagneticButton from './MagneticButton'
import { ROTATING_TITLES, STATS } from '../data'

interface Props {
  titleIndex: number
}

export default function HeroSection({ titleIndex }: Props) {
  return (
    <section className="section min-h-screen pt-20 md:pt-12">
      <div className="grid min-h-[90vh] items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-body text-xs uppercase tracking-[0.38em] text-accent-cyan">
            <Sparkles size={13} /> Building web products
          </div>

          <h1 className="font-display text-[clamp(2.4rem,6vw,6rem)] font-bold leading-[0.93] text-white">
            Shabbir{' '}
            <span className="text-gradient block">Husensab</span>
            <span className="text-gradient">Nadaf</span>
          </h1>

          <div className="relative mt-7 h-10 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={ROTATING_TITLES[titleIndex]}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.42 }}
                className="absolute font-display text-xl font-medium text-slate-200 md:text-2xl"
              >
                {ROTATING_TITLES[titleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <p className="mt-8 max-w-[56ch] font-body text-base leading-relaxed text-slate-300 md:text-lg">
            Computer Science Engineering student building full-stack apps, AI-assisted tools, and clean web experiences.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <MagneticButton href="#projects" variant="primary">
              View Projects <ArrowRight size={15} />
            </MagneticButton>
            <MagneticButton href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume <Download size={15} />
            </MagneticButton>
            <MagneticButton href="#contact">
              Contact <Mail size={15} />
            </MagneticButton>
          </div>

          <div className="mt-12 grid max-w-[480px] grid-cols-2 gap-4 md:grid-cols-4">
            {STATS.map(({ value, label }) => (
              <div key={label} className="glass rounded-2xl p-4">
                <div className="font-display text-2xl font-bold text-white">{value}</div>
                <div className="mt-1 font-body text-xs uppercase tracking-[0.3em] text-slate-400">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="relative h-[520px] overflow-hidden rounded-[32px] border border-white/8 glass"
        >
          <Suspense
            fallback={
              <div className="flex h-full items-center justify-center font-body text-sm text-slate-400">
                Loading sphere...
              </div>
            }
          >
            <TechSphere />
          </Suspense>
        </motion.div>
      </div>
    </section>
  )
}
