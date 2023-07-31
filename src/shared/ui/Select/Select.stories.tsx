import type {Meta, StoryObj} from '@storybook/react'
import React, {useState} from 'react'
import {FlagEngIcon} from '../../assets/icons/FlagEngIcon'
import {FlagRussiaIcon} from '../../assets/icons/FlagRussiaIcon'
import {Select} from './Select'

export default {
    title: 'Components/Select',
    component: Select,
    tags: ['autodocs'],
} as Meta<typeof Select>

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

type Story = StoryObj<typeof Select>

const SimpleSelect = () => {
    const [value, setValue] = useState('')

    return <Select value={value} onChange={setValue} options={optionsPrimary} />
}
export const Simple: Story = {
    render: () => <SimpleSelect />,
}

const SimpleWithLabelSelect = () => {
    const [value, setValue] = useState('')

    return (
        <Select value={value} onChange={setValue} placeholder={'select...'} options={optionsPrimary} label={'Select'} />
    )
}
export const SimpleWithLabel: Story = {
    render: () => <SimpleWithLabelSelect />,
}

const ErrorSelect = () => {
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

export const Error: Story = {
    render: () => <ErrorSelect />,
}

const PaginationSelect = () => {
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

export const Pagination: Story = {
    render: () => <PaginationSelect />,
}

const FullWidthSelect = () => {
    const [value, setValue] = useState('')

    return <Select value={value} onChange={setValue} options={optionsPrimary} variant={'primary'} width={'100%'} />
}

export const FullWidth: Story = {
    render: () => <FullWidthSelect />,
}

const CountryExample = () => {
    const [value, setValue] = useState('ru')

    return <Select value={value} onChange={setValue} options={Country} variant={'primary'} />
}

export const CountrySelect: Story = {
    render: () => <CountryExample />,
}

const DisabledSelect = () => {
    return <Select value={''} onChange={() => {}} options={optionsPrimary} variant={'primary'} disabled />
}

export const Disabled: Story = {
    render: () => <DisabledSelect />,
}