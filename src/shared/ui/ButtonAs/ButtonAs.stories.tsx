import {Meta, StoryObj} from '@storybook/react'
import {ButtonAs} from 'shared/ui/ButtonAs/ButtonAs'

const meta: Meta<typeof ButtonAs> = {
    title: 'Components/ButtonAs',
    component: ButtonAs,
    tags: ['docsPage'],
    argTypes: {
        variant: {
            options: ['contained', 'outlined', 'text'],
            control: {type: 'radio'},
        },
    },
}

export default meta
type Story = StoryObj<typeof ButtonAs>

export const DefaultButton: Story = {
    args: {
        children: 'Default',
    },
}
