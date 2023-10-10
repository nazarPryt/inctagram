import React, {ChangeEvent, MouseEvent, useRef, useState} from 'react'

import {EditorPanelWrapper} from './styled'

import {useAppSelector} from '../../../../shared/hooks/reduxHooks'

import {SelectResize} from '../SelectResize/SelectResize'
import {ZoomImage} from '../ZoomImage/ZoomImage'
import {LibraryImages} from '../LibraryImages/LibraryImages'
import {useTranslation} from '../../../../shared/hooks/useTranslation'

type EditorButtonsType = {
    handleCreatePost: (e: ChangeEvent<HTMLInputElement>) => void
}

export const EditorPanel: React.FC<EditorButtonsType> = ({handleCreatePost}) => {
    const {t} = useTranslation()
    const {defaultWidth, defaultHeight, libraryPictures, step} = useAppSelector(state => state.createPost)
    const hasDisableButtons = step !== t.create.steps.filters && step !== t.create.steps.describe

    return (
        <EditorPanelWrapper width={defaultWidth}>
            <div className='popUpBtn'>
                <div className='wrapper'>
                    {hasDisableButtons && (
                        <>
                            <SelectResize />
                            <ZoomImage />
                        </>
                    )}
                </div>

                <LibraryImages handleCreatePost={handleCreatePost} />
            </div>
        </EditorPanelWrapper>
    )
}
