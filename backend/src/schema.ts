import z from "zod";

export const createExpenseSchema = z.object({
    desc: z.string(),
    amount: z.number().positive({message: "the amount must be a positive number"}),
    groupId: z.number().int().positive({message: "the amount must be a positive integer"})
})

export const deleteSchema = z.number().positive();

export const createGroupSchema = z.object({
    name: z.string(),
})

export const createSplitSchema = z.object({
    percentage: z.number().positive(),
    userId: z.number().positive(),
    expenseId: z.number().positive(),
});

export const updateSplitSchema = z.object({
    id: z.number().positive(),
    percentage: z.number().positive() 
});

export const createUsersSchema = z.object({
    name: z.string(),
    email: z.string().email(),
});

export const userTotalSchema = z.object({
    userId: z.number().positive(),
    groupId: z.number().positive()
});

export const registeredUserSchema = z.object({
    email: z.string().email(),
    password: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    phoneNo: z.number().int().positive()
});

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().max(32).min(8)
})

export type createExpenseInput = z.infer<typeof createExpenseSchema>;
export type delExpType = z.infer<typeof deleteSchema>;
export type regUserType = z.infer<typeof registeredUserSchema>;