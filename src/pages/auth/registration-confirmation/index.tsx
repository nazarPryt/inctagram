import React, {useEffect} from 'react'
import {Loader} from 'shared/ui/Loader/Loader'
import {PATH} from 'shared/constants/PATH'
import {getLayoutWithHeader} from '_app/Layouts/unauthorized/Unauthorized'
import {useRouter} from 'next/router'
import {NextPageContext} from 'next'
import {useRegistrationConfirmationMutation} from 'features/Auth/RegistrationConfirmation/api/registrationConfirmation.api'

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
            handleConfirm()
        }
    }, [])

    return <Loader />
}

ConfirmationPage.getLayout = getLayoutWithHeader
