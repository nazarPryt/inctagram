import {useLikePostMutation} from '@/features/Post/Likes/LikePost/api/likePost.api'
import {IconButton, LikedIcon, NotLikedIcon} from '@nazar-pryt/inctagram-ui-kit'

export const LikePost = ({isLiked, postId}: {isLiked: boolean; postId: number}) => {
    const [like] = useLikePostMutation()
    const handleLikePost = () => {
        like({likeStatus: isLiked ? 'DISLIKE' : 'LIKE', postId})
    }

    return <IconButton onClick={handleLikePost}>{isLiked ? <LikedIcon /> : <NotLikedIcon />}</IconButton>
}
