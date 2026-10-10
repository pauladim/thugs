import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const base =
  'inline-flex items-center gap-2 rounded-sm px-6 py-3 text-[15px] font-semibold transition-colors duration-150 focus-visible:outline-none'

const variants = {
  primary: 'bg-rust text-cream hover:bg-rust-dark',
  dark: 'bg-ink text-cream hover:bg-ink/85',
  outline: 'border border-ink text-ink hover:bg-ink hover:text-cream',
  ghost: 'text-ink hover:text-rust',
  outlineLight: 'border border-cream/60 text-cream hover:bg-cream hover:text-ink',
}

/**
 * Shared button/link component.
 * `to` renders a router Link, `href` renders an anchor, otherwise a <button>.
 */
export default function Button({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  withArrow = false,
  className = '',
  ...rest
}) {
  const classes = `${base} ${variants[variant] ?? variants.primary} ${className}`

  const content = (
    <>
      {children}
      {withArrow && <ArrowUpRight size={16} strokeWidth={2.25} />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick} {...rest}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...rest}>
      {content}
    </button>
  )
}
