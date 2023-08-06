import React from 'react'
import {getLayoutWithHeader} from '_app/Layouts/unauthorized/Unauthorized'
import {AuthContainer} from 'shared/ui/AuthContainer/AuthContainer'
import {AuthPageStyled} from 'shared/styles/RegistrationPage'
import {useTranslation} from 'shared/hooks/useTranslation'

export default function CreateNewPasswordPage() {
    const {t} = useTranslation()
    return (
        <AuthContainer>
            <AuthPageStyled>
                <h1>{t.auth.signIn.title}</h1>
            </AuthPageStyled>
        </AuthContainer>
    )
}

CreateNewPasswordPage.getLayout = getLayoutWithHeader
