import {useAppDispatch, useAppSelector} from '@/shared/hooks/reduxHooks'
import {useTranslation} from '@/shared/hooks/useTranslation'
import {Crop1X1, Crop4X5, Crop16X9, CropOriginal, IconButton, Ratio} from '@nazar-pryt/inctagram-ui-kit'

import {createPostAC} from '../../model/slice/createPostSlice'
import {editorPanelAC} from '../../model/slice/editorPanelSlice'
import {ASPECT_RATIO, ORIGINAL_SIZE} from '../../model/types/const'
import {SelectWrapper} from './styled'

export const SelectResize = () => {
    const {t} = useTranslation()
    const dispatch = useAppDispatch()
    const {onSelectResize} = useAppSelector(state => state.editorPanel)
    const ratioData = [
        {icon: CropOriginal, id: 1, title: t.create.selectResize, value: 0},
        {icon: Crop1X1, id: 2, title: '1:1', value: 1},
        {icon: Crop4X5, id: 3, title: '4:5', value: 4 / 5},
        {icon: Crop16X9, id: 4, title: '16:9', value: 16 / 9},
    ]
    const {defaultHeight, defaultWidth} = useAppSelector(state => state.createPost)
    const handleResize = (width: number, height: number) => {
        dispatch(createPostAC.setResizeCanvas({height, width}))
    }
    const handlerCrop = (aspectRatio: number) => {
        if (aspectRatio === ASPECT_RATIO.OneToOne) {
            const newSize = Math.round(Math.sqrt(defaultWidth * defaultHeight))

            return handleResize(newSize, newSize)
        }

        if (aspectRatio === ASPECT_RATIO.FourToFive || aspectRatio === ASPECT_RATIO.SixteenToNine) {
            const newWidth = Math.round(Math.sqrt(defaultWidth * defaultHeight * aspectRatio))
            const newHeight = Math.round(newWidth / aspectRatio)

            return handleResize(newWidth, newHeight)
        }

        if (aspectRatio === ASPECT_RATIO.Original) {
            return handleResize(ORIGINAL_SIZE.width, ORIGINAL_SIZE.height)
        }
    }

    const handleClickResize = () => {
        dispatch(editorPanelAC.setOnSelectResize(!onSelectResize))
    }

    return (
        <div className={`select ${onSelectResize && 'active'}`} onClick={handleClickResize}>
            <IconButton onClick={handleClickResize}>
                <Ratio />
            </IconButton>
            <SelectWrapper hidden={onSelectResize}>
                {ratioData.map(el => (
                    <div key={el.id} onClick={() => handlerCrop(el.value)}>
                        <span>{el.title}</span>
                        <el.icon />
                    </div>
                ))}
            </SelectWrapper>
        </div>
    )
}
