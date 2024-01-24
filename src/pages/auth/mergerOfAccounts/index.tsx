import {getLayoutWithHeader} from '_app/Layouts/unauthorized/Unauthorized'
import Image from 'next/image'
import congratulationImg from 'shared/assets/pictures/congratulation.png'
import {useTranslation} from 'shared/hooks/useTranslation'
import {MergeAccountsPageWrapper} from 'shared/styles/MergeAccountsPage'
import {AuthContainer} from 'shared/ui/AuthContainer/AuthContainer'
import {Button} from 'shared/ui/Button/Button'

export default function MergeAccountsPage() {
    const {t} = useTranslation()

    return (
        <AuthContainer>
            <MergeAccountsPageWrapper>
                <h1>{t.auth.signUp.merge.title}</h1>
                <p>{t.auth.signUp.merge.description}</p>
                <Button variant={'outlined'}>{t.auth.signUp.merge.btnFirst}</Button>
                <Button variant={'outlined'}>{t.auth.signUp.merge.btnSec}</Button>
                <span>
                    <Image alt={'re'} src={congratulationImg} />
                </span>
            </MergeAccountsPageWrapper>
        </AuthContainer>
    )
}
MergeAccountsPage.getLayout = getLayoutWithHeader
