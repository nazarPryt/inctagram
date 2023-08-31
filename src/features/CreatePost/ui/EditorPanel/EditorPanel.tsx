import { ChangeEvent, FC } from 'react'

import { LibraryImages } from '../LibraryImages/LibraryImages'
import { SelectResize } from '../SelectResize/SelectResize'
import { ZoomImage } from '../ZoomImage/ZoomImage'

import { EditorPanelWrapper } from './styled'

import { useAppSelector } from 'shared/hooks/reduxHooks'

type EditorButtonsType = {
  handleCreatePost: (e: ChangeEvent<HTMLInputElement>) => void
}

export const EditorPanel: FC<EditorButtonsType> = ({ handleCreatePost }) => {
  const { defaultWidth } = useAppSelector(state => state.createPost)

  return (
    <EditorPanelWrapper width={defaultWidth}>
      <div className="popUpBtn">
        <div className="wrapper">
          <SelectResize />
          <ZoomImage />
        </div>

        <LibraryImages handleCreatePost={handleCreatePost} />
      </div>
    </EditorPanelWrapper>
  )
}
