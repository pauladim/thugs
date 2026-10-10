export default function StatCard({ value, label, tone = 'dark' }) {
  const valueTone = tone === 'light' ? 'text-cream' : 'text-ink'
  const labelTone = tone === 'light' ? 'text-cream/60' : 'text-ink/55'

  return (
    <div className="flex flex-col gap-1.5 border-l-2 border-rust pl-5">
      <span className={`font-display text-[2.6rem] leading-none ${valueTone}`}>{value}</span>
      <span className={`text-[15px] ${labelTone}`}>{label}</span>
    </div>
  )
}
