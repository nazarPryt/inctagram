import {useForm} from 'react-hook-form'

import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
    comment: yup.string().required('Comment cant be empty'),
})

type FormData = yup.InferType<typeof schema>

export const useCommentPost = () => {
    const {
        formState: {errors},
        handleSubmit,
        register,
        ...rest
    } = useForm<FormData>({
        resolver: yupResolver(schema),
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
