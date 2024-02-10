import {useEffect} from 'react'

import {useCheckRecoveryCodeMutation} from '@/features/Auth/CheckRecoveryCode/api/checkRecoveryCode.api'
import {PATH} from '@/shared/constants/PATH'
import {getLayoutWithHeader} from '@/shared/layouts/unauthorized'
import {Loader} from '@nazar-pryt/inctagram-ui-kit'
import {NextPageContext} from 'next'
import {useRouter} from 'next/router'

export async function getServerSideProps(ctx: NextPageContext) {
    const {code, email} = ctx.query

    return {
        props: {
            code,
            email,
        },
    }
}
export default function RecoveryPage({code, email}: {code: string; email: string}) {
    const router = useRouter()
    const [checkRecoveryCode] = useCheckRecoveryCodeMutation()

    const handleConfirm = async () => {
        await checkRecoveryCode({recoveryCode: code})
            .unwrap()
            .then(() => router.replace(`${PATH.CREATE_NEW_PASSWORD}?recoveryCode=${code}`))
            .catch(() => router.replace(`${PATH.EXPIRED_LINK}?email=${email}`))
    }

    useEffect(() => {
        if (code) {
            handleConfirm()
        }
    }, [])

    return <Loader />
}
RecoveryPage.getLayout = getLayoutWithHeader
