import React from 'react'
import {getLayoutWithHeader} from '_app/Layouts/unauthorized/Unauthorized'
import {LogInForm} from 'features/Auth/LogIn/ui/LogInForm/LogInForm'
import {GetServerSideProps, GetServerSidePropsContext} from 'next'
import {PATH} from 'shared/constants/PATH'

// export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
//     await checkAuth(ctx)
//
//     return {
//         redirect: {
//             destination: PATH.LOGIN,
//             permanent: false,
//         },
//     }
// }

export default function LoginPage() {
    return <LogInForm />
}
LoginPage.getLayout = getLayoutWithHeader
