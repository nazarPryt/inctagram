import {useFormatDistance} from '@/shared/hooks/useFormatDistance'
import {ReadMore} from '@nazar-pryt/inctagram-ui-kit'
import {formatDistance, subDays} from 'date-fns'

import {PostDescriptionStyled} from './PostDescription.styled'

type PostDescriptionType = {
    createdAt: string
    description: string
}
export const PostDescription = ({createdAt, description}: PostDescriptionType) => {
    const timeAgo = useFormatDistance(createdAt)

    return (
        <PostDescriptionStyled>
            <span className={'day'}>{timeAgo}</span>
            <p>
                <ReadMore maxLength={80} text={description} />
            </p>
        </PostDescriptionStyled>
    )
}
