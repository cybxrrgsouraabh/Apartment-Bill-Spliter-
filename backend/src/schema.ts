import z from "zod"

export const createExpenseSchema = z.object({
    desc: z.string(),
    amount: z.number().positive({message: "The amount must be positive number"}),
    groupId: z.number().int().positive({message: "The groupId must be positive integer"})
})

export type createExpenseInput = z.infer<typeof createExpenseSchema>;