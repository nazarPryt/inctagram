import React from 'react'
import {getLayoutWithHeader} from '_app/Layouts/unauthorized/Unauthorized'
import {LoginForm} from 'features/auth/LoginForm/LoginForm'

export default function LoginPage() {
    return <LoginForm />
}
LoginPage.getLayout = getLayoutWithHeader
