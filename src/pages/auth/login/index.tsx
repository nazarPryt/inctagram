import React from 'react'
import {getLayoutWithHeader} from '_app/Layouts/unauthorized/Unauthorized'
import {LoginForm} from '../../../features/Auth/LoginForm/LoginForm'

export default function LoginPage() {
    return <LoginForm />
}
LoginPage.getLayout = getLayoutWithHeader
