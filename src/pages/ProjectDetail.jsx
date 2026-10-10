import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, MapPin, MessageCircle } from 'lucide-react'
import Button from '../components/Button.jsx'
import CTASection from '../components/CTASection.jsx'
import ProjectGallery from '../components/ProjectGallery.jsx'
import { PhotoPlaceholder } from '../components/Motif.jsx'
import { projects } from '../data/projects.js'
import { org } from '../data/siteContent.js'

export default function ProjectDetail() {
  const { id } = useParams()
  const projectIndex = projects.findIndex((project) => project.id === id)
  const project = projects[projectIndex]

  if (!project) {
    return <section className="container-page py-24"><h1 className="font-display text-3xl text-ink">Project not found.</h1><Button to="/projects" className="mt-6">Browse projects</Button></section>
  }

  const nextProject = projects[(projectIndex + 1) % projects.length]
  const whatsappUrl = `https://wa.me/${org.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent('Hello, I would like to order DrugFree20 merchandise. Please share the available items, sizes, and prices.')}`

  return (
    <>
      <section className="bg-ink py-12 sm:py-16"><div className="container-page"><Link to="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-cream/70 hover:text-cream"><ArrowLeft size={16} /> Back to all projects</Link><div className="mt-12 max-w-4xl"><span className="text-sm font-semibold uppercase tracking-[0.14em] text-rust">{project.category}</span><h1 className="mt-4 font-display text-[2.5rem] leading-[1.08] text-cream sm:text-[4rem]">{project.title}</h1><div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-cream/65"><span className="inline-flex items-center gap-2"><MapPin size={15} /> {project.location}</span><span>{project.date}</span></div></div></div></section>
      <section className="py-12 sm:py-16"><div className="container-page"><div className="relative aspect-[16/8] overflow-hidden bg-ink">{project.image ? <img src={project.image} alt="" className="h-full w-full object-cover" /> : <PhotoPlaceholder motif="paths" className="h-full w-full" />}</div><div className="mt-8 border-l-2 border-rust bg-sand p-6 sm:p-8"><p className="text-xs font-bold uppercase tracking-[0.14em] text-rust">Impact</p><p className="mt-3 max-w-3xl font-display text-xl leading-snug text-ink sm:text-2xl">{project.impact}</p>{project.id === 'DrugFree20-Merch' && <div className="mt-6"><Button href={whatsappUrl} target="_blank" rel="noreferrer" variant="primary"><MessageCircle size={18} /> Send a DM to order on WhatsApp</Button></div>}</div></div></section>
      <section className="border-y border-ink/10 py-16 sm:py-20"><div className="container-page grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20"><div><p className="text-sm font-semibold uppercase tracking-[0.14em] text-rust">The work</p><h2 className="mt-4 font-display text-3xl text-ink">Making room for change.</h2><p className="mt-6 max-w-prose text-[16px] leading-relaxed text-ink/70">{project.description}</p><h3 className="mt-10 font-display text-2xl text-ink">What we did</h3><p className="mt-4 max-w-prose text-[16px] leading-relaxed text-ink/70">{project.summary}</p></div><div className="bg-pine p-7 text-cream sm:p-9"><p className="text-sm font-semibold uppercase tracking-[0.14em] text-rust-light">Key objectives</p><ul className="mt-6 space-y-5">{project.objectives.map((objective) => <li key={objective} className="border-b border-cream/15 pb-5 text-[15px] leading-relaxed">{objective}</li>)}</ul><p className="mt-8 text-sm text-cream/65"><span className="font-semibold text-cream">Timeline:</span> {project.timeline}</p></div></div></section>
      <section className="py-16 sm:py-20"><div className="container-page"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-sm font-semibold uppercase tracking-[0.14em] text-rust">In the field</p><h2 className="mt-3 font-display text-3xl text-ink">Project gallery</h2></div><p className="text-sm text-ink/55">Click any image to view it full screen.</p></div><div className="mt-8"><ProjectGallery project={project} /></div></div></section>
      <section className="border-t border-ink/10 py-12"><div className="container-page flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-sm text-ink/55">Next project</p><h2 className="mt-2 font-display text-2xl text-ink">{nextProject.title}</h2></div><Link to={`/projects/${nextProject.id}`} className="inline-flex items-center gap-2 font-semibold text-rust hover:text-rust-dark">View next project <ArrowRight size={17} /></Link></div></section>
      <CTASection heading="Help us keep showing up." description="Your support funds outreach, education, and practical recovery pathways for more people." secondaryLabel="Browse all projects" secondaryTo="/projects" />
    </>
  )
}