import { getBlogPosts } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights, ideas, and stories from the Techno Architecture team.',
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <div className="pt-20">
      <section className="py-20 lg:py-32 max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-xs font-medium tracking-widest uppercase text-[#9B9B9B] mb-4">Ideas & Insights</p>
          <h1 className="text-4xl lg:text-6xl font-light text-[#1A1A1A] mb-16">Journal</h1>
        </ScrollReveal>

        {posts.length === 0 ? (
          <p className="text-[#9B9B9B] text-sm py-16 text-center">No posts published yet. Check back soon.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post, i) => (
              <ScrollReveal key={post.id} delay={i * 80}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  {post.coverImageUrl && (
                    <div className="relative aspect-[16/9] overflow-hidden bg-gray-100 mb-5">
                      <Image
                        src={post.coverImageUrl}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <p className="text-xs text-[#9B9B9B] mb-2">
                    {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' }) : ''}
                  </p>
                  <h3 className="text-lg font-medium text-[#1A1A1A] mb-2 group-hover:text-[#4A4A4A] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  {post.excerpt && <p className="text-sm text-[#9B9B9B] line-clamp-3">{post.excerpt}</p>}
                  <p className="text-xs font-medium text-[#1A1A1A] mt-4 group-hover:underline">Read more →</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
