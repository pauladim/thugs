import { useState } from 'react'
import { Check, Loader2 } from 'lucide-react'
import { donationAmountsNaira } from '../data/siteContent.js'
import Button from './Button.jsx'

const PAYSTACK_PUBLIC_KEY = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY

function formatNaira(amount) {
  return `\u20a6${amount.toLocaleString('en-NG')}`
}

/**
 * Loads the Paystack inline script once and resolves when it's ready.
 * Paystack integration reference: https://paystack.com/docs/payments/accept-payments/
 */
function loadPaystackScript() {
  return new Promise((resolve, reject) => {
    if (window.PaystackPop) {
      resolve(window.PaystackPop)
      return
    }
    const script = document.createElement('script')
    script.src = 'https://js.paystack.co/v1/inline.js'
    script.onload = () => resolve(window.PaystackPop)
    script.onerror = () => reject(new Error('Could not load the payment provider. Please try again.'))
    document.body.appendChild(script)
  })
}

export default function DonationForm() {
  const [frequency, setFrequency] = useState('one-time')
  const [amount, setAmount] = useState(donationAmountsNaira[1])
  const [customAmount, setCustomAmount] = useState('')
  const [useCustom, setUseCustom] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorText, setErrorText] = useState('')

  const finalAmount = useCustom ? Number(customAmount) : amount

  function validate() {
    const next = {}
    if (!name.trim()) next.name = 'Enter your full name.'
    if (!email.trim()) {
      next.email = 'Enter your email address.'
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      next.email = 'Enter a valid email address.'
    }
    if (!finalAmount || finalAmount <= 0) next.amount = 'Choose or enter an amount greater than zero.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function handleSubmit(event) {
    event.preventDefault()
    if (!validate()) return

    setStatus('loading')
    setErrorText('')

    try {
      if (!PAYSTACK_PUBLIC_KEY || PAYSTACK_PUBLIC_KEY.includes('replace_with_real_key')) {
        // No live key configured yet — this is expected until the
        // organisation adds VITE_PAYSTACK_PUBLIC_KEY in .env
        throw new Error(
          'Online payment isn\u2019t connected yet. Once a Paystack public key is added to .env, this form will open the secure checkout automatically.'
        )
      }

      const PaystackPop = await loadPaystackScript()
      const handler = PaystackPop.setup({
        key: PAYSTACK_PUBLIC_KEY,
        email,
        amount: Math.round(finalAmount * 100), // kobo
        currency: 'NGN',
        metadata: {
          custom_fields: [
            { display_name: 'Donor name', variable_name: 'donor_name', value: name },
            { display_name: 'Frequency', variable_name: 'frequency', value: frequency },
            { display_name: 'Message', variable_name: 'message', value: message || 'N/A' },
          ],
        },
        callback: () => setStatus('success'),
        onClose: () => setStatus('idle'),
      })
      handler.openIframe()
    } catch (err) {
      setStatus('error')
      setErrorText(err.message)
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-start gap-3 border border-pine/30 bg-pine/5 p-8">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-pine text-cream">
          <Check size={18} />
        </span>
        <h3 className="font-display text-xl text-ink">Thank you.</h3>
        <p className="max-w-md text-[15px] leading-relaxed text-ink/70">
          Your donation is on its way to becoming someone&rsquo;s next opportunity. A confirmation has been
          sent to {email}.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8">
      <fieldset>
        <legend className="mb-3 text-sm font-semibold text-ink">Frequency</legend>
        <div className="flex gap-3">
          {['one-time', 'monthly'].map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setFrequency(option)}
              aria-pressed={frequency === option}
              className={`flex-1 rounded-sm border px-4 py-3 text-sm font-semibold capitalize transition-colors ${
                frequency === option
                  ? 'border-ink bg-ink text-cream'
                  : 'border-ink/15 text-ink/70 hover:border-ink/40'
              }`}
            >
              {option === 'one-time' ? 'One-time' : 'Monthly'}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="mb-3 text-sm font-semibold text-ink">Amount (NGN)</legend>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {donationAmountsNaira.map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => {
                setAmount(value)
                setUseCustom(false)
              }}
              aria-pressed={!useCustom && amount === value}
              className={`rounded-sm border px-3 py-3 text-sm font-semibold transition-colors ${
                !useCustom && amount === value
                  ? 'border-rust bg-rust text-cream'
                  : 'border-ink/15 text-ink/70 hover:border-ink/40'
              }`}
            >
              {formatNaira(value)}
            </button>
          ))}
        </div>
        <div className="mt-3">
          <label htmlFor="customAmount" className="sr-only">
            Custom amount
          </label>
          <input
            id="customAmount"
            type="number"
            min="0"
            placeholder="Or enter a custom amount"
            value={customAmount}
            onFocus={() => setUseCustom(true)}
            onChange={(e) => {
              setCustomAmount(e.target.value)
              setUseCustom(true)
            }}
            className={`w-full rounded-sm border bg-cream px-4 py-3 text-sm focus:outline-none ${
              useCustom ? 'border-rust' : 'border-ink/15'
            }`}
          />
        </div>
        {errors.amount && <p className="mt-2 text-sm text-rust-dark">{errors.amount}</p>}
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="donorName" className="mb-2 block text-sm font-semibold text-ink">
            Full name
          </label>
          <input
            id="donorName"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-sm border border-ink/15 bg-cream px-4 py-3 text-sm focus:outline-none"
            autoComplete="name"
          />
          {errors.name && <p className="mt-2 text-sm text-rust-dark">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="donorEmail" className="mb-2 block text-sm font-semibold text-ink">
            Email address
          </label>
          <input
            id="donorEmail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-sm border border-ink/15 bg-cream px-4 py-3 text-sm focus:outline-none"
            autoComplete="email"
          />
          {errors.email && <p className="mt-2 text-sm text-rust-dark">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="donorMessage" className="mb-2 block text-sm font-semibold text-ink">
          Optional message
        </label>
        <textarea
          id="donorMessage"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-sm border border-ink/15 bg-cream px-4 py-3 text-sm focus:outline-none"
        />
      </div>

      <div>
        <span className="mb-2 block text-sm font-semibold text-ink">Payment method</span>
        <p className="text-sm text-ink/60">
          Card, bank transfer and USSD via Paystack&rsquo;s secure checkout.
        </p>
      </div>

      {status === 'error' && errorText && (
        <p className="border border-rust/30 bg-rust/5 px-4 py-3 text-sm text-rust-dark">{errorText}</p>
      )}

      <Button type="submit" variant="primary" className="w-full justify-center sm:w-auto">
        {status === 'loading' ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Processing
          </>
        ) : (
          `Donate ${finalAmount ? formatNaira(finalAmount) : ''}`
        )}
      </Button>
    </form>
  )
}
