import { useScroll, useSpring, motion } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 22, mass: 0.18 })
  return (
    <motion.div style={{ scaleX, transformOrigin: '0%' }}
      className="fixed left-0 top-0 z-[8000] h-[3px] w-full
                 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan"
      aria-hidden="true" />
  )
}