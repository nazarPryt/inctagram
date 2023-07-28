'use client'
import React, {useState, useEffect} from 'react'
import {getAuthorizedLayout} from '_app/Layouts/authorized/AuthorizedLayout'
import {useRouter} from 'next/router'
import {UserPostsModal} from 'widgets/UserPostsModal/UserPostsModal'
import {UserPostModalContent} from 'entities/UserPostModalContent/UserPostModalContent'
import {useGetUserPostQuery} from 'redux/api/postsAPI'
import {Loader} from 'shared/ui/Loader/Loader'

export default function ShowPostPage() {
    const [open, setOpen] = useState(false)
    const router = useRouter()
    const postId = router.query.postId
    const {data, isLoading} = useGetUserPostQuery(503)

    useEffect(() => {
        setOpen(true)
    }, [])

    if (isLoading) {
        return <Loader />
    }

    return (
        <>
            <UserPostsModal open={open} onClose={setOpen}>
                <UserPostModalContent />
            </UserPostsModal>
        </>
    )
}
ShowPostPage.getLayout = getAuthorizedLayout
