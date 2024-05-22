import {z} from 'zod'

export const ImageSchema = z
    .object({
        createdAt: z.string(),
        fileSize: z.number(),
        height: z.number(),
        uploadId: z.string(),
        url: z.string(),
        width: z.number(),
    })
    .strict()
export type ImageType = z.infer<typeof ImageSchema>
