import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function ProgramCard({ program }) {
  return (
    <Link
      to="/programs"
      className="group relative isolate flex flex-col justify-between gap-8 overflow-hidden border border-ink/10 bg-cream p-7 transition-colors hover:border-ink/25"
    >
      {program.image ? (
        <>
          <img
            src={program.image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 -z-10 h-full w-full object-cover opacity-37 transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 -z-10 bg-cream/80" />
        </>
      ) : null}
      <div className="relative flex flex-col gap-3">
        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-pine">
          {program.category}
        </span>
        <h3 className="font-display text-xl text-ink">{program.title}</h3>
        <p className="text-[15px] leading-relaxed text-ink/65">{program.summary}</p>
      </div>
      <span className="relative inline-flex items-center gap-1.5 text-sm font-semibold text-ink group-hover:text-rust">
        Learn more
        <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  )
}
