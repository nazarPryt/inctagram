import {AllPostsList} from '@/widgets/AllPostsList'

import {getAuthorizedLayout} from '../../_app/Layouts/authorized'

export default function Home() {
    return <AllPostsList />
}

Home.getLayout = getAuthorizedLayout
