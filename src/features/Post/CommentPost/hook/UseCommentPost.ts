import {useForm} from 'react-hook-form'

import {zodResolver} from '@hookform/resolvers/zod'
import {z} from 'zod'

const schema = z.object({
    comment: z.string().min(1, 'Comment cant be empty').max(100, 'Comment may have max 100 letters'),
})

type FormData = z.infer<typeof schema>

export const useCommentPost = () => {
    const {
        formState: {errors},
        handleSubmit,
        register,
        ...rest
    } = useForm<FormData>({
        mode: 'all',
        resolver: zodResolver(schema),
    })

    const onSubmit = (data: FormData) => {
        alert(JSON.stringify(data))
    }

    return {
        errors,
        handleSubmit: handleSubmit(onSubmit),
        register,
        ...rest,
    }
}
