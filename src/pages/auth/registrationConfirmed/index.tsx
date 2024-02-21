import {getLayoutWithHeader} from '@/_app/Layouts/unauthorized'
import {PATH} from '@/shared/constants/PATH'
import {useTranslation} from '@/shared/hooks/useTranslation'
import {ConfirmationPageWrapper} from '@/shared/styles/RegistrationConfirmPage'
import {AuthContainer, Button} from '@nazar-pryt/inctagram-ui-kit'
import Image from 'next/image'

import congratulationImg from '../../../../public/pictures/congratulation.png' //todo make alies import

export default function ConfirmedRegistrationPage() {
    const {t} = useTranslation()

    return (
        <AuthContainer>
            <ConfirmationPageWrapper>
                <h1>{t.auth.signUp.success.title}</h1>
                <p>{t.auth.signUp.success.description}</p>
                <Button asT={'a'} href={PATH.LOGIN} variant={'primary'}>
                    {t.auth.signUp.success.btn}
                </Button>
                <span>
                    <Image alt={'congratulation'} src={congratulationImg} />
                </span>
            </ConfirmationPageWrapper>
        </AuthContainer>
    )
}
ConfirmedRegistrationPage.getLayout = getLayoutWithHeader
