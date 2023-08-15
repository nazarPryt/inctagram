import {getLayoutWithHeader} from '_app/Layouts/unauthorized/Unauthorized'
import {NextPageContext} from 'next'
import {Loader} from 'shared/ui/Loader'
import React, {useEffect} from 'react'
import {useRouter} from 'next/router'
import {PATH} from 'shared/constants/PATH'
import {useCheckRecoveryCodeMutation} from 'features/Auth/CheckRecoveryCode/api/checkRecoveryCode.api'

export async function getServerSideProps(ctx: NextPageContext) {
    const {code} = ctx.query
    return {
        props: {
            code,
        },
    }
}
export default function RecoveryPage({code}: {code: string}) {
    const router = useRouter()
    const [checkRecoveryCode] = useCheckRecoveryCodeMutation()

    const handleConfirm = async () => {
        await checkRecoveryCode({recoveryCode: code})
            .unwrap()
            .then(() => router.replace(`${PATH.CREATE_NEW_PASSWORD}?recoveryCode=${code}`))
            .catch(() => router.replace(`${PATH.EXPIRED_LINK}?email=${'sdfs'}`))
    }
    useEffect(() => {
        if (code) {
            handleConfirm()
        }
    }, [])

    return <Loader />
}
RecoveryPage.getLayout = getLayoutWithHeader
