import {Filter, FiltersWrapper} from './styled'
import Image from 'next/image'
import React from 'react'

const filters = [
    {
        id: 1,
        title: 'Aden',
        filter: 'sepia(.2) brightness(1.15) saturate(1.4)',
    },
    {
        id: 2,
        title: 'Brooklyn',
        filter: 'sepia(.25) contrast(1.25) brightness(1.25) hue-rotate(5deg)',
    },
    {
        id: 3,
        title: 'Clarendon',
        filter: 'sepia(.15) contrast(1.25) brightness(1.25) hue-rotate(5deg)',
    },
    {
        id: 4,
        title: 'Moon',
        filter: 'brightness(1.4) contrast(.95) saturate(0) sepia(.35)',
    },
    {
        id: 5,
        title: 'X-Pro II',
        filter: 'sepia(.4) contrast(1.5) brightness(1.2) saturate(1.4)',
    },
    {
        id: 6,
        title: 'Willow',
        filter: 'brightness(1.2) contrast(.85) saturate(.05) sepia(.2)',
    },
    {
        id: 7,
        title: 'Hudson',
        filter: 'sepia(.25) contrast(1.2) brightness(1.2) saturate(1.05) hue-rotate(-15deg)',
    },
    {
        id: 8,
        title: 'Reyes',
        filter: 'sepia(.75) contrast(.75) brightness(1.25) saturate(1.4)',
    },
    {
        id: 9,
        title: 'Lark',
        filter: 'sepia(.25) contrast(1.2) brightness(1.3) saturate(1.25)',
    },
]

type PresetFiltersType = {
    picture: string
    setFilter: (filter: string) => void
    handleSave: () => void
}

export const PresetFilters: React.FC<PresetFiltersType> = props => {
    return (
        <FiltersWrapper>
            {filters.map(el => (
                <Filter key={el.id} filter={el.filter} onClick={() => props.setFilter(el.filter)}>
                    <Image src={props.picture} width={100} height={100} alt={'filter photo'} />
                    {el.title}
                </Filter>
            ))}
        </FiltersWrapper>
    )
}
