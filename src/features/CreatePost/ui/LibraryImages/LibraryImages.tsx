import {EmptyAvatar} from 'shared/assets/icons/emptyAvatar'
import CloseIcon from 'shared/assets/icons/close.svg'
import AddIcon from 'shared/assets/icons/addIcon.svg'
import {InputFile} from 'shared/ui/InputFile/InputFile'
import React, {ChangeEvent, useRef, useState} from 'react'
import {useAppDispatch, useAppSelector} from 'shared/hooks/reduxHooks'
import {LibraryPictureType} from '../../model/types/createPostSchema'
import {createPostAC} from '../../model/slice/createPostSlice'
import {LibraryPicture, LibraryWrapper} from './styled'
import Button from 'shared/ui/Button/Button'

type LibraryImagesType = {
    handleCreatePost: (e: ChangeEvent<HTMLInputElement>) => void
}
export const LibraryImages: React.FC<LibraryImagesType> = ({handleCreatePost}) => {
    const dispatch = useAppDispatch()
    const {libraryPictures} = useAppSelector(state => state.createPost)

    const [libraryHidden, setLibraryHidden] = useState(false)
    const selectPhotoRef = useRef<HTMLInputElement>(null)

    const handleChangeGeneralPicture = async (id: string) => {
        const pictureFromGallery = libraryPictures.find(el => (el.id === id ? {...el} : null))
        if (pictureFromGallery) {
            handleSetPreviewPicture(pictureFromGallery)
        }
    }

    const handleSetPreviewPicture = (data: LibraryPictureType) => {
        dispatch(createPostAC.setPreviewPicture(data))
    }

    const handleDeletePicture = (id: string) => {
        const newLibrary = libraryPictures.find(el => el.id !== id)
        const newImagePreview = libraryPictures[0]
        handleSetPreviewPicture(newImagePreview)
        newLibrary && dispatch(createPostAC.deleteImageFromLibrary(newLibrary))
    }

    const handlerAddPhoto = () => {
        selectPhotoRef && selectPhotoRef.current?.click()
    }

    return (
        <div className='library'>
            <span onClick={() => setLibraryHidden(!libraryHidden)}>
                <EmptyAvatar />
            </span>
            <LibraryWrapper hidden={libraryHidden}>
                <div className={'OVER'}>
                    {libraryPictures.map(el => (
                        <div key={el.id}>
                            <LibraryPicture
                                image={el.img}
                                filter={el.filter}
                                onClick={() => handleChangeGeneralPicture(el.id)}
                            />
                            {libraryPictures.length > 1 && (
                                <Button className='close' variant={'isIcon'} onClick={() => handleDeletePicture(el.id)}>
                                    <CloseIcon />
                                </Button>
                            )}
                        </div>
                    ))}
                </div>
                <div>
                    <Button variant={'isIcon'} onClick={handlerAddPhoto}>
                        <AddIcon />
                    </Button>
                </div>
                <InputFile
                    title={'Select from Computer'}
                    ref={selectPhotoRef}
                    onChange={handleCreatePost}
                    accept={'image/png, image/jpeg'}
                    multiple={false}
                />
            </LibraryWrapper>
        </div>
    )
}
