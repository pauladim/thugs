import SectionHeader from '../components/SectionHeader.jsx'
import CTASection from '../components/CTASection.jsx'
import { PhotoPlaceholder } from '../components/Motif.jsx'
import { missionVision, values, team } from '../data/siteContent.js'

export default function About() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink py-20 sm:py-24">
        <img
          src="/books.jpeg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-ink/70" aria-hidden="true" />
        <div className="container-page relative z-10 max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.14em] text-rust">About us</span>
          <h1 className="mt-5 font-display text-[2.4rem] leading-[1.1] text-cream sm:text-[3rem]">
            We started with a simple refusal to let a label decide someone&rsquo;s future.
          </h1>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* <PhotoPlaceholder motif="weave" label="Replace with founding story photo" className="h-72 w-full lg:h-full" /> */}
          <img src="/wakacom.jpeg" alt="" />
          <div className="flex flex-col gap-6">
            <SectionHeader eyebrow="Our story" heading="Where this began." />
            <p className="max-w-prose text-[16px] leading-relaxed text-ink/70">{missionVision.story}</p>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-sand py-20 sm:py-24">
        <div className="container-page grid gap-12 sm:grid-cols-2">
          <div className="flex flex-col gap-4 border-l-2 border-rust pl-6">
            <h2 className="font-display text-2xl text-ink">Mission</h2>
            <p className="text-[16px] leading-relaxed text-ink/70">{missionVision.mission}</p>
          </div>
          <div className="flex flex-col gap-4 border-l-2 border-pine pl-6">
            <h2 className="font-display text-2xl text-ink">Vision</h2>
            <p className="text-[16px] leading-relaxed text-ink/70">{missionVision.vision}</p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-page flex flex-col gap-12">
          <SectionHeader eyebrow="What we stand for" heading="Our values" />
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="flex flex-col gap-2">
                <h3 className="font-display text-lg text-ink">{value.title}</h3>
                <p className="text-[15px] leading-relaxed text-ink/65">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-ink py-20 sm:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeader eyebrow="How we work" heading="Our approach" tone="light" />
          <p className="max-w-prose text-[16px] leading-relaxed text-cream/80">{missionVision.approach}</p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-page flex flex-col gap-12">
          <SectionHeader eyebrow="-The People" heading="Leadership Team" />
          <div className="mx-auto grid w-full max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="flex flex-col gap-4">
                <div className="relative mx-auto aspect-square w-52 max-w-full overflow-hidden rounded-full bg-ink">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      className="h-full w-full object-cover"
                      onError={(event) => {
                        event.currentTarget.style.display = 'none'
                        event.currentTarget.nextElementSibling?.classList.remove('hidden')
                      }}
                    />
                  ) : null}
                  <PhotoPlaceholder
                    motif="rings"
                    label="Team photo coming soon"
                    className={`absolute inset-0 h-full w-full rounded-full ${member.image ? 'hidden' : ''}`}
                  />
                </div>
                <div>
                  <p className="font-display text-lg text-ink">{member.name}</p>
                  <p className="text-sm text-ink/55">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Want to be part of this story?" secondaryLabel="Contact us" secondaryTo="/contact" />
    </>
  )
}
