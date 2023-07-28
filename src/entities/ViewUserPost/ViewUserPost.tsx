import React from 'react'
import Image from 'next/image'
import {ViewUserPostWrapper} from 'entities/ViewUserPost/ViewUserPost.styled'
import {ViewUserPostHeader} from 'entities/ViewUserPost/ui/ViewUserPostHeader/ViewUserPostHeader'
import {ViewUserPostComments} from 'entities/ViewUserPost/ui/ViewUserPostComments/ViewUserPostComments'

export const ViewUserPost = () => {
    return (
        <ViewUserPostWrapper>
            <div className={'pictureWrapper'}>
                <Image src={'https://loremflickr.com/500/500'} alt={'user post picture'} width={500} height={500} />
            </div>
            <div className={'right'}>
                <ViewUserPostHeader userID={248} />
                <ViewUserPostComments />
            </div>
        </ViewUserPostWrapper>
    )
}
