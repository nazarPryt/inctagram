import React from 'react'
import {getLayoutWithHeader} from '_app/Layouts/unauthorized/Unauthorized'
import {RegistrationForm} from '../../../features/Auth/RegistrationForm/RegistrationForm'

export default function RegistrationPage() {
    return <RegistrationForm />
}

RegistrationPage.getLayout = getLayoutWithHeader
