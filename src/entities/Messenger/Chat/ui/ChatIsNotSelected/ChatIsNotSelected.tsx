import {useTranslation} from '@/shared/hooks/useTranslation'
import {ArrowLeft} from '@nazar-pryt/inctagram-ui-kit'

import {ChatIsNotSelectedStyled} from './ChatIsNotSelected.styled'

export const ChatIsNotSelected = () => {
    const {t} = useTranslation()

    return (
        <ChatIsNotSelectedStyled>
            <h3>{t.messenger.empty.chat}</h3>
            <span>
                <ArrowLeft />
            </span>
        </ChatIsNotSelectedStyled>
    )
}
