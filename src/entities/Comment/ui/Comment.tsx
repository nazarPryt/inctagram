import {PATH} from '@/_app/AppSettings/PATH'
import {CommentWrapper} from '@/entities/Comment/ui/Comment.styled'
import {LikeComment} from '@/features/Post/Likes/LikeComment/LikeComment'
import {useMode} from '@/shared/hooks/useMode'
import {Avatar, ReadMore} from '@nazar-pryt/inctagram-ui-kit'
import Link from 'next/link'

type CommentType = {
    comment: string
    img: string
    isLiked: boolean
    userID: number
}

export const Comment = ({comment, img, isLiked, userID}: CommentType) => {
    const {mode} = useMode(userID)
    const userLink = mode === 'publick' ? `/${PATH.PUBLIC.PROFILE}/${userID}` : `${PATH.USER_PROFILE}/${userID}`

    return (
        <CommentWrapper>
            <Avatar src={img} />
            <div className={'content'}>
                <p>
                    <Link href={userLink}>URLProfile</Link>
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
