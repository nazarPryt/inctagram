import { FC } from 'react'

import Image from 'next/image'

import { useAppDispatch, useAppSelector } from '../../../../shared/hooks/reduxHooks'
import { createPostAC } from '../../model/slice/createPostSlice'
import { FILTERS_DATA } from '../../model/types/const'

import { Filter, FiltersWrapper } from './styled'

type PresetFiltersType = {
  prepareImageToSend: (img: string, filter: string) => void
}

export const PresetFilters: FC<PresetFiltersType> = ({ prepareImageToSend }) => {
  const dispatch = useAppDispatch()
  const { previewImage } = useAppSelector(state => state.createPost)

  const handleSetFilter = (filter: string): void => {
    dispatch(createPostAC.setPreviewFilter(filter))

    dispatch(createPostAC.uploadFilterImage({ img: previewImage, filter }))

    prepareImageToSend(previewImage, filter)
  }

  return (
    <FiltersWrapper>
      {FILTERS_DATA.map(el => (
        <Filter key={el.id} filter={el.filter} onClick={() => handleSetFilter(el.filter)}>
          <Image alt="filter photo" height={100} src={previewImage} width={100} />
          {el.title}
        </Filter>
      ))}
    </FiltersWrapper>
  )
}
