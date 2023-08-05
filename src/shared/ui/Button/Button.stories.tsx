import {Meta, StoryObj} from '@storybook/react'
import Button from './Button'

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
}
export const DefaultButtonDisabled: Story = {
    args: {
        children: 'Default',
        disabled: true,
    },
}
export const OutlinedButton: Story = {
    args: {
        variant: 'outlined',
        disabled: false,
        children: 'Outlined Button',
    },
}
export const ContainedButton: Story = {
    args: {
        variant: 'contained',
        disabled: false,
        children: 'Contained Button',
    },
}
export const IsIconButton: Story = {
    args: {
        variant: 'isIcon',
        disabled: false,
        children: 'Button is icon',
    },
}
export const TextButton: Story = {
    args: {
        variant: 'text',
        disabled: false,
        children: 'Text Button',
    },
}
