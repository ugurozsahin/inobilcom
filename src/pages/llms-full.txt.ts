import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { site } from '../data/site';

/** /llms-full.txt — the whole site as one Markdown document for LLM consumption. */
export const GET: APIRoute = async ({ site: siteUrl }) => {
  const base = (siteUrl ?? new URL('https://www.inobil.com')).toString().replace(/\/$/, '');
  const projects = (await getCollection('projects', ({ data }) => !data.draft)).sort(
    (a, b) => a.data.order - b.data.order,
  );

  const sections = [
    `# ${site.name}`,
    '',
    `> ${site.description}`,
    '',
    `Website: ${base}/`,
    '',
    '## About',
    '',
    site.about.body,
    '',
    `${site.about.person} — ${site.about.title}.`,
    '',
    '## Services',
    '',
    ...site.services.map((s) => `- ${s}`),
    '',
    '## Selected work',
    '',
    site.work.intro,
    '',
    ...projects.flatMap((p) => [
      `### ${p.data.title}`,
      '',
      `- URL: ${base}/work/${p.id}/`,
      `- Client: ${p.data.client}`,
      `- Country: ${p.data.country}`,
      `- Tags: ${p.data.tags.join(', ')}`,
      '',
      p.data.summary,
      '',
      (p.body ?? '').trim(),
      '',
    ]),
    '## Contact',
    '',
    site.contact.intro,
    '',
    `- Email: ${site.contact.email}`,
    `- LinkedIn: ${site.contact.linkedin}`,
    `- GitHub: ${site.contact.github}`,
    '',
  ];

  return new Response(sections.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
