import {useTranslation} from '@/shared/hooks/useTranslation'
import {ArrowDown} from '@nazar-pryt/inctagram-ui-kit'

import {EmptyChatMessagesListStyled} from './EmptyChatMessagesList.styled'

export const EmptyChatMessagesList = () => {
    const {t} = useTranslation()

    return (
        <EmptyChatMessagesListStyled>
            <h3>{t.messenger.empty.noMessages}</h3>
            <span>
                <ArrowDown />
            </span>
        </EmptyChatMessagesListStyled>
    )
}
