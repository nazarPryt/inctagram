import {ChangeEvent, useState} from 'react'
import AvatarEditor from 'react-avatar-editor'

import {useAppDispatch} from '@/shared/hooks/reduxHooks'
import {SetAppNotificationAC} from '@/shared/store/appSlice'
import {BaseModalProps} from '@/shared/ui/Modal/Modal'

import {useUploadAvatarMutation} from '../api/avatar.api'

export const useUploadUserAvatar = (props: BaseModalProps) => {
    const [avatar, {isLoading}] = useUploadAvatarMutation()
    const dispatch = useAppDispatch()

    const [editor, setEditor] = useState<AvatarEditor | null>(null)
    const [picture, setPicture] = useState({
        croppedImg: '',
        img: '',
        zoom: '1.3',
    })

    const handleSave = () => {
        if (editor) {
            const canvas = editor.getImage()

            canvas.toBlob((blob: any) => {
                const formData = new FormData()

                formData.append('file', blob)
                avatar(formData)
                    .unwrap()
                    .then(() => {
                        props.handleClose()
                        dispatch(
                            SetAppNotificationAC({
                                notifications: {message: 'Your Avatar was successfully uploaded', type: 'success'},
                            })
                        )
                    })

                    .catch(error => {
                        dispatch(
                            SetAppNotificationAC({
                                notifications: {message: error.message, type: 'error'},
                            })
                        )
                    })
            })
        }
    }

    const handleChangePhoto = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) {
            return
        }

        const url = URL.createObjectURL(e.target.files[0])

        setPicture({
            ...picture,
            img: url,
        })
    }
    const handleClear = () => {
        setPicture({
            ...picture,
            img: '',
        })
    }
    const handleZoom = (e: ChangeEvent<HTMLInputElement>) => {
        setPicture({
            ...picture,
            zoom: e.target.value,
        })
    }
    const setEditorRef = (ref: AvatarEditor | null) => {
        setEditor(ref)
    }

    return {handleChangePhoto, handleClear, handleSave, handleZoom, isLoading, picture, setEditorRef}
}
