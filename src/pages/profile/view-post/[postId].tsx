import {useState} from 'react'
import {getAuthorizedLayout} from '_app/Layouts/authorized/AuthorizedLayout'
import {useRouter} from 'next/router'
import {UserPostsModal} from 'widgets/UserPostsModal/UserPostsModal'
import {Loader} from 'shared/ui/Loader/Loader'
import {ViewUserPost} from 'entities/ViewUserPost/ViewUserPost'
import {useGetUserPostQuery} from 'entities/ViewUserPost/api/get-post-api'

export default function ShowPostPage() {
    const [open, setOpen] = useState(false)
    const router = useRouter()
    const postId = router.query.postId
    const {data, isLoading} = useGetUserPostQuery(postId as string, {skip: !postId})

    if (isLoading) {
        return <Loader />
    }

    if (data) {
        return (
            <UserPostsModal open={true} onClose={setOpen}>
                <ViewUserPost data={data} />
            </UserPostsModal>
        )
    }
    return <div>network error</div>
}
ShowPostPage.getLayout = getAuthorizedLayout
