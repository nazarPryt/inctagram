import { ChangeEvent, FC, useRef, useState } from 'react'

import { createPostAC } from '../../model/slice/createPostSlice'
import { LibraryPictureType } from '../../model/types/createPostSchema'

import { LibraryPicture, LibraryWrapper } from './styled'

import AddIcon from 'shared/assets/icons/addIcon.svg'
import CloseIcon from 'shared/assets/icons/close.svg'
import { EmptyAvatar } from 'shared/assets/icons/emptyAvatar'
import { useAppDispatch, useAppSelector } from 'shared/hooks/reduxHooks'
import { IconButton } from 'shared/ui/IconButton/IconButton'
import { InputFile } from 'shared/ui/InputFile/InputFile'

type LibraryImagesType = {
  handleCreatePost: (e: ChangeEvent<HTMLInputElement>) => void
}
export const LibraryImages: FC<LibraryImagesType> = ({ handleCreatePost }) => {
  const dispatch = useAppDispatch()
  const { libraryPictures } = useAppSelector(state => state.createPost)

  const [libraryHidden, setLibraryHidden] = useState(false)
  const selectPhotoRef = useRef<HTMLInputElement>(null)

  const handleChangeGeneralPicture = async (id: string): Promise<void> => {
    const pictureFromGallery = libraryPictures.find(el => (el.id === id ? { ...el } : null))

    if (pictureFromGallery) {
      handleSetPreviewPicture(pictureFromGallery)
    }

    return undefined
  }

  const handleSetPreviewPicture = (data: LibraryPictureType): void => {
    dispatch(createPostAC.setPreviewPicture(data))
  }

  const handleDeletePicture = async (id: string): Promise<void> => {
    const newLibrary = libraryPictures.find(el => el.id === id)

    if (newLibrary) {
      dispatch(createPostAC.deleteImageFromLibrary(newLibrary))
    }

    const newImagePreview = libraryPictures.filter(el => el.id !== id)[0]

    handleSetPreviewPicture(newImagePreview)
  }

  const handlerAddPhoto = (): void => {
    if (selectPhotoRef) {
      selectPhotoRef.current?.click()
    }
  }

  return (
    <div className="library">
      <button type="button" onClick={() => setLibraryHidden(!libraryHidden)}>
        <EmptyAvatar />
      </button>
      <LibraryWrapper hidden={libraryHidden}>
        <div className="OVER">
          {libraryPictures.map(el => (
            <div key={el.id}>
              <LibraryPicture filter={el.filter} image={el.img} onClick={() => handleChangeGeneralPicture(el.id)} />
              {libraryPictures.length > 1 && (
                <IconButton className="close" onClick={() => handleDeletePicture(el.id)}>
                  <CloseIcon />
                </IconButton>
              )}
            </div>
          ))}
        </div>
        <div>
          <IconButton onClick={handlerAddPhoto}>
            <AddIcon />
          </IconButton>
        </div>
        <InputFile
          ref={selectPhotoRef}
          accept="image/png, image/jpeg"
          multiple={false}
          title="Select from Computer"
          onChange={handleCreatePost}
        />
      </LibraryWrapper>
    </div>
  )
}
