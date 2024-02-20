import {PATH} from '@/shared/constants/PATH'
import {Avatar, ReadMore} from '@nazar-pryt/inctagram-ui-kit'
import Link from 'next/link'

import {PostDescriptionStyled} from './PostDescription.styled'

type PropsType = {
    avatarOwner: string
    description: string
    ownerId: number
    userName: string
}
export const PostDescription = ({avatarOwner, description, ownerId, userName}: PropsType) => {
    if (description) {
        return (
            <PostDescriptionStyled>
                <Avatar src={avatarOwner} />
                <p className={'content'}>
                    <Link href={`/${PATH.PUBLIC.PROFILE}/${ownerId}`}>{userName}</Link>
                    <ReadMore maxLength={90} text={description} />
                </p>
            </PostDescriptionStyled>
        )
    }

    return null
}
