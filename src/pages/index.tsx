import {getLayoutWithHeader} from '@/shared/layouts/unauthorized/Unauthorized'
import {Loader} from '@nazar-pryt/inctagram-ui-kit'

// export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
//     const user = await serverAuthAPI.authMe(ctx)
//
//     console.log('serverAuthAPI.authMe (user): ', user)
//     if (user) {
//         return {
//             props: {
//                 user,
//             },
//             redirect: {
//                 destination: PATH.HOME,
//                 permanent: true,
//             },
//         }
//     } else {
//         return {
//             redirect: {
//                 destination: PATH.LOGIN,
//                 permanent: true,
//             },
//         }
//     }
// }

const Home = () => {
    return <Loader />
}

Home.getLayout = getLayoutWithHeader
export default Home
