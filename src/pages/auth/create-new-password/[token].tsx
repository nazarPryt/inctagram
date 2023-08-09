import React from 'react'
import {getLayoutWithHeader} from '_app/Layouts/unauthorized/Unauthorized'
import {CreateNewPasswordForm} from 'features/Auth/CreateNewPasswordForm/CreateNewPasswordForm'
import {useRouter} from 'next/router'

export default function CreateNewPasswordPage() {
    const router = useRouter()
    const recoveryCode = router.query.token

    if (recoveryCode) {
        return <CreateNewPasswordForm recoveryCode={recoveryCode} />
    }
    return <div>form expect token in URL (/auth/create-new-password/asdasdasd)</div>
}

CreateNewPasswordPage.getLayout = getLayoutWithHeader
