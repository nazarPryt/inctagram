import React, {ChangeEvent} from 'react'

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

    return (
        <EditorPanelWrapper width={defaultWidth}>
            <div className='popUpBtn'>
                <div className='wrapper'>
                    <SelectResize />
                    <ZoomImage />
                </div>

                <LibraryImages handleCreatePost={handleCreatePost} />
            </div>
        </EditorPanelWrapper>
    )
}
