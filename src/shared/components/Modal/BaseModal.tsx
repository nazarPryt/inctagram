import React, {ReactNode, useEffect} from 'react'
import {ReactPortal} from 'shared/components/Modal/ReactPortal'
import {IconButton} from 'shared/components/IconButton/IconButton'
import CloseIcon from 'common/assets/icons/closeWhite.svg'
import {ModalContent, ModalWrapper} from 'shared/components/Modal/BaseModal.styled'

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
