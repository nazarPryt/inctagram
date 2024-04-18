import {useTranslation} from '@/shared/hooks/useTranslation'

import {EmptySearchUserListStyled} from './EmptySearchUserList.styled'

export const EmptySearchUserList = () => {
    const {t} = useTranslation()

    return (
        <EmptySearchUserListStyled>
            <h3>{t.search.empty.title}</h3>
            <p>{t.search.empty.p}</p>
        </EmptySearchUserListStyled>
    )
}
