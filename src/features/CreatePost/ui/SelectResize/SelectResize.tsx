import RatioIcon from '../../../../shared/assets/icons/ratio.svg'
import React, {useState} from 'react'
import {SelectWrapper} from './styled'
import CropOriginal from '../../../../shared/assets/icons/cropOriginal.svg'
import Crop1x1 from '../../../../shared/assets/icons/crop1x1.svg'
import Crop4x5 from '../../../../shared/assets/icons/crop4x5.svg'
import Crop16x9 from '../../../../shared/assets/icons/crop16x9.svg'
import {ASPECT_RATIO, ORIGINAL_SIZE} from '../../model/types/const'
import {useAppDispatch, useAppSelector} from '../../../../shared/hooks/reduxHooks'
import {createPostAC} from '../../model/slice/createPostSlice'

export const SelectResize = () => {
    const dispatch = useAppDispatch()
    const [selectHidden, setSelectHidden] = useState(false)
    const ratioData = [
        {id: 1, value: 0, title: 'Original', icon: CropOriginal},
        {id: 2, value: 1, title: '1:1', icon: Crop1x1},
        {id: 3, value: 4 / 5, title: '4:5', icon: Crop4x5},
        {id: 4, value: 16 / 9, title: '16:9', icon: Crop16x9},
    ]
    const {defaultWidth, defaultHeight} = useAppSelector(state => state.createPost)
    const handleResize = (width: number, height: number) => {
        dispatch(createPostAC.setResizeCanvas({width, height}))
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
    return (
        <div className='select'>
            <RatioIcon onClick={() => setSelectHidden(!selectHidden)} />
            <SelectWrapper hidden={selectHidden}>
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
