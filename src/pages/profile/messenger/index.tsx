import {getAuthorizedLayout} from '@/_app/Layouts/authorized'
import {Messenger} from '@/widgets/Messanger'

export default function MessengerPage() {
    return <Messenger />
}
MessengerPage.getLayout = getAuthorizedLayout
