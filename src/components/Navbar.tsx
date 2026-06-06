import { motion } from 'framer-motion'

const links = [
  { label: 'Story',    href: '#story'    },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact'  },
]

export default function Navbar() {
  return (
    <motion.header className="section sticky top-4 z-[7000] mt-4"
      initial={{ opacity: 0, y: -18 }} animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}>
      <div className="glass flex items-center justify-between rounded-full px-6 py-3.5">
        <a href="#" className="flex items-center gap-2.5">
          <svg width="26" height="26" viewBox="0 0 120 120" fill="none" aria-hidden="true">
            <rect width="120" height="120" rx="28" fill="url(#lg)" />
            <path d="M34 82V38h13.5L60 59.5 72.5 38H86v44H74V57.2L60 78 46 57.2V82H34Z" fill="white" opacity="0.92" />
            <defs>
              <linearGradient id="lg" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3B82F6" /><stop offset="0.5" stopColor="#8B5CF6" /><stop offset="1" stopColor="#22D3EE" />
              </linearGradient>
            </defs>
          </svg>
          <span className="font-display text-sm font-semibold tracking-[0.35em] text-white">SHABBIR</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map(({ label, href }) => (
            <a key={label} href={href} className="font-body text-sm text-slate-300 transition-colors hover:text-white">{label}</a>
          ))}
        </nav>
        <a href="mailto:shabbirhnadaf@gmail.com" data-magnetic
           className="hidden rounded-full border border-accent-cyan/40 bg-accent-cyan/10 px-4 py-2 font-body text-sm text-accent-cyan hover:bg-accent-cyan/20 md:inline-block transition-all duration-200">
          Hire Me
        </a>
      </div>
    </motion.header>
  )
}