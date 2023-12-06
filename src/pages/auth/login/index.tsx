import React from 'react'
import {getLayoutWithHeader} from '_app/Layouts/unauthorized/Unauthorized'
import {LogInForm} from 'features/Auth/LogIn/ui/LogInForm/LogInForm'

export default function LoginPage() {
    return <LogInForm />
}
LoginPage.getLayout = getLayoutWithHeader
