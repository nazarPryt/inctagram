import React from 'react'
import Link from 'next/link'
import {PATH} from 'shared/constants/PATH'
import {useTranslation} from 'shared/hooks/useTranslation'
import {Checkbox} from 'shared/ui/Checkbox/Checkbox'
import {RegistrationTermsWrapper} from 'features/Auth/Registration/ui/RegistrationTerms/RegistrationTerms.styled'

type PropsType = {
    isChecked: boolean
    handleCheckboxChange: () => void
}
export const RegistrationTerms = ({isChecked, handleCheckboxChange}: PropsType) => {
    const {t} = useTranslation()
    return (
        <RegistrationTermsWrapper>
            <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
            <p>
                {t.auth.signUp.userAgree}
                <Link href={PATH.TERMS_OF_SERVICE}>{t.auth.signUp.termsOfService}</Link> {t.auth.signUp.and}
                <Link href={PATH.PRIVACY_POLICY}>{t.auth.signUp.privacy}</Link>
            </p>
        </RegistrationTermsWrapper>
    )
}
