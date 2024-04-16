import {useTranslation} from '@/shared/hooks/useTranslation'
import {ArrowLeft} from '@nazar-pryt/inctagram-ui-kit'

import {EmptyChatMessagesListStyled} from './EmptyChatMessagesList.styled'

export const EmptyChatMessagesList = () => {
    const {t} = useTranslation()

    return (
        <EmptyChatMessagesListStyled>
            <h3>{t.messenger.empty.chat}</h3>
            <span>
                <ArrowLeft />
            </span>
        </EmptyChatMessagesListStyled>
    )
}
