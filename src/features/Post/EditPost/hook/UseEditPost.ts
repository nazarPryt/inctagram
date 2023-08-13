import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {SetAppNotificationAC} from '_app/store/appSlice'
import {useAppDispatch} from 'shared/hooks/reduxHooks'
import {Dispatch, SetStateAction} from 'react'
import {useEditUserPostMutation} from 'features/Post/EditPost/api/editPost.api'

const schema = yup.object({
    description: yup.string().required(`Description can't be empty`),
})

type FormData = yup.InferType<typeof schema>
type UseEditPostType = {
    postId: number
    setEdit: Dispatch<SetStateAction<boolean>>
}

export const useEditPost = ({postId, setEdit}: UseEditPostType) => {
    const dispatch = useAppDispatch()
    const [updateUserPost, {isLoading}] = useEditUserPostMutation()
    const {
        handleSubmit,
        formState: {errors},
        register,
        ...rest
    } = useForm<FormData>({
        resolver: yupResolver(schema),
    })

    const onSubmit = async (data: FormData) => {
        await updateUserPost({description: data.description, postId})
            .unwrap()
            .then(() => {
                dispatch(
                    SetAppNotificationAC({
                        notifications: {type: 'success', message: 'Your description was successfully updated'},
                    })
                )
                setEdit(false)
            })
            .catch(error => {
                dispatch(
                    SetAppNotificationAC({
                        notifications: {type: 'error', message: error.message},
                    })
                )
            })
    }

    return {
        handleSubmit: handleSubmit(onSubmit),
        errors,
        register,
        isLoading,
        ...rest,
    }
}
