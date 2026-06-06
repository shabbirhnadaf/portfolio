import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function CustomCursor() {
  const dot  = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      gsap.to(dot.current,  { x: e.clientX - 5,  y: e.clientY - 5,  duration: 0.10 })
      gsap.to(ring.current, { x: e.clientX - 24, y: e.clientY - 24, duration: 0.28, ease: 'power3.out' })
    }
    const onEnter = () => gsap.to(ring.current, { scale: 2.0, opacity: 1,   duration: 0.2 })
    const onLeave = () => gsap.to(ring.current, { scale: 1,   opacity: 0.5, duration: 0.2 })
    const onClick = () => gsap.fromTo(ring.current,
      { scale: 0.85 },
      { scale: 2.8, opacity: 0, duration: 0.5,
        onComplete: () => gsap.set(ring.current, { scale: 1, opacity: 0.5 }) })

    window.addEventListener('mousemove', onMove)
    window.addEventListener('click', onClick)
    const attach = () =>
      document.querySelectorAll('[data-magnetic]').forEach(el => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    attach()
    const obs = new MutationObserver(attach)
    obs.observe(document.body, { childList: true, subtree: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('click', onClick)
      obs.disconnect()
    }
  }, [])

  return (
    <>
      <div ref={ring} className="pointer-events-none fixed left-0 top-0 z-[9000] hidden h-12 w-12 rounded-full
                                  border border-accent-cyan/55 bg-accent-cyan/8 md:block"
           style={{ willChange: 'transform' }} />
      <div ref={dot}  className="pointer-events-none fixed left-0 top-0 z-[9001] hidden h-[10px] w-[10px] rounded-full
                                  bg-white shadow-[0_0_18px_4px_rgba(255,255,255,0.6)] md:block"
           style={{ willChange: 'transform' }} />
    </>
  )
}