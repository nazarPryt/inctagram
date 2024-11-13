import {PATH} from '@/_app/AppSettings'
import {useTranslation} from '@/shared/hooks/useTranslation'
import {Button} from '@nazar-pryt/inctagram-ui-kit'
import Link from 'next/link'

export const AuthButtons = () => {
    const {t} = useTranslation()

    return (
        <>
            <Button asT={Link} href={PATH.LOGIN} variant={'outlined'}>
                {t.auth.signIn.button}
            </Button>
            <Button asT={Link} href={PATH.REGISTRATION}>
                {t.auth.signUp.btn}
            </Button>
        </>
    )
}
