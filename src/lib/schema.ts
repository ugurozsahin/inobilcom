import { site } from '../data/site';

const base = 'https://www.inobil.com';

export const ids = {
  organization: `${base}/#organization`,
  person: `${base}/#founder`,
  website: `${base}/#website`,
};

/** schema.org Person for the founder; linked from Organization.founder. */
export const personSchema = {
  '@type': 'Person',
  '@id': ids.person,
  name: site.about.person,
  jobTitle: site.about.title,
  worksFor: { '@id': ids.organization },
  email: `mailto:${site.contact.email}`,
  sameAs: [site.contact.linkedin, site.contact.github],
  knowsAbout: site.seo.knowsAbout,
};

/** schema.org Organization for Inobil. */
export const organizationSchema = {
  '@type': ['Organization', 'ProfessionalService'],
  '@id': ids.organization,
  name: site.name,
  legalName: site.seo.legalName,
  url: `${base}/`,
  logo: { '@type': 'ImageObject', url: `${base}/brand/inobil-icon-512.png`, width: 512, height: 512 },
  image: `${base}/og.png`,
  description: site.description,
  email: site.contact.email,
  foundingDate: site.seo.foundingDate,
  founder: { '@id': ids.person },
  address: { '@type': 'PostalAddress', addressCountry: site.seo.addressCountry },
  areaServed: site.seo.areaServed,
  sameAs: [site.contact.linkedin, site.contact.github],
  knowsAbout: site.seo.knowsAbout,
  makesOffer: site.services.map((name) => ({
    '@type': 'Offer',
    itemOffered: { '@type': 'Service', name, provider: { '@id': ids.organization } },
  })),
};

/** schema.org WebSite. */
export const websiteSchema = {
  '@type': 'WebSite',
  '@id': ids.website,
  url: `${base}/`,
  name: site.name,
  description: site.description,
  publisher: { '@id': ids.organization },
  inLanguage: 'en',
};

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function projectSchema(p: {
  url: string;
  title: string;
  summary: string;
  client: string;
  country: string;
  tags: string[];
  image: string;
}) {
  return {
    '@type': 'CreativeWork',
    '@id': `${p.url}#work`,
    url: p.url,
    name: p.title,
    headline: `${p.title} — ${site.name}`,
    description: p.summary,
    image: p.image,
    keywords: p.tags.join(', '),
    creator: { '@id': ids.organization },
    contributor: { '@id': ids.person },
    sourceOrganization: { '@type': 'Organization', name: p.client },
    locationCreated: { '@type': 'Country', name: p.country },
    inLanguage: 'en',
    isPartOf: { '@id': ids.website },
  };
}

export function projectListSchema(items: { name: string; url: string }[]) {
  return {
    '@type': 'ItemList',
    name: site.work.heading,
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      url: item.url,
    })),
  };
}
