export default function SectionHeader({
  eyebrow,
  heading,
  description,
  align = 'left',
  tone = 'dark',
  className = '',
}) {
  const alignClass = align === 'center' ? 'text-center items-center mx-auto' : 'text-left'
  const toneClasses = tone === 'light' ? 'text-cream' : 'text-ink'
  const eyebrowTone = tone === 'light' ? 'text-cream/70' : 'text-pine'

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignClass} ${className}`}>
      {eyebrow && (
        <span className={`text-sm font-semibold uppercase tracking-[0.14em] ${eyebrowTone}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`font-display text-[2rem] leading-[1.1] sm:text-[2.6rem] ${toneClasses}`}>
        {heading}
      </h2>
      {description && (
        <p className={`text-[17px] leading-relaxed ${tone === 'light' ? 'text-cream/80' : 'text-ink/70'}`}>
          {description}
        </p>
      )}
    </div>
  )
}
