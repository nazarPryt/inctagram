import ZoomIcon from '../../../../shared/assets/icons/zoom.svg'
import React, {ChangeEvent, MouseEvent, RefObject, useState} from 'react'
import {ZoomWrapper} from './styled'
import {createPostAC} from '../../model/slice/createPostSlice'
import {useAppDispatch, useAppSelector} from '../../../../shared/hooks/reduxHooks'
import {editorPanelAC} from '../../model/slice/editorPanelSlice'

export const ZoomImage = () => {
    const dispatch = useAppDispatch()
    const {onZoom} = useAppSelector(state => state.editorPanel)
    const {previewZoom, currentImageId, libraryPictures} = useAppSelector(state => state.createPost)

    const handleZoom = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(createPostAC.setLibraryPicturesZoom(e.target.value))
    }

    const currentImage = libraryPictures.find(image => image.id === currentImageId)

    const handleClickZoom = () => {
        dispatch(editorPanelAC.setOnZoom(!onZoom))
    }
    return (
        <div className='zoom' onClick={handleClickZoom}>
            <ZoomIcon onClick={handleClickZoom} />
            <ZoomWrapper hidden={onZoom}>
                <input
                    type='range'
                    value={currentImage?.zoom || previewZoom}
                    onChange={handleZoom}
                    min={1}
                    max={12}
                    step='0.1'
                />
            </ZoomWrapper>
        </div>
    )
}
