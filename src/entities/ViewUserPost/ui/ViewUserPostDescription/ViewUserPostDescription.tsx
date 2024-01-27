import {ReadMore} from '@nazar-pryt/inctagram-ui-kit'
import {formatDistance, subDays} from 'date-fns'

import {ViewUserPostDescriptionWrapper} from './ViewUserPostDescription.styled'

type PropsType = {
    createdAt: string
    description: string
}
export const ViewUserPostDescription = ({createdAt, description}: PropsType) => {
    const day = formatDistance(subDays(new Date(createdAt), 1), new Date(), {addSuffix: true})

    return (
        <ViewUserPostDescriptionWrapper>
            <ReadMore maxLength={100} text={description} />
            <span className={'day'}>{day}</span>
        </ViewUserPostDescriptionWrapper>
    )
}
