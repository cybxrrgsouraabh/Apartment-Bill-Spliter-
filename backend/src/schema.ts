import z from "zod";

export const createExpenseSchema = z.object({
    desc: z.string(),
    amount: z.number().positive({message: "the amount must be a positive number"}),
    groupId: z.number().int().positive({message: "the amount must be a positive integer"})
})

export type createExpenseInput = z.infer<typeof createExpenseSchema>;