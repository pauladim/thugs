import SectionHeader from '../components/SectionHeader.jsx'
import CTASection from '../components/CTASection.jsx'
import Button from '../components/Button.jsx'
import { PhotoPlaceholder } from '../components/Motif.jsx'
import { programs } from '../data/programs.js'

const motifByCategory = {
  Youth: 'paths',
  Education: 'steps',
  Community: 'rings',
  Skills: 'steps',
  Outreach: 'weave',
}

export default function Programs() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink py-20 sm:py-24">
        <img
          src="/heropro.jpeg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-37"
        />
        <div className="absolute inset-0 bg-ink/80" aria-hidden="true" />
        <div className="container-page relative z-10 max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.14em] text-rust">Programs</span>
          <h1 className="mt-5 font-display text-[2.4rem] leading-[1.1] text-cream sm:text-[3rem]">
           Programs Built for Real Change
          </h1>
          <p className="mt-5 max-w-prose text-[16px] leading-relaxed text-cream/75">
          Every program we run was designed with our community not for it. Real needs. Real solutions.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-page flex flex-col gap-24">
          {programs.map((program, index) => (
            <div
              key={program.id}
              id={program.id}
              className={`grid gap-10 lg:grid-cols-2 lg:gap-16 ${index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
            >
              {program.image ? (
                <img
                  src={
                    program.image.startsWith('http') || program.image.startsWith('/')
                      ? program.image
                      : `/${program.image}`
                  }
                  alt={program.title}
                  className="h-64 w-full object-cover lg:h-full lg:min-h-[360px]"
                />
              ) : (
                <PhotoPlaceholder
                  motif={motifByCategory[program.category] ?? 'paths'}
                  label={`Replace with ${program.title} photo`}
                  className="h-64 w-full lg:h-full lg:min-h-[360px]"
                />
              )}


              <div className="flex flex-col gap-6">
                <SectionHeader eyebrow={program.category} heading={program.title} />
                <p className="max-w-prose text-[16px] leading-relaxed text-ink/70">{program.description}</p>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-semibold text-ink">Objectives</h3>
                    <ul className="mt-3 flex flex-col gap-2">
                      {program.objectives.map((objective) => (
                        <li key={objective} className="flex gap-2.5 text-[15px] leading-relaxed text-ink/65">
                          <span className="mt-2 h-1 w-1 flex-none rounded-full bg-rust" />
                          {objective}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col gap-5">
                    <div>
                      <h3 className="text-sm font-semibold text-ink">
                        {program.status === 'completed' ? 'Who it served' : 'Who it serves'}
                      </h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-ink/65">{program.servesWho}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-ink">
                        {program.status === 'completed' ? 'How it worked' : 'How it works'}
                      </h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-ink/65">{program.howItWorks}</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-ink/10 pt-5">
                  <h3 className="text-sm font-semibold text-ink">
                    {program.status === 'completed' ? 'Impact' : 'Expected impact'}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-pine">{program.expectedImpact}</p>
                </div>

                <Button to="/contact" variant="dark" className="w-fit" withArrow>
                  Get involved with this programme
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection heading="Help fund a programme from start to finish." />
    </>
  )
}
