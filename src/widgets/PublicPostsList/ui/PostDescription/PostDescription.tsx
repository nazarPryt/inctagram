import {ReadMore} from '@nazar-pryt/inctagram-ui-kit'
import {formatDistance, subDays} from 'date-fns'

import {PostDescriptionStyled} from './PostDescription.styled'

type PostDescriptionType = {
    createdAt: string
    description: string
}
export const PostDescription = ({createdAt, description}: PostDescriptionType) => {
    const day = formatDistance(subDays(new Date(createdAt), 0), new Date(), {
        addSuffix: true,
    })

    return (
        <PostDescriptionStyled>
            <span className={'day'}>{day}</span>
            <p>
                <ReadMore maxLength={80} text={description} />
            </p>
        </PostDescriptionStyled>
    )
}
