import AvatarEditor from 'react-avatar-editor'

import { useUploadUserAvatar } from 'features/User/Avatar/hook/useUploadUserAvatar'
import { EmptyAvatarPlaceholder } from 'features/User/Avatar/ui/EmptyAvatarPlaceholder/EmptyAvatarPlaceholder'
import { ProfilePhotoModalWrapper } from 'features/User/Avatar/ui/ProfilePhotoModal/ProfilePhotoModal.styled'
import { ProfilePhotoModalFooter } from 'features/User/Avatar/ui/ProfilePhotoModalFooter/ProfilePhotoModalFooter'
import { InputFile } from 'shared/ui/InputFile/InputFile'
import { Loader } from 'shared/ui/Loader/Loader'
import { BaseModalProps, Modal } from 'shared/ui/Modal/Modal'

export const ProfilePhotoModal = ({ isOpen, handleClose, children, title }: BaseModalProps): JSX.Element => {
  const { handleChangePhoto, handleZoom, handleSave, handleClear, isLoading, setEditorRef, picture } =
    useUploadUserAvatar({ isOpen, handleClose, children, title })

  return (
    <Modal handleClose={handleClose} isOpen={isOpen} title={title}>
      {isLoading && <Loader />}
      <ProfilePhotoModalWrapper>
        {picture.img && (
          <>
            <AvatarEditor
              ref={setEditorRef}
              border={10}
              borderRadius={100}
              color={[255, 255, 255, 0.6]}
              height={192}
              image={picture.img}
              rotate={0}
              scale={+picture.zoom}
              width={192}
            />
            <ProfilePhotoModalFooter
              clearImagePreview={handleClear}
              savePhoto={handleSave}
              value={picture.zoom}
              onChange={handleZoom}
            />
          </>
        )}
        {!picture.img && (
          <>
            <EmptyAvatarPlaceholder />
            <InputFile
              accept="image/png, image/jpeg"
              multiple={false}
              title="Select from Computer"
              onChange={handleChangePhoto}
            />
          </>
        )}
      </ProfilePhotoModalWrapper>
    </Modal>
  )
}
