/** Site-wide content. Edit here, no code changes needed elsewhere. */
export const site = {
  name: 'Inobil',
  domain: 'www.inobil.com',
  description:
    'Inobil is an independent software consultancy: software engineering, cloud & DevOps, distributed systems, Kubernetes and automation — delivered end to end.',
  hero: {
    eyebrow: 'Independent software consultancy',
    headline: 'We design, build and run software systems.',
    lead:
      'Inobil is an independent software consultancy: software engineering, cloud & DevOps, distributed systems, Kubernetes and automation — delivered end to end.',
  },
  services: ['Software Development', 'Architecture', 'DevOps', 'Digital Transformation', 'Consultancy'],
  work: {
    heading: 'Selected work',
    intro: 'Projects delivered with and for clients across the UK, Denmark and Turkey. All of them team efforts.',
  },
  about: {
    heading: 'About',
    body:
      'Inobil is the consultancy of Ugur Ozsahin, a multi-disciplinary engineer building software since 2006. The work spans backend engineering, distributed systems, cloud platforms (Azure, AWS), Kubernetes, CI/CD automation and observability, across C#, TypeScript, Go, Java and Python. The approach is simple: systems thinking, reliability without over-engineering, and ownership from design through deployment and operations.',
    person: 'Ugur Ozsahin',
    title: 'Software Engineer & Consultant',
  },
  contact: {
    heading: 'Contact',
    intro: 'Open to engineering, architecture and DevOps engagements.',
    email: 'ugurozsahin@inobil.com',
    github: 'https://github.com/ugurozsahin',
    linkedin: 'https://www.linkedin.com/in/ugurozsahin/',
  },
} as const;
