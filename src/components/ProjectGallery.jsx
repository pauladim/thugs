import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, Images, X } from 'lucide-react'
import { PhotoPlaceholder } from './Motif.jsx'

export default function ProjectGallery({ project }) {
  const [activeIndex, setActiveIndex] = useState(null)
  const images = project.images?.length ? project.images : project.image ? [project.image] : []

  const close = () => setActiveIndex(null)
  const showPrevious = () => setActiveIndex((current) => (current - 1 + images.length) % images.length)
  const showNext = () => setActiveIndex((current) => (current + 1) % images.length)

  useEffect(() => {
    if (activeIndex === null) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') close()
      if (event.key === 'ArrowLeft') setActiveIndex((current) => (current - 1 + images.length) % images.length)
      if (event.key === 'ArrowRight') setActiveIndex((current) => (current + 1) % images.length)
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [activeIndex, images.length])

  if (!images.length) {
    return <PhotoPlaceholder motif="paths" label="Project photos coming soon" className="h-72 w-full" />
  }

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <button
            key={`${image}-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group relative aspect-[4/3] overflow-hidden bg-ink text-left"
            aria-label={`Open image ${index + 1} of ${images.length}`}
          >
            <img src={image} alt={project.captions?.[index] || `${project.title} photo ${index + 1}`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <span className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-ink/80 to-transparent px-4 pb-3 pt-8 text-sm text-cream">
              <span>{project.captions?.[index] || `Photo ${index + 1}`}</span>
              <Images size={16} />
            </span>
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-4 sm:p-8" role="dialog" aria-modal="true" aria-label="Project photo viewer" onClick={close}>
          <button type="button" onClick={close} className="absolute right-4 top-4 rounded-sm p-2 text-cream hover:bg-cream/10" aria-label="Close photo viewer"><X size={28} /></button>
          <button type="button" onClick={(event) => { event.stopPropagation(); showPrevious() }} className="absolute left-3 rounded-sm p-2 text-cream hover:bg-cream/10 sm:left-8" aria-label="Previous photo"><ArrowLeft size={28} /></button>
          <figure className="flex max-h-full max-w-5xl flex-col items-center gap-4" onClick={(event) => event.stopPropagation()}>
            <img src={images[activeIndex]} alt={project.captions?.[activeIndex] || `${project.title} photo ${activeIndex + 1}`} className="max-h-[75vh] max-w-full object-contain" />
            <figcaption className="text-center text-sm text-cream/80"><span className="block font-semibold text-cream">Image {activeIndex + 1} of {images.length}</span>{project.captions?.[activeIndex]}</figcaption>
          </figure>
          <button type="button" onClick={(event) => { event.stopPropagation(); showNext() }} className="absolute right-3 rounded-sm p-2 text-cream hover:bg-cream/10 sm:right-8" aria-label="Next photo"><ArrowRight size={28} /></button>
        </div>
      )}
    </>
  )
}