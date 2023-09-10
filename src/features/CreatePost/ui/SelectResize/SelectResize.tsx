import RatioIcon from '../../../../shared/assets/icons/ratio.svg'
import React, {useRef, useState, MouseEvent, RefObject} from 'react'
import {SelectWrapper} from './styled'
import CropOriginal from '../../../../shared/assets/icons/cropOriginal.svg'
import Crop1x1 from '../../../../shared/assets/icons/crop1x1.svg'
import Crop4x5 from '../../../../shared/assets/icons/crop4x5.svg'
import Crop16x9 from '../../../../shared/assets/icons/crop16x9.svg'
import {ASPECT_RATIO, ORIGINAL_SIZE} from '../../model/types/const'
import {useAppDispatch, useAppSelector} from '../../../../shared/hooks/reduxHooks'
import {createPostAC} from '../../model/slice/createPostSlice'
import {useTranslation} from '../../../../shared/hooks/useTranslation'

type SelectResizeType = {
    resizeRef: RefObject<HTMLDivElement>
    handleClick: (e: MouseEvent<HTMLDivElement>) => void
    onCloseResize: () => void
    onResize: boolean
}

export const SelectResize: React.FC<SelectResizeType> = ({resizeRef, handleClick, onResize, onCloseResize}) => {
    const {t} = useTranslation()
    const dispatch = useAppDispatch()
    const ratioData = [
        {id: 1, value: 0, title: t.create.selectResize, icon: CropOriginal},
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

    const handleClickResize = (e: MouseEvent<HTMLDivElement>) => {
        handleClick(e)
    }

    return (
        <div className='select' ref={resizeRef} onClick={handleClickResize}>
            <RatioIcon onClick={onCloseResize} />
            <SelectWrapper hidden={onResize}>
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
