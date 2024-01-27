import React, {ChangeEvent} from 'react'

import ZoomIcon from '@/shared/assets/icons/zoom.svg'
import {useAppDispatch, useAppSelector} from '@/shared/hooks/reduxHooks'

import {createPostAC} from '../../model/slice/createPostSlice'
import {editorPanelAC} from '../../model/slice/editorPanelSlice'
import {ZoomWrapper} from './styled'

export const ZoomImage = () => {
    const dispatch = useAppDispatch()
    const {onZoom} = useAppSelector(state => state.editorPanel)
    const {currentImageId, libraryPictures, previewZoom} = useAppSelector(state => state.createPost)

    const handleZoom = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(createPostAC.setLibraryPicturesZoom(e.target.value))
    }

    const currentImage = libraryPictures.find((image: any) => image.id === currentImageId)

    const handleClickZoom = () => {
        dispatch(editorPanelAC.setOnZoom(!onZoom))
    }

    return (
        <div className={`zoom ${onZoom && 'active'}`} onClick={handleClickZoom}>
            <ZoomIcon onClick={handleClickZoom} />
            <ZoomWrapper hidden={onZoom}>
                <input
                    max={12}
                    min={1}
                    onChange={handleZoom}
                    step={'0.1'}
                    type={'range'}
                    value={currentImage?.zoom || previewZoom}
                />
            </ZoomWrapper>
        </div>
    )
}
