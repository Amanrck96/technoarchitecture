/**
 * ==============================================================================
 * TECHNO ARCHITECTURE — SAMPLE PLACEHOLDER DATA (PHASE 1 STATIC DESIGN PROTOTYPE)
 * ==============================================================================
 * 
 * NOTE: All data below is static sample data designed for client design approval.
 * In Phase 2, this file can be replaced or wired into Prisma ORM without altering
 * page-level imports, since all page components consume these async getters.
 */

export interface SampleProject {
  id: string
  title: string
  slug: string
  location: string
  year: number
  status: 'COMPLETED' | 'ONGOING'
  typology: string
  area: string
  client: string
  coverImageUrl: string
  galleryImageUrls: string[]
  description: string
  narrative: string[]
  featured: boolean
  order: number
}

export interface SamplePillar {
  number: string
  title: string
  tagline: string
  description: string
}

export interface SampleTestimonial {
  id: string
  clientName: string
  company: string
  role: string
  quote: string
  photoUrl?: string
  projectRef: string
}

export interface SampleTeamMember {
  id: string
  name: string
  role: string
  bio: string
  photoUrl: string
  education?: string
  socialLinks?: {
    linkedin?: string
    instagram?: string
    twitter?: string
  }
  order: number
}

export interface SampleService {
  id: string
  title: string
  slug: string
  shortDescription: string
  fullDescription: string
  scope: string[]
  iconName: string
  order: number
}

export interface SampleBlogPost {
  id: string
  title: string
  slug: string
  coverImageUrl: string
  excerpt: string
  contentMarkdown: string
  author: string
  authorRole: string
  publishedAt: string
  readingTime: string
}

export interface SampleFaqItem {
  id: string
  question: string
  answer: string
  category: 'Process' | 'Services' | 'Sustainability' | 'Budget'
  order: number
}

export interface SampleGalleryImage {
  id: string
  imageUrl: string
  caption: string
  category: 'Residential' | 'Commercial' | 'Interior' | 'Conceptual'
  projectTitle?: string
  aspectRatio?: 'landscape' | 'portrait' | 'square'
  order: number
}

export interface SampleRecognition {
  id: string
  title: string
  year: number
  issuingBody: string
  category: string
  projectRef?: string
  order: number
}

export interface StudioAbout {
  tagline: string
  philosophy: string
  story: string[]
  vision: string
  mission: string
  values: { title: string; description: string }[]
  statistics: { value: string; label: string }[]
}

// -----------------------------------------------------------------------------
// 1. SAMPLE PROJECTS
// -----------------------------------------------------------------------------
export const SAMPLE_PROJECTS: SampleProject[] = [
  {
    id: 'proj-1',
    title: 'The Residence at Elm Grove',
    slug: 'residence-elm-grove',
    location: 'Bandra West, Mumbai',
    year: 2024,
    status: 'COMPLETED',
    typology: 'Private Residential',
    area: '7,400 sq.ft',
    client: 'Private Residence',
    coverImageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&auto=format&fit=crop&q=85',
    galleryImageUrls: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&auto=format&fit=crop&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&auto=format&fit=crop&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&auto=format&fit=crop&q=85',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&auto=format&fit=crop&q=85',
    ],
    description: 'A contemporary family residence that blends modernist cantilevered geometry with warm natural materials, centered around a luminous tropical courtyard.',
    narrative: [
      'The Residence at Elm Grove responds to the dense urban fabric of suburban Mumbai by turning inward. Organised around a central vertical lightwell and landscaped reflection pool, the home prioritises privacy, acoustic tranquility, and bioclimatic comfort.',
      'A tactile material palette of board-marked fair-faced concrete, hand-chiseled basalt stone, and sustainably sourced teak creates a quiet dialogue between raw architectural mass and intimate domestic scale.',
      'Deep cantilevered overhangs and motorized timber louvers shade the double-glazed facade from the intense afternoon sun, while operable clerestory openings encourage natural stack ventilation throughout the tropical seasons.',
    ],
    featured: true,
    order: 1,
  },
  {
    id: 'proj-2',
    title: 'Horizon Commercial Complex',
    slug: 'horizon-commercial-complex',
    location: 'Koregaon Park, Pune',
    year: 2023,
    status: 'COMPLETED',
    typology: 'Commercial & Workplace',
    area: '34,000 sq.ft',
    client: 'Nair Infrastructure Partners',
    coverImageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&auto=format&fit=crop&q=85',
    galleryImageUrls: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&auto=format&fit=crop&q=85',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&auto=format&fit=crop&q=85',
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&auto=format&fit=crop&q=85',
    ],
    description: 'A high-performance workplace campus engineered with passive solar orientation and high-efficiency ceramic shading louvers.',
    narrative: [
      'Conceived as a forward-looking workplace that challenges the sealed glass box paradigm, Horizon introduces multi-tiered landscaped sky courts that bring outdoor break spaces to every floor plate.',
      'The building skin features an algorithmically optimized ceramic brise-soleil system that cuts incident solar radiation by 42% while preserving uninterrupted vistas across the Mula-Mutha river basin.',
      'The project achieved an IGBC Platinum rating through on-site greywater treatment, a 180kW rooftop photovoltaic array, and high-efficiency smart VRV climate management.',
    ],
    featured: true,
    order: 2,
  },
  {
    id: 'proj-3',
    title: 'The Cultural Arts Pavilion',
    slug: 'cultural-arts-pavilion',
    location: 'Indiranagar, Bengaluru',
    year: 2025,
    status: 'ONGOING',
    typology: 'Civic & Cultural',
    area: '18,500 sq.ft',
    client: 'Bengaluru Arts & Heritage Trust',
    coverImageUrl: 'https://images.unsplash.com/photo-1554366347-b8e9e1f77f6e?w=1600&auto=format&fit=crop&q=85',
    galleryImageUrls: [
      'https://images.unsplash.com/photo-1554366347-b8e9e1f77f6e?w=1600&auto=format&fit=crop&q=85',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1600&auto=format&fit=crop&q=85',
    ],
    description: 'A community-centered contemporary gallery and performing amphitheater constructed with glulam timber trusses and rammed earth.',
    narrative: [
      'The Cultural Arts Pavilion serves as a public catalyst in the garden city, blurring boundaries between enclosed gallery chambers and an open-air public amphitheater.',
      'Drawing inspiration from Dravidian temple mandapas, the structural grid relies on expressive glue-laminated timber arches seated on monolithic rammed-earth plinths sourced from excavated site subsoil.',
      'Now under structural framing, the pavilion will open in late 2025 as a dedicated incubator for interdisciplinary art, dance, and design symposia.',
    ],
    featured: true,
    order: 3,
  },
  {
    id: 'proj-4',
    title: 'Skyline Coastal Villa',
    slug: 'skyline-coastal-villa',
    location: 'Assagao, North Goa',
    year: 2024,
    status: 'COMPLETED',
    typology: 'Luxury Hospitality / Villa',
    area: '9,200 sq.ft',
    client: 'Private Client',
    coverImageUrl: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1600&auto=format&fit=crop&q=85',
    galleryImageUrls: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1600&auto=format&fit=crop&q=85',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&auto=format&fit=crop&q=85',
    ],
    description: 'An elevated coastal retreat perched on laterite terrain, featuring expansive cantilevers and ocean-facing infinity waters.',
    narrative: [
      'Perched along a forested ridge in North Goa, Skyline Coastal Villa is an exercise in horizontal lightness. Slender steel columns support deep cast-concrete roofs that float above floor-to-ceiling glass sliding walls.',
      'Local red laterite stone excavated from the site forms retaining walls and outdoor terraces, grounding the house into the coastal hillside.',
    ],
    featured: true,
    order: 4,
  },
  {
    id: 'proj-5',
    title: 'The Monolith Corporate Suites',
    slug: 'the-monolith-corporate-suites',
    location: 'Cyber City, Gurugram',
    year: 2023,
    status: 'COMPLETED',
    typology: 'Workplace & Interior Architecture',
    area: '22,000 sq.ft',
    client: 'Vanguard Capital',
    coverImageUrl: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1600&auto=format&fit=crop&q=85',
    galleryImageUrls: [
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1600&auto=format&fit=crop&q=85',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1600&auto=format&fit=crop&q=85',
    ],
    description: 'A sculptural corporate headquarters defined by dark fluted basalt, acoustic timber fins, and bespoke lighting installations.',
    narrative: [
      'An executive workspace design rejecting standard corporate monotony in favor of architectural drama. Spatial sequences modulate from moody charcoal entry vestibules to soaring light-flooded collaborative atriums.',
    ],
    featured: false,
    order: 5,
  },
  {
    id: 'proj-6',
    title: 'Verdant Hillside Retreat',
    slug: 'verdant-hillside-retreat',
    location: 'Coorg, Karnataka',
    year: 2025,
    status: 'ONGOING',
    typology: 'Eco Resort & Masterplan',
    area: '48,000 sq.ft',
    client: 'Aura Hospitality',
    coverImageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1600&auto=format&fit=crop&q=85',
    galleryImageUrls: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1600&auto=format&fit=crop&q=85',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600&auto=format&fit=crop&q=85',
    ],
    description: 'A net-zero plantation masterplan comprising stilted timber pavilions that touch the rainforest canopy with zero deforestation.',
    narrative: [
      'Currently in early construction, this 14-key eco-sanctuary treads with minimal physical footprint. Stilted steel and reclaimed teak footings elevate each pavilion above coffee groves, preserving natural hydrological runoff.',
    ],
    featured: false,
    order: 6,
  },
]

// -----------------------------------------------------------------------------
// 2. FOUR PILLARS ("WHY TECHNO")
// -----------------------------------------------------------------------------
export const SAMPLE_PILLARS: SamplePillar[] = [
  {
    number: '01',
    title: 'Contextual Design',
    tagline: 'Grounded in Place',
    description: 'Every project begins with deep climatic, topographical, and cultural interrogation. We do not impose pre-baked forms; rather, each building emerges organically from the memory and physics of its terrain.',
  },
  {
    number: '02',
    title: 'Material Truth',
    tagline: 'Honesty Over Ornament',
    description: 'We celebrate materials in their purest states — tactile fair-faced concrete, unlacquered metals, regional quarry stone, and sustainably harvested wood that age with grace and develop a rich patina over decades.',
  },
  {
    number: '03',
    title: 'Sustainable Rigor',
    tagline: 'Passive By Instinct',
    description: 'Sustainability is not an afterthought or bolt-on feature. We deploy microclimatic solar orientation, natural stack airflow, daylight harvesting, and low embodied carbon from the initial concept sketch.',
  },
  {
    number: '04',
    title: 'Human Scale',
    tagline: 'Choreographing Emotion',
    description: 'Beyond technical precision, architecture is an emotional discipline. We compose light, shadow, compression, and release to craft restorative environments that elevate everyday life.',
  },
]

// -----------------------------------------------------------------------------
// 3. SAMPLE TESTIMONIALS
// -----------------------------------------------------------------------------
export const SAMPLE_TESTIMONIALS: SampleTestimonial[] = [
  {
    id: 'test-1',
    clientName: 'Rajesh & Malini Kumar',
    company: 'Homeowners',
    role: 'Private Residence Clients',
    quote: 'Techno Architecture transformed our vision into a sanctuary. Living in our home feels like a calm retreat from Mumbai’s chaos. Their mastery of light and material transitions exceeded our highest expectations.',
    photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80',
    projectRef: 'The Residence at Elm Grove',
  },
  {
    id: 'test-2',
    clientName: 'Arjun Nair',
    company: 'Nair Infrastructure Partners',
    role: 'Managing Director',
    quote: 'Working with the Techno Architecture team on the Horizon Complex was a masterclass in collaboration. They achieved an IGBC Platinum rating without once compromising the architectural poetry.',
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80',
    projectRef: 'Horizon Commercial Complex',
  },
  {
    id: 'test-3',
    clientName: 'Dr. Sunita Rao',
    company: 'Bengaluru Arts & Heritage Trust',
    role: 'Trustee',
    quote: 'Their sensitivity to civic culture and sustainable timber construction is extraordinary. The Cultural Arts Pavilion is already poised to become a benchmark for civic architecture in South India.',
    photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80',
    projectRef: 'The Cultural Arts Pavilion',
  },
]

// -----------------------------------------------------------------------------
// 4. SAMPLE TEAM MEMBERS
// -----------------------------------------------------------------------------
export const SAMPLE_TEAM: SampleTeamMember[] = [
  {
    id: 'team-1',
    name: 'Rajesh V.',
    role: 'Founder & Principal Architect',
    bio: 'With over two decades of architectural leadership, Rajesh guides the studio with a philosophy rooted in geometric rigor, contextual honesty, and spatial serenity.',
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=85',
    education: 'M.Arch, Architectural Association (AA), London',
    socialLinks: {
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
    },
    order: 1,
  },
  {
    id: 'team-2',
    name: 'Ananya Sen',
    role: 'Partner & Senior Design Associate',
    bio: 'Specializing in residential architecture and bioclimatic planning, Ananya translates nuanced client briefs into sculptural, enduring built forms.',
    photoUrl: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=800&auto=format&fit=crop&q=85',
    education: 'B.Arch, CEPT University, Ahmedabad',
    socialLinks: {
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
    },
    order: 2,
  },
  {
    id: 'team-3',
    name: 'Vikramaditya Patil',
    role: 'Lead Technical Architect',
    bio: 'Overseeing complex structural coordination and parametric design workflows, Vikramaditya bridges architectural vision with advanced engineering execution.',
    photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=85',
    education: 'M.Tech Building Technology, IIT Madras',
    socialLinks: {
      linkedin: 'https://linkedin.com',
    },
    order: 3,
  },
  {
    id: 'team-4',
    name: 'Meera Deshmukh',
    role: 'Director of Interior Architecture',
    bio: 'Meera curates the studio’s tactile palette, crafting bespoke millwork, lighting choreography, and material narratives that elevate interior spaces.',
    photoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=85',
    education: 'M.Des Interior Architecture, Pratt Institute, NY',
    socialLinks: {
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
    },
    order: 4,
  },
]

// -----------------------------------------------------------------------------
// 5. SAMPLE SERVICES
// -----------------------------------------------------------------------------
export const SAMPLE_SERVICES: SampleService[] = [
  {
    id: 'srv-1',
    title: 'Architectural Design',
    slug: 'architectural-design',
    shortDescription: 'Comprehensive architectural solutions from site analysis and massing to detailed working drawings and on-site oversight.',
    fullDescription: 'We deliver bespoke architectural consulting across residential, commercial, and civic sectors. Our design methodology balances spatial poetry with structural efficiency, resulting in buildings that sit naturally in their surroundings and endure gracefully.',
    scope: [
      'Site Feasibility & Topographical Analysis',
      'Concept Formulation & 3D Massing Studies',
      'Statutory Approvals & Compliance Drawings',
      'Detailed Construction Documentation (GFC)',
      'Contract Administration & Site Quality Audits',
    ],
    iconName: 'Building2',
    order: 1,
  },
  {
    id: 'srv-2',
    title: 'Interior Architecture',
    slug: 'interior-architecture',
    shortDescription: 'Spatial choreography, bespoke joinery, tailored finishes, and lighting design that seamlessly continue the exterior architecture.',
    fullDescription: 'We treat interior spaces as an intimate extension of architecture rather than mere surface decoration. From sculpted ceiling coves to custom brass hardware, every detail is engineered to evoke comfort and quiet sophistication.',
    scope: [
      'Interior Space Planning & Ergonomics',
      'Custom Millwork & Joinery Detailing',
      'Curated Natural Stone & Timber Palettes',
      'Architectural Lighting Design & Automation',
      'Art Procurement & Furniture Curation',
    ],
    iconName: 'LayoutGrid',
    order: 2,
  },
  {
    id: 'srv-3',
    title: 'Master Planning & Urban Design',
    slug: 'master-planning',
    shortDescription: 'Large-scale campus design, mixed-use precincts, and residential enclaves planned with resilient infrastructure.',
    fullDescription: 'We formulate forward-thinking urban master plans that anticipate growth, promote pedestrian connectivity, and integrate green ecological corridors. Our plans balance commercial density with human-centered public realm design.',
    scope: [
      'Zoning, Density & FAR Optimisation',
      'Pedestrian & Vehicular Circulation Systems',
      'Integrated Water & Microclimate Networks',
      'Phased Development Roadmaps',
      'Urban Governance & Guideline Manuals',
    ],
    iconName: 'Compass',
    order: 3,
  },
  {
    id: 'srv-4',
    title: 'Sustainable & Biophilic Consulting',
    slug: 'sustainable-consulting',
    shortDescription: 'Passive solar optimization, net-zero carbon strategies, water stewardship, and green building certifications.',
    fullDescription: 'True sustainability begins with building physics. We leverage computational daylight modeling and thermal mass simulation to drive down operational energy demands before mechanical systems are even sized.',
    scope: [
      'Bioclimatic Solar & Wind Analysis',
      'Embodied Carbon Life-Cycle Assessments',
      'Rainwater Harvesting & Decentralised STP',
      'IGBC, LEED & GRIHA Certification Support',
      'Net-Zero Operational Energy Planning',
    ],
    iconName: 'Leaf',
    order: 4,
  },
  {
    id: 'srv-5',
    title: 'Landscape Integration',
    slug: 'landscape-integration',
    shortDescription: 'Harmonious outdoor living spaces, courtyard microclimates, water bodies, and native flora integration.',
    fullDescription: 'We consider the outdoor realm an indispensable room of the house. By weaving water features, indigenous tree canopies, and stepped terraces into the architectural form, we create continuous indoor-outdoor transitions.',
    scope: [
      'Site Grading & Hardscape Choreography',
      'Microclimatic Courtyard & Atrium Design',
      'Native & Drought-Tolerant Planting Palettes',
      'Reflection Pools & Water Aeration Features',
      'Illuminated Night-time Landscape Trails',
    ],
    iconName: 'Trees',
    order: 5,
  },
  {
    id: 'srv-6',
    title: 'Turnkey Design-Build Execution',
    slug: 'turnkey-execution',
    shortDescription: 'End-to-end design stewardship with single-source accountability from breaking ground to final handover.',
    fullDescription: 'For select clients seeking uncompromising precision, we offer comprehensive turnkey delivery. We align master craftsmen, specialized engineering consultants, and trusted trade contractors under our direct supervision.',
    scope: [
      'Single-Point Accountability & Budget Guarantee',
      'Specialised Craft & Artisanal Fabrication',
      'Rigorous Material Source Verification',
      'Weekly Digital Milestone Tracking',
      'Comprehensive Handover & As-Built Audits',
    ],
    iconName: 'ShieldCheck',
    order: 6,
  },
]

// -----------------------------------------------------------------------------
// 6. SAMPLE GALLERY IMAGES
// -----------------------------------------------------------------------------
export const SAMPLE_GALLERY: SampleGalleryImage[] = [
  {
    id: 'gal-1',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&auto=format&fit=crop&q=85',
    caption: 'Courtyard lightwell and reflection pond at The Residence at Elm Grove',
    category: 'Residential',
    projectTitle: 'The Residence at Elm Grove',
    aspectRatio: 'landscape',
    order: 1,
  },
  {
    id: 'gal-2',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&auto=format&fit=crop&q=85',
    caption: 'Ceramic brise-soleil facade rhythm at Horizon Commercial Complex',
    category: 'Commercial',
    projectTitle: 'Horizon Commercial Complex',
    aspectRatio: 'portrait',
    order: 2,
  },
  {
    id: 'gal-3',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&auto=format&fit=crop&q=85',
    caption: 'Seamless threshold between indoor living volume and landscaped lawn',
    category: 'Interior',
    projectTitle: 'The Residence at Elm Grove',
    aspectRatio: 'landscape',
    order: 3,
  },
  {
    id: 'gal-4',
    imageUrl: 'https://images.unsplash.com/photo-1554366347-b8e9e1f77f6e?w=1600&auto=format&fit=crop&q=85',
    caption: 'Structural timber glulam framing and rammed-earth plinth study',
    category: 'Conceptual',
    projectTitle: 'The Cultural Arts Pavilion',
    aspectRatio: 'landscape',
    order: 4,
  },
  {
    id: 'gal-5',
    imageUrl: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1600&auto=format&fit=crop&q=85',
    caption: 'Cantilevered terrace framing the Arabian Sea sunset',
    category: 'Residential',
    projectTitle: 'Skyline Coastal Villa',
    aspectRatio: 'landscape',
    order: 5,
  },
  {
    id: 'gal-6',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&auto=format&fit=crop&q=85',
    caption: 'Multi-height daylight atrium with acoustic timber louvers',
    category: 'Commercial',
    projectTitle: 'Horizon Commercial Complex',
    aspectRatio: 'square',
    order: 6,
  },
  {
    id: 'gal-7',
    imageUrl: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&auto=format&fit=crop&q=85',
    caption: 'Master bath pavilion clad in honed Udaipur green marble',
    category: 'Interior',
    projectTitle: 'Skyline Coastal Villa',
    aspectRatio: 'portrait',
    order: 7,
  },
  {
    id: 'gal-8',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1600&auto=format&fit=crop&q=85',
    caption: 'Physical massing model exploration of interlocking spatial cubes',
    category: 'Conceptual',
    projectTitle: 'Urban Infill Prototype',
    aspectRatio: 'landscape',
    order: 8,
  },
]

// -----------------------------------------------------------------------------
// 7. SAMPLE RECOGNITIONS
// -----------------------------------------------------------------------------
export const SAMPLE_RECOGNITIONS: SampleRecognition[] = [
  {
    id: 'rec-1',
    title: 'National Architectural Excellence Award',
    year: 2024,
    issuingBody: 'Indian Institute of Architects (IIA)',
    category: 'Private Residential',
    projectRef: 'The Residence at Elm Grove',
    order: 1,
  },
  {
    id: 'rec-2',
    title: 'Best Sustainable Commercial Campus',
    year: 2023,
    issuingBody: 'World Architecture Community (WAC)',
    category: 'Commercial & Workplace',
    projectRef: 'Horizon Commercial Complex',
    order: 2,
  },
  {
    id: 'rec-3',
    title: 'Top 50 Contemporary Design Studios of India',
    year: 2023,
    issuingBody: 'Architectural Digest India',
    category: 'Studio Honor',
    order: 3,
  },
  {
    id: 'rec-4',
    title: 'Excellence in Sustainable Materials Citation',
    year: 2022,
    issuingBody: 'Indian Green Building Council (IGBC)',
    category: 'Sustainability',
    projectRef: 'Horizon Commercial Complex',
    order: 4,
  },
  {
    id: 'rec-5',
    title: 'International Property Awards: Best Architecture Single Residence',
    year: 2022,
    issuingBody: 'Asia Pacific Property Awards',
    category: 'Residential',
    projectRef: 'Skyline Coastal Villa',
    order: 5,
  },
]

// -----------------------------------------------------------------------------
// 8. SAMPLE BLOG POSTS
// -----------------------------------------------------------------------------
export const SAMPLE_BLOG_POSTS: SampleBlogPost[] = [
  {
    id: 'blog-1',
    title: 'Designing for the Future: Sustainability as Architectural Instinct',
    slug: 'designing-for-the-future',
    coverImageUrl: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1600&auto=format&fit=crop&q=85',
    excerpt: 'Sustainability is not a mechanical checklist or an afterthought. Here is how we embed climate-responsive physics into initial sketches.',
    author: 'Rajesh V.',
    authorRole: 'Founder & Principal Architect',
    publishedAt: 'February 14, 2025',
    readingTime: '5 min read',
    contentMarkdown: `
The built environment accounts for nearly 40% of global energy consumption and greenhouse emissions. As architects designing for the subcontinent, we hold a moral and professional obligation to design buildings that tread lightly on our ecology.

### Beyond the Green Checklist

Too often in contemporary real estate, "sustainability" has been reduced to marketing jargon — rooftop solar panels slapped on inefficient, glass-wrapped boxes that trap heat like greenhouses. At Techno Architecture, we advocate for a return to fundamental building physics:

1. **Orientation First**: Prioritising north-south building massing and deep overhangs to shield interior volumes from high incident solar angles.
2. **Thermal Mass**: Utilizing thick insulated masonry, laterite stone, or board-formed concrete to absorb daytime tropical heat and release it during cooler night hours.
3. **Induced Stack Ventilation**: Designing vertical lightwells and courtyards that draw hot air upward and pull cool garden breezes through living zones.

When these passive principles are executed with rigor, the building's operational cooling requirement drops by 30% to 45% before mechanical systems are even engaged.

### The Ethics of Material Sourcing

Every specification carries an embodied carbon signature. In our recent projects, we have favored regional basalt quarried within 80km of the site, fly-ash blended concrete, and fast-renewing bamboo-composite louvers over imported marble and anodised aluminium. True architecture should celebrate its geography, not erase it.
    `,
  },
  {
    id: 'blog-2',
    title: 'The Poetics of Concrete: Tactile Brutalism in the Tropics',
    slug: 'poetics-of-concrete',
    coverImageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1600&auto=format&fit=crop&q=85',
    excerpt: 'Exposed concrete has often been misjudged as austere. Paired with tropical greenery and warm wood, it becomes one of our most expressive mediums.',
    author: 'Ananya Sen',
    authorRole: 'Senior Design Associate',
    publishedAt: 'January 28, 2025',
    readingTime: '6 min read',
    contentMarkdown: `
Cast concrete is the liquid stone of the modern era. While often associated with the austere monuments of mid-century European modernism, concrete assumes an entirely different persona when confronted with tropical monsoon rain, humidity, and intense sunlight.

### The Human Hand in Formwork

What gives concrete its poetic resonance is its ability to record human craft. When poured against rough-sawn pine or pinewood battens, the grain, knots, and imperfections of the timber are permanently transferred onto the stone-like surface. No two concrete pours are ever identical.

### Ageing With Dignity

Unlike glossy surfaces that show immediate distress when weathered, raw concrete weathers like natural stone. As moss and lichens settle into shaded crevices and the sun bleaches exposed parapets, the building develops an architectural patina that deepens its dialogue with surrounding gardens.

When contrasted with the warmth of aged teak, natural brass fixtures, and filtered daylight, concrete stops feeling cold — it becomes grounding, monastic, and serene.
    `,
  },
  {
    id: 'blog-3',
    title: 'The Modern Courtyard: Reclaiming Privacy in Dense Urban Centers',
    slug: 'modern-courtyard-architecture',
    coverImageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&auto=format&fit=crop&q=85',
    excerpt: 'How historical courtyard typologies from traditional Indian havelis provide the ultimate solution for contemporary urban sanctuary living.',
    author: 'Meera Deshmukh',
    authorRole: 'Director of Interior Architecture',
    publishedAt: 'December 18, 2024',
    readingTime: '4 min read',
    contentMarkdown: `
As Indian metropolitan cities grow increasingly crowded, noisy, and vertically congested, the traditional outward-facing suburban villa is failing to provide sanctuary. Glass facades that look directly into neighboring apartments force homeowners to keep blinds permanently drawn.

### Turning the House Inside-Out

The antidote lies in our indigenous architectural memory: the central courtyard (*angan* or *chowk*). By wrapping the building program around an introverted garden open to the sky:

- Complete acoustic separation from street traffic is established.
- Rain, morning sunlight, and seasonal breezes enter the heart of the dwelling.
- Family members can look across the courtyard to see one another without sacrificing personal privacy.

In our Bandra residential project, the courtyard became the emotional anchor of the home — a living painting that shifts with monsoon squalls and starry nights.
    `,
  },
]

// -----------------------------------------------------------------------------
// 9. SAMPLE FAQ ITEMS
// -----------------------------------------------------------------------------
export const SAMPLE_FAQS: SampleFaqItem[] = [
  {
    id: 'faq-1',
    question: 'What types of architectural projects does Techno Architecture take on?',
    answer: 'Our portfolio encompasses high-end bespoke residential villas, commercial and corporate headquarters, boutique hospitality resorts, and civic cultural institutions. We take on a limited number of commissions each year to ensure the direct, hands-on involvement of our principal architects on every project.',
    category: 'Services',
    order: 1,
  },
  {
    id: 'faq-2',
    question: 'How do we begin a collaboration with your studio?',
    answer: 'The process begins with an exploratory consultation where we discuss your site, aspirations, programmatic requirements, and target timeline. Following this, we issue a formal project proposal detailing design phases, milestones, deliverables, and professional fee structures.',
    category: 'Process',
    order: 2,
  },
  {
    id: 'faq-3',
    question: 'What does the typical design and execution timeline look like?',
    answer: 'Timelines vary by typology and scale. A private residence typically requires 4–6 months for conceptual and working drawing development, followed by 14–18 months of construction. Large commercial or hospitality masterplans typically span 24–36 months from initial site appraisal to client handover.',
    category: 'Process',
    order: 3,
  },
  {
    id: 'faq-4',
    question: 'Do you provide full interior architecture and lighting design?',
    answer: 'Yes. We firmly believe that architecture and interior spaces must exist in continuous harmony. We offer comprehensive interior architecture services including bespoke joinery detailing, natural stone and material procurement, and integrated architectural lighting design.',
    category: 'Services',
    order: 4,
  },
  {
    id: 'faq-5',
    question: 'How does your studio integrate sustainability into residential and commercial work?',
    answer: 'We prioritize passive building physics first: solar orientation, thermal massing, stack ventilation, and daylight harvesting. We complement this with rainwater harvesting, greywater recycling, and low-carbon material selections, helping clients achieve IGBC or LEED certification if desired.',
    category: 'Sustainability',
    order: 5,
  },
  {
    id: 'faq-6',
    question: 'How are architectural fees structured?',
    answer: 'Fees are structured either as a percentage of overall construction cost or as a milestone-based lump sum, depending on project complexity. Fees are billed across clear project deliverables: Concept Design, Schematic Development, Municipal Approval Sets, Good-for-Construction (GFC) drawings, and Periodic Site Supervision.',
    category: 'Budget',
    order: 6,
  },
]

// -----------------------------------------------------------------------------
// 10. STUDIO ABOUT & PHILOSOPHY COPY
// -----------------------------------------------------------------------------
export const STUDIO_ABOUT: StudioAbout = {
  tagline: 'Designing Spaces. Defining Futures.',
  philosophy: 'We believe architecture is the art of giving physical form to human aspirations, grounded in climatic truth, material honesty, and structural poetry.',
  story: [
    'Founded in Bengaluru, Techno Architecture has grown into a progressive design practice celebrated for producing contextual, timeless, and sustainable built environments across India.',
    'Our studio operates as an interdisciplinary laboratory where architectural rigor, bioclimatic engineering, and tactile craftsmanship converge. We avoid transient stylistic trends, focusing instead on spatial clarity, proportion, and the enduring beauty of natural materials.',
    'Over the last 15 years, our practice has completed more than 40 bespoke projects spanning luxury private homes, corporate headquarters, boutique resorts, and civic cultural pavilions.',
  ],
  vision: 'To be a benchmark architectural practice that shapes the built environment with conscious purpose, climate resilience, and timeless elegance.',
  mission: 'To create architectural experiences that honor their site, enrich their communities, tread lightly on planetary resources, and elevate the daily lives of those who inhabit them.',
  values: [
    {
      title: 'Contextual Honesty',
      description: 'Every form is derived from climate, orientation, topography, and cultural memory rather than arbitrary stylistic dogma.',
    },
    {
      title: 'Material Authenticity',
      description: 'We celebrate raw, unpretentious materials that age with grace and carry the tactile marks of human craftsmanship.',
    },
    {
      title: 'Ecological Responsibility',
      description: 'Sustainable thinking is woven into our first sketches — optimizing building envelopes, daylighting, and renewable cycles.',
    },
    {
      title: 'Spatial Poetry',
      description: 'We orchestrate light, volume, shadow, and silence to craft spaces that inspire peace, focus, and human connection.',
    },
  ],
  statistics: [
    { value: '15+', label: 'Years of Practice' },
    { value: '45+', label: 'Delivered Projects' },
    { value: '12', label: 'Design Citations' },
    { value: '100%', label: 'Bespoke Craft' },
  ],
}

// -----------------------------------------------------------------------------
// 11. STUDIO CONTACT DETAILS (STATIC PLACEHOLDER)
// -----------------------------------------------------------------------------
export const STUDIO_CONTACT = {
  address: {
    line1: 'Techno Architecture Studio',
    line2: '#42, 12th Main Road, 100ft Road Junction',
    area: 'Indiranagar, Bengaluru',
    state: 'Karnataka 560038, India',
  },
  phone: '+91 80 2521 8890',
  phoneDirect: '+91 98450 12345',
  email: 'info@technoarchitecture.in',
  inquiriesEmail: 'projects@technoarchitecture.in',
  careersEmail: 'careers@technoarchitecture.in',
  hours: 'Monday – Friday: 9:30 AM – 6:30 PM IST',
  social: {
    instagram: 'https://instagram.com/technoarchitecture',
    linkedin: 'https://linkedin.com/company/techno-architecture',
    facebook: 'https://facebook.com/technoarchitecture',
  },
}

// -----------------------------------------------------------------------------
// 12. ASYNC ACCESSOR FUNCTIONS (Swappable for Prisma in Phase 2)
// -----------------------------------------------------------------------------
export async function getFeaturedProjects(): Promise<SampleProject[]> {
  return SAMPLE_PROJECTS.filter((p) => p.featured).sort((a, b) => a.order - b.order)
}

export async function getAllProjects(): Promise<SampleProject[]> {
  return [...SAMPLE_PROJECTS].sort((a, b) => a.order - b.order)
}

export async function getProjectBySlug(slug: string): Promise<SampleProject | null> {
  return SAMPLE_PROJECTS.find((p) => p.slug === slug) || null
}

export async function getProjectSlugs(): Promise<string[]> {
  return SAMPLE_PROJECTS.map((p) => p.slug)
}

export async function getHomePageData() {
  return {
    featuredProjects: await getFeaturedProjects(),
    pillars: SAMPLE_PILLARS,
    testimonials: SAMPLE_TESTIMONIALS,
    studioAbout: STUDIO_ABOUT,
  }
}

export async function getAboutData() {
  return {
    studioAbout: STUDIO_ABOUT,
    team: SAMPLE_TEAM,
  }
}

export async function getServices(): Promise<SampleService[]> {
  return [...SAMPLE_SERVICES].sort((a, b) => a.order - b.order)
}

export async function getTeam(): Promise<SampleTeamMember[]> {
  return [...SAMPLE_TEAM].sort((a, b) => a.order - b.order)
}

export async function getTestimonials(): Promise<SampleTestimonial[]> {
  return [...SAMPLE_TESTIMONIALS]
}

export async function getGalleryImages(): Promise<SampleGalleryImage[]> {
  return [...SAMPLE_GALLERY].sort((a, b) => a.order - b.order)
}

export async function getRecognitions(): Promise<SampleRecognition[]> {
  return [...SAMPLE_RECOGNITIONS].sort((a, b) => a.order - b.order)
}

export async function getBlogPosts(): Promise<SampleBlogPost[]> {
  return [...SAMPLE_BLOG_POSTS]
}

export async function getBlogPostBySlug(slug: string): Promise<SampleBlogPost | null> {
  return SAMPLE_BLOG_POSTS.find((b) => b.slug === slug) || null
}

export async function getBlogPostSlugs(): Promise<string[]> {
  return SAMPLE_BLOG_POSTS.map((b) => b.slug)
}

export async function getFaqItems(): Promise<SampleFaqItem[]> {
  return [...SAMPLE_FAQS].sort((a, b) => a.order - b.order)
}

export async function getContactDetails() {
  return STUDIO_CONTACT
}
