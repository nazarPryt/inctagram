import {PostWrapper} from '@/entities/Post/Post.styled'
import {PostFeaturesWrapper} from '@/entities/Post/ui/PostFeatures/PostFeatures.styled'
import {PostHeaderWrapper} from '@/entities/Post/ui/PostHeader/PostHeader.styled'
import {AllPostsListStyled} from '@/widgets/AllPostsList/AllPostsList.styled'
import {Skeleton} from '@nazar-pryt/inctagram-ui-kit'

export const AllPostsListSkeleton = () => {
    return (
        <AllPostsListStyled>
            <HomePostSkeleton />
        </AllPostsListStyled>
    )
}
export const HomePostSkeleton = () => {
    return (
        <PostWrapper>
            <PostHeaderWrapper>
                <div className={'PostHeader'}>
                    <div>
                        <Skeleton circle height={40} width={40} />
                    </div>
                    <div>
                        <Skeleton height={30} width={200} />
                    </div>
                </div>
            </PostHeaderWrapper>
            <div>
                <Skeleton height={400} />
            </div>
            <PostFeaturesWrapper>
                <div className={'features'}>
                    <Skeleton circle height={30} width={30} />
                    <Skeleton circle height={30} width={30} />
                    <Skeleton circle height={30} width={30} />
                </div>
                <div>
                    <Skeleton circle height={30} width={30} />
                </div>
            </PostFeaturesWrapper>
            <div>
                <Skeleton height={60} />
                <Skeleton height={60} />
            </div>
        </PostWrapper>
    )
}
