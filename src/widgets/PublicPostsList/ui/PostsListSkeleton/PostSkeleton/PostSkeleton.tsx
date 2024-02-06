import { Skeleton } from '@nazar-pryt/inctagram-ui-kit'

import { PostSkeletonStyled } from './PostSkeleton.styled'

export const PostSkeleton = () => {
  return (
    <PostSkeletonStyled>
      <Skeleton height={230} />
      <div className={'infoUserBox'}>
        <Skeleton circle height={55} width={55} />
        <Skeleton height={30} width={84} />
        <Skeleton circle height={40} width={40} />
      </div>
      <Skeleton height={70} />
    </PostSkeletonStyled>
  )
}
