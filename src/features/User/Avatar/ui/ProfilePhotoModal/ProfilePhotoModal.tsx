import AvatarEditor from 'react-avatar-editor'

import {useUploadUserAvatar} from '@/features/User/Avatar/hook/useUploadUserAvatar'
import {EmptyAvatarPlaceholder} from '@/features/User/Avatar/ui/EmptyAvatarPlaceholder/EmptyAvatarPlaceholder'
import {ProfilePhotoModalFooter} from '@/features/User/Avatar/ui/ProfilePhotoModalFooter/ProfilePhotoModalFooter'
import {InputFile, Loader, Modal, ModalProps} from '@nazar-pryt/inctagram-ui-kit'

import {ProfilePhotoModalWrapper} from './ProfilePhotoModal.styled'

export const ProfilePhotoModal = (props: ModalProps) => {
    const {handleChangePhoto, handleClear, handleSave, handleZoom, isLoading, picture, setEditorRef} =
        useUploadUserAvatar(props)

    return (
        <Modal onClose={props.onClose} open={props.open} title={props.title}>
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
