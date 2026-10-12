/** Site-wide content. Edit here, no code changes needed elsewhere. */
export const site = {
  name: 'Inobil',
  domain: 'www.inobil.com',
  description:
    'Inobil is an independent software consultancy: software engineering, cloud & DevOps, distributed systems, Kubernetes, automation and AI integration, delivered end to end.',
  hero: {
    eyebrow: 'Independent software consultancy',
    headline: 'We design, build and run software systems.',
    lead:
      'Inobil is an independent software consultancy: software engineering, cloud & DevOps, distributed systems, Kubernetes, automation and AI integration, delivered end to end.',
  },
  services: ['Software Development', 'Architecture', 'DevOps', 'AI Integration', 'Digital Transformation', 'Consultancy'],
  work: {
    heading: 'Selected work',
    intro: 'Projects delivered with and for clients across the UK, Denmark and Turkey. All of them team efforts.',
  },
  about: {
    heading: 'About',
    body:
      'Inobil is the consultancy of Ugur Ozsahin, a multi-disciplinary engineer building software since 2006. The work spans backend engineering, distributed systems, cloud platforms (Azure, AWS), Kubernetes, CI/CD automation and observability, across C#, TypeScript, Go, Java and Python. The approach is simple: systems thinking, reliability without over-engineering, and ownership from design through deployment and operations. AI-assisted tools such as GitHub Copilot and Claude take the repetitive parts of development off the table, so time goes into design, reliability and the problems that actually need a person.',
    person: 'Ugur Ozsahin',
    title: 'Software Engineer & Consultant',
  },
  /** Structured-data and LLM-facing facts. Not rendered as visible text. */
  seo: {
    legalName: 'Inobil',
    /** ISO 3166-1 alpha-2 country of registration. */
    addressCountry: 'GB',
    areaServed: ['United Kingdom'],
    /** Year the owner started building software professionally. */
    foundingDate: '2006',
    knowsAbout: [
      'Software engineering',
      'Software architecture',
      'Cloud platforms (Azure, AWS)',
      'Kubernetes',
      'DevOps and CI/CD automation',
      'Infrastructure as code',
      'Observability',
      'Distributed systems and microservices',
      'AI integration and LLM-powered product features',
      'AI-assisted software development (GitHub Copilot, Claude)',
      'Digital transformation',
      'Optimizely (Episerver) CMS and commerce',
      'C#, TypeScript, Go, Java, Python',
    ],
  },
  contact: {
    heading: 'Contact',
    intro: 'Open to engineering, architecture, DevOps and AI integration engagements.',
    email: 'ugurozsahin@inobil.com',
    github: 'https://github.com/ugurozsahin',
    linkedin: 'https://www.linkedin.com/in/ugurozsahin/',
  },
} as const;
