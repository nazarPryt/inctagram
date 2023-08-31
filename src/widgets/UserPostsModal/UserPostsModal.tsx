import React, { ComponentProps, Dispatch } from 'react'

import * as Dialog from '@radix-ui/react-dialog'
import { useRouter } from 'next/router'

import { CloseIcon } from 'shared/assets/icons/CloseIcon'
import {
  DialogClose,
  DialogContent,
  DialogContentBox,
  DialogOverlay,
} from 'widgets/UserPostsModal/UserPostsModal.styled'

// https://www.radix-ui.com/docs/primitives/components/dialog

export type ModalProps = ComponentProps<'div'> & {
  open: boolean
  onClose: Dispatch<React.SetStateAction<boolean>>
}

export const UserPostsModal = ({ open, onClose, children }: ModalProps) => {
  const router = useRouter()

  function handleModalClosed() {
    onClose(false)
    router.back()
  }

  return (
    // TODO
    // eslint-disable-next-line react/jsx-no-bind
    <Dialog.Root open={open} onOpenChange={handleModalClosed}>
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
