import AvatarEditor, {ImageState} from 'react-avatar-editor'
import React, {RefObject} from 'react'
import {Wrapper} from './styled'
import Image from 'next/image'

type CanvasContainerType = {
    width: number
    height: number
    editorRef: RefObject<AvatarEditor>
    picture: {img: string; zoom: string}
    filter: string
    prepareImageToSend: (img: string) => void
}

export const CanvasContainer: React.FC<CanvasContainerType> = props => {
    console.log('CANVAS', props.picture.img)

    const handlePrepareImage = (e: Event) => {
        console.log('БЫЛИ ИЗМЕНЕНИЯ', e)
        console.log('editor REF', props.editorRef)
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
                onImageReady={e => handlePrepareImage(e)}
                style={{
                    filter: props.filter,
                }}
                disableHiDPIScaling={true}
            />
        </Wrapper>
    )
}
