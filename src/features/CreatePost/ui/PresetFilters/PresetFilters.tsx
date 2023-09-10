import { FC } from 'react'

import Image from 'next/image'

import { createPostAC } from '../../model/slice/createPostSlice'
import { FILTERS_DATA } from '../../model/types/const'

import { Filter, FiltersWrapper } from './styled'

import { useAppDispatch, useAppSelector } from 'shared/hooks/reduxHooks'

type PresetFiltersType = {
  prepareImageToSend: (img: string, filter: string) => void
}

export const PresetFilters: FC<PresetFiltersType> = ({ prepareImageToSend }) => {
  const dispatch = useAppDispatch()
  const { previewImage, defaultHeight, defaultWidth } = useAppSelector(state => state.createPost)

  const handleSetFilter = (filter: string): void => {
    dispatch(createPostAC.setPreviewFilter(filter))

    dispatch(createPostAC.uploadFilterImage({ img: previewImage, filter }))

    prepareImageToSend(previewImage, filter)
  }

  return (
    <FiltersWrapper>
      {FILTERS_DATA.map(el => (
        <Filter
          key={el.id}
          filter={el.filter}
          height={defaultHeight}
          width={defaultWidth}
          onClick={() => handleSetFilter(el.filter)}
        >
          <div>
            <Image alt="filter photo" height={defaultHeight} src={previewImage} width={defaultWidth} />
            {el.title}
          </div>
        </Filter>
      ))}
    </FiltersWrapper>
  )
}
