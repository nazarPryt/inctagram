import {getAuthorizedLayout} from '@/shared/layouts/authorized'
import {AllPostsList} from '@/widgets/AllPostsList'

export default function Home() {
    return <AllPostsList />
}

Home.getLayout = getAuthorizedLayout
