import { useEffect, useRef } from 'react'

type P = { x: number; y: number; vx: number; vy: number; size: number }

export default function ParticleField() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current; if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let w = (canvas.width = window.innerWidth)
    let h = (canvas.height = window.innerHeight)
    const mouse = { x: w / 2, y: h / 2 }
    const pts: P[] = Array.from({ length: 100 }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.42,
      vy: (Math.random() - 0.5) * 0.42,
      size: Math.random() * 1.8 + 0.8,
    }))
    const resize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight }
    const move   = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY }
    let raf: number
    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i]
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
        const dx = mouse.x - p.x, dy = mouse.y - p.y
        if (Math.hypot(dx, dy) < 160) { p.x -= dx * 0.00085; p.y -= dy * 0.00085 }
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(160,210,255,0.72)'; ctx.fill()
        for (let j = i + 1; j < pts.length; j++) {
          const p2 = pts[j]; const d = Math.hypot(p.x - p2.x, p.y - p2.y)
          if (d < 115) {
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(59,130,246,${(0.13 - d / 1050).toFixed(3)})`
            ctx.lineWidth = 0.8; ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(draw)
    }
    draw()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', move)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); window.removeEventListener('mousemove', move) }
  }, [])

  return <canvas ref={ref} className="pointer-events-none fixed inset-0 z-0 opacity-55" aria-hidden="true" />
}