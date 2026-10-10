import Button from './Button.jsx'

export default function CTASection({
  heading = 'Your support can become someone\u2019s next opportunity.',
  description,
  primaryLabel = 'Donate now',
  primaryTo = '/donate',
  secondaryLabel,
  secondaryTo,
}) {
  return (
    <section className="bg-pine">
      <div className="container-page flex flex-col items-start gap-8 py-16 sm:py-20 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl">
          <h2 className="font-display text-[1.9rem] leading-[1.15] text-cream sm:text-[2.4rem]">
            {heading}
          </h2>
          {description && <p className="mt-4 text-[16px] leading-relaxed text-cream/75">{description}</p>}
        </div>
        <div className="flex flex-wrap gap-4">
          <Button to={primaryTo} variant="primary">
            {primaryLabel}
          </Button>
          {secondaryLabel && (
            <Button to={secondaryTo} variant="outlineLight">
              {secondaryLabel}
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
