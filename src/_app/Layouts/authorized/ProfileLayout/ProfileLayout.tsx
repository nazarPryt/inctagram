import {ReactElement, ReactNode} from 'react'

import {PATH} from '@/_app/AppSettings'
import {AuthorizedLayout} from '@/_app/Layouts/authorized/AuthorizedLayout'
import Link from 'next/link'

export default function ProfileLayout({children}: {children: ReactNode}) {
    return (
        <>
            <div>
                <Link href={`./${PATH.GENERAL_INFORMATION}`}>General Information</Link>
                <Link href={`./${PATH.DEVICES}`}>Devices</Link>
                <Link href={`./${PATH.ACCOUNT_MANAGEMENT}`}>Account Management</Link>
                <Link href={`./${PATH.MY_PAYMENTS}`}>My Payments</Link>
            </div>
            <div>{children}</div>
        </>
    )
}
export const getProfileLayout = (page: ReactElement) => {
    return (
        <AuthorizedLayout>
            <ProfileLayout>{page}</ProfileLayout>
        </AuthorizedLayout>
    )
}
