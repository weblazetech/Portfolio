import { Project, ProcessStage, ApproachStep } from '../types/project'

export const CLIENT_WEBSITES: Project[] = [
  {
    id: 'lavish',
    name: 'LAVISH',
    category: 'Website Design & Development',
    description: 'A modern digital presence designed to showcase the Lavish brand and create a polished customer experience.',
    url: 'https://lavishlooks.srishanth.com/',
    previewType: 'slideshow',
    previewImage: '/images/lavish/screenshot-1.jpg',
    slideshowImages: [
      '/images/lavish/screenshot-1.jpg',
      '/images/lavish/screenshot-2.jpg',
      '/images/lavish/screenshot-3.jpg',
      '/images/lavish/screenshot-4.jpg',
      '/images/lavish/screenshot-5.jpg'
    ],
    buttonText: 'View Website →'
  },
  {
    id: 'palluvo',
    name: 'PALLUVO',
    category: 'Website Design & Development',
    description: 'A refined website experience designed around the Palluvo brand, products and customer journey.',
    url: 'https://palluvo.store',
    previewType: 'slideshow',
    previewImage: '/images/palluvo/screenshot-1.jpg',
    slideshowImages: [
      '/images/palluvo/screenshot-1.jpg',
      '/images/palluvo/screenshot-2.jpg',
      '/images/palluvo/screenshot-3.jpg',
      '/images/palluvo/screenshot-4.jpg'
    ],
    buttonText: 'View Website →'
  },
  {
    id: 'lol',
    name: 'LIGHT OF LOVE',
    category: 'Website Design & Development',
    description: 'An editorial wedding and celebration photography studio website showcasing stories, monographs and an interactive visual archive.',
    url: 'https://lol.weblaze.in/',
    previewType: 'slideshow',
    previewImage: '/images/lol/screenshot-1.jpg',
    slideshowImages: [
      '/images/lol/screenshot-1.jpg',
      '/images/lol/screenshot-2.jpg',
      '/images/lol/screenshot-3.jpg',
      '/images/lol/screenshot-4.jpg',
      '/images/lol/screenshot-5.jpg'
    ],
    buttonText: 'View Website →'
  },
  {
    id: 'wedraaga',
    name: 'WEDRAAGA',
    category: 'Website Design & Development',
    description: 'A bespoke wedding planning and guest RSVP studio featuring curated Hyderabad venues, floral architecture, and celebration planning tools.',
    url: 'https://wedraaga.weblaze.in/',
    previewType: 'slideshow',
    previewImage: '/images/wedraaga/screenshot-1.jpg',
    slideshowImages: [
      '/images/wedraaga/screenshot-1.jpg',
      '/images/wedraaga/screenshot-2.jpg',
      '/images/wedraaga/screenshot-3.jpg',
      '/images/wedraaga/screenshot-4.jpg',
      '/images/wedraaga/screenshot-5.jpg'
    ],
    buttonText: 'View Website →'
  },
  {
    id: 'lasabroso',
    name: 'LA SABROSO',
    category: 'Website Design & Development',
    description: 'A visually engaging digital experience built to present the La Sabroso brand online.',
    url: 'https://lasabroso.srishanth.com/',
    previewType: 'image',
    previewImage: '/images/projects/lasabroso.jpg',
    buttonText: 'View Website →'
  },
  {
    id: 'papilio',
    name: 'PAPILIO',
    category: 'Website Design & Development',
    description: 'A clean, modern website designed to strengthen Papilio’s online presence and customer experience.',
    url: 'https://papilio.srishanth.com',
    previewType: 'image',
    previewImage: '/images/projects/papilio.jpg',
    buttonText: 'View Website →'
  },
  {
    id: 'roosterx',
    name: 'ROOSTERX',
    category: 'Website Design & Development',
    description: 'A purpose-built digital experience designed around the RoosterX brand and its audience.',
    url: 'https://roosterx.srishanth.com/',
    previewType: 'image',
    previewImage: '/images/projects/roosterx.jpg',
    buttonText: 'View Website →'
  }
]

export const BUSINESS_SOFTWARE: Project[] = [
  {
    id: 'opentele',
    name: 'OPEN TELE CRM',
    category: 'CRM / Business Software',
    description: 'A business-focused CRM platform designed to organize leads, customer interactions and sales workflows.',
    url: 'https://telecrm.srishanth.com/',
    previewType: 'image',
    previewImage: '/images/projects/telecrm.jpg',
    meta: 'Platform: Web Application · Type: Business Software · Role: Design + Development',
    buttonText: 'View Product →',
    placeholderSubtitle: 'Product preview coming soon'
  },
  {
    id: 'pharmastore',
    name: 'PHARMA STORE POS',
    category: 'POS / Retail Software',
    description: 'A point-of-sale system designed for pharmacy store operations, helping manage sales, products and day-to-day transactions.',
    url: 'https://pharmastore-gules.vercel.app/',
    previewType: 'image',
    previewImage: '/images/projects/pharmastore.jpg',
    meta: 'Platform: Web Application · Type: Business Software · Role: Design + Development',
    buttonText: 'View Product →'
  },
  {
    id: 'goflytta',
    name: 'GOFLYTTA',
    category: 'Business Software',
    description: 'A digital experience designed and developed for Goflytta.',
    url: 'https://goflytta.srishanth.com/',
    previewType: 'image',
    previewImage: '/images/projects/goflytta.jpg',
    meta: 'Platform: Web Application · Type: Business Software · Role: Design + Development',
    buttonText: 'View Product →'
  }
]

export const PROCESS_STAGES: ProcessStage[] = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Understanding the business, users and requirements.'
  },
  {
    number: '02',
    title: 'Design',
    description: 'Creating a clear, intuitive and scalable product experience.'
  },
  {
    number: '03',
    title: 'Development',
    description: 'Building reliable software using modern technologies.'
  },
  {
    number: '04',
    title: 'Deployment',
    description: 'Launching, hosting and supporting the final product.'
  }
]

export const APPROACH_STEPS: ApproachStep[] = [
  {
    number: '01',
    title: 'Understand the problem',
    description: 'We start by understanding the business, users and the actual problem the product needs to solve.'
  },
  {
    number: '02',
    title: 'Design the experience',
    description: 'We turn requirements into simple, intuitive and scalable digital experiences.',
    highlighted: true
  },
  {
    number: '03',
    title: 'Build for scale',
    description: 'We engineer products with maintainability, reliability and future growth in mind.'
  },
  {
    number: '04',
    title: 'Launch and iterate',
    description: 'We deploy, measure and improve the product based on real-world usage.',
    highlighted: true
  }
]
