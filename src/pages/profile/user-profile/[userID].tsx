import {getAuthorizedLayout} from '_app/Layouts/authorized/AuthorizedLayout'
import {useRouter} from 'next/router'

export default function UserProfilePage() {
    const router = useRouter()

    return (
        <>
            <p>UserProfilePage </p>
            <p>userID: {router.query.userID}</p>
        </>
    )
}
UserProfilePage.getLayout = getAuthorizedLayout
