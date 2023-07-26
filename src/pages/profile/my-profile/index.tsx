import React from 'react'
import {getAuthorizedLayout} from '_app/Layouts/authorized/AuthorizedLayout'
import {Profile} from 'widgets/Profile/Profile'
import {getSession} from 'next-auth/react'
import {GetServerSideProps, GetServerSidePropsContext} from 'next'

type ProfilePageProps = {
    userId: number | null
}

export const getServerSideProps: GetServerSideProps<ProfilePageProps> = async (context: GetServerSidePropsContext) => {
    const session = await getSession(context)

    if (session && session.user.userId) {
        return {
            props: {
                userId: session.user.userId,
            },
        }
    }
    return {
        props: {
            userId: null,
        },
    }
}

export default function MyProfilePage({userId}: ProfilePageProps) {
    return <Profile userId={userId} />
}
MyProfilePage.getLayout = getAuthorizedLayout
