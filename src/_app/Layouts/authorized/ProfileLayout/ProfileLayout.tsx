import {ReactElement, ReactNode} from 'react'

import {AuthorizedLayout} from '@/_app/Layouts/authorized/AuthorizedLayout'
import {ProfileNavigation} from '@/widgets/ProfileNavigation'

export default function ProfileLayout({children}: {children: ReactNode}) {
    return (
        <>
            <ProfileNavigation />
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
