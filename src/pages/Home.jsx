import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '../components/Button.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import StatCard from '../components/StatCard.jsx'
import ProgramCard from '../components/ProgramCard.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import Testimonial from '../components/Testimonial.jsx'
import CTASection from '../components/CTASection.jsx'
import { stats, testimonial } from '../data/siteContent.js'
import { programs } from '../data/programs.js'
import { projects } from '../data/projects.js'

const heroReveal = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-ink">
        <div className="container-page grid gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-24">
          <div className="flex flex-col justify-center gap-7">
            <motion.span
              initial="hidden"
              animate="show"
              custom={0}
              variants={heroReveal}
              className="text-sm font-semibold uppercase tracking-[0.14em] text-rust"
            >
              We Are Not Thugs
            </motion.span>
            <motion.h1
              initial="hidden"
              animate="show"
              custom={1}
              variants={heroReveal}
              className="font-display text-[2.6rem] leading-[1.06] text-cream sm:text-[3.4rem] lg:text-[3.8rem]"
            >
              We are not thugs. We are people with potential.
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="show"
              custom={2}
              variants={heroReveal}
              className="max-w-[46ch] text-[17px] leading-relaxed text-cream/75"
            >
             We Are
Not Thugs.
We Are Human.
Breaking stigma, challenging stereotypes, providing a platform for storytelling and offering access to rehabilitation, recovery and reintegration. ONE LIFE AT A TIME
            </motion.p>
            <motion.div initial="hidden" animate="show" custom={3} variants={heroReveal} className="flex flex-wrap gap-4 pt-2">
              <Button to="/donate" variant="primary">
                Donate now
              </Button>
              <Button to="/about" variant="outlineLight">
                Learn about us
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* <PhotoPlaceholder
              motif="paths"
              label="Replace with hero photography"
              className="h-[340px] w-full sm:h-[420px] lg:h-full lg:min-h-[440px]"
            /> */}
            <img src="homethug.jpeg" alt="" />
          </motion.div>
        </div>
      </section>

      {/* IMPACT INTRO */}
      <section className="py-20 sm:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeader eyebrow="Our purpose" heading="Breaking the chain of stigma, changing the stereotypes and reclaiming lives" />
          <p className="max-w-prose text-[17px] leading-relaxed text-ink/70 lg:pt-2">
            At the WE ARE NOT THUG INITIATIVE, our mission is to empower marginalized individuals, particularly those living on the streets, by providing a platform for storyteling, empowerment, and reintegration into society. We strive to provide access to resources, skills training, and support services that enable individuals to rebuild their lives with dignity.
          </p>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="border-y border-ink/10 bg-sand py-16 sm:py-20">
        <div className="container-page grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-20 sm:py-24">
        <div className="container-page flex flex-col gap-12">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeader eyebrow="What we do" heading="Programs That Transform." />
            <Button to="/programs" variant="ghost" withArrow>
              View all programs
            </Button>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {programs.slice(0, 6).map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="bg-ink py-20 sm:py-24">
        <div className="container-page flex flex-col gap-12">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeader
              eyebrow="On the ground"
              heading="Featured projects"
              tone="light"
            />
            <Button to="/projects" variant="outlineLight" withArrow>
              View all projects
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-20 sm:py-24">
        <div className="container-page">
          <Testimonial {...testimonial} />
        </div>
      </section>

      {/* WHY WE DO THIS */}
      <section className="bg-pine py-20 sm:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeader
            eyebrow="Why we do this"
            heading="People are not the worst thing they've been through."
            tone="light"
          />
          <div className="flex flex-col gap-6 text-[16px] leading-relaxed text-cream/85">
            <p>
              A label follows people long after the circumstances that created it have changed. We see
              past the label to the potential, the resilience and the future still ahead.
            </p>
            <p>
              That means looking for opportunity where others see only risk, and building community where
              others see only judgment. It means measuring change over years, not headlines.
            </p>
            <Link
              to="/about"
              className="inline-flex w-fit items-center gap-2 border-b border-cream/40 pb-1 text-[15px] font-semibold text-cream hover:border-cream"
            >
              Read our story
            </Link>
          </div>
        </div>
      </section>

      {/* DONATION CTA */}
      <CTASection description="Every contribution helps fund mentorship, training and the everyday support that adds up to a different future." />
    </>
  )
}
