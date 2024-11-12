import {Dispatch, SetStateAction} from 'react'
import {useForm} from 'react-hook-form'

import {SetAppNotificationAC} from '@/_app/Store/slices/appSlice'
import {PostByIdType} from '@/entities/ViewUserPost/api/getPost.types'
import {useEditUserPostMutation} from '@/features/Post/EditPost/api/editPost.api'
import {useAppDispatch} from '@/shared/hooks/reduxHooks'
import {zodResolver} from '@hookform/resolvers/zod'
import {z} from 'zod'

const schema = z.object({
    description: z
        .string()
        .min(1, `Description can't be empty`)
        .max(300, 'Description can`t be longer than 300 characters'),
})

type FormData = z.infer<typeof schema>
type UseEditPostType = {
    post: PostByIdType
    setEdit: Dispatch<SetStateAction<boolean>>
}

export const useEditPost = ({post, setEdit}: UseEditPostType) => {
    const dispatch = useAppDispatch()
    const [updateUserPost, {isLoading}] = useEditUserPostMutation()
    const {
        formState: {errors},
        handleSubmit,
        register,
        ...rest
    } = useForm<FormData>({
        defaultValues: {
            description: post.description,
        },
        mode: 'all',
        resolver: zodResolver(schema),
    })

    const onSubmit = async (data: FormData) => {
        await updateUserPost({description: data.description, postId: post.id})
            .unwrap()
            .then(() => {
                dispatch(
                    SetAppNotificationAC({
                        notifications: {message: 'Your description was successfully updated', type: 'success'},
                    })
                )
                setEdit(false)
            })
            .catch(error => {
                dispatch(
                    SetAppNotificationAC({
                        notifications: {message: error.message, type: 'error'},
                    })
                )
            })
    }

    return {
        errors,
        handleSubmit: handleSubmit(onSubmit),
        isLoading,
        register,
        ...rest,
    }
}
