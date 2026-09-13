import { getBlogPostBySlug, getBlogPostSlugs } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

export async function generateStaticParams() {
  const slugs = await getBlogPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

type PageProps<T> = { params: Promise<{ slug: string }> }

export async function generateMetadata(props: PageProps<'/blog/[slug]'>): Promise<Metadata> {
  const { slug } = await props.params
  const post = await getBlogPostBySlug(slug)
  if (!post) return { title: 'Post Not Found' }
  return {
    title: post.title,
    description: post.excerpt || undefined,
    openGraph: { images: post.coverImageUrl ? [{ url: post.coverImageUrl }] : [] },
  }
}

export default async function BlogPostPage(props: PageProps<'/blog/[slug]'>) {
  const { slug } = await props.params
  const post = await getBlogPostBySlug(slug)
  if (!post || !post.publishedAt) notFound()

  // Simple markdown to HTML conversion
  const contentHtml = post.contentMarkdown
    .replace(/^# (.+)$/gm, '<h1 class="text-3xl font-light text-[#1A1A1A] mt-10 mb-4">$1</h1>')
    .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-light text-[#1A1A1A] mt-8 mb-3">$2</h2>')
    .replace(/^### (.+)$/gm, '<h3 class="text-xl font-medium text-[#1A1A1A] mt-6 mb-2">$3</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\n\n/g, '</p><p class="text-[#4A4A4A] leading-relaxed mb-4">')
    .replace(/^(?!<h[1-6])/, '<p class="text-[#4A4A4A] leading-relaxed mb-4">')

  return (
    <div className="pt-20">
      {post.coverImageUrl && (
        <div className="relative h-[50vh] min-h-[320px] overflow-hidden">
          <Image src={post.coverImageUrl} alt={post.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
      )}

      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-8">
          <p className="text-xs font-medium tracking-widest uppercase text-[#9B9B9B] mb-4">
            {new Date(post.publishedAt).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })} · {post.author}
          </p>
          <h1 className="text-3xl lg:text-5xl font-light text-[#1A1A1A] leading-tight">{post.title}</h1>
        </div>
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
        <div className="mt-16 pt-8 border-t border-gray-100">
          <Link href="/blog" className="text-sm text-[#9B9B9B] hover:text-[#1A1A1A] transition-colors">
            ← Back to Journal
          </Link>
        </div>
      </div>
    </div>
  )
}
