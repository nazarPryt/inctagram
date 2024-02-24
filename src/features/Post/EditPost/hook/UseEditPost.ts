import {Dispatch, SetStateAction} from 'react'
import {useForm} from 'react-hook-form'

import {SetAppNotificationAC} from '@/_app/Store/slices/appSlice'
import {PostByIdType} from '@/entities/ViewUserPost/api/type'
import {useEditUserPostMutation} from '@/features/Post/EditPost/api/editPost.api'
import {useAppDispatch} from '@/shared/hooks/reduxHooks'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
    description: yup
        .string()
        .required(`Description can't be empty`)
        .max(300, 'Description can`t be longer than 300 characters'),
})

type FormData = yup.InferType<typeof schema>
type UseEditPostType = {
    data: PostByIdType
    setEdit: Dispatch<SetStateAction<boolean>>
}

export const useEditPost = ({data: post, setEdit}: UseEditPostType) => {
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
        resolver: yupResolver(schema),
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
