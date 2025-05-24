import { z } from 'zod'

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const productSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  purchase_price: z.number(),
  selling_price: z.number(),
  stock: z.number(),
  category: z.object({
    id: z.number(),
    name: z.string(),
  }),
  supplier: z.object({
    id: z.number(),
    name: z.string(),
    phone: z.string(),
    email: z.string(),
  }),
  created_at: z.string(),
  updated_at: z.string(),
})

export type Product = z.infer<typeof productSchema>
