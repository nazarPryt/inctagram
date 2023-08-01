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
    const {previewImage} = useAppSelector(state => state.createPost)

    const handleSetFilter = (filter: string) => {
        dispatch(createPostAC.setPreviewFilter(filter))

        dispatch(createPostAC.uploadFilterImage({img: previewImage, filter}))

        props.prepareImageToSend(previewImage, filter)
    }

    return (
        <FiltersWrapper>
            {FILTERS_DATA.map(el => (
                <Filter key={el.id} filter={el.filter} onClick={() => handleSetFilter(el.filter)}>
                    <Image src={previewImage} width={100} height={100} alt={'filter photo'} />
                    {el.title}
                </Filter>
            ))}
        </FiltersWrapper>
    )
}
