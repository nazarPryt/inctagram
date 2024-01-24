import {ComponentProps, Dispatch, SetStateAction} from 'react'

import * as Dialog from '@radix-ui/react-dialog'
import {useRouter} from 'next/router'
import {CloseIcon} from 'shared/assets/icons/CloseIcon'
import {DialogClose, DialogContent, DialogContentBox, DialogOverlay} from 'widgets/UserPostsModal/UserPostsModal.styled'

//https://www.radix-ui.com/docs/primitives/components/dialog

export type ModalProps = {
    onClose: Dispatch<SetStateAction<boolean>>
    open: boolean
} & ComponentProps<'div'>

export const UserPostsModal = ({children, onClose, open}: ModalProps) => {
    const router = useRouter()

    function handleModalClosed() {
        onClose(false)
        router.back()
    }

    return (
        <Dialog.Root onOpenChange={handleModalClosed} open={open}>
            <Dialog.Trigger />
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
