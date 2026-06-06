import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, GraduationCap, Linkedin, Github, Send } from 'lucide-react'

export default function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    const payload = new FormData()
    payload.append('name', form.name)
    payload.append('email', form.email)
    payload.append('_replyto', form.email)
    payload.append('subject', form.subject.trim() || `Portfolio message from ${form.name}`)
    payload.append('message', form.message)
    payload.append('_subject', form.subject.trim() || `Portfolio message from ${form.name}`)
    payload.append('_captcha', 'false')
    payload.append('_template', 'table')

    try {
      const response = await fetch('https://formsubmit.co/ajax/shabbirhnadaf@gmail.com', {
        method: 'POST',
        body: payload,
        headers: { Accept: 'application/json' },
      })

      if (!response.ok) throw new Error('Message request failed')

      setStatus('sent')
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 4200)
    } catch {
      setStatus('error')
    }
  }

  const updateField = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }))
  }

  return (
    <section id="contact" className="section py-28">
      <div className="glass relative overflow-hidden rounded-[36px] p-8 md:p-14">
        <div className="pointer-events-none absolute right-0 top-0 h-52 w-52 rounded-full bg-accent-cyan/12 blur-[80px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-40 rounded-full bg-accent-purple/12 blur-[70px]" />

        <div className="relative grid gap-14 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="font-body text-xs uppercase tracking-[0.55em] text-accent-cyan">Contact</div>
            <h2 className="mt-5 font-display text-4xl font-bold text-white md:text-5xl leading-tight">
              Open to internships, placements, and software roles.
            </h2>

            <div className="mt-10 space-y-4">
              {[
                { icon: <Mail size={17} />, text: 'shabbirhnadaf@gmail.com', href: 'mailto:shabbirhnadaf@gmail.com' },
                { icon: <MapPin size={17} />, text: 'Bengaluru, Karnataka', href: '#' },
                { icon: <GraduationCap size={17} />, text: 'Nitte Meenakshi Institute of Technology', href: '#' },
              ].map(({ icon, text, href }) => (
                <a
                  key={text}
                  href={href}
                  className="flex items-center gap-3 font-body text-sm text-slate-300 transition-colors hover:text-white"
                >
                  <span className="text-accent-cyan">{icon}</span> {text}
                </a>
              ))}
            </div>

            <div className="mt-10 flex gap-4">
              {[
                { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/shabbir-husensab-nadaf-4a3959341', label: 'LinkedIn' },
                { icon: <Github size={18} />, href: 'https://github.com/shabbirhnadaf', label: 'GitHub' },
                { icon: <Mail size={18} />, href: 'mailto:shabbirhnadaf@gmail.com', label: 'Email' },
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  data-magnetic
                  aria-label={label}
                  className="glass flex h-12 w-12 items-center justify-center rounded-full text-slate-300 transition-all hover:text-white hover:border-white/20"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            className="grid gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                required
                value={form.name}
                onChange={updateField('name')}
                placeholder="Your name"
                className="rounded-2xl border border-white/8 bg-white/5 px-5 py-4 font-body text-sm text-white outline-none placeholder:text-slate-600 focus:border-accent-cyan/55 transition-colors"
              />
              <input
                required
                type="email"
                value={form.email}
                onChange={updateField('email')}
                placeholder="Your email"
                className="rounded-2xl border border-white/8 bg-white/5 px-5 py-4 font-body text-sm text-white outline-none placeholder:text-slate-600 focus:border-accent-cyan/55 transition-colors"
              />
            </div>

            <input
              value={form.subject}
              onChange={updateField('subject')}
              placeholder="Subject / Role"
              className="rounded-2xl border border-white/8 bg-white/5 px-5 py-4 font-body text-sm text-white outline-none placeholder:text-slate-600 focus:border-accent-cyan/55 transition-colors"
            />

            <textarea
              required
              rows={6}
              value={form.message}
              onChange={updateField('message')}
              placeholder="Tell me about the role, opportunity, or collaboration you have in mind."
              className="resize-none rounded-2xl border border-white/8 bg-white/5 px-5 py-4 font-body text-sm text-white outline-none placeholder:text-slate-600 focus:border-accent-cyan/55 transition-colors"
            />

            <button
              type="submit"
              disabled={status === 'sending'}
              data-magnetic
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan px-7 py-4 font-body text-sm font-semibold text-white shadow-glow transition-all hover:shadow-glow-cyan disabled:cursor-not-allowed disabled:opacity-65"
            >
              {status === 'sending' && 'Sending...'}
              {status === 'sent' && 'Message sent!'}
              {status === 'error' && 'Try again'}
              {status === 'idle' && <><Send size={15} /> Send message</>}
            </button>

            {status === 'error' && (
              <p className="font-body text-sm text-red-300">
                Message could not be sent. Please email me at shabbirhnadaf@gmail.com.
              </p>
            )}
            {status === 'sent' && (
              <p className="font-body text-sm text-emerald-300">
                Thanks. Your message has been sent.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
