import {getAuthorizedLayout} from '@/_app/Layouts/authorized'
import {Messenger} from '@/features/Messenger'

export default function MessengerPage() {
    return <Messenger />
}
MessengerPage.getLayout = getAuthorizedLayout
