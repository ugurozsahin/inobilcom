import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { site } from '../data/site';

/**
 * /llms.txt: a concise, plain-text summary of the site for LLM crawlers and agents.
 * Follows the llms.txt convention (https://llmstxt.org): H1, blockquote summary, sections of links.
 */
export const GET: APIRoute = async ({ site: siteUrl }) => {
  const base = (siteUrl ?? new URL('https://www.inobil.com')).toString().replace(/\/$/, '');
  const projects = (await getCollection('projects', ({ data }) => !data.draft)).sort(
    (a, b) => a.data.order - b.data.order,
  );

  const lines = [
    `# ${site.name}`,
    '',
    `> ${site.description}`,
    '',
    `${site.about.body} ${site.name} is registered in the United Kingdom.`,
    '',
    '## Services',
    '',
    ...site.services.map((s) => `- ${s}`),
    '',
    '## Selected work',
    '',
    ...projects.map(
      (p) => `- [${p.data.title}](${base}/work/${p.id}/): ${p.data.client}, ${p.data.country}. ${p.data.summary}`,
    ),
    '',
    '## Contact',
    '',
    `- Email: ${site.contact.email}`,
    `- LinkedIn: ${site.contact.linkedin}`,
    `- GitHub: ${site.contact.github}`,
    '',
    '## Optional',
    '',
    `- [Full content](${base}/llms-full.txt): every project page in full, as Markdown`,
    `- [Sitemap](${base}/sitemap-index.xml)`,
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
