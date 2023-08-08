import React from 'react'
import {getLayoutWithHeader} from '_app/Layouts/unauthorized/Unauthorized'
import {CreateNewPasswordForm} from 'features/Auth/CreateNewPasswordForm/CreateNewPasswordForm'

export default function CreateNewPasswordPage() {
    return <CreateNewPasswordForm />
}

CreateNewPasswordPage.getLayout = getLayoutWithHeader
