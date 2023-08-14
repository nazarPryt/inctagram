import React from 'react'
import {getAuthorizedLayout} from '_app/Layouts/authorized/AuthorizedLayout'
import {Profile} from 'widgets/Profile/Profile'

//export const getServerSideProps: GetServerSideProps<ProfilePageProps> = async (context: GetServerSidePropsContext) => {
// const session = await getSession(context)
//
// if (session && session.user.userId) {
//     return {
//         props: {
//             userId: session.user.userId,
//         },
//     }
// }
// return {
//     props: {
//         userId: null,
//     },
// }
// }

export default function MyProfilePage() {
    return <Profile />
}
MyProfilePage.getLayout = getAuthorizedLayout
