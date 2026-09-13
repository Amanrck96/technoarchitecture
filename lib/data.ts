import { prisma } from '@/lib/prisma'
import type { Project, TeamMember, Testimonial, BlogPost, Service, FaqItem, GalleryImage, Recognition, ContentBlock } from '@prisma/client'

// ==========================================
// FALLBACK SEED DATA (Used when DB is offline)
// ==========================================

export const FALLBACK_CONTENT_BLOCKS: Record<string, ContentBlock> = {
  'hero-tagline': {
    id: 'fb-cb-1',
    key: 'hero-tagline',
    title: 'Hero Tagline',
    body: 'Designing Spaces. Defining Futures.',
  },
  'hero-subtext': {
    id: 'fb-cb-2',
    key: 'hero-subtext',
    title: 'Hero Subtext',
    body: 'We craft meaningful architectural experiences that endure.',
  },
  vision: {
    id: 'fb-cb-3',
    key: 'vision',
    title: 'Our Vision',
    body: 'To be a leading architecture studio that shapes the built environment with purpose, innovation, and timeless design principles.',
  },
  mission: {
    id: 'fb-cb-4',
    key: 'mission',
    title: 'Our Mission',
    body: 'We create architectural solutions that harmonise with their environment, serve their users, and stand as a testament to thoughtful design and technical excellence.',
  },
  'why-us': {
    id: 'fb-cb-5',
    key: 'why-us',
    title: 'Why Techno?',
    body: 'We bring together technical precision and creative vision, delivering projects on time, within budget, and beyond expectation.',
  },
  'contact-address': {
    id: 'fb-cb-6',
    key: 'contact-address',
    title: 'Office Address',
    body: 'Techno Architecture\n#42, 12th Main Road, Indiranagar\nBengaluru, Karnataka 560038',
  },
  'contact-phone': {
    id: 'fb-cb-7',
    key: 'contact-phone',
    title: 'Phone',
    body: '+91 80 2521 8890',
  },
  'contact-email': {
    id: 'fb-cb-8',
    key: 'contact-email',
    title: 'Email',
    body: 'info@technoarchitecture.in',
  },
}

export const FALLBACK_PROJECTS: Project[] = [
  {
    id: 'fb-proj-1',
    title: 'The Residence at Elm Grove',
    slug: 'residence-elm-grove',
    location: 'Mumbai, Maharashtra',
    year: 2024,
    status: 'COMPLETED',
    coverImageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
    galleryImageUrls: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    ],
    description:
      'A contemporary family residence that blends modernist geometry with warm natural materials. The home is designed around a central courtyard, allowing light to permeate every space while maintaining complete privacy from surrounding urban density.',
    featured: true,
    order: 1,
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15'),
  },
  {
    id: 'fb-proj-2',
    title: 'Horizon Commercial Complex',
    slug: 'horizon-commercial-complex',
    location: 'Pune, Maharashtra',
    year: 2023,
    status: 'COMPLETED',
    coverImageUrl: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80',
    galleryImageUrls: [
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
    ],
    description:
      'A mixed-use commercial development spanning 12,000 sqft. The design prioritises natural ventilation and daylighting, achieving a 30% reduction in energy consumption through passive solar orientation and high-performance ceramic louvers.',
    featured: true,
    order: 2,
    createdAt: new Date('2023-08-10'),
    updatedAt: new Date('2023-08-10'),
  },
  {
    id: 'fb-proj-3',
    title: 'The Cultural Arts Centre',
    slug: 'cultural-arts-centre',
    location: 'Bengaluru, Karnataka',
    year: 2025,
    status: 'ONGOING',
    coverImageUrl: 'https://images.unsplash.com/photo-1554366347-b8e9e1f77f6e?w=1200&q=80',
    galleryImageUrls: [
      'https://images.unsplash.com/photo-1554366347-b8e9e1f77f6e?w=1200&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&q=80',
    ],
    description:
      'A community-centred arts and cultural facility currently under development. The design draws from regional craft traditions while employing contemporary timber and concrete construction methods.',
    featured: true,
    order: 3,
    createdAt: new Date('2025-02-01'),
    updatedAt: new Date('2025-02-01'),
  },
  {
    id: 'fb-proj-4',
    title: 'Skyline Coastal Villa',
    slug: 'skyline-coastal-villa',
    location: 'Goa',
    year: 2024,
    status: 'COMPLETED',
    coverImageUrl: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80',
    galleryImageUrls: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
    ],
    description:
      'An elevated coastal retreat featuring panoramic ocean views, exposed laterite and cast-in-place concrete walls, and open terraces shaded by indigenous timber pergolas.',
    featured: false,
    order: 4,
    createdAt: new Date('2024-04-12'),
    updatedAt: new Date('2024-04-12'),
  },
]

export const FALLBACK_TESTIMONIALS: Testimonial[] = [
  {
    id: 'fb-test-1',
    clientName: 'Rajesh Kumar',
    quote:
      'Techno Architecture transformed our vision into a home that is both visually captivating and deeply functional. Their meticulous attention to material transitions and natural lighting was exceptional.',
    company: 'Homeowner, Mumbai',
    photoUrl: null,
    order: 1,
    createdAt: new Date(),
  },
  {
    id: 'fb-test-2',
    clientName: 'Priya Nair',
    quote:
      'Working with Techno Architecture on our commercial headquarters was a seamless experience. They delivered on schedule, within budget, and elevated our brand image on an international scale.',
    company: 'Director, Nair Developments',
    photoUrl: null,
    order: 2,
    createdAt: new Date(),
  },
]

export const FALLBACK_SERVICES: Service[] = [
  {
    id: 'fb-srv-1',
    title: 'Architectural Design',
    description:
      'End-to-end architectural consultancy from initial conceptualization and 3D visualization through construction documentation and statutory approvals.',
    iconUrl: null,
    order: 1,
    createdAt: new Date(),
  },
  {
    id: 'fb-srv-2',
    title: 'Interior Architecture',
    description:
      'Bespoke interior planning, bespoke millwork, curated material palettes, and architectural lighting design crafted for luxury residential and commercial environments.',
    iconUrl: null,
    order: 2,
    createdAt: new Date(),
  },
  {
    id: 'fb-srv-3',
    title: 'Master Planning & Urban Design',
    description:
      'Holistic master planning for large-scale institutional campuses, residential communities, and mixed-use urban developments with resilient infrastructure.',
    iconUrl: null,
    order: 3,
    createdAt: new Date(),
  },
  {
    id: 'fb-srv-4',
    title: 'Sustainable & Biophilic Design',
    description:
      'Passive microclimate strategies, net-zero energy planning, water harvesting integration, and IGBC/LEED green building certification assistance.',
    iconUrl: null,
    order: 4,
    createdAt: new Date(),
  },
  {
    id: 'fb-srv-5',
    title: 'Adaptive Reuse & Conservation',
    description:
      'Revitalizing historic and existing building stock with contemporary structural adaptations, preserving cultural heritage while serving modern functions.',
    iconUrl: null,
    order: 5,
    createdAt: new Date(),
  },
  {
    id: 'fb-srv-6',
    title: 'Project Management & Quality Assurance',
    description:
      'On-site construction oversight, contract administration, contractor coordination, and stringent quality control ensuring precision execution.',
    iconUrl: null,
    order: 6,
    createdAt: new Date(),
  },
]

export const FALLBACK_TEAM: TeamMember[] = [
  {
    id: 'fb-team-1',
    name: 'Rajesh V.',
    role: 'Founder & Principal Architect',
    bio: 'With over two decades of architectural leadership, Rajesh guides the studio with a philosophy rooted in geometric rigor, contextual honesty, and spatial serenity.',
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    socialLinks: {},
    order: 1,
    createdAt: new Date(),
  },
  {
    id: 'fb-team-2',
    name: 'Ananya Sen',
    role: 'Senior Design Associate',
    bio: 'Specializing in residential architecture and bioclimatic planning, Ananya translates nuanced client briefs into sculptural, enduring built forms.',
    photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    socialLinks: {},
    order: 2,
    createdAt: new Date(),
  },
  {
    id: 'fb-team-3',
    name: 'Vikramaditya Patil',
    role: 'Lead Technical Architect',
    bio: 'Overseeing complex structural coordination and parametric design workflows, Vikramaditya bridges architectural vision with advanced engineering execution.',
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    socialLinks: {},
    order: 3,
    createdAt: new Date(),
  },
]

export const FALLBACK_BLOG_POSTS: BlogPost[] = [
  {
    id: 'fb-post-1',
    title: 'Designing for the Future: Sustainability in Architecture',
    slug: 'designing-for-the-future',
    coverImageUrl: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1200&q=80',
    excerpt: 'Sustainability is woven into every project we undertake. Here is how we approach responsible design from initial orientation to material life-cycle.',
    contentMarkdown: `# Designing for the Future: Sustainability in Architecture

At Techno Architecture, sustainability isn't an afterthought — it's woven into the foundation of every project we undertake.

## The Imperative of Responsible Design

The built environment accounts for nearly 40% of global energy consumption. As architects, we bear a responsibility to design spaces that are not only beautiful and functional, but that tread lightly on the planet.

## Our Approach

We integrate passive design strategies — orientation, natural ventilation, and daylighting — before considering active systems. This hierarchy ensures energy efficiency is a fundamental property of the building, not a retrofit.

## Material Choices Matter

Every material specification is evaluated not just for its aesthetic and performance properties, but for its embodied carbon and end-of-life potential.`,
    author: 'Techno Architecture',
    publishedAt: new Date('2025-01-20'),
    createdAt: new Date('2025-01-20'),
    updatedAt: new Date('2025-01-20'),
  },
  {
    id: 'fb-post-2',
    title: 'The Poetics of Concrete: Brutalism Reimagined for the Tropics',
    slug: 'poetics-of-concrete',
    coverImageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&q=80',
    excerpt: 'Exploring how tactile board-formed concrete and warm natural teak create timeless microclimates in contemporary Indian homes.',
    contentMarkdown: `# The Poetics of Concrete: Brutalism Reimagined for the Tropics

Exposed concrete has often been mischaracterized as cold or austere. When tuned to tropical light and paired with organic finishes, it becomes one of the most expressive mediums in modern architecture.

## Thermal Mass and Climatic Comfort

Concrete offers remarkable thermal mass. In regions with dramatic diurnal temperature shifts, thick concrete envelopes absorb daytime heat and release it during cooler nights, maintaining steady internal comfort without energy strain.

## The Human Hand in Formwork

Every timber board used in shuttering leaves a permanent wood-grain signature on the cured concrete face. This tactile imperfection celebrates the artistry of on-site craft.`,
    author: 'Rajesh V.',
    publishedAt: new Date('2025-02-14'),
    createdAt: new Date('2025-02-14'),
    updatedAt: new Date('2025-02-14'),
  },
]

export const FALLBACK_FAQ_ITEMS: FaqItem[] = [
  {
    id: 'fb-faq-1',
    question: 'What types of architectural projects does Techno Architecture specialize in?',
    answer:
      'We work across luxury private residences, commercial corporate headquarters, institutional facilities, and boutique hospitality developments. Each project receives bespoke attention tailored to site context and programmatic ambition.',
    order: 1,
    createdAt: new Date(),
  },
  {
    id: 'fb-faq-2',
    question: 'How do we begin a project collaboration?',
    answer:
      'Everything begins with an initial consultation where we review your site, requirements, timeline, and aspirational goals. We then formulate a structured design proposal outlining phases, milestones, and deliverables.',
    order: 2,
    createdAt: new Date(),
  },
  {
    id: 'fb-faq-3',
    question: 'Do you also handle interior architecture and furnishings?',
    answer:
      'Yes. We firmly believe the exterior and interior must exist in complete harmony. Our studio provides comprehensive interior architecture services including bespoke lighting, custom cabinetry, material curation, and art styling.',
    order: 3,
    createdAt: new Date(),
  },
  {
    id: 'fb-faq-4',
    question: 'How does Techno Architecture approach sustainability?',
    answer:
      'We prioritize climate-responsive passive strategies first: solar orientation, thermal mass, natural stack ventilation, and daylight harvesting. We complement this with rainwater harvesting, solar integration, and low-embodied-carbon material specifications.',
    order: 4,
    createdAt: new Date(),
  },
]

export const FALLBACK_GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'fb-gal-1',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
    caption: 'Courtyard facade at Elm Grove',
    category: 'Residential',
    order: 1,
    createdAt: new Date(),
  },
  {
    id: 'fb-gal-2',
    imageUrl: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80',
    caption: 'Facade detailing at Horizon Commercial Complex',
    category: 'Commercial',
    order: 2,
    createdAt: new Date(),
  },
  {
    id: 'fb-gal-3',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    caption: 'Minimalist living volume with seamless garden integration',
    category: 'Interior',
    order: 3,
    createdAt: new Date(),
  },
  {
    id: 'fb-gal-4',
    imageUrl: 'https://images.unsplash.com/photo-1554366347-b8e9e1f77f6e?w=1200&q=80',
    caption: 'Cantilevered roof structure at Cultural Arts Centre',
    category: 'Cultural',
    order: 4,
    createdAt: new Date(),
  },
  {
    id: 'fb-gal-5',
    imageUrl: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80',
    caption: 'Horizon infinity terrace overlooking the Arabian Sea',
    category: 'Residential',
    order: 5,
    createdAt: new Date(),
  },
  {
    id: 'fb-gal-6',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
    caption: 'Central atrium skylight filtering daylight into work zones',
    category: 'Commercial',
    order: 6,
    createdAt: new Date(),
  },
]

export const FALLBACK_RECOGNITIONS: Recognition[] = [
  {
    id: 'fb-rec-1',
    title: 'Architectural Design Excellence Award',
    year: 2024,
    issuingBody: 'Indian Institute of Architects (IIA)',
    imageUrl: null,
    link: 'https://technoarchitecture.in',
    order: 1,
    createdAt: new Date(),
  },
  {
    id: 'fb-rec-2',
    title: 'Best Sustainable Commercial Design',
    year: 2023,
    issuingBody: 'World Architecture Community',
    imageUrl: null,
    link: null,
    order: 2,
    createdAt: new Date(),
  },
  {
    id: 'fb-rec-3',
    title: 'Top 50 Contemporary Design Studios',
    year: 2023,
    issuingBody: 'Architectural Digest India',
    imageUrl: null,
    link: null,
    order: 3,
    createdAt: new Date(),
  },
]

// ==========================================
// RESILIENT DATA FETCHERS
// ==========================================

export async function getHomePageData() {
  try {
    const [featuredProjects, testimonials, heroTagline, heroSubtext, whyUs] = await Promise.all([
      prisma.project.findMany({ where: { featured: true }, orderBy: { order: 'asc' }, take: 3 }),
      prisma.testimonial.findMany({ orderBy: { order: 'asc' } }),
      prisma.contentBlock.findUnique({ where: { key: 'hero-tagline' } }),
      prisma.contentBlock.findUnique({ where: { key: 'hero-subtext' } }),
      prisma.contentBlock.findUnique({ where: { key: 'why-us' } }),
    ])

    return {
      featuredProjects: featuredProjects.length > 0 ? featuredProjects : FALLBACK_PROJECTS.filter((p) => p.featured),
      testimonials: testimonials.length > 0 ? testimonials : FALLBACK_TESTIMONIALS,
      heroTagline: heroTagline || FALLBACK_CONTENT_BLOCKS['hero-tagline'],
      heroSubtext: heroSubtext || FALLBACK_CONTENT_BLOCKS['hero-subtext'],
      whyUs: whyUs || FALLBACK_CONTENT_BLOCKS['why-us'],
    }
  } catch (error) {
    console.warn('[DB Offline] Falling back to default home page data:', (error as Error).message)
    return {
      featuredProjects: FALLBACK_PROJECTS.filter((p) => p.featured),
      testimonials: FALLBACK_TESTIMONIALS,
      heroTagline: FALLBACK_CONTENT_BLOCKS['hero-tagline'],
      heroSubtext: FALLBACK_CONTENT_BLOCKS['hero-subtext'],
      whyUs: FALLBACK_CONTENT_BLOCKS['why-us'],
    }
  }
}

export async function getAboutData() {
  try {
    const blocks = await prisma.contentBlock.findMany({
      where: { key: { in: ['vision', 'mission', 'why-us'] } },
    })
    const blockMap = Object.fromEntries(blocks.map((b) => [b.key, b]))
    return {
      vision: blockMap['vision'] || FALLBACK_CONTENT_BLOCKS['vision'],
      mission: blockMap['mission'] || FALLBACK_CONTENT_BLOCKS['mission'],
      whyUs: blockMap['why-us'] || FALLBACK_CONTENT_BLOCKS['why-us'],
    }
  } catch (error) {
    console.warn('[DB Offline] Falling back to default about data:', (error as Error).message)
    return {
      vision: FALLBACK_CONTENT_BLOCKS['vision'],
      mission: FALLBACK_CONTENT_BLOCKS['mission'],
      whyUs: FALLBACK_CONTENT_BLOCKS['why-us'],
    }
  }
}

export async function getProjects() {
  try {
    const projects = await prisma.project.findMany({ orderBy: [{ order: 'asc' }, { year: 'desc' }] })
    return projects.length > 0 ? projects : FALLBACK_PROJECTS
  } catch (error) {
    console.warn('[DB Offline] Falling back to default projects:', (error as Error).message)
    return FALLBACK_PROJECTS
  }
}

export async function getProjectBySlug(slug: string) {
  try {
    const project = await prisma.project.findUnique({ where: { slug } })
    if (project) return project
  } catch (error) {
    console.warn(`[DB Offline] Looking for project slug "${slug}" in fallback data:`, (error as Error).message)
  }
  return FALLBACK_PROJECTS.find((p) => p.slug === slug) || null
}

export async function getProjectSlugs(): Promise<string[]> {
  try {
    const projects = await prisma.project.findMany({ select: { slug: true } })
    if (projects.length > 0) return projects.map((p) => p.slug)
  } catch (error) {
    console.warn('[DB Offline] Returning fallback project slugs:', (error as Error).message)
  }
  return FALLBACK_PROJECTS.map((p) => p.slug)
}

export async function getServices() {
  try {
    const services = await prisma.service.findMany({ orderBy: { order: 'asc' } })
    return services.length > 0 ? services : FALLBACK_SERVICES
  } catch (error) {
    console.warn('[DB Offline] Falling back to default services:', (error as Error).message)
    return FALLBACK_SERVICES
  }
}

export async function getTeam() {
  try {
    const team = await prisma.teamMember.findMany({ orderBy: { order: 'asc' } })
    return team.length > 0 ? team : FALLBACK_TEAM
  } catch (error) {
    console.warn('[DB Offline] Falling back to default team members:', (error as Error).message)
    return FALLBACK_TEAM
  }
}

export async function getBlogPosts() {
  try {
    const posts = await prisma.blogPost.findMany({
      where: { publishedAt: { not: null, lte: new Date() } },
      orderBy: { publishedAt: 'desc' },
    })
    return posts.length > 0 ? posts : FALLBACK_BLOG_POSTS
  } catch (error) {
    console.warn('[DB Offline] Falling back to default blog posts:', (error as Error).message)
    return FALLBACK_BLOG_POSTS
  }
}

export async function getBlogPostBySlug(slug: string) {
  try {
    const post = await prisma.blogPost.findUnique({ where: { slug } })
    if (post) return post
  } catch (error) {
    console.warn(`[DB Offline] Looking for blog post "${slug}" in fallback data:`, (error as Error).message)
  }
  return FALLBACK_BLOG_POSTS.find((p) => p.slug === slug) || null
}

export async function getBlogPostSlugs(): Promise<string[]> {
  try {
    const posts = await prisma.blogPost.findMany({ where: { publishedAt: { not: null } }, select: { slug: true } })
    if (posts.length > 0) return posts.map((p) => p.slug)
  } catch (error) {
    console.warn('[DB Offline] Returning fallback blog slugs:', (error as Error).message)
  }
  return FALLBACK_BLOG_POSTS.map((p) => p.slug)
}

export async function getFaqItems() {
  try {
    const items = await prisma.faqItem.findMany({ orderBy: { order: 'asc' } })
    return items.length > 0 ? items : FALLBACK_FAQ_ITEMS
  } catch (error) {
    console.warn('[DB Offline] Falling back to default FAQ items:', (error as Error).message)
    return FALLBACK_FAQ_ITEMS
  }
}

export async function getGalleryImages() {
  try {
    const images = await prisma.galleryImage.findMany({ orderBy: { order: 'asc' } })
    return images.length > 0 ? images : FALLBACK_GALLERY_IMAGES
  } catch (error) {
    console.warn('[DB Offline] Falling back to default gallery images:', (error as Error).message)
    return FALLBACK_GALLERY_IMAGES
  }
}

export async function getRecognitions() {
  try {
    const recognitions = await prisma.recognition.findMany({ orderBy: [{ year: 'desc' }, { order: 'asc' }] })
    return recognitions.length > 0 ? recognitions : FALLBACK_RECOGNITIONS
  } catch (error) {
    console.warn('[DB Offline] Falling back to default recognitions:', (error as Error).message)
    return FALLBACK_RECOGNITIONS
  }
}

export async function getContactBlocks(): Promise<Record<string, string>> {
  try {
    const blocks = await prisma.contentBlock.findMany({
      where: { key: { in: ['contact-address', 'contact-phone', 'contact-email'] } },
    })
    if (blocks.length > 0) {
      return Object.fromEntries(blocks.map((b) => [b.key, b.body]))
    }
  } catch (error) {
    console.warn('[DB Offline] Falling back to default contact blocks:', (error as Error).message)
  }
  return {
    'contact-address': FALLBACK_CONTENT_BLOCKS['contact-address'].body,
    'contact-phone': FALLBACK_CONTENT_BLOCKS['contact-phone'].body,
    'contact-email': FALLBACK_CONTENT_BLOCKS['contact-email'].body,
  }
}
