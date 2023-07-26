import {getAuthorizedLayout} from '_app/Layouts/authorized/AuthorizedLayout'
import Link from 'next/link'
import React from 'react'
import {PATH} from 'shared/constants/PATH'

export default function MyProfilePage() {
    return (
        <>
            My Profile page <Link href={PATH.PROFILE_SETTINGS}> Profile Settings</Link>
        </>
    )
}
MyProfilePage.getLayout = getAuthorizedLayout
