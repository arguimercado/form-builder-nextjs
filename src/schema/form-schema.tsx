import * as z from 'zod'

export const FormSchema = z.object({
   name: z.string().min(3, { message: 'Name must be at least 3 characters long' }),
   description: z.string().min(3, { message: 'Description must be at least 3 characters long' }),
   type: z.string().optional()
});

export type FormSchemaType = z.infer<typeof FormSchema>;

