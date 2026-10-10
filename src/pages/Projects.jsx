import { useMemo, useState } from 'react'
import ProjectCard from '../components/ProjectCard.jsx'
import { projectCategories, projects } from '../data/projects.js'

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return projects
    return projects.filter((project) => project.category === activeCategory)
  }, [activeCategory])

  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink py-20 sm:py-24">
        <img
          src="/jecthero.jpeg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-37"
        />
        <div className="absolute inset-0 bg-ink/70" aria-hidden="true" />
        <div className="container-page relative z-10 max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.14em] text-rust">Projects</span>
          <h1 className="mt-5 font-display text-[2.4rem] leading-[1.1] text-cream sm:text-[3rem]">
            Work That Moves Mountains
          </h1>
          <p className="mt-5 max-w-prose text-[16px] leading-relaxed text-cream/75">
            From grassroots campaigns to policy reform, here is where our values become action.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-page flex flex-col gap-10">
          <div className="flex flex-wrap gap-3" role="group" aria-label="Filter projects by category">
            {projectCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={`rounded-sm border px-4 py-2 text-sm font-semibold transition-colors ${
                  activeCategory === category
                    ? 'border-ink bg-ink text-cream'
                    : 'border-ink/15 text-ink/70 hover:border-ink/40'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {filtered.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <p className="py-16 text-center text-[15px] text-ink/55">
              No projects in this category yet — check back soon.
            </p>
          )}
        </div>
      </section>
    </>
  )
}
