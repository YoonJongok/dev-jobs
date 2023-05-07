import { z } from 'zod';

export const contractSchema = z.enum(['Full Time', 'Part Time']);

export const locationSchema = z.enum([
  'Default',
  'United Kingdom',
  'United States',
  'Russia',
  'Japan',
  'Germany',
  'New Zealand',
  'Singapore',
]);

export const jobSchema = z.object({
  id: z.number(),
  company: z.string(),
  logo: z.string(),
  logoBackground: z.string(),
  position: z.string(),
  postedAt: z.string(),
  contract: contractSchema,
  location: locationSchema,
  website: z.string(),
  apply: z.string(),
  description: z.string(),
  requirements: z.object({
    content: z.string(),
    items: z.array(z.string()),
  }),
  role: z.object({
    content: z.string(),
    items: z.array(z.string()),
  }),
});

export type Contract = z.infer<typeof contractSchema>;
export type Location = z.infer<typeof locationSchema>;
export type Job = z.infer<typeof jobSchema>;

