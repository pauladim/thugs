import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Check, Loader2 } from 'lucide-react'
import Button from './Button.jsx'

const interestOptions = [
  'General Inquiry',
  'Volunteering',
  'Partnership & Sponsorship',
  'Community Outreach & Programs',
  'Rehabilitation & Medical Support',
  'Donations & Funding',
  'Media & Press',
]

const initialState = {
  name: '',
  email: '',
  phone: '',
  interest: 'General Inquiry',
  subject: '',
  message: '',
}

const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export default function ContactForm() {
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('')

  function update(field) {
    return (e) => setValues((prev) => ({ ...prev, [field]: e.target.value }))
  }

  function validate() {
    const next = {}
    if (!values.name.trim()) next.name = 'Enter your name.'
    if (!values.email.trim()) {
      next.email = 'Enter your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = 'Enter a valid email address.'
    }
    if (!values.subject.trim()) next.subject = 'Let us know what this is about.'
    if (!values.message.trim()) next.message = 'Add a short message.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!validate()) return

    setStatus('loading')
    setErrorMessage('')

    try {
      if (!emailjsServiceId || !emailjsTemplateId || !emailjsPublicKey) {
        throw new Error('Email service is not configured. Missing environment variables.')
      }

      const formattedTime = new Date().toLocaleString('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short',
      })

      const trimmedPhone = values.phone.trim()
      const formattedMessage = trimmedPhone
        ? `${values.message.trim()}\n\n---\nContact Phone: ${trimmedPhone}`
        : values.message.trim()

      const templateParams = {
        from_name: values.name.trim(),
        from_email: values.email.trim(),
        reply_to: values.email.trim(),
        interest: values.interest || 'General Inquiry',
        phone: trimmedPhone || 'Not provided',
        subject: values.subject.trim(),
        message: formattedMessage,
        time: formattedTime,
      }

      await emailjs.send(
        emailjsServiceId,
        emailjsTemplateId,
        templateParams,
        {
          publicKey: emailjsPublicKey,
        }
      )

      setStatus('success')
      setValues(initialState)
    } catch (err) {
      console.error('EmailJS submission error:', err)
      const detail = err?.text || err?.message || ''
      if (detail.includes('Invalid grant') || detail.includes('reconnect your Gmail')) {
        setErrorMessage(
          'EmailJS authentication error: The connected Gmail account has expired. Please reconnect your Gmail account in the EmailJS dashboard (Email Services > Reconnect).'
        )
      } else {
        setErrorMessage(
          'Something went wrong sending your message. Please try again or email us directly.'
        )
      }
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-start gap-3 border border-pine/30 bg-pine/5 p-8">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-pine text-cream">
          <Check size={18} />
        </span>
        <h3 className="font-display text-xl text-ink">Message sent.</h3>
        <p className="max-w-md text-[15px] leading-relaxed text-ink/70">
          Thanks for reaching out — someone from our team will reply within a few working days.
        </p>
        <Button variant="outline" onClick={() => setStatus('idle')}>
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contactName" className="mb-2 block text-sm font-semibold text-ink">
            Name
          </label>
          <input
            id="contactName"
            type="text"
            value={values.name}
            onChange={update('name')}
            className="w-full rounded-sm border border-ink/15 bg-cream px-4 py-3 text-sm focus:border-ink focus:outline-none"
            autoComplete="name"
          />
          {errors.name && <p className="mt-2 text-sm text-rust-dark">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="contactEmail" className="mb-2 block text-sm font-semibold text-ink">
            Email
          </label>
          <input
            id="contactEmail"
            type="email"
            value={values.email}
            onChange={update('email')}
            className="w-full rounded-sm border border-ink/15 bg-cream px-4 py-3 text-sm focus:border-ink focus:outline-none"
            autoComplete="email"
          />
          {errors.email && <p className="mt-2 text-sm text-rust-dark">{errors.email}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contactPhone" className="mb-2 block text-sm font-semibold text-ink">
            Phone <span className="font-normal text-ink/45">(optional)</span>
          </label>
          <input
            id="contactPhone"
            type="tel"
            value={values.phone}
            onChange={update('phone')}
            className="w-full rounded-sm border border-ink/15 bg-cream px-4 py-3 text-sm focus:border-ink focus:outline-none"
            autoComplete="tel"
          />
        </div>
        <div>
          <label htmlFor="contactInterest" className="mb-2 block text-sm font-semibold text-ink">
            Area of interest
          </label>
          <select
            id="contactInterest"
            value={values.interest}
            onChange={update('interest')}
            className="w-full rounded-sm border border-ink/15 bg-cream px-4 py-3 text-sm focus:border-ink focus:outline-none"
          >
            {interestOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="contactSubject" className="mb-2 block text-sm font-semibold text-ink">
          Subject
        </label>
        <input
          id="contactSubject"
          type="text"
          value={values.subject}
          onChange={update('subject')}
          className="w-full rounded-sm border border-ink/15 bg-cream px-4 py-3 text-sm focus:border-ink focus:outline-none"
        />
        {errors.subject && <p className="mt-2 text-sm text-rust-dark">{errors.subject}</p>}
      </div>

      <div>
        <label htmlFor="contactMessage" className="mb-2 block text-sm font-semibold text-ink">
          Message
        </label>
        <textarea
          id="contactMessage"
          rows={5}
          value={values.message}
          onChange={update('message')}
          className="w-full rounded-sm border border-ink/15 bg-cream px-4 py-3 text-sm focus:border-ink focus:outline-none"
        />
        {errors.message && <p className="mt-2 text-sm text-rust-dark">{errors.message}</p>}
      </div>

      {status === 'error' && (
        <p className="border border-rust/30 bg-rust/5 px-4 py-3 text-sm text-rust-dark">
          {errorMessage || 'Something went wrong sending your message. Please try again or email us directly.'}
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        disabled={status === 'loading'}
        className="w-full justify-center sm:w-auto"
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Sending
          </>
        ) : (
          'Send message'
        )}
      </Button>
    </form>
  )
}
