import AvatarEditor from 'react-avatar-editor'
import React, {RefObject} from 'react'
import {Wrapper} from './styled'

type CanvasContainerType = {
    width: number
    height: number
    editorRef: RefObject<AvatarEditor>
    picture: {img: string; zoom: string}
    filter: string
}

export const CanvasContainer: React.FC<CanvasContainerType> = props => {
    return (
        <Wrapper width={props.width} height={props.height}>
            <AvatarEditor
                ref={props.editorRef}
                image={props.picture.img}
                width={props.width}
                height={props.height}
                scale={+props.picture.zoom}
                border={[10, 20]}
                style={{
                    filter: props.filter,
                }}
                disableHiDPIScaling={true}
            />
        </Wrapper>
    )
}