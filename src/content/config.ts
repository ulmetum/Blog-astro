import { defineCollection, reference, z } from 'astro:content'

const blogCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      description: z.string(),
      image: image().refine((img) => img.width < 1200, {
        message: 'La imagen debe ser menos de 1200px'
      }),

      // Relaciones
      author: reference('author'),

      tags: z.array(z.string()),
      isDraft: z.boolean().default(false)
    })
})

const authorCollection = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      avatar: image(),
      bio: z.string(),
      subtitle: z.string(),
      twitter: z.string(),
      linkedIn: z.string(),
      github: z.string()
    })
})

export const collections = {
  blog: blogCollection,
  author: authorCollection
}
