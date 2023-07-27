import React, {ComponentProps, Dispatch} from 'react'
import {UserPostsModalWrapper} from 'widgets/UserPostsModal/UserPostsModal.styled'
import {DialogContent, DialogOverlay, DialogPortal, DialogClose} from '@radix-ui/react-dialog'

export type ModalProps = {
    open: boolean
    onClose: Dispatch<React.SetStateAction<boolean>>
} & ComponentProps<'div'>

export const UserPostsModal = ({open, onClose, children}: ModalProps) => {
    function handleModalClosed() {
        onClose(false)
    }
    return (
        <UserPostsModalWrapper open={open} onOpenChange={handleModalClosed}>
            {open && (
                <DialogPortal>
                    <DialogOverlay className={'overlay'} />
                    <DialogContent className={'content'}>
                        <DialogClose className={'closeButton'}>close</DialogClose>
                        <div className={'contentBox'}>{children}</div>
                    </DialogContent>
                </DialogPortal>
            )}
        </UserPostsModalWrapper>
    )
}
