import React from 'react'
import {getAuthorizedLayout} from '_app/Layouts/authorized/AuthorizedLayout'
import {Profile} from 'widgets/Profile/Profile'
import {GetServerSideProps, GetServerSidePropsContext} from 'next'
import {serverAuthAPI} from 'shared/server-api/server-api'
import {PATH} from 'shared/constants/PATH'

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const user = await serverAuthAPI.authMe(ctx)
    console.log('serverAuthAPI.authMe (user): ', user)
    if (user) {
        return {
            props: {
                user,
            },
        }
    } else {
        return {
            redirect: {
                destination: PATH.LOGIN,
                permanent: true,
            },
        }
    }
}
export default function MyProfilePage() {
    return <Profile />
}
MyProfilePage.getLayout = getAuthorizedLayout
