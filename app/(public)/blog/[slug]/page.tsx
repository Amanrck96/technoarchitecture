import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowLeft, ArrowRight, Clock, User, Share2 } from 'lucide-react'
import { getBlogPostBySlug, getBlogPostSlugs, getBlogPosts } from '@/lib/sample-data'
import ScrollReveal from '@/components/ui/ScrollReveal'

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await getBlogPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { slug } = await props.params
  const post = await getBlogPostBySlug(slug)
  if (!post) return { title: 'Essay Not Found | Techno Architecture' }

  return {
    title: `${post.title} | Techno Architecture Journal`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.coverImageUrl }],
    },
  }
}

export default async function BlogPostPage(props: PageProps) {
  const { slug } = await props.params
  const post = await getBlogPostBySlug(slug)
  if (!post) notFound()

  const allPosts = await getBlogPosts()
  const otherPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 2)

  return (
    <div className="pt-24 lg:pt-28 bg-white text-[#1A1A1A]">
      {/* Return to Journal Sub-nav */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-6 border-b border-[#E5E5E5] flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#767676]">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 hover:text-[#1A1A1A] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Journal Index</span>
        </Link>
        <span>Vol. {post.readingTime}</span>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <header className="space-y-6 mb-12">
          <div className="flex items-center gap-4 text-xs font-mono text-[#767676]">
            <span>{post.publishedAt}</span>
            <span>&bull;</span>
            <span>{post.readingTime}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light text-[#1A1A1A] tracking-tight leading-[1.12]">
            {post.title}
          </h1>

          <div className="pt-6 border-t border-[#E5E5E5] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center font-serif text-sm">
                {post.author.charAt(0)}
              </div>
              <div>
                <span className="block text-xs font-semibold text-[#1A1A1A]">{post.author}</span>
                <span className="text-[11px] font-mono text-[#767676]">{post.authorRole}</span>
              </div>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#9B9B9B]">
              Techno Monograph
            </span>
          </div>
        </header>

        {/* Lead Cover Image */}
        <div className="relative aspect-[16/9] overflow-hidden bg-gray-100 mb-12 border border-[#E5E5E5]">
          <Image
            src={post.coverImageUrl}
            alt={post.title}
            fill
            sizes="(max-width: 1024px) 100vw, 800px"
            className="object-cover"
            priority
          />
        </div>

        {/* Article Body Content */}
        <div className="prose prose-lg max-w-none text-[#333333] font-light leading-relaxed space-y-6 text-base sm:text-lg">
          {post.contentMarkdown.split('\n\n').map((block, idx) => {
            const trimmed = block.trim()
            if (!trimmed) return null

            if (trimmed.startsWith('### ')) {
              return (
                <h3 key={idx} className="text-2xl font-serif font-normal text-[#1A1A1A] pt-6 pb-2">
                  {trimmed.replace('### ', '')}
                </h3>
              )
            }
            if (trimmed.startsWith('## ')) {
              return (
                <h2 key={idx} className="text-3xl font-serif font-normal text-[#1A1A1A] pt-8 pb-3">
                  {trimmed.replace('## ', '')}
                </h2>
              )
            }
            if (trimmed.startsWith('1. ') || trimmed.startsWith('- ')) {
              return (
                <div key={idx} className="p-6 bg-[#FAF9F7] border-l-2 border-[#1A1A1A] my-6 text-sm text-[#4A4A4A] leading-relaxed space-y-2 font-mono">
                  {trimmed}
                </div>
              )
            }
            return (
              <p key={idx} className="leading-relaxed">
                {trimmed}
              </p>
            )
          })}
        </div>

        {/* Author Bio Footer Box */}
        <div className="mt-16 p-8 bg-[#FAF9F7] border border-[#E5E5E5] flex flex-col sm:flex-row items-start gap-6">
          <div className="w-14 h-14 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center font-serif text-xl shrink-0">
            {post.author.charAt(0)}
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#1A1A1A]">
              Written by {post.author}
            </h4>
            <p className="text-xs text-[#767676] font-mono mt-0.5">{post.authorRole}</p>
            <p className="text-xs text-[#4A4A4A] font-light leading-relaxed mt-3">
              Contributing architectural thoughts from ongoing commissions and academic investigations at the Techno Architecture studio.
            </p>
          </div>
        </div>
      </article>

      {/* Suggested Next Reading */}
      {otherPosts.length > 0 && (
        <section className="py-16 border-t border-[#E5E5E5] bg-[#FAF9F7]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1A1A1A] mb-8">
              Further Essays in this Series
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {otherPosts.map((p) => (
                <Link key={p.id} href={`/blog/${p.slug}`} className="group block space-y-3 bg-white p-6 border border-[#E5E5E5] hover:border-[#1A1A1A] transition-colors">
                  <span className="text-[10px] font-mono text-[#767676] uppercase tracking-wider">{p.readingTime}</span>
                  <h4 className="text-lg font-serif font-normal text-[#1A1A1A] group-hover:text-[#4A4A4A] transition-colors line-clamp-2">
                    {p.title}
                  </h4>
                  <span className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-[#1A1A1A]">
                    <span>Read Essay</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
