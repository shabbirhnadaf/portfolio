import { motion } from 'framer-motion'
import { CERTIFICATIONS } from '../data'

export default function CertificationsSection() {
  return (
    <section className="section py-20">
      <div className="mb-10">
        <div className="font-body text-xs uppercase tracking-[0.55em] text-accent-cyan">Certifications</div>
        <h2 className="mt-4 font-display text-4xl font-bold text-white md:text-5xl">Certifications and programs.</h2>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {CERTIFICATIONS.map((cert, i) => (
          <motion.div key={cert.title}
            className="glass cursor-default rounded-[24px] p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ rotateY: 6, scale: 1.03, rotateX: -3 }}
            transition={{ duration: 0.55, delay: i * 0.07 }}
            style={{ transformStyle: 'preserve-3d' }}>
            <div className="mb-4 text-3xl">{cert.icon}</div>
            <div className="font-body text-sm font-semibold leading-snug text-white">{cert.title}</div>
            <div className="mt-2 font-body text-xs text-slate-400">{cert.org}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
