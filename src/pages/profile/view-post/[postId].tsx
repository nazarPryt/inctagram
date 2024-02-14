import {useState} from 'react'

import {ViewUserPost} from '@/entities/ViewUserPost/ViewUserPost'
import {useGetUserPostQuery} from '@/entities/ViewUserPost/api/get-post-api'
import {getAuthorizedLayout} from '@/shared/layouts/authorized'
import {UserPostsModal} from '@/widgets/UserPostsModal/UserPostsModal'
import {Loader} from '@nazar-pryt/inctagram-ui-kit'
import {useRouter} from 'next/router'

export default function ShowPostPage() {
    const [open, setOpen] = useState(false)
    const router = useRouter()
    const postId = router.query.postId ? +router.query.postId : null

    const {data: post, isLoading} = useGetUserPostQuery(postId, {skip: !postId})

    if (isLoading) {
        return <Loader />
    }

    if (post) {
        return (
            <UserPostsModal onClose={setOpen} open>
                <ViewUserPost mode={'myProfile'} post={post} />
            </UserPostsModal>
        )
    }

    return <div>network error</div>
}
ShowPostPage.getLayout = getAuthorizedLayout
