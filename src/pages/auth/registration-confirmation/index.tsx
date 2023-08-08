import React, {useEffect} from 'react'
import {useSignUpConfirmationMutation} from 'redux/api/authAPI'
import {Loader} from 'shared/ui/Loader/Loader'
import {PATH} from 'shared/constants/PATH'
import {getLayoutWithHeader} from '_app/Layouts/unauthorized/Unauthorized'
import {useRouter} from 'next/router'
import {NextPageContext} from 'next'

export async function getServerSideProps(ctx: NextPageContext) {
    const {code} = ctx.query
    //todo we can make all logic with REDIRECT wright here
    return {
        props: {
            code,
        },
    }
}

export default function ConfirmationPage({code}: {code: string}) {
    const router = useRouter()
    console.log('code: ', code)

    const [signUpConfirmation] = useSignUpConfirmationMutation()

    const handleConfirm = async () => {
        await signUpConfirmation({confirmationCode: code})
            .unwrap()
            .then(() => router.replace(PATH.REGISTRATION_CONFIRMED))
            // .catch(() => router.replace(`${PATH.EXPIRED_LINK}?email=${email}`))
            .catch(() => router.replace(PATH.EXPIRED_LINK))
    }
    useEffect(() => {
        if (code) {
            handleConfirm()
        }
    }, [])

    return <Loader />
}

ConfirmationPage.getLayout = getLayoutWithHeader
