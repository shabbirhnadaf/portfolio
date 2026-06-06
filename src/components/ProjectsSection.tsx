import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { PROJECTS } from '../data'

export default function ProjectsSection() {
  return (
    <section id="projects" className="section py-28">
      <div className="mb-14">
        <div className="font-body text-xs uppercase tracking-[0.55em] text-accent-cyan">Project Showcase</div>
        <h2 className="mt-4 font-display text-4xl font-bold text-white md:text-5xl">
          Selected projects.
        </h2>
      </div>

      <div className="grid gap-8">
        {PROJECTS.map((project, idx) => (
          <motion.article key={project.id}
            className="glass overflow-hidden rounded-[32px] border border-white/7"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1], delay: idx * 0.04 }}
            style={{ transformStyle: 'preserve-3d' }}>

            <div className="grid md:grid-cols-[0.88fr_1.12fr]">

              {/* Visual panel */}
              <div className={`relative min-h-[300px] overflow-hidden bg-gradient-to-br ${project.bgGradient} p-8`}>
                <div className="pointer-events-none absolute -left-10 top-8 h-40 w-40 rounded-full blur-3xl"
                     style={{ background: `${project.accentColor}40` }} />
                <div className="pointer-events-none absolute bottom-8 right-0 h-40 w-40 rounded-full blur-3xl"
                     style={{ background: `${project.accentColor}28` }} />

                <div className="relative flex h-full flex-col justify-between">
                  <div>
                    <div className="font-body text-xs uppercase tracking-[0.45em]"
                         style={{ color: project.accentColor }}>{project.tag}</div>
                    <h3 className="mt-5 font-display text-2xl font-bold text-white md:text-[1.75rem]">{project.title}</h3>
                    <p className="mt-4 max-w-sm font-body text-sm leading-relaxed text-slate-300">{project.description}</p>
                  </div>

                  {/* Tech chips */}
                  <div className="mt-8 flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span key={tech} className="rounded-full border border-white/10 bg-black/25 px-3 py-1 font-body text-[11px] text-slate-300 backdrop-blur-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Detail panel */}
              <div className="p-8 md:p-10">
                <div className="grid gap-6 sm:grid-cols-2">
                  {[
                    { label: 'Problem',      text: project.problem       },
                    { label: 'Solution',     text: project.solution      },
                    { label: 'Architecture', text: project.architecture  },
                  ].map(({ label, text }) => (
                    <div key={label} className={label === 'Architecture' ? 'sm:col-span-2' : ''}>
                      <div className="mb-2 font-body text-[10px] uppercase tracking-[0.4em] text-slate-500">{label}</div>
                      <p className="font-body text-sm leading-relaxed text-slate-300">{text}</p>
                    </div>
                  ))}

                  <div>
                    <div className="mb-3 font-body text-[10px] uppercase tracking-[0.4em] text-slate-500">Key Achievements</div>
                    <ul className="space-y-2">
                      {project.achievements.map(a => (
                        <li key={a} className="flex items-start gap-2 font-body text-sm text-slate-300">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                                style={{ background: project.accentColor }} />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={project.github} target="_blank" data-magnetic
                     className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2.5 font-body text-sm text-white transition-all hover:bg-white/10">
                    <Github size={15} /> GitHub
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" data-magnetic
                       className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 font-body text-sm font-medium text-slate-950 transition-all hover:bg-slate-100">
                      <ExternalLink size={15} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
