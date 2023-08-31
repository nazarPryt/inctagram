import { ChangeEvent, useState } from 'react'

import AvatarEditor from 'react-avatar-editor'

import { SetAppNotificationAC } from '_app/store/appSlice'
import { useUploadAvatarMutation } from 'features/User/Avatar/api/avatar.api'
import { useAppDispatch } from 'shared/hooks/reduxHooks'
import { BaseModalProps } from 'shared/ui/Modal/Modal'

export const useUploadUserAvatar = ({ handleClose }: BaseModalProps) => {
  const [avatar, { isLoading }] = useUploadAvatarMutation()
  const dispatch = useAppDispatch()

  const [editor, setEditor] = useState<AvatarEditor | null>(null)
  const [picture, setPicture] = useState({
    img: '',
    zoom: '1.3',
    croppedImg: '',
  })

  const handleSave = (): void => {
    if (editor) {
      const canvas = editor.getImage()

      // TODO any
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      canvas.toBlob((blob: any) => {
        const formData = new FormData()

        formData.append('file', blob)
        avatar(formData)
          .unwrap()
          .then(() => {
            handleClose()
            dispatch(
              SetAppNotificationAC({
                notifications: { type: 'success', message: 'Your Avatar was successfully uploaded' },
              })
            )
          })

          .catch(error => {
            dispatch(
              SetAppNotificationAC({
                notifications: { type: 'error', message: error.message },
              })
            )
          })
      })
    }
  }

  const handleChangePhoto = (e: ChangeEvent<HTMLInputElement>): void => {
    if (!e.target.files) return

    const url = URL.createObjectURL(e.target.files[0])

    setPicture({
      ...picture,
      img: url,
    })
  }
  const handleClear = (): void => {
    setPicture({
      ...picture,
      img: '',
    })
  }
  const handleZoom = (e: ChangeEvent<HTMLInputElement>): void => {
    setPicture({
      ...picture,
      zoom: e.target.value,
    })
  }
  const setEditorRef = (ref: AvatarEditor | null): void => {
    setEditor(ref)
  }

  return { handleSave, isLoading, setEditorRef, handleZoom, handleClear, handleChangePhoto, picture }
}
