import { ArrowUpRight, Building2, Heart } from 'lucide-react'

const GOFUNDME_URL = 'https://www.oncrowdr.com/explore/c/donate-to-support-drugfree20'
const CROWDR_IMAGE = '/crowdr.jpeg'
const MONIEPOINT_IMAGE = '/monieblue.jpg'

const nigerianAccount = {
  bank: 'Moniepoint MFB',
  accountName: 'Rector Pascal Foundation',
  accountNumber: '7084394859',
}

export default function Donate() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="flex flex-col gap-6">
          <span className="text-sm font-semibold uppercase tracking-[0.14em] text-pine">Donate</span>
          <h1 className="font-display text-[2.2rem] leading-[1.12] text-ink sm:text-[2.6rem]">
            Your support can become someone&rsquo;s next opportunity.
          </h1>
          <p className="max-w-prose text-[16px] leading-relaxed text-ink/70">
Thank you for your interest in supporting our outreach, rehabilitation, and awareness work. Choose one of the options below to donate and help save lives.
          </p>
          <div className="mt-2 flex items-center gap-3 text-[15px] text-ink/70">
            <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-pine/10 text-pine">
              <Heart size={17} />
            </span>
            Every contribution goes directly toward active programmes.
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="relative isolate overflow-hidden border border-ink/10 bg-cream p-6 sm:p-10">
            <img
              src={CROWDR_IMAGE}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 -z-10 h-full w-full object-cover opacity-37"
            />
            <div className="absolute inset-0 -z-10 bg-cream/75" />
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.14em] text-pine">Online donation</p>
              <h2 className="font-display text-2xl text-ink">Give through Crowdr</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/70">
                Use our OnCrowdr campaign to make a secure online donation.
              </p>
            </div>
            <a
              href={GOFUNDME_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-sm bg-rust px-5 py-3 text-sm font-semibold text-cream transition-colors hover:bg-rust-dark"
            >
              Donate OnCrowdr
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="relative isolate overflow-hidden border border-ink/10 bg-cream p-6 sm:p-10">
            <img
              src={MONIEPOINT_IMAGE}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 -z-10 h-full w-full object-cover opacity-37"
            />
            <div className="absolute inset-0 -z-10 bg-cream/75" />
            <div className="flex items-center gap-3">
              <Building2 size={19} className="text-pine" />
              <h2 className="font-display text-2xl text-ink">Nigerian bank transfer</h2>
            </div>
            <dl className="mt-5 flex flex-col gap-4 text-[15px]">
              <div className="flex justify-between gap-6 border-b border-ink/10 pb-3">
                <dt className="text-ink/60">Bank</dt>
                <dd className="text-right font-semibold text-ink">{nigerianAccount.bank}</dd>
              </div>
              <div className="flex justify-between gap-6 border-b border-ink/10 pb-3">
                <dt className="text-ink/60">Account name</dt>
                <dd className="text-right font-semibold text-ink">{nigerianAccount.accountName}</dd>
              </div>
              <div className="flex justify-between gap-6">
                <dt className="text-ink/60">Account number</dt>
                <dd className="text-right font-semibold tracking-[0.08em] text-ink">
                  {nigerianAccount.accountNumber}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
