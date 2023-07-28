import AvatarEditor from 'react-avatar-editor'
import React, {RefObject} from 'react'
import {Wrapper} from './styled'

type CanvasContainerType = {
    width: number
    height: number
    editorRef: RefObject<AvatarEditor>
    picture: {img: string; zoom: string}
    filter: string
    prepareImageToSend: (img: string) => void
}

export const CanvasContainer: React.FC<CanvasContainerType> = props => {
    const handlePrepareImage = () => {
        props.prepareImageToSend(props.picture.img)
    }

    return (
        <Wrapper width={props.width} height={props.height}>
            <AvatarEditor
                ref={props.editorRef}
                image={props.picture.img}
                width={props.width}
                height={props.height}
                scale={+props.picture.zoom}
                border={0}
                onImageReady={handlePrepareImage}
                style={{
                    filter: props.filter,
                }}
                disableHiDPIScaling={true}
            />
        </Wrapper>
    )
}
