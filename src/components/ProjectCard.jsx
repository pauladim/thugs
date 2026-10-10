import { PhotoPlaceholder } from './Motif.jsx'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Images } from 'lucide-react'

const motifByCategory = {
  Youth: 'paths',
  Education: 'steps',
  Community: 'rings',
  Skills: 'steps',
  Outreach: 'weave',
}

export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="group flex flex-col border border-ink/10 bg-cream transition-shadow hover:shadow-[6px_6px_0_#355E3B]"
    >
      <div className="relative h-52 w-full overflow-hidden bg-ink">
        {project.image ? (
          <img
            src={project.image}
            alt=""
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(event) => {
              event.currentTarget.style.display = 'none'
              event.currentTarget.nextElementSibling?.classList.remove('hidden')
            }}
          />
        ) : null}
        <PhotoPlaceholder
          motif={motifByCategory[project.category] ?? 'paths'}
          label="Project photo coming soon"
          className={`absolute inset-0 h-full w-full ${project.image ? 'hidden' : ''}`}
        />
        {project.images?.length > 1 && (
          <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-sm bg-ink/75 px-2.5 py-1 text-xs font-semibold text-cream backdrop-blur-sm">
            <Images size={14} />
            {project.images.length} photos
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.1em] text-ink/45">
          <span>{project.category}</span>
          <span aria-hidden="true">/</span>
          <span>{project.location}</span>
          <span aria-hidden="true">/</span>
          <span>{project.date}</span>
        </div>
        <h3 className="font-display text-lg text-ink">{project.title}</h3>
        <p className="text-[15px] leading-relaxed text-ink/65">{project.summary}</p>
        <p className="text-sm text-pine">{project.impact}</p>
        <span className="mt-auto flex items-center gap-2 pt-3 text-sm font-semibold text-rust opacity-75 transition-opacity group-hover:opacity-100">
          View Project &amp; Gallery <ArrowUpRight size={16} />
        </span>
      </div>
    </Link>
  )
}
