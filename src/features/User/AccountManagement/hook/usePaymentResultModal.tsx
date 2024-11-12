import {useEffect, useState} from 'react'

import {Dialog} from '@nazar-pryt/inctagram-ui-kit'
import {useRouter} from 'next/router'

export const usePaymentResultModal = () => {
    const [open, setOpen] = useState({error: false, success: false})
    const {pathname, query, replace} = useRouter()
    const {success, ...restQueries} = query

    useEffect(() => {
        if (success === 'true') {
            setOpen({error: false, success: true})
        }
        if (success === 'false') {
            setOpen({error: true, success: false})
        }
    }, [success])

    const handleCloseModal = () => {
        setOpen({error: false, success: false})
        // Replace the URL to remove only the "success" query parameter
        void replace(
            {
                pathname: pathname,
                query: restQueries, // Pass all other queries except "success"
            },
            undefined,
            {shallow: true}
        )
    }
    const renderResultPaymentModal = () => {
        if (open.success) {
            return (
                <Dialog
                    confirmButtonText={'Ok'}
                    onConfirmButtonClick={handleCloseModal}
                    open={open.success}
                    size={'sm'}
                    title={'Success'}
                >
                    <p>Payment was successful!</p>
                </Dialog>
            )
        }

        if (open.error) {
            return (
                <Dialog
                    confirmButtonText={'Back to payment'}
                    onClose={handleCloseModal}
                    onConfirmButtonClick={handleCloseModal}
                    open={open.error}
                    size={'sm'}
                    title={'Error'}
                >
                    <p>Transaction failed. Please, write to support</p>
                </Dialog>
            )
        }
    }

    return {renderResultPaymentModal}
}
