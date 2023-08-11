import React from 'react'
import {getLayoutWithHeader} from '_app/Layouts/unauthorized/Unauthorized'
import {CreateNewPasswordForm} from 'features/Auth/CreateNewPasswordForm/ui/CreateNewPasswordForm'
import {useRouter} from 'next/router'
import {Loader} from 'shared/ui/Loader/Loader'

export default function CreateNewPasswordPage() {
    const router = useRouter()
    const recoveryCode = router.query.token

    if (recoveryCode) {
        return <CreateNewPasswordForm recoveryCode={recoveryCode} />
    }
    return <Loader />
}

CreateNewPasswordPage.getLayout = getLayoutWithHeader
