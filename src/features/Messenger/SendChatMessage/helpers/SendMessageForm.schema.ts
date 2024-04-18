import {z} from 'zod'

export const SendMessageFormSchema = z.object({
    message: z.string().min(1).max(1000),
})

export type SendMessageFormDataType = z.infer<typeof SendMessageFormSchema>
