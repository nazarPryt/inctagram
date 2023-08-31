import Link from 'next/link'

import { CommentWrapper } from 'entities/Comment/ui/Comment.styled'
import { LikeComment } from 'features/Post/Likes/LikeComment/LikeComment'
import { PATH } from 'shared/constants/PATH'
import { AvatarIcon } from 'shared/ui/AvatarIcon/AvatarIcon'

type CommentType = {
  comment: string
  userID: number
  img: string
  isLiked: boolean
}

export const Comment = ({ comment, userID, img, isLiked }: CommentType): JSX.Element => {
  return (
    <CommentWrapper>
      <AvatarIcon img={img} userID={userID} />
      <div className="content">
        <Link href={`${PATH.USER_PROFILE}/${userID}`}>URLProfile</Link>
        <p>{comment}</p>
        <div className="footer">
          <div>2 Hours ago</div>
          <div>Like: 1</div>
          <div>Answer</div>
        </div>
      </div>
      <LikeComment className="likeButton" commentId={33} isLiked={isLiked} />
    </CommentWrapper>
  )
}
