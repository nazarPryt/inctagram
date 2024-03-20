import {useAppDispatch, useAppSelector} from '@/shared/hooks/reduxHooks'
import Image from 'next/image'

import {createPostAC} from '../../model/slice/createPostSlice'
import {FILTERS_DATA} from '../../model/types/const'
import {Filter, FiltersWrapper} from './styled'

type PresetFiltersType = {
    prepareImageToSend: (img: string, filter: string) => void
}

export const PresetFilters = (props: PresetFiltersType) => {
    const dispatch = useAppDispatch()
    const {defaultHeight, defaultWidth, previewImage} = useAppSelector(state => state.createPost)

    const handleSetFilter = (filter: string) => {
        dispatch(createPostAC.setPreviewFilter(filter))

        dispatch(createPostAC.uploadFilterImage({filter, img: previewImage}))

        props.prepareImageToSend(previewImage, filter)
    }

    return (
        <FiltersWrapper>
            {FILTERS_DATA.map(el => (
                <Filter
                    filter={el.filter}
                    height={defaultHeight}
                    key={el.id}
                    onClick={() => handleSetFilter(el.filter)}
                    width={defaultWidth}
                >
                    <div>
                        <Image alt={'filter photo'} height={defaultHeight} src={previewImage} width={defaultWidth} />
                        {el.title}
                    </div>
                </Filter>
            ))}
        </FiltersWrapper>
    )
}
