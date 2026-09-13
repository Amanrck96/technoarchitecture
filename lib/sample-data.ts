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
  key?: string
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
    "key": "Mantle",
    "id": "proj-1",
    "title": "The Mantle House",
    "slug": "the-mantle-house",
    "location": "Bengaluru, Karnataka",
    "year": 2023,
    "status": "COMPLETED",
    "typology": "Private Residential Architecture",
    "area": "8,500 sq.ft",
    "client": "Private Residence",
    "featured": true,
    "order": 1,
    "coverImageUrl": "/projects/the-mantle-house-cover.jpg",
    "description": "A celebrated residence characterized by an undulating perforated architectural mantle screen that modulates solar heat gain, privacy, and dramatic play of light and shadow throughout the day.",
    "narrative": [
      "The Mantle House is an exploration in dualities: fortress-like enclosure to the dense suburban street, and expansive, light-washed openness to the private interior courtyard.",
      "A fluid, perforated screen wraps the upper facade like a protective architectural mantle, filtering harsh tropical afternoon sunlight into dancing geometric light patterns while inducing natural stack ventilation.",
      "The interior program unfolds across split-level terraces, where honed concrete surfaces meet warm natural teak and floor-to-ceiling glass apertures that connect family living directly with central water gardens."
    ],
    "galleryImageUrls": [
      "https://lh3.googleusercontent.com/d/1ag9-rtiwkGuReo15Xztn4wy0TezZ9pKw=w1600",
      "https://lh3.googleusercontent.com/d/15KN7mB0qgXE3XnvjtVXHc7GzIy3BNAVZ=w1600",
      "https://lh3.googleusercontent.com/d/1I2KkSZ815jwVZag76hn_W4aaSr1bn_m0=w1600",
      "https://lh3.googleusercontent.com/d/1QyaZGuTXgO7Ee4QPBobRsP-FeovcMly2=w1600",
      "https://lh3.googleusercontent.com/d/1ah5fvbDyruSc3dt903zkSICJ_zC9FuQB=w1600",
      "https://lh3.googleusercontent.com/d/1-V_pm98CyhcYzwqbuKUbXQii4Lh6WpMQ=w1600",
      "https://lh3.googleusercontent.com/d/1Kbvpzs9f05dl_GhzGyhHsnItPd1xXXn-=w1600",
      "https://lh3.googleusercontent.com/d/17OhgL8IPOG3X1Ob3VG7E7C67Hk0rRyPw=w1600"
    ]
  },
  {
    "key": "BETWEEN TWO TREES",
    "id": "proj-2",
    "title": "Between Two Trees",
    "slug": "between-two-trees",
    "location": "Bengaluru, Karnataka",
    "year": 2024,
    "status": "COMPLETED",
    "typology": "Biophilic Residential Design",
    "area": "6,800 sq.ft",
    "client": "Private Residence",
    "featured": true,
    "order": 2,
    "coverImageUrl": "/projects/between-two-trees-cover.jpg",
    "description": "Conceived and built around two mature pre-existing canopy trees on site, preserving the land’s ecological memory through an introverted courtyard typology.",
    "narrative": [
      "Rather than clearing the site, the architectural footprint was carved and articulated directly around two mature indigenous trees, honoring the natural genius loci of the property.",
      "Living pavilions are connected via covered glass bridges that look out into the leafy central canopies, allowing family members to experience seasonal changes in foliage from every room.",
      "A minimalist palette of exposed board-formed concrete, hand-laid brickwork, and natural slate anchors the residence into the surrounding gardens."
    ],
    "galleryImageUrls": [
      "https://lh3.googleusercontent.com/d/1UIPf6FlrVbuGuJp_mFm4TJQOiwIBa--V=w1600",
      "https://lh3.googleusercontent.com/d/1OjsqrYA9AaVD-TceVS7ygB1vGO5s20BP=w1600",
      "https://lh3.googleusercontent.com/d/1L2uEmHVKS68VIUKauXy0vzdYJALrfFwe=w1600",
      "https://lh3.googleusercontent.com/d/1vsJ54a6fQAHQInCzg8JqX1ModCCNTl8C=w1600",
      "https://lh3.googleusercontent.com/d/1GXtkCWSkztwGU2QAChVh_NcjWR_ssshF=w1600",
      "https://lh3.googleusercontent.com/d/10er8WHJhehy9mZXjlpjHzWaLG44K-VIK=w1600",
      "https://lh3.googleusercontent.com/d/1arEmpT9mexPZkr6M8zLLpX-e3UUI2_lv=w1600",
      "https://lh3.googleusercontent.com/d/1-JOHv3nHo8ZKbDF8LhMS9EUz6-kRWsgP=w1600"
    ]
  },
  {
    "key": "BELAKU",
    "id": "proj-3",
    "title": "Belaku Residence",
    "slug": "belaku",
    "location": "Bengaluru, Karnataka",
    "year": 2023,
    "status": "COMPLETED",
    "typology": "Contemporary Tropical Villa",
    "area": "7,200 sq.ft",
    "client": "Private Residence",
    "featured": true,
    "order": 3,
    "coverImageUrl": "/projects/belaku-cover.jpg",
    "description": "Named after the Kannada word for Light, Belaku is a study in spatial radiance, utilizing double-height volumes and linear skylights to bathe raw concrete in natural warmth.",
    "narrative": [
      "Belaku translates to Light in Kannada, capturing the primary architectural material of this family home. The home is organised around a central vertical lightwell that draws daylight into subterranean entertainment areas.",
      "Strategically positioned motorized timber louvers and vertical fins temper the glare while maximizing natural cross-ventilation, drastically cutting cooling loads across the year.",
      "The sculptural exterior balances cantilevered concrete canopies with warm natural wood accents, setting a benchmark for modern tropical domestic architecture."
    ],
    "galleryImageUrls": [
      "https://lh3.googleusercontent.com/d/1J7nTJqEawtK6vdctcG79tcWCCqlADPyc=w1600",
      "https://lh3.googleusercontent.com/d/1pY5oyTdic6kd07XbsJ0JTDArV_-c9Oe3=w1600",
      "https://lh3.googleusercontent.com/d/1lDKginAoE9PXdPskYACn9KjHj__mklTW=w1600",
      "https://lh3.googleusercontent.com/d/11EZoI9ONDOB-fL3TNRnRri6sODvenlEK=w1600",
      "https://lh3.googleusercontent.com/d/1-ooFN0Y70pyME9jo83zhrH6UFBxBggb1=w1600",
      "https://lh3.googleusercontent.com/d/1mKsw1bJjbxZpe_iupmSwQo-KaOSg6iCN=w1600",
      "https://lh3.googleusercontent.com/d/1xfHmGQmbLX0a2UBxVXgE_JNjPl7vTFRV=w1600",
      "https://lh3.googleusercontent.com/d/1crFWX5bMUUH_A01smWjqs_pl6kmmxk0f=w1600"
    ]
  },
  {
    "key": "Far Site",
    "id": "proj-4",
    "title": "The Far Site House",
    "slug": "far-site-house",
    "location": "Bengaluru, Karnataka",
    "year": 2023,
    "status": "COMPLETED",
    "typology": "Courtyard Residence",
    "area": "5,400 sq.ft",
    "client": "Private Residence",
    "featured": true,
    "order": 4,
    "coverImageUrl": "/projects/far-site-house-cover.jpg",
    "description": "Featured on Buildofy, The Far Site House demonstrates how an unconventional urban plot can yield a serene sanctuary through courtyards and cantilevered planes.",
    "narrative": [
      "Facing an awkward urban site boundary, The Far Site House turns its attention inward, celebrating an open-to-sky courtyard with reflection pools and lush tropical vegetation.",
      "Clean linear volumes, expansive overhangs, and custom steel-and-wood fenestration frame views of sky and greenery while buffering traffic noise from adjacent streets.",
      "The house utilizes passive climatic strategies including cavity brick masonry, shaded clerestories, and rainwater recharge sumps integrated into the structural foundation."
    ],
    "galleryImageUrls": [
      "https://lh3.googleusercontent.com/d/1d3AtnkM5aC9lQbp1LFxvOIyaO9sJDClT=w1600",
      "https://lh3.googleusercontent.com/d/1nLP2l_2rFEu4qL9bPC-0bXX2C5uoYYKD=w1600",
      "https://lh3.googleusercontent.com/d/1X0Bg7b1AS2OTtl-U1qTlO4ihIVH72UiN=w1600",
      "https://lh3.googleusercontent.com/d/1ilX0K33X6EwOA503rI52IjvX_xoQI78W=w1600",
      "https://lh3.googleusercontent.com/d/1xGQqNik3kzKG9D7_pNhcOFqQufyd6koG=w1600",
      "https://lh3.googleusercontent.com/d/11VXoIOs13_C0PVPfjJhvBd1zsY0acvNH=w1600",
      "https://lh3.googleusercontent.com/d/1hTG6y3BcndwTcTLGnkEzk0xtY2wYhW85=w1600",
      "https://lh3.googleusercontent.com/d/1lpJRWJvd10g2V-wlf1gnqAYsVI19x6bO=w1600"
    ]
  },
  {
    "key": "AIKYA",
    "id": "proj-5",
    "title": "Aikya Residence",
    "slug": "aikya",
    "location": "Bengaluru, Karnataka",
    "year": 2024,
    "status": "COMPLETED",
    "typology": "Private Luxury Residence",
    "area": "6,200 sq.ft",
    "client": "Private Residence",
    "featured": false,
    "order": 5,
    "coverImageUrl": "/projects/aikya-cover.jpg",
    "description": "A harmonious family residence bringing together stone, water, and timber in a series of interconnected living pavilions around a tranquil central courtyard.",
    "narrative": [
      "Aikya, meaning Harmony or Oneness, was sculpted to accommodate multi-generational living without sacrificing individual tranquility.",
      "The ground floor features soaring double-height living spaces that flow into a contemplative waterbody courtyard, accented by subtle nighttime architectural illumination.",
      "Local stone masonry and fine teak joinery celebrate Karnataka’s rich craft heritage within a crisp modernist architectural language."
    ],
    "galleryImageUrls": [
      "https://lh3.googleusercontent.com/d/12HC-P7dtJ63KiVE8XLn_exEuWqSkOJ9M=w1600",
      "https://lh3.googleusercontent.com/d/191LvlKrpBCDTdJ5BFhOjuhciwsmrdIfd=w1600",
      "https://lh3.googleusercontent.com/d/1QqkDz6WjQyvGxbBYdltxsmQYmY5ZNwMB=w1600",
      "https://lh3.googleusercontent.com/d/1Wrz--ReqSld0mxYnA6k4c-LjnmpJlPo2=w1600",
      "https://lh3.googleusercontent.com/d/1_Uo6fNLjgkEl1o_iAU1tJH9iZKcawDdX=w1600",
      "https://lh3.googleusercontent.com/d/1tZzax0cg3u3HfR23uKugeOGOXdWtGyJK=w1600",
      "https://lh3.googleusercontent.com/d/186LAiuuD9yn4ipUkSdAkpPgA3D_EPsYZ=w1600",
      "https://lh3.googleusercontent.com/d/1N210iEm9sF608pzFRmpuOTQc_wQHb25g=w1600"
    ]
  },
  {
    "key": "House in the Air",
    "id": "proj-6",
    "title": "House in the Air",
    "slug": "house-in-the-air",
    "location": "Bengaluru, Karnataka",
    "year": 2024,
    "status": "COMPLETED",
    "typology": "Cantilevered Modernist Villa",
    "area": "7,800 sq.ft",
    "client": "Private Residence",
    "featured": false,
    "order": 6,
    "coverImageUrl": "/projects/house-in-the-air-cover.jpg",
    "description": "A bold structural feat where dramatic upper floor plates cantilever daringly over open-air garden terraces, creating an illusion of floating architecture.",
    "narrative": [
      "House in the Air explores structural lightness through deep post-tensioned cantilevers and floating perimeter slabs that defy gravity.",
      "The ground level dissolves into lush surrounding landscaping, while the private bedrooms and sky lounge occupy the suspended upper mass.",
      "Smoked glass, dark architectural steel, and fair-faced concrete form an uncompromising, timeless exterior silhouette."
    ],
    "galleryImageUrls": [
      "https://lh3.googleusercontent.com/d/15-H_r-7iVndsiC3jF0OM_AQhZ113W1nE=w1600",
      "https://lh3.googleusercontent.com/d/1A7Zd-lqLz_hcna7S9kPuzsa5poD8gYca=w1600",
      "https://lh3.googleusercontent.com/d/1e0Wq2rCiHv1V-ID_cEo4YRvo29LyqQNj=w1600",
      "https://lh3.googleusercontent.com/d/1MN4sf-ZpjDmLf07ml5JTDMB4PyPMdHYk=w1600",
      "https://lh3.googleusercontent.com/d/1HNJq86W-cDRio7aGc9F2o6GsHZU_yABm=w1600",
      "https://lh3.googleusercontent.com/d/1uRzbLHV7tTSHHRj7FgUx5OECtxQCQK7P=w1600",
      "https://lh3.googleusercontent.com/d/1bWA-WocI4vXEww2bqp00Cf6a__KIYnTa=w1600",
      "https://lh3.googleusercontent.com/d/1aJTmC2gUJIdiB7skyM2tg2BO5oloxxe7=w1600"
    ]
  },
  {
    "key": "Kanasu",
    "id": "proj-7",
    "title": "Kanasu House",
    "slug": "kanasu",
    "location": "Mysuru, Karnataka",
    "year": 2023,
    "status": "COMPLETED",
    "typology": "Artisanal Residential Retreat",
    "area": "5,900 sq.ft",
    "client": "Private Residence",
    "featured": false,
    "order": 7,
    "coverImageUrl": "/projects/kanasu-cover.jpg",
    "description": "Meaning Dream in Kannada, Kanasu weaves tactile brick jaali screens, landscaped verandas, and double-height living areas into an intimate family home.",
    "narrative": [
      "Kanasu reimagines traditional South Indian veranda living for the 21st century. Perforated brick jaali screens cast shifting tapestries of shadow while cooling ambient breezes.",
      "Courtyards, skylights, and indoor planter beds bring nature into the core of daily routines, blurring boundaries between enclosed domesticity and open garden.",
      "Natural Kota stone flooring, exposed concrete ceilings, and hand-finished timber joinery create a warm, grounding atmosphere."
    ],
    "galleryImageUrls": [
      "https://lh3.googleusercontent.com/d/1TlcSizts1S0qECoftRKaEXV9zcDQuq9b=w1600",
      "https://lh3.googleusercontent.com/d/1Vb7ZvBD_aP8pfEox3Jxc-PqIBtXL8t0B=w1600",
      "https://lh3.googleusercontent.com/d/1JT6r9zBYow_gnjZ-Wk8S_-2To-DLlR7s=w1600",
      "https://lh3.googleusercontent.com/d/1fnXKUn_QiVMsYpziq4WTyiYC3Ol0i13P=w1600",
      "https://lh3.googleusercontent.com/d/1RLCXP-wUUtZ9QCfWhcdtrFJpHdVGo4oG=w1600",
      "https://lh3.googleusercontent.com/d/1b4t3j6bQ9_h1UzOkCS1LBSUln6dBj3px=w1600",
      "https://lh3.googleusercontent.com/d/1KTpu61T9awMvlKbKV8b6n09Gx0wPSAeY=w1600",
      "https://lh3.googleusercontent.com/d/1O2vUBElm8qsTBVefu79YGYtLjSCfKmFB=w1600"
    ]
  },
  {
    "key": "Kripa",
    "id": "proj-8",
    "title": "Kripa Residence",
    "slug": "kripa",
    "location": "Bengaluru, Karnataka",
    "year": 2024,
    "status": "COMPLETED",
    "typology": "Private Estate",
    "area": "9,100 sq.ft",
    "client": "Private Residence",
    "featured": false,
    "order": 8,
    "coverImageUrl": "/projects/kripa-cover.jpg",
    "description": "An expansive private estate harmoniously balancing monolithic stone plinths with horizontal timber overhangs and reflective water gardens.",
    "narrative": [
      "Kripa is an architectural sanctuary designed to provide peace from urban life. The residence unfolds along a central linear axis flanked by cascading reflection pools.",
      "Deeply recessed glazing and oversized timber eaves provide shading against intense tropical rains and sun.",
      "The estate incorporates advanced sustainable systems including geothermal pre-cooling, rainwater storage, and high-efficiency smart home automation."
    ],
    "galleryImageUrls": [
      "https://lh3.googleusercontent.com/d/1mLO_7ZniCl-EQ-HUYxLaLUxVFg0OSKv0=w1600",
      "https://lh3.googleusercontent.com/d/1tBPc3ITGYE2U44pez6xuhrw4f9OLFtBM=w1600",
      "https://lh3.googleusercontent.com/d/1F0Nd5sumek1o-6MV9fxdijn9bGcPqs1e=w1600",
      "https://lh3.googleusercontent.com/d/17L_io7EJlzswpNn7JvTgCM6NPFYxj-xb=w1600",
      "https://lh3.googleusercontent.com/d/1h4-85uCRuVolxxG3EF7lJDJQXVYexzHg=w1600",
      "https://lh3.googleusercontent.com/d/1451vv_d1-XlMtB1pNn_tme8Dp0bGGV7b=w1600",
      "https://lh3.googleusercontent.com/d/1Gpinsuvpfvnqh59jRLJJ_9jhRvH1vTq6=w1600",
      "https://lh3.googleusercontent.com/d/1XXbXPNGbmvWAjSGSSKlR_m-WtjXey9Yn=w1600"
    ]
  },
  {
    "key": "BRINDAVAN",
    "id": "proj-9",
    "title": "Brindavan Residence",
    "slug": "brindavan",
    "location": "Bengaluru, Karnataka",
    "year": 2023,
    "status": "COMPLETED",
    "typology": "Courtyard Sanctuary",
    "area": "6,600 sq.ft",
    "client": "Private Residence",
    "featured": false,
    "order": 9,
    "coverImageUrl": "/projects/brindavan-cover.jpg",
    "description": "A tranquil domestic sanctuary inspired by traditional courtyard havelis, blending rough-hewn stone walls, water elements, and warm wood.",
    "narrative": [
      "Brindavan is an inward-looking sanctuary where stone, water, and tropical foliage form an acoustic buffer from the bustling city outside.",
      "A central open-to-sky courtyard acts as the spiritual and climatic heart of the dwelling, cooling incoming breezes and fostering multi-generational interaction.",
      "Every material was chosen for its tactile honesty — hand-dressed granite, natural teak, and patinated brass fittings that age gracefully with time."
    ],
    "galleryImageUrls": [
      "https://lh3.googleusercontent.com/d/1O0M20FPXx1yU4MbZe15DcuHE5wRu2Lbx=w1600",
      "https://lh3.googleusercontent.com/d/1MmZMzs-XiaHqnIL3RCK58ngRDPIlzW6k=w1600",
      "https://lh3.googleusercontent.com/d/1QKRu46yVrL-ZXJTvXf0FvDCkj-T399lB=w1600",
      "https://lh3.googleusercontent.com/d/1sWImE-XlK60wR85H8Y1vecfs_cdvb33H=w1600",
      "https://lh3.googleusercontent.com/d/1WbLGGzQYnTMPaBbt3GrL6h9N9eGNJi2Y=w1600",
      "https://lh3.googleusercontent.com/d/1DhzQxmNuXBb_4IXe6j0c4orQS3S1-qgE=w1600",
      "https://lh3.googleusercontent.com/d/1EVhZb9LdHDuqj0z8a-Y8apcTKcHbSX47=w1600",
      "https://lh3.googleusercontent.com/d/1f0TiI88SvOpkNzfhFOFTXL5g7WP0u8fY=w1600"
    ]
  },
  {
    "key": "Salut",
    "id": "proj-10",
    "title": "Salut Residence",
    "slug": "salut",
    "location": "Bengaluru, Karnataka",
    "year": 2024,
    "status": "COMPLETED",
    "typology": "Sculptural Contemporary Villa",
    "area": "8,200 sq.ft",
    "client": "Private Residence",
    "featured": false,
    "order": 10,
    "coverImageUrl": "/projects/salut-cover.jpg",
    "description": "A dynamic composition of bold angular volumes, cantilevered balconies, and expansive glass portals that frame curated garden vignettes.",
    "narrative": [
      "Salut is a contemporary tour de force featuring intersecting geometric forms and dramatic cantilevers that create layered outdoor living zones.",
      "Large-format sliding glass panels open the living rooms completely to manicured perimeter lawns and an elevated infinity pool.",
      "The interior architecture features bespoke millwork, fluted stone wall accents, and custom lighting choreography designed specifically for the residence."
    ],
    "galleryImageUrls": [
      "https://lh3.googleusercontent.com/d/1jI3Yv1xM9L3FeDbLwlHOhthz0FKVl0gq=w1600",
      "https://lh3.googleusercontent.com/d/1O39g84TydRaPUUpd2NNNGPlibMnltma7=w1600",
      "https://lh3.googleusercontent.com/d/1RrJP6fXYHRJf7ZnnnVTRUnYpMc8m3gm5=w1600",
      "https://lh3.googleusercontent.com/d/1kVMAcEM2tNRE0BME2MdtqhDFhMaY5aYl=w1600",
      "https://lh3.googleusercontent.com/d/1sSEYS_5w87_TyKh5GgR1hlFO8Pg5vGpc=w1600",
      "https://lh3.googleusercontent.com/d/17KAFXOADQKXPfHhZsMo38rx2D-W-0gyL=w1600",
      "https://lh3.googleusercontent.com/d/1_N0WnT4JYTwv9WoOub14UlAK0tclN3_c=w1600",
      "https://lh3.googleusercontent.com/d/1QHRE8yzc5eyj77-1f19GzaJfOh8MD0P6=w1600"
    ]
  }
];

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
    "id": "gal-1",
    "imageUrl": "/projects/the-mantle-house-cover.jpg",
    "caption": "Perforated architectural mantle screen casting geometric light shadows",
    "category": "Residential",
    "projectTitle": "The Mantle House",
    "aspectRatio": "landscape",
    "order": 1
  },
  {
    "id": "gal-2",
    "imageUrl": "/projects/between-two-trees-cover.jpg",
    "caption": "Preserving mature canopy trees through an introverted courtyard plan",
    "category": "Residential",
    "projectTitle": "Between Two Trees",
    "aspectRatio": "portrait",
    "order": 2
  },
  {
    "id": "gal-3",
    "imageUrl": "/projects/belaku-cover.jpg",
    "caption": "Luminous double-height volumes and concrete framing at Belaku",
    "category": "Residential",
    "projectTitle": "Belaku Residence",
    "aspectRatio": "landscape",
    "order": 3
  },
  {
    "id": "gal-4",
    "imageUrl": "/projects/aikya-cover.jpg",
    "caption": "Evening elevation and contemplative reflection waterbody",
    "category": "Residential",
    "projectTitle": "Aikya Residence",
    "aspectRatio": "landscape",
    "order": 4
  },
  {
    "id": "gal-5",
    "imageUrl": "/projects/far-site-house-cover.jpg",
    "caption": "Buildofy-featured central courtyard and cantilevered roof planes",
    "category": "Interior",
    "projectTitle": "The Far Site House",
    "aspectRatio": "landscape",
    "order": 5
  },
  {
    "id": "gal-6",
    "imageUrl": "/projects/house-in-the-air-cover.jpg",
    "caption": "Defying gravity with suspended upper living volumes and sky terraces",
    "category": "Conceptual",
    "projectTitle": "House in the Air",
    "aspectRatio": "square",
    "order": 6
  },
  {
    "id": "gal-7",
    "imageUrl": "/projects/kanasu-cover.jpg",
    "caption": "Tactile brick jaali screens providing climatic shade and ventilation",
    "category": "Interior",
    "projectTitle": "Kanasu House",
    "aspectRatio": "portrait",
    "order": 7
  },
  {
    "id": "gal-8",
    "imageUrl": "/projects/kripa-cover.jpg",
    "caption": "Aerial perspective of private estate and cascading reflection pools",
    "category": "Residential",
    "projectTitle": "Kripa Residence",
    "aspectRatio": "landscape",
    "order": 8
  },
  {
    "id": "gal-9",
    "imageUrl": "/projects/brindavan-cover.jpg",
    "caption": "Hand-dressed stone masonry and intimate courtyard living",
    "category": "Interior",
    "projectTitle": "Brindavan Residence",
    "aspectRatio": "landscape",
    "order": 9
  },
  {
    "id": "gal-10",
    "imageUrl": "/projects/salut-cover.jpg",
    "caption": "Sculptural angular cantilevers and floor-to-ceiling sliding glass portals",
    "category": "Commercial",
    "projectTitle": "Salut Residence",
    "aspectRatio": "landscape",
    "order": 10
  }
];

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
