import {getLayoutWithHeader} from '_app/Layouts/unauthorized/Unauthorized'
import {useRouter} from 'next/router'
import {GetServerSideProps, GetServerSidePropsContext} from 'next'
import {serverAuthAPI} from 'shared/server-api/server-api'
import {PATH} from 'shared/constants/PATH'
import {Loader} from 'shared/ui/Loader'
import nookies from 'nookies'

// export const checkAuth = async (ctx: GetServerSidePropsContext) => {
//     const cookies = nookies.get(ctx)
//
//     console.log('getServerSide checkAuth start')
//     console.log('cookies: ', cookies)
//     if ('accessToken') {
//         const user = await serverAuthAPI.authMe('accessToken')
//         return {
//             props: {
//                 user,
//             },
//             redirect: {
//                 destination: PATH.HOME,
//                 permanent: false,
//             },
//         }
//     } else {
//         return {}
//     }
// }

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
    // const cookies = nookies.get(ctx)
    // const accessToken = cookies.accessToken
    //
    // if (accessToken) {
    const user = await serverAuthAPI.authMe(ctx)
    console.log('serverAuthAPI.authMe (user): ', user)
    if (user) {
        return {
            props: {
                user,
            },
            redirect: {
                destination: PATH.HOME,
                permanent: true,
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

const Home = ({user}: {user: any}) => {
    const router = useRouter()

    return <Loader />
}

Home.getLayout = getLayoutWithHeader
export default Home
