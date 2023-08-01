import AvatarEditor, {ImageState} from 'react-avatar-editor'
import React, {RefObject} from 'react'
import {Wrapper} from './styled'
import {useAppSelector} from '../../../../shared/hooks/reduxHooks'

type CanvasContainerType = {
    editorRef: RefObject<AvatarEditor>
    prepareImageToSend: (img: string, filter: string) => void
}

export const CanvasContainer: React.FC<CanvasContainerType> = props => {
    const {previewImage, previewFilter, previewZoom, defaultWidth, defaultHeight} = useAppSelector(
        state => state.createPost
    )

    const handlePrepareImage = () => {
        props.prepareImageToSend(previewImage, previewFilter)
    }

    return (
        <Wrapper width={defaultWidth} height={defaultHeight}>
            <AvatarEditor
                ref={props.editorRef}
                image={previewImage}
                width={defaultWidth}
                height={defaultHeight}
                scale={+previewZoom}
                border={0}
                onImageReady={handlePrepareImage}
                style={{
                    filter: previewFilter,
                }}
                disableHiDPIScaling={true}
            />
        </Wrapper>
    )
}
