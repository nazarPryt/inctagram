import {Decorator} from '@storybook/react'
import React from 'react'

export const ModalDecorator: Decorator = (Story, context) => {
    return (
        <div>
            <div id={'react-portal-modal-container'}></div>
            <Story />
        </div>
    )
}
