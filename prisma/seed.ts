import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')

  // Admin user
  const passwordHash = await bcrypt.hash('admin123', 12)
  await prisma.adminUser.upsert({
    where: { email: 'admin@technoarchitecture.in' },
    update: {},
    create: {
      email: 'admin@technoarchitecture.in',
      passwordHash,
    },
  })
  console.log('✓ Admin user created')

  // Content blocks
  const contentBlocks = [
    { key: 'hero-tagline', title: 'Hero Tagline', body: 'Designing Spaces. Defining Futures.' },
    { key: 'hero-subtext', title: 'Hero Subtext', body: 'We craft meaningful architectural experiences that endure.' },
    { key: 'vision', title: 'Vision', body: 'To be a leading architecture studio that shapes the built environment with purpose, innovation, and timeless design principles.' },
    { key: 'mission', title: 'Mission', body: 'We create architectural solutions that harmonise with their environment, serve their users, and stand as a testament to thoughtful design and technical excellence.' },
    { key: 'why-us', title: 'Why Techno?', body: 'We bring together technical precision and creative vision, delivering projects on time, within budget, and beyond expectation.' },
    { key: 'contact-address', title: 'Office Address', body: 'Techno Architecture\n123 Design Street\nYour City, State 000000' },
    { key: 'contact-phone', title: 'Phone', body: '+91 00000 00000' },
    { key: 'contact-email', title: 'Email', body: 'info@technoarchitecture.in' },
  ]

  for (const block of contentBlocks) {
    await prisma.contentBlock.upsert({
      where: { key: block.key },
      update: {},
      create: block,
    })
  }
  console.log('✓ Content blocks created')

  // Sample projects
  const projects = [
    {
      title: 'The Residence at Elm Grove',
      slug: 'residence-elm-grove',
      location: 'Mumbai, Maharashtra',
      year: 2024,
      status: 'COMPLETED' as const,
      coverImageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
      galleryImageUrls: JSON.stringify([
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
      ]),
      description: 'A contemporary family residence that blends modernist geometry with warm natural materials. The home is designed around a central courtyard, allowing light to permeate every space.',
      featured: true,
      order: 1,
    },
    {
      title: 'Horizon Commercial Complex',
      slug: 'horizon-commercial-complex',
      location: 'Pune, Maharashtra',
      year: 2023,
      status: 'COMPLETED' as const,
      coverImageUrl: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80',
      galleryImageUrls: JSON.stringify([
        'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80',
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
      ]),
      description: 'A mixed-use commercial development spanning 12,000 sqft. The design prioritises natural ventilation and daylighting, achieving a 30% reduction in energy consumption.',
      featured: true,
      order: 2,
    },
    {
      title: 'The Cultural Arts Centre',
      slug: 'cultural-arts-centre',
      location: 'Bangalore, Karnataka',
      year: 2025,
      status: 'ONGOING' as const,
      coverImageUrl: 'https://images.unsplash.com/photo-1554366347-b8e9e1f77f6e?w=1200&q=80',
      galleryImageUrls: JSON.stringify([
        'https://images.unsplash.com/photo-1554366347-b8e9e1f77f6e?w=1200&q=80',
      ]),
      description: 'A community-centred arts and cultural facility currently under development. The design draws from regional craft traditions while employing contemporary construction methods.',
      featured: true,
      order: 3,
    },
  ]

  for (const project of projects) {
    await prisma.project.upsert({
      where: { slug: project.slug },
      update: {},
      create: project,
    })
  }
  console.log('✓ Projects created')

  // Sample team members
  const teamMembers = [
    {
      name: 'Principal Architect',
      role: 'Founder & Principal Architect',
      bio: 'With over 15 years of experience, our principal leads every project with a commitment to design excellence and client satisfaction.',
      photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      order: 1,
    },
    {
      name: 'Lead Designer',
      role: 'Senior Design Architect',
      bio: 'Specialising in residential and hospitality projects, with a keen eye for detail and spatial quality.',
      photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      order: 2,
    },
  ]

  for (let i = 0; i < teamMembers.length; i++) {
    await prisma.teamMember.upsert({
      where: { id: `placeholder-team-${i}` },
      update: {},
      create: { id: `placeholder-team-${i}`, ...teamMembers[i] },
    })
  }
  console.log('✓ Team members created')

  // Sample testimonials
  const testimonials = [
    {
      clientName: 'Rajesh Kumar',
      company: 'Homeowner, Mumbai',
      quote: 'Techno Architecture transformed our vision into a home that is both beautiful and deeply functional. The team\'s attention to detail and dedication to our brief was exceptional.',
      order: 1,
    },
    {
      clientName: 'Priya Nair',
      company: 'Director, Nair Developments',
      quote: 'Working with Techno Architecture on our commercial project was a seamless experience. They delivered on time, within budget, and exceeded our design expectations.',
      order: 2,
    },
  ]

  for (let i = 0; i < testimonials.length; i++) {
    await prisma.testimonial.upsert({
      where: { id: `placeholder-testimonial-${i}` },
      update: {},
      create: { id: `placeholder-testimonial-${i}`, ...testimonials[i] },
    })
  }
  console.log('✓ Testimonials created')

  // Sample FAQ items
  const faqItems = [
    {
      question: 'What types of projects does Techno Architecture undertake?',
      answer: 'We work across residential, commercial, institutional, and mixed-use developments. From bespoke private residences to large-scale commercial complexes, we bring the same rigour and creativity to every brief.',
      order: 1,
    },
    {
      question: 'How do I start a project with Techno Architecture?',
      answer: 'Begin by reaching out through our contact page. We\'ll schedule an initial consultation to understand your vision, site, and brief. From there, we develop a proposal outlining scope, timeline, and fees.',
      order: 2,
    },
    {
      question: 'What is your design process?',
      answer: 'Our process moves through concept design, design development, documentation, and construction administration. We maintain close collaboration with clients at every stage to ensure the final outcome reflects the original vision.',
      order: 3,
    },
  ]

  for (let i = 0; i < faqItems.length; i++) {
    await prisma.faqItem.upsert({
      where: { id: `placeholder-faq-${i}` },
      update: {},
      create: { id: `placeholder-faq-${i}`, ...faqItems[i] },
    })
  }
  console.log('✓ FAQ items created')

  // Sample blog post
  await prisma.blogPost.upsert({
    where: { slug: 'designing-for-the-future' },
    update: {},
    create: {
      title: 'Designing for the Future: Sustainability in Architecture',
      slug: 'designing-for-the-future',
      coverImageUrl: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1200&q=80',
      contentMarkdown: `# Designing for the Future: Sustainability in Architecture

At Techno Architecture, sustainability isn't an afterthought — it's woven into the foundation of every project we undertake.

## The Imperative of Responsible Design

The built environment accounts for nearly 40% of global energy consumption. As architects, we bear a responsibility to design spaces that are not only beautiful and functional, but that tread lightly on the planet.

## Our Approach

We integrate passive design strategies — orientation, natural ventilation, and daylighting — before considering active systems. This hierarchy ensures energy efficiency is a fundamental property of the building, not a retrofit.

## Material Choices Matter

Every material specification is evaluated not just for its aesthetic and performance properties, but for its embodied carbon and end-of-life potential.
`,
      excerpt: 'Sustainability is woven into every project we undertake. Here is how we approach responsible design.',
      author: 'Techno Architecture',
      publishedAt: new Date(),
    },
  })
  console.log('✓ Blog post created')

  console.log('\n✅ Database seeded successfully!')
  console.log('\nDefault admin credentials:')
  console.log('  Email: admin@technoarchitecture.in')
  console.log('  Password: admin123')
  console.log('  ⚠️  Please change the password after first login!')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
