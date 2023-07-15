import React from 'react'
import {PostCommentsWrapper} from 'entities/Post/ui/PostComments/PostComments.styled'
import Link from 'next/link'
import {Textarea} from 'shared/components/Textarea/Textarea'
import {Button} from 'shared/components/Button/Button'

export const PostComments = () => {
    return (
        <PostCommentsWrapper>
            <Link href={'/'}>View All Comments (114)</Link>
            <div className={'textAreaWrapper'}>
                <Textarea placeholder={'Add a Comment...'} />
                <Button variant={'outlined'}>Publish</Button>
            </div>
        </PostCommentsWrapper>
    )
}
