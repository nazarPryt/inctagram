import AvatarEditor from 'react-avatar-editor'

import {useUploadUserAvatar} from 'features/User/Avatar/hook/useUploadUserAvatar'
import {EmptyAvatarPlaceholder} from 'features/User/Avatar/ui/EmptyAvatarPlaceholder/EmptyAvatarPlaceholder'
import {ProfilePhotoModalWrapper} from 'features/User/Avatar/ui/ProfilePhotoModal/ProfilePhotoModal.styled'
import {ProfilePhotoModalFooter} from 'features/User/Avatar/ui/ProfilePhotoModalFooter/ProfilePhotoModalFooter'
import {InputFile} from 'shared/ui/InputFile/InputFile'
import {Loader} from 'shared/ui/Loader/Loader'
import {BaseModalProps, Modal} from 'shared/ui/Modal/Modal'

export const ProfilePhotoModal = (props: BaseModalProps) => {
    const {handleChangePhoto, handleClear, handleSave, handleZoom, isLoading, picture, setEditorRef} =
        useUploadUserAvatar(props)

    return (
        <Modal handleClose={props.handleClose} isOpen={props.isOpen} title={props.title}>
            {isLoading && <Loader />}
            <ProfilePhotoModalWrapper>
                {picture.img && (
                    <>
                        <AvatarEditor
                            border={10}
                            borderRadius={100}
                            color={[255, 255, 255, 0.6]}
                            height={192}
                            image={picture.img}
                            ref={setEditorRef}
                            rotate={0}
                            scale={+picture.zoom}
                            width={192}
                        />
                        <ProfilePhotoModalFooter
                            clearImagePreview={handleClear}
                            onChange={handleZoom}
                            savePhoto={handleSave}
                            value={picture.zoom}
                        />
                    </>
                )}
                {!picture.img && (
                    <>
                        <EmptyAvatarPlaceholder />
                        <InputFile
                            accept={'image/png, image/jpeg'}
                            multiple={false}
                            onChange={handleChangePhoto}
                            title={'Select from Computer'}
                        />
                    </>
                )}
            </ProfilePhotoModalWrapper>
        </Modal>
    )
}
