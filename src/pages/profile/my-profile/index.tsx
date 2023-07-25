import React from 'react'
import {getAuthorizedLayout} from '_app/Layouts/authorized/AuthorizedLayout'
import {Profile} from 'widgets/Profile/Profile'

export default function MyProfilePage() {
    return (
        <>
            <Profile />
        </>
    )
}
MyProfilePage.getLayout = getAuthorizedLayout
