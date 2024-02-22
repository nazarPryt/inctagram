import {CommentWrapper} from '@/entities/Comment/ui/Comment.styled'
import {LikeComment} from '@/features/Post/Likes/LikeComment/LikeComment'
import {PATH} from '@/shared/constants/PATH'
import {Avatar, ReadMore} from '@nazar-pryt/inctagram-ui-kit'
import Link from 'next/link'

type CommentType = {
    comment: string
    img: string
    isLiked: boolean
    userID: number
}

export const Comment = ({comment, img, isLiked, userID}: CommentType) => {
    return (
        <CommentWrapper>
            <Avatar src={img} />
            <div className={'content'}>
                <p>
                    <Link href={`/${PATH.PUBLIC.PROFILE}/${userID}`}>URLProfile</Link>
                    <ReadMore maxLength={90} text={comment} />
                </p>

                <div className={'footer'}>
                    <div>2 Hours ago</div>
                    <div>Like: 1</div>
                    <div>Answer</div>
                </div>
            </div>
            <LikeComment className={'likeButton'} commentId={33} isLiked={isLiked} />
        </CommentWrapper>
    )
}
