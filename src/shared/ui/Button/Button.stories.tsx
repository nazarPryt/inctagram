import { Meta, StoryObj } from '@storybook/react'

import { Button } from 'shared/ui/Button/Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['docsPage'],
  argTypes: {
    variant: {
      options: ['primary', 'contained', 'outlined', 'text', 'link'],
      control: { type: 'radio' },
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const DefaultButton: Story = {
  args: {
    children: 'Default',
    disabled: false,
  },
}
