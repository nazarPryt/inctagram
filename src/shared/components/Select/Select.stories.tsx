import type {Meta} from '@storybook/react'
import React, {useState} from 'react'
import {FlagRussiaIcon} from '../../../common/assets/icons/FlagRussiaIcon'
import {Select, SelectProps} from './Select'
import EnglishFlag from '../../../common/assets/icons/FlagUnitedKingdom.svg'
export default {
    title: 'Components/Select',
    component: Select,
    tags: ['autodocs'],
} satisfies Meta<typeof Select>

const optionsPrimary = [
    {
        value: 'apple',
        label: 'Apple',
    },
    {
        value: 'banana',
        label: 'Banana',
    },
    {
        value: 'blueberry',
        label: 'Blueberry',
    },
    {
        value: 'grapes',
        label: 'Grapes',
    },
]
const optionsPagination = [
    {
        value: '1',
        label: '1',
    },
    {
        value: '2',
        label: '2',
    },
    {
        value: '3',
        label: '3',
    },
    {
        value: '4',
        label: '4',
    },
]
const Country = [
    {
        value: 'ru',
        label: (
            <>
                <FlagRussiaIcon />
                Russia
            </>
        ),
    },
    {
        value: 'en',
        label: (
            <>
                <FlagEngIcon />
                English
            </>
        ),
    },
]

export const Simple = () => {
    const [value, setValue] = useState('')

    return <Select value={value} onChange={setValue} placeholder={'select box'} options={optionsPrimary} />
}

export const SimpleWithLabel = () => {
    const [value, setValue] = useState('')

    return (
        <Select value={value} onChange={setValue} placeholder={'select...'} options={optionsPrimary} label={'Select'} />
    )
}

export const Error = () => {
    const [value, setValue] = useState('')

    return (
        <Select
            value={value}
            onChange={setValue}
            options={optionsPrimary}
            placeholder={'select...'}
            label={'Select'}
            errorMessage={'error error error error '}
        />
    )
}
export const Pagination = () => {
    const [value, setValue] = useState('')

    return (
        <Select
            value={value}
            onChange={setValue}
            options={optionsPagination}
            label={'pagination'}
            variant={'pagination'}
            placeholder={'1'}
        />
    )
}

export const FullWidth = () => {
    const [value, setValue] = useState('')

    return <Select value={value} onChange={setValue} options={optionsPrimary} variant={'primary'} width={'100%'} />
}
export const CountrySelect = () => {
    const [value, setValue] = useState('ru')

    return <Select value={value} onChange={setValue} options={Country} variant={'primary'} />
}

export const Disabled = () => {
    return <Select value={''} onChange={() => {}} options={optionsPrimary} variant={'primary'} disabled />
}
