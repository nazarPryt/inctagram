import {useFormatDistance} from '@/shared/hooks/useFormatDistance'
import {ReadMore} from '@nazar-pryt/inctagram-ui-kit'

import {ViewUserPostDescriptionWrapper} from './ViewUserPostDescription.styled'

type PropsType = {
    createdAt: string
    description: string
}
export const ViewUserPostDescription = ({createdAt, description}: PropsType) => {
    const timeAgo = useFormatDistance(createdAt)

    return (
        <ViewUserPostDescriptionWrapper>
            <ReadMore maxLength={100} text={description} />
            <span className={'day'}>{timeAgo}</span>
        </ViewUserPostDescriptionWrapper>
    )
}
