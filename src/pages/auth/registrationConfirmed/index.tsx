import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import congratulation from 'common/assets/pictures/congratulation.png'
import {PATH} from 'shared/constants/PATH'
import {ConfirmationPageWrapper} from 'shared/styles/RegistrationConfirmPage'
import {getLayoutWithHeader} from '_app/Layouts/unauthorized/Unauthorized'
import {AuthContainer} from 'shared/components/AuthContainer/AuthContainer'

export default function ConfirmedRegistrationPage() {
    return (
        <AuthContainer>
            <ConfirmationPageWrapper>
                <h1>Congratulations!</h1>
                <p>Your email has been confirmed</p>
                <Link href={PATH.LOGIN}>Sing In</Link>TODO
                <span>
                    <Image src={congratulation} alt={'congratulation'} />
                </span>
            </ConfirmationPageWrapper>
        </AuthContainer>
    )
}
ConfirmedRegistrationPage.getLayout = getLayoutWithHeader
