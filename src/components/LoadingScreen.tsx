import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function LoadingScreen({ onDone }: { onDone: () => void }) {
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let completed = false
    const finish = () => {
      if (completed) return
      completed = true
      onDone()
    }

    const fallback = window.setTimeout(finish, 3200)
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          onComplete: finish,
          defaults: { overwrite: 'auto' },
        })
        .to({}, { duration: 0.25 })
        .to('.lc', { opacity: 1, y: 0, stagger: 0.055, duration: 0.4, ease: 'power3.out' })
        .to('.lb', { scaleX: 1, duration: 0.45, ease: 'power2.inOut' }, '<+0.2')
        .to('.lt', { opacity: 1, y: 0, stagger: 0.12, duration: 0.4, ease: 'power3.out' }, '<+0.1')
        .to({}, { duration: 0.35 })
        .to(wrapRef.current, { opacity: 0, scale: 1.03, duration: 0.45, ease: 'power2.inOut' })
    }, wrapRef)

    return () => {
      window.clearTimeout(fallback)
      ctx.revert()
    }
  }, [onDone])

  return (
    <div ref={wrapRef} className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#020610] select-none">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-blue/14 blur-[90px]" />
        <div className="absolute left-1/4 top-1/4 h-[280px] w-[280px] rounded-full bg-accent-purple/10 blur-[70px]" />
      </div>
      <div className="relative z-10 flex items-center gap-[0.15em] font-display text-5xl font-bold tracking-[0.6em] text-white sm:text-7xl md:text-8xl" aria-label="Shabbir">
        {'SHABBIR'.split('').map((ch, i) => (
          <span key={i} className="lc inline-block translate-y-10 opacity-0">{ch}</span>
        ))}
      </div>
      <div className="relative z-10 mt-8 h-px w-64 overflow-hidden rounded-full bg-white/8">
        <div className="lb h-full w-full origin-left scale-x-0 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan" />
      </div>
      <div className="relative z-10 mt-10 space-y-2.5 text-center">
        {['Building Experiences', 'Engineering Solutions', 'Creating Impact'].map(line => (
          <div key={line} className="lt translate-y-4 opacity-0 font-body text-xs uppercase tracking-[0.55em] text-slate-300 sm:text-sm">
            {line}
          </div>
        ))}
      </div>
    </div>
  )
}
