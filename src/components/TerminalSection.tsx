import { useState } from 'react'
import { motion } from 'framer-motion'
import { TerminalSquare } from 'lucide-react'
import { TERMINAL_COMMANDS } from '../data'

export default function TerminalSection() {
  const [history, setHistory] = useState<{ type: 'cmd' | 'out'; text: string }[]>([
    { type: 'out', text: 'Welcome. Type help to see available commands.' },
  ])
  const [input, setInput] = useState('')

  const run = () => {
    const key = input.trim().toLowerCase()
    if (!key) return

    const results = TERMINAL_COMMANDS[key] || [`Command not found: "${key}". Type help.`]
    if (results[0] === '__CLEAR__') {
      setHistory([{ type: 'out', text: 'Terminal cleared.' }])
    } else {
      setHistory(prev => [
        ...prev,
        { type: 'cmd', text: key },
        ...results.map(r => ({ type: 'out' as const, text: r })),
      ])
    }

    setInput('')
  }

  return (
    <section className="section py-20">
      <motion.div
        className="glass rounded-[32px] p-8"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-5 flex items-center gap-2.5 font-body text-sm text-slate-300">
          <TerminalSquare size={17} />
          <span>interactive-terminal</span>
          <div className="ml-auto flex gap-1.5">
            {['#ff5f57', '#febc2e', '#28c840'].map(c => (
              <div key={c} className="h-3 w-3 rounded-full" style={{ background: c }} />
            ))}
          </div>
        </div>

        <div className="min-h-[280px] max-h-[360px] overflow-y-auto rounded-2xl bg-black/35 p-5 font-mono text-sm space-y-2">
          {history.map((line, i) => (
            <div key={i} className={line.type === 'cmd' ? 'text-accent-cyan' : 'text-slate-300'}>
              {line.type === 'cmd' ? `$ ${line.text}` : `> ${line.text}`}
            </div>
          ))}
        </div>

        <div className="mt-5 flex gap-3">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && run()}
            placeholder="Type a command..."
            className="flex-1 rounded-full border border-white/10 bg-white/5 px-5 py-3 font-mono text-sm text-white outline-none placeholder:text-slate-600 focus:border-accent-cyan/50 transition-colors"
            autoComplete="off"
            spellCheck={false}
          />
          <button
            onClick={run}
            data-magnetic
            className="rounded-full bg-accent-cyan px-6 py-3 font-body text-sm font-semibold text-slate-950 transition-all hover:bg-white"
          >
            Run
          </button>
        </div>
      </motion.div>
    </section>
  )
}
