import React, {ChangeEvent, MouseEvent, useRef, useState} from 'react'

import {EditorPanelWrapper} from './styled'

import {useAppSelector} from '../../../../shared/hooks/reduxHooks'

import {SelectResize} from '../SelectResize/SelectResize'
import {ZoomImage} from '../ZoomImage/ZoomImage'
import {LibraryImages} from '../LibraryImages/LibraryImages'

type EditorButtonsType = {
    handleCreatePost: (e: ChangeEvent<HTMLInputElement>) => void
}

export const EditorPanel: React.FC<EditorButtonsType> = ({handleCreatePost}) => {
    const {defaultWidth, defaultHeight, libraryPictures} = useAppSelector(state => state.createPost)
    const editPanelRef = useRef<HTMLDivElement>(null)
    const resizeRef = useRef<HTMLDivElement>(null)
    const zoomRef = useRef<HTMLDivElement>(null)
    const libraryRef = useRef<HTMLDivElement>(null)
    const [onResize, setOnResize] = useState(false)
    const [onZoom, setOnZoom] = useState(false)
    const [onLibrary, setOnLibrary] = useState(false)

    const handleClick = (e: MouseEvent<HTMLDivElement>) => {
        if (resizeRef.current?.contains(e.currentTarget)) {
            setOnZoom(false)
            setOnLibrary(false)
        }
        if (zoomRef.current?.contains(e.currentTarget)) {
            setOnResize(false)
            setOnLibrary(false)
        }
        if (libraryRef.current?.contains(e.currentTarget)) {
            setOnResize(false)
            setOnZoom(false)
        }
    }
    const onCloseResize = () => {
        setOnResize(!onResize)
    }
    const onCloseZoom = () => {
        setOnZoom(!onZoom)
    }
    const onCloseLibrary = () => {
        setOnLibrary(!onLibrary)
    }
    return (
        <EditorPanelWrapper width={defaultWidth} ref={editPanelRef} onClick={handleClick}>
            <div className='popUpBtn'>
                <div className='wrapper'>
                    <SelectResize
                        resizeRef={resizeRef}
                        handleClick={handleClick}
                        onResize={onResize}
                        onCloseResize={onCloseResize}
                    />
                    <ZoomImage zoomRef={zoomRef} onZoom={onZoom} handleClick={handleClick} onCloseZoom={onCloseZoom} />
                </div>

                <LibraryImages
                    libraryRef={libraryRef}
                    handleCreatePost={handleCreatePost}
                    handleClick={handleClick}
                    onLibrary={onLibrary}
                    onCloseLibrary={onCloseLibrary}
                />
            </div>
        </EditorPanelWrapper>
    )
}
