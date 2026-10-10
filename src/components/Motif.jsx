/**
 * Abstract, brand-coloured compositions used in place of real photography.
 * This site intentionally ships without stock photos — see README —
 * so every "image" slot below is a PhotoPlaceholder wrapping one of these
 * motifs. Swap in real photography by replacing the contents of
 * PhotoPlaceholder's children, or removing the wrapper entirely.
 */

const motifs = {
  // Overlapping paths suggesting people/pathways converging — used in the hero.
  paths: (
    <svg viewBox="0 0 400 480" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="480" fill="#111111" />
      <path d="M-20 480 C 80 340, 60 220, 180 40" stroke="#C65D2E" strokeWidth="3" fill="none" opacity="0.9" />
      <path d="M40 480 C 120 360, 100 240, 220 60" stroke="#C65D2E" strokeWidth="1.5" fill="none" opacity="0.55" />
      <path d="M120 480 C 180 380, 220 260, 300 100" stroke="#F6F1E7" strokeWidth="1.5" fill="none" opacity="0.4" />
      <path d="M220 480 C 260 380, 320 300, 420 160" stroke="#4C7A54" strokeWidth="3" fill="none" opacity="0.85" />
      <circle cx="180" cy="40" r="5" fill="#C65D2E" />
      <circle cx="420" cy="160" r="5" fill="#4C7A54" />
      <circle cx="300" cy="100" r="3" fill="#F6F1E7" />
    </svg>
  ),
  // Concentric rings — used for community/gathering sections.
  rings: (
    <svg viewBox="0 0 400 400" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="400" fill="#EDE4D3" />
      <circle cx="200" cy="200" r="150" fill="none" stroke="#355E3B" strokeWidth="1" opacity="0.35" />
      <circle cx="200" cy="200" r="110" fill="none" stroke="#355E3B" strokeWidth="1" opacity="0.5" />
      <circle cx="200" cy="200" r="70" fill="none" stroke="#C65D2E" strokeWidth="1.5" opacity="0.8" />
      <circle cx="200" cy="200" r="30" fill="#C65D2E" opacity="0.9" />
      <circle cx="260" cy="120" r="6" fill="#355E3B" />
      <circle cx="120" cy="270" r="6" fill="#111111" opacity="0.6" />
      <circle cx="310" cy="260" r="4" fill="#111111" opacity="0.4" />
    </svg>
  ),
  // Ascending steps — used for growth/skills sections.
  steps: (
    <svg viewBox="0 0 400 320" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="320" fill="#355E3B" />
      <rect x="40" y="240" width="70" height="60" fill="#F6F1E7" opacity="0.15" />
      <rect x="130" y="190" width="70" height="110" fill="#F6F1E7" opacity="0.3" />
      <rect x="220" y="130" width="70" height="170" fill="#C65D2E" opacity="0.9" />
      <rect x="310" y="70" width="60" height="230" fill="#F6F1E7" opacity="0.5" />
      <line x1="20" y1="240" x2="380" y2="60" stroke="#F6F1E7" strokeWidth="1" opacity="0.4" strokeDasharray="4 6" />
    </svg>
  ),
  // Woven lines — used for outreach/community-fabric sections.
  weave: (
    <svg viewBox="0 0 400 300" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill="#111111" />
      {Array.from({ length: 8 }).map((_, i) => (
        <path
          key={`h-${i}`}
          d={`M0 ${20 + i * 34} Q 200 ${i % 2 === 0 ? 60 : -20} 400 ${20 + i * 34}`}
          stroke={i % 3 === 0 ? '#C65D2E' : '#F6F1E7'}
          strokeWidth={i % 3 === 0 ? 2 : 1}
          fill="none"
          opacity={i % 3 === 0 ? 0.85 : 0.25}
        />
      ))}
    </svg>
  ),
}

export function PhotoPlaceholder({ motif = 'paths', label, className = '' }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {motifs[motif] ?? motifs.paths}
      {label && (
        <span className="pointer-events-none absolute bottom-3 left-3 rounded-sm bg-ink/60 px-2.5 py-1 text-[11px] font-medium text-cream/90 backdrop-blur-sm">
          {label}
        </span>
      )}
    </div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default motifs
