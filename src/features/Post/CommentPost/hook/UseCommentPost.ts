import {FormEventHandler} from 'react'
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
        trigger,
        ...rest
    } = useForm<FormData>({
        mode: 'all',
        resolver: zodResolver(schema),
    })

    const onSubmit = (data: FormData) => {
        alert(JSON.stringify(data))
    }
    const handleClick = async (e: any) => {
        e.preventDefault()
        const isValid = await trigger()

        if (isValid) {
            handleSubmit(onSubmit)()
        }
    }

    return {
        errors,
        handleSubmit: handleClick,
        register,
        ...rest,
    }
}
