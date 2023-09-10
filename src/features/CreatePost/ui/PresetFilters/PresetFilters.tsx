import {Filter, FiltersWrapper} from './styled'
import Image from 'next/image'
import React from 'react'
import {FILTERS_DATA} from '../../model/types/const'
import {createPostAC} from '../../model/slice/createPostSlice'
import {useAppDispatch, useAppSelector} from '../../../../shared/hooks/reduxHooks'

type PresetFiltersType = {
    prepareImageToSend: (img: string, filter: string) => void
}

export const PresetFilters: React.FC<PresetFiltersType> = props => {
    const dispatch = useAppDispatch()
    const {previewImage, defaultHeight, defaultWidth} = useAppSelector(state => state.createPost)

    const handleSetFilter = (filter: string) => {
        dispatch(createPostAC.setPreviewFilter(filter))

        dispatch(createPostAC.uploadFilterImage({img: previewImage, filter}))

        props.prepareImageToSend(previewImage, filter)
    }

    return (
        <FiltersWrapper>
            {FILTERS_DATA.map(el => (
                <Filter
                    key={el.id}
                    filter={el.filter}
                    width={defaultWidth}
                    height={defaultHeight}
                    onClick={() => handleSetFilter(el.filter)}
                >
                    <div>
                        <Image src={previewImage} width={defaultWidth} height={defaultHeight} alt={'filter photo'} />
                        {el.title}
                    </div>
                </Filter>
            ))}
        </FiltersWrapper>
    )
}
