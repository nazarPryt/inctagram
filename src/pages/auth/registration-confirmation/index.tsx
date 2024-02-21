import {useEffect} from 'react'

import {getLayoutWithHeader} from '@/_app/Layouts/unauthorized'
import {useRegistrationConfirmationMutation} from '@/features/Auth/RegistrationConfirmation'
import {PATH} from '@/shared/constants/PATH'
import {Loader} from '@nazar-pryt/inctagram-ui-kit'
import {NextPageContext} from 'next'
import {useRouter} from 'next/router'

export async function getServerSideProps(ctx: NextPageContext) {
    const {code, email} = ctx.query

    //todo we can make all logic with REDIRECT wright here
    return {
        props: {
            code,
            email,
        },
    }
}

export default function ConfirmationPage({code, email}: {code: string; email: string}) {
    const router = useRouter()
    const [signUpConfirmation] = useRegistrationConfirmationMutation()

    const handleConfirm = async () => {
        await signUpConfirmation({confirmationCode: code})
            .unwrap()
            .then(() => router.replace(PATH.REGISTRATION_CONFIRMED))
            .catch(() => router.replace(`${PATH.EXPIRED_LINK}?email=${email}`))
    }

    useEffect(() => {
        if (code && email) {
            void handleConfirm()
        }
    }, [])

    return <Loader fullScreen />
}

ConfirmationPage.getLayout = getLayoutWithHeader
