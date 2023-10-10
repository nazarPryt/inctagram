import {getLayoutWithHeader} from '_app/Layouts/unauthorized/Unauthorized'
import {useRouter} from 'next/router'
import {GetServerSideProps, GetServerSidePropsContext} from 'next'
import {serverAuthAPI} from 'shared/server-api/server-api'
import {PATH} from 'shared/constants/PATH'

export const checkAuth = async (ctx: GetServerSidePropsContext) => {
    const accessToken = ctx.req.cookies.accessToken

    if (accessToken) {
        const user = await serverAuthAPI.authMe(accessToken)
        return {
            props: {
                user,
            },
            redirect: {
                destination: PATH.HOME,
                permanent: false,
            },
        }
    }

    return {
        redirect: {
            destination: PATH.LOGIN,
            permanent: false,
        },
    }
}
export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
    await checkAuth(ctx)

    return {
        redirect: {
            destination: PATH.LOGIN,
            permanent: false,
        },
    }
}

const Home = ({user}: {user: any}) => {
    const router = useRouter()

    return <div>{user.message}</div>
}

Home.getLayout = getLayoutWithHeader
export default Home
