import { ChangeEvent, useState } from 'react'

import { createPostAC } from '../../model/slice/createPostSlice'

import { ZoomWrapper } from './styled'

import ZoomIcon from 'shared/assets/icons/zoom.svg'
import { useAppDispatch, useAppSelector } from 'shared/hooks/reduxHooks'

export const ZoomImage = (): JSX.Element => {
  const dispatch = useAppDispatch()

  const previewZoom = useAppSelector(state => state.createPost.previewZoom)

  const [zoomHidden, setZoomHidden] = useState(false)

  const handleZoom = (e: ChangeEvent<HTMLInputElement>): void => {
    dispatch(createPostAC.setPreviewZoom(e.target.value))
  }

  return (
    <div className="zoom">
      <ZoomIcon onClick={() => setZoomHidden(!zoomHidden)} />
      <ZoomWrapper hidden={zoomHidden}>
        <input max={12} min={1} step="0.1" type="range" value={previewZoom} onChange={handleZoom} />
      </ZoomWrapper>
    </div>
  )
}
