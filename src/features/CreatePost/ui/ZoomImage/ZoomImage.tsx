import ZoomIcon from '../../../../shared/assets/icons/zoom.svg'
import React, {ChangeEvent, useState} from 'react'
import {ZoomWrapper} from './styled'
import {createPostAC} from '../../model/slice/createPostSlice'
import {useAppDispatch, useAppSelector} from '../../../../shared/hooks/reduxHooks'

export const ZoomImage = () => {
    const dispatch = useAppDispatch()

    const {previewZoom, currentImageId, libraryPictures} = useAppSelector(state => state.createPost)

    const [zoomHidden, setZoomHidden] = useState(false)

    const handleZoom = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(createPostAC.setLibraryPicturesZoom(e.target.value))
    }

    const currentImage = libraryPictures.find(image => image.id === currentImageId)

    return (
        <div className='zoom'>
            <ZoomIcon onClick={() => setZoomHidden(!zoomHidden)} />
            <ZoomWrapper hidden={zoomHidden}>
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
