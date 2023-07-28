import React, {ComponentProps, Dispatch} from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import {DialogClose, DialogContent, DialogContentBox, DialogOverlay} from 'widgets/UserPostsModal/UserPostsModal.styled'

import {useRouter} from 'next/router'
import {CloseIcon} from 'shared/assets/icons/CloseIcon'

export type ModalProps = {
    open: boolean
    onClose: Dispatch<React.SetStateAction<boolean>>
} & ComponentProps<'div'>

export const UserPostsModal = ({open, onClose, children}: ModalProps) => {
    const router = useRouter()

    function handleModalClosed() {
        onClose(false)
        router.back()
    }
    return (
        <Dialog.Root open={open} onOpenChange={handleModalClosed}>
            {open && (
                <Dialog.Portal>
                    <DialogOverlay />
                    <DialogContent>
                        <DialogClose>
                            <CloseIcon />
                        </DialogClose>
                        <DialogContentBox>{children}</DialogContentBox>
                    </DialogContent>
                </Dialog.Portal>
            )}
        </Dialog.Root>
    )
}
