import type {Meta, StoryObj} from '@storybook/react'
import {withThemeDecorator} from '../../../../.storybook/withThemeDecorator'
import {Loader} from './Loader'

const meta = {
    title: 'Components/Loader',
    component: Loader,
    args: {},
} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {},
    decorators: [withThemeDecorator],
}
