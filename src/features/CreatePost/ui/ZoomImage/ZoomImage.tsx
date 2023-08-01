import ZoomIcon from '../../../../shared/assets/icons/zoom.svg'
import React, {ChangeEvent, useState} from 'react'
import {ZoomWrapper} from './styled'
import {createPostAC} from '../../model/slice/createPostSlice'
import {useAppDispatch, useAppSelector} from '../../../../shared/hooks/reduxHooks'

export const ZoomImage = () => {
    const dispatch = useAppDispatch()

    const previewZoom = useAppSelector(state => state.createPost.previewZoom)

    const [zoomHidden, setZoomHidden] = useState(false)

    const handleZoom = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(createPostAC.setPreviewZoom(e.target.value))
    }

    return (
        <div className='zoom'>
            <ZoomIcon onClick={() => setZoomHidden(!zoomHidden)} />
            <ZoomWrapper hidden={zoomHidden}>
                <input type='range' value={previewZoom} onChange={handleZoom} min={1} max={12} step='0.1' />
            </ZoomWrapper>
        </div>
    )
}
