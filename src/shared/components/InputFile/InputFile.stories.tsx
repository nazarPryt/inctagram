import type {Meta, StoryObj} from '@storybook/react'
import {withThemeDecorator} from '../../../../.storybook/withThemeDecorator'
import {InputFile} from './InputFile'

const meta = {
    title: 'Components/InputFile',
    component: InputFile,
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof InputFile>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        title: 'InputFile',
    },
    decorators: [withThemeDecorator],
}
