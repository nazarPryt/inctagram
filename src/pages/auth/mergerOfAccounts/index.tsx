import {getLayoutWithHeader} from '@/_app/Layouts/unauthorized/Unauthorized'
import congratulationImg from '@/shared/assets/pictures/congratulation.png'
import {useTranslation} from '@/shared/hooks/useTranslation'
import {MergeAccountsPageWrapper} from '@/shared/styles/MergeAccountsPage'
import {AuthContainer, Button} from '@nazar-pryt/inctagram-ui-kit'
import Image from 'next/image'

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
