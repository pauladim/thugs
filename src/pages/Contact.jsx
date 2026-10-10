import { Mail, Phone, MapPin } from 'lucide-react'
import ContactForm from '../components/ContactForm.jsx'
import { org } from '../data/siteContent.js'

const details = [
  { icon: Mail, label: 'Email', value: org.email },
  { icon: Phone, label: 'Phone', value: org.phone },
  { icon: MapPin, label: 'Address', value: org.address },
  // { icon: Clock, label: 'Office hours', value: org.officeHours },
]

export default function Contact() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink py-20 sm:py-24">
        <img
          src="/contact.jpeg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-38"
        />
        <div className="absolute inset-0 bg-ink/80" aria-hidden="true" />
        <div className="container-page relative z-10 max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.14em] text-rust">Get In Touch</span>
          <h1 className="mt-5 font-display text-[2.4rem] leading-[1.1] text-cream sm:text-[3rem]">
            Join the Conversation.
Be Part of the Change.
          </h1>
          <p className="mt-5 max-w-prose text-[16px] leading-relaxed text-cream/75">
           Whether you want to volunteer, partner, donate, or simply connect, we want to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="flex flex-col gap-8">
            <ul className="flex flex-col gap-6">
              {details.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-pine/10 text-pine">
                    <Icon size={17} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{label}</p>
                    <p className="text-[15px] text-ink/65">{value}</p>
                  </div>
                </li>
              ))}
            </ul>
            {/* <PhotoPlaceholder motif="rings" label="Replace with an embedded map" className="h-64 w-full" /> */}
          </div>

          <div className="border border-ink/10 bg-cream p-6 sm:p-10">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
