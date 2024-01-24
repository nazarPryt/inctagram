import {useState} from 'react'

import {getAuthorizedLayout} from '_app/Layouts/authorized/AuthorizedLayout'
import {ViewUserPost} from 'entities/ViewUserPost/ViewUserPost'
import {useGetUserPostQuery} from 'entities/ViewUserPost/api/get-post-api'
import {useRouter} from 'next/router'
import {Loader} from 'shared/ui/Loader/Loader'
import {UserPostsModal} from 'widgets/UserPostsModal/UserPostsModal'

export default function ShowPostPage() {
    const [open, setOpen] = useState(false)
    const router = useRouter()
    const postId = router.query.postId ? +router.query.postId : null

    const {data, isLoading} = useGetUserPostQuery(postId, {skip: !postId})

    if (isLoading) {
        return <Loader />
    }

    if (data) {
        return (
            <UserPostsModal onClose={setOpen} open>
                <ViewUserPost data={data} />
            </UserPostsModal>
        )
    }

    return <div>network error</div>
}
ShowPostPage.getLayout = getAuthorizedLayout
