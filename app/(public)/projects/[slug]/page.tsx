import { getProjectBySlug, getProjectSlugs } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import ProjectGallery from './ProjectGallery'

export const dynamic = 'force-dynamic'

export async function generateStaticParams() {
  const slugs = await getProjectSlugs()
  return slugs.map((slug) => ({ slug }))
}

type PageProps<T> = { params: Promise<{ slug: string }> }

export async function generateMetadata(props: PageProps<'/projects/[slug]'>): Promise<Metadata> {
  const { slug } = await props.params
  const project = await getProjectBySlug(slug)
  if (!project) return { title: 'Project Not Found' }
  return {
    title: project.title,
    description: project.description,
    openGraph: { images: [{ url: project.coverImageUrl }] },
  }
}

export default async function ProjectDetailPage(props: PageProps<'/projects/[slug]'>) {
  const { slug } = await props.params
  const project = await getProjectBySlug(slug)
  if (!project) notFound()

  const galleryImages = Array.isArray(project.galleryImageUrls) ? project.galleryImageUrls as string[] : []

  return (
    <div className="pt-20">
      {/* Hero image */}
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src={project.coverImageUrl}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex gap-4 text-xs font-medium tracking-widest uppercase text-white/70 mb-3">
            <span>{project.year}</span>
            <span>·</span>
            <span>{project.location}</span>
            <span>·</span>
            <span>{project.status === 'COMPLETED' ? 'Completed' : 'Ongoing'}</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-light text-white">{project.title}</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-[#9B9B9B] mb-4">About the Project</p>
          </div>
          <div>
            <p className="text-lg text-[#4A4A4A] leading-relaxed">{project.description}</p>
          </div>
        </div>

        {/* Gallery */}
        {galleryImages.length > 0 && (
          <div className="mb-16">
            <p className="text-xs font-medium tracking-widest uppercase text-[#9B9B9B] mb-8">Gallery</p>
            <ProjectGallery images={galleryImages} title={project.title} />
          </div>
        )}

        {/* Back link */}
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-[#9B9B9B] hover:text-[#1A1A1A] transition-colors">
          ← Back to Projects
        </Link>
      </div>
    </div>
  )
}
