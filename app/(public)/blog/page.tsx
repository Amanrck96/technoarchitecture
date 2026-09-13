import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight, Clock, User } from 'lucide-react'
import { getBlogPosts } from '@/lib/sample-data'
import ScrollReveal from '@/components/ui/ScrollReveal'

export const metadata: Metadata = {
  title: 'Journal & Architectural Essays | Techno Architecture',
  description: 'Design essays, construction insights, and theoretical investigations from the Techno Architecture studio.',
}

export default async function BlogPage() {
  const posts = await getBlogPosts()
  const featuredPost = posts[0]
  const restPosts = posts.slice(1)

  return (
    <div className="pt-24 lg:pt-28 bg-white text-[#1A1A1A]">
      {/* Header */}
      <section className="py-16 lg:py-24 border-b border-[#E5E5E5] bg-[#FAF9F7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="flex items-center gap-3 text-[10px] uppercase font-mono tracking-[0.25em] text-[#767676] mb-4">
              <span>Techno Architecture Monograph</span>
              <span>&bull;</span>
              <span>Studio Journal</span>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light text-[#1A1A1A] tracking-tight">
                  Studio Journal
                </h1>
                <p className="mt-4 text-base sm:text-lg text-[#4A4A4A] font-light max-w-xl">
                  Essays exploring building physics, material honesty, craftsmanship, and the evolution of subcontinental urbanism.
                </p>
              </div>
              <div className="text-xs font-mono text-[#767676] uppercase tracking-widest">
                [ Published Volumes: {posts.length} Essays ]
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Lead Story */}
      {featuredPost && (
        <section className="py-16 lg:py-20 border-b border-[#E5E5E5]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <ScrollReveal direction="up">
              <Link href={`/blog/${featuredPost.slug}`} className="group block">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  <div className="lg:col-span-7">
                    <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 border border-[#E5E5E5]">
                      <Image
                        src={featuredPost.coverImageUrl}
                        alt={featuredPost.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        priority
                      />
                    </div>
                  </div>

                  <div className="lg:col-span-5 space-y-4">
                    <div className="flex items-center gap-4 text-xs font-mono text-[#767676]">
                      <span>{featuredPost.publishedAt}</span>
                      <span>&bull;</span>
                      <span>{featuredPost.readingTime}</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-serif font-light text-[#1A1A1A] group-hover:text-[#4A4A4A] transition-colors leading-tight">
                      {featuredPost.title}
                    </h2>

                    <p className="text-sm text-[#4A4A4A] font-light leading-relaxed line-clamp-3">
                      {featuredPost.excerpt}
                    </p>

                    <div className="pt-4 flex items-center justify-between border-t border-[#E5E5E5]">
                      <div className="text-xs">
                        <span className="font-semibold text-[#1A1A1A] block">{featuredPost.author}</span>
                        <span className="text-[#767676] text-[11px] font-mono">{featuredPost.authorRole}</span>
                      </div>
                      <span className="inline-flex items-center gap-2 text-xs uppercase font-semibold tracking-wider text-[#1A1A1A] group-hover:gap-3 transition-all">
                        <span>Read Essay</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Grid of Other Articles */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {restPosts.map((post, i) => (
            <ScrollReveal key={post.id} direction="up" delay={i * 0.1}>
              <Link href={`/blog/${post.slug}`} className="group block flex flex-col justify-between h-full border-b border-[#E5E5E5] pb-10">
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 mb-6 border border-[#E5E5E5]">
                    <Image
                      src={post.coverImageUrl}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono text-[#767676] mb-3">
                    <span>{post.publishedAt}</span>
                    <span>&bull;</span>
                    <span>{post.readingTime}</span>
                  </div>

                  <h3 className="text-2xl font-serif font-normal text-[#1A1A1A] group-hover:text-[#4A4A4A] transition-colors leading-snug mb-3">
                    {post.title}
                  </h3>

                  <p className="text-xs text-[#4A4A4A] font-light leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#E5E5E5]/60 flex items-center justify-between text-xs">
                  <span className="text-[#767676] font-mono text-[11px]">{post.author}</span>
                  <span className="inline-flex items-center gap-1.5 font-semibold uppercase tracking-wider text-[#1A1A1A]">
                    <span>Read Essay</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  )
}
