import React from 'react'
import Link from 'next/link'
import {PATH} from 'shared/constants/PATH'
import {useTranslation} from 'shared/hooks/useTranslation'
import styled from 'styled-components'

const CheckboxLabelWrapper = styled.span`
  #link {
    color: ${props => props.theme.palette.primary['300']}
`
export const RegistrationCheckboxLabel = () => {
    const {t} = useTranslation()
    return (
        <CheckboxLabelWrapper>
            I agree to the{' '}
            <Link id='link' href={PATH.TERMS_OF_SERVICE}>
                {t.auth.signUp.termsOfService}
            </Link>{' '}
            and{' '}
            <Link id='link' href={PATH.PRIVACY_POLICY}>
                {t.auth.signUp.privacy}
            </Link>
        </CheckboxLabelWrapper>
    )
}
