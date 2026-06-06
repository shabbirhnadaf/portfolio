import { useEffect, useRef } from 'react'
import gsap from 'gsap'

interface Props {
  children: React.ReactNode
  href: string
  variant?: 'primary' | 'ghost'
  target?: string
  rel?: string
  className?: string
}

export default function MagneticButton({ children, href, variant = 'ghost', target, rel, className = '' }: Props) {
  const ref = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const el = ref.current; if (!el) return
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect()
      gsap.to(el, { x: (e.clientX - r.left - r.width / 2) * 0.14, y: (e.clientY - r.top - r.height / 2) * 0.14, duration: 0.28, ease: 'power3.out' })
    }
    const onLeave = () => gsap.to(el, { x: 0, y: 0, duration: 0.4, ease: 'elastic.out(1, 0.5)' })
    el.addEventListener('mousemove', onMove); el.addEventListener('mouseleave', onLeave)
    return () => { el.removeEventListener('mousemove', onMove); el.removeEventListener('mouseleave', onLeave) }
  }, [])

  const styles = {
    primary: 'bg-gradient-to-r from-accent-blue to-accent-cyan text-white shadow-glow hover:shadow-glow-cyan',
    ghost:   'glass text-slate-100 hover:border-white/18',
  }

  return (
    <a ref={ref} href={href} target={target} rel={rel} data-magnetic
       className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all duration-200 ${styles[variant]} ${className}`}>
      {children}
    </a>
  )
}