import React from 'react'
import {getLayoutWithHeader} from '_app/Layouts/unauthorized/Unauthorized'
import {ForgotPasswordForm} from 'features/Auth/ForgotPasswordForm/ForgotPasswordForm'

export default function ForgotPasswordPage() {
    return <ForgotPasswordForm />
}

ForgotPasswordPage.getLayout = getLayoutWithHeader
