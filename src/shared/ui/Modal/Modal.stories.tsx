import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { ModalDecorator } from '../../lib/storybook/decorators/ModalDecorator'

import { Modal } from './Modal'

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['docsPage'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Modal>

export const Default: Story = {
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false)

    function handleModalClosed(): void {
      setOpen(false)
    }

    function handleModalOpened(): void {
      setOpen(true)
    }

    return (
      <div>
        <button type="button" onClick={handleModalOpened}>
          Open Modal
        </button>
        {/* TODO */}
        {/* eslint-disable-next-line react/jsx-no-bind */}
        <Modal {...args} handleClose={handleModalClosed} isOpen={open} />
      </div>
    )
  },
  args: {
    title: 'Base Modal',
    children: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci atque blanditiis consequatur corporis
        culpa, eligendi et excepturi fugit iure laboriosam laborum laudantium modi molestias odio quas rem voluptatum.
        Dolores?
      </p>
    ),
  },
  decorators: [ModalDecorator],
}
