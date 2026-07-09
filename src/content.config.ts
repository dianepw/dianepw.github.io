import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    // FIXED: Added .optional() so pages without a profile image don't crash
    profileImage: z.string().optional() 
  }),
});

const services = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/services" }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    image: z.string(),
    link: z.string(),
    order: z.number(),
    bullets: z.array(z.string()).optional(),
  }),
});

const faqs = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/faqs" }),
  schema: z.object({
    question: z.string(),
    order: z.number(),
  }),
});

export const collections = {
  pages,
  services,
  faqs,
};