import { useCallback, useEffect, useState } from 'react'
import CustomCursor from './components/CustomCursor'
import ParticleField from './components/ParticleField'
import ScrollProgress from './components/ScrollProgress'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import StorySection from './components/StorySection'
import SkillsGalaxy from './components/SkillsGalaxy'
import ProjectsSection from './components/ProjectsSection'
import StatsSection from './components/StatsSection'
import CertificationsSection from './components/CertificationsSection'
// import GitHubSection from './components/GitHubSection'
// import DSASection from './components/DSASection'
// import TerminalSection from './components/TerminalSection'
import ContactSection from './components/ContactSection'
import { ROTATING_TITLES } from './data'

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const [titleIndex, setTitleIndex] = useState(0)
  const handleLoaded = useCallback(() => setLoaded(true), [])

  useEffect(() => {
    const id = setInterval(() => {
      setTitleIndex(prev => (prev + 1) % ROTATING_TITLES.length)
    }, 2400)

    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative overflow-x-hidden">
      {!loaded && <LoadingScreen onDone={handleLoaded} />}

      <CustomCursor />
      <ParticleField />
      <ScrollProgress />

      <Navbar />

      <main className="relative z-10 pb-28" role="main">
        <HeroSection titleIndex={titleIndex} />
        <StorySection />
        <SkillsGalaxy />
        <ProjectsSection />
        <StatsSection />
        <CertificationsSection />
        {/* <GitHubSection /> */}
        {/* <DSASection /> */}
        {/* <TerminalSection /> */}
        <ContactSection />
      </main>

      <footer className="section border-t border-white/6 py-8 text-center">
        <p className="font-body text-xs text-slate-500">
          Built with React, TypeScript, Three.js, Framer Motion, and GSAP
          <br className="sm:hidden" />
          <span className="hidden sm:inline"> - </span>
          {new Date().getFullYear()} Shabbir Husensab Nadaf
        </p>
      </footer>
    </div>
  )
}
