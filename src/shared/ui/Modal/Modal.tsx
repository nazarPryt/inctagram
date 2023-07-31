import React, {ReactNode, useEffect} from 'react'
import {ReactPortal} from './ReactPortal'
import {IconButton} from '../IconButton/IconButton'
import {ModalContent, ModalWrapper} from './Modal.styled'
import {CloseIcon} from '../../assets/icons/CloseIcon'

export type BaseModalProps = {
    children?: ReactNode
    isOpen: boolean
    handleClose: () => void
    title: string
}

export const Modal = ({children, isOpen, handleClose, title}: BaseModalProps) => {
    const handleCloseModal = () => {
        document.body.classList.remove('isModalOpen')
        handleClose()
    }
    const onModalClick = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation()
    }

    isOpen && document.body.classList.add('isModalOpen')

    useEffect(() => {
        const closeOnEscapeKey = (e: KeyboardEvent) => (e.key === 'Escape' ? handleClose() : null)
        document.body.addEventListener('keydown', closeOnEscapeKey)

        return () => {
            document.body.removeEventListener('keydown', closeOnEscapeKey)
        }
    }, [handleClose])

    if (!isOpen) return null

    return (
        <ReactPortal wrapperId='react-portal-modal-container'>
            <ModalWrapper className={isOpen && 'open'} onClick={onModalClick}>
                <ModalContent className={isOpen && 'open'}>
                    <div>
                        <div className={'header'}>
                            {title}
                            <IconButton onClick={handleCloseModal}>
                                <CloseIcon />
                            </IconButton>
                        </div>
                        <div className={'line'}></div>
                    </div>
                    {children}
                </ModalContent>
            </ModalWrapper>
        </ReactPortal>
    )
}