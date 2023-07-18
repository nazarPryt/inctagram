import React from 'react'
import {Meta, StoryObj} from '@storybook/react'
import {Button} from './Button'
import {withThemeDecorator} from '../../../../.storybook/withThemeDecorator'

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    tags: ['docsPage'],
    argTypes: {
        variant: {
            options: ['contained', 'outlined', 'text', 'isIcon'],
            control: {type: 'radio'},
        },
    },
}

export default meta
type Story = StoryObj<typeof Button>

export const DefaultButton: Story = {
    args: {
        children: 'Default',
    },
    decorators: [withThemeDecorator],
}
export const DefaultButtonDisabled: Story = {
    args: {
        children: 'Default',
        disabled: true,
    },
    decorators: [withThemeDecorator],
}
export const OutlinedButton: Story = {
    args: {
        variant: 'outlined',
        disabled: false,
        children: 'Outlined Button',
    },
    decorators: [withThemeDecorator],
}
export const ContainedButton: Story = {
    args: {
        variant: 'contained',
        disabled: false,
        children: 'Contained Button',
    },
    decorators: [withThemeDecorator],
}
export const IsIconButton: Story = {
    args: {
        variant: 'isIcon',
        disabled: false,
        children: 'Button is icon',
    },
    decorators: [withThemeDecorator],
}
export const TextButton: Story = {
    args: {
        variant: 'text',
        disabled: false,
        children: 'Text Button',
    },
    decorators: [withThemeDecorator],
}
