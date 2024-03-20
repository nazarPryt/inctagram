import {getAuthorizedLayout} from '@/_app/Layouts/authorized'
import {AllPostsList} from '@/widgets/AllPostsList'

export default function Home() {
    return <AllPostsList />
}

Home.getLayout = getAuthorizedLayout
