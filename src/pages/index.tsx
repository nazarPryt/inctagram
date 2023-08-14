import {getLayoutWithHeader} from '_app/Layouts/unauthorized/Unauthorized'
import {useRouter} from 'next/router'
import {Loader} from 'shared/ui/Loader/Loader'

const Home = () => {
    const router = useRouter()

    return <Loader />
}

Home.getLayout = getLayoutWithHeader
export default Home
