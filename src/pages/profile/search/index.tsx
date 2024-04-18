import {getAuthorizedLayout} from '@/_app/Layouts/authorized'
import {SearchUser} from '@/features/SearchUser'

export default function SearchPage() {
    return <SearchUser />
}
SearchPage.getLayout = getAuthorizedLayout
