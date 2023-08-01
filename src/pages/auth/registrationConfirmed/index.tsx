import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import {useTranslation} from 'shared/hooks/useTranslation'
import congratulation from '../../../shared/assets/pictures/congratulation.png'
import {PATH} from 'shared/constants/PATH'
import {ConfirmationPageWrapper} from 'shared/styles/RegistrationConfirmPage'
import {getLayoutWithHeader} from '_app/Layouts/unauthorized/Unauthorized'
import {AuthContainer} from '../../../shared/ui/AuthContainer/AuthContainer'

export default function ConfirmedRegistrationPage() {
    const {t} = useTranslation()
    return (
        <AuthContainer>
            <ConfirmationPageWrapper>
                <h1>{t.auth.signUp.success.title}</h1>
                <p>{t.auth.signUp.success.title}</p>
                <Link href={PATH.LOGIN}>{t.auth.signUp.success.btn}</Link>TODO
                <span>
                    <Image src={congratulation} alt={'congratulation'} />
                </span>
            </ConfirmationPageWrapper>
        </AuthContainer>
    )
}
ConfirmedRegistrationPage.getLayout = getLayoutWithHeader
