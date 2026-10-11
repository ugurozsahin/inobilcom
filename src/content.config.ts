import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Projects shown in the "Selected work" section.
 * One Markdown file per project in src/content/projects/.
 * The Markdown body is rendered on the project's detail page (/work/<slug>/).
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      client: z.string(),
      country: z.string(),
      summary: z.string(),
      tags: z.array(z.string()).default([]),
      cover: image(),
      /** Kept for reference only; not rendered as an outbound link. */
      url: z.string().url().optional(),
      /** Lower numbers appear first. */
      order: z.number().default(100),
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects };
