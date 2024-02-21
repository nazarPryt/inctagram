import {ChangeEvent} from 'react'

import {useAppSelector} from '@/shared/hooks/reduxHooks'
import {useTranslation} from '@/shared/hooks/useTranslation'

import {LibraryImages} from '../LibraryImages/LibraryImages'
import {SelectResize} from '../SelectResize/SelectResize'
import {ZoomImage} from '../ZoomImage/ZoomImage'
import {EditorPanelWrapper} from './styled'

type EditorButtonsType = {
    handleCreatePost: (e: ChangeEvent<HTMLInputElement>) => void
}

export const EditorPanel = ({handleCreatePost}: EditorButtonsType) => {
    const {t} = useTranslation()
    const {defaultHeight, defaultWidth, libraryPictures, step} = useAppSelector(state => state.createPost)
    const hasDisableButtons = step !== t.create.steps.filters && step !== t.create.steps.describe

    return (
        <EditorPanelWrapper width={defaultWidth}>
            <div className={'popUpBtn'}>
                <div className={'wrapper'}>
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
