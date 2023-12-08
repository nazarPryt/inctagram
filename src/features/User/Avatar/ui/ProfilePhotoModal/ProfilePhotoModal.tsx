import {BaseModalProps, Modal} from 'shared/ui/Modal/Modal'
import {InputFile} from 'shared/ui/InputFile/InputFile'
import AvatarEditor from 'react-avatar-editor'
import {ProfilePhotoModalFooter} from 'features/User/Avatar/ui/ProfilePhotoModalFooter/ProfilePhotoModalFooter'
import {EmptyAvatarPlaceholder} from 'features/User/Avatar/ui/EmptyAvatarPlaceholder/EmptyAvatarPlaceholder'
import {Loader} from 'shared/ui/Loader/Loader'
import {ProfilePhotoModalWrapper} from 'features/User/Avatar/ui/ProfilePhotoModal/ProfilePhotoModal.styled'
import {useUploadUserAvatar} from 'features/User/Avatar/hook/useUploadUserAvatar'

export const ProfilePhotoModal = (props: BaseModalProps) => {
    const {handleChangePhoto, handleZoom, handleSave, handleClear, isLoading, setEditorRef, picture} =
        useUploadUserAvatar(props)

    return (
        <Modal title={props.title} isOpen={props.isOpen} handleClose={props.handleClose}>
            {isLoading && <Loader />}
            <ProfilePhotoModalWrapper>
                {picture.img && (
                    <>
                        <AvatarEditor
                            ref={setEditorRef}
                            image={picture.img}
                            width={192}
                            height={192}
                            border={10}
                            borderRadius={100}
                            color={[255, 255, 255, 0.6]}
                            scale={+picture.zoom}
                            rotate={0}
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
                            title={'Select from Computer'}
                            onChange={handleChangePhoto}
                            accept={'image/png, image/jpeg'}
                            multiple={false}
                        />
                    </>
                )}
            </ProfilePhotoModalWrapper>
        </Modal>
    )
}
