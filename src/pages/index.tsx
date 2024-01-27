import {getLayoutWithHeader} from '@/_app/Layouts/unauthorized/Unauthorized'
import {PATH} from '@/shared/constants/PATH'
import {serverAuthAPI} from '@/shared/server-api/server-api'
import {Loader} from '@/shared/ui/Loader'
import {GetServerSideProps, GetServerSidePropsContext} from 'next'

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
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

const Home = () => {
    return <Loader />
}

Home.getLayout = getLayoutWithHeader
export default Home
