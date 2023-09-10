import ZoomIcon from '../../../../shared/assets/icons/zoom.svg'
import React, {ChangeEvent, MouseEvent, RefObject, useState} from 'react'
import {ZoomWrapper} from './styled'
import {createPostAC} from '../../model/slice/createPostSlice'
import {useAppDispatch, useAppSelector} from '../../../../shared/hooks/reduxHooks'

type ZoomImageType = {
    zoomRef: RefObject<HTMLDivElement>
    handleClick: (e: MouseEvent<HTMLDivElement>) => void
    onZoom: boolean
    onCloseZoom: () => void
}

export const ZoomImage: React.FC<ZoomImageType> = ({zoomRef, handleClick, onZoom, onCloseZoom}) => {
    const dispatch = useAppDispatch()

    const {previewZoom, currentImageId, libraryPictures} = useAppSelector(state => state.createPost)

    const handleZoom = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(createPostAC.setLibraryPicturesZoom(e.target.value))
    }

    const currentImage = libraryPictures.find(image => image.id === currentImageId)

    const handleClickZoom = (e: MouseEvent<HTMLDivElement>) => {
        handleClick(e)
    }
    return (
        <div className='zoom' ref={zoomRef} onClick={handleClickZoom}>
            <ZoomIcon onClick={onCloseZoom} />
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
