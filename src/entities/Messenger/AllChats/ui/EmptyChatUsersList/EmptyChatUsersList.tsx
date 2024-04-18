import {useTranslation} from '@/shared/hooks/useTranslation'

import {EmptyChatUsersListStyled} from './EmptyChatUsersList.styled'

export const EmptyChatUsersList = () => {
    const {t} = useTranslation()

    return (
        <EmptyChatUsersListStyled>
            <h3>{t.messenger.empty.title}</h3>
            <p>{t.messenger.empty.p}</p>
        </EmptyChatUsersListStyled>
    )
}
