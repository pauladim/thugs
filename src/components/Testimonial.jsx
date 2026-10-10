
export default function Testimonial({ quote, story, name, role }) {
  return (
    <div className="grid overflow-hidden border border-ink/10 md:grid-cols-2">
      {/* <PhotoPlaceholder motif="rings" label="Replace with portrait" className="h-64 w-full md:h-full" /> */}
      <img src="/recshit.jpeg" alt="" />
      <div className="flex flex-col justify-center gap-5 bg-cream p-8 sm:p-10">
        <p className="font-display text-[1.6rem] italic leading-snug text-ink">&ldquo;{quote}&rdquo;</p>
        <p className="text-[15px] leading-relaxed text-ink/70">{story}</p>
        <div>
          <p className="text-[15px] font-semibold text-ink">{name}</p>
          <p className="text-sm text-ink/55">{role}</p>
        </div>
      </div>
    </div>
  )
}
