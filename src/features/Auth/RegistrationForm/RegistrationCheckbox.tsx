import React from 'react'
import Link from 'next/link'
import {PATH} from 'shared/constants/PATH'
import {useTranslation} from 'shared/hooks/useTranslation'
import styled from 'styled-components'
import {Checkbox} from 'shared/ui/Checkbox/Checkbox'

const CheckboxLabelWrapper = styled.span`
  #link {
    color: ${props => props.theme.palette.primary['300']}
`
type PropsType = {
    isChecked: boolean
    handleCheckboxChange: () => void
}
export const RegistrationCheckbox = ({isChecked, handleCheckboxChange}: PropsType) => {
    const {t} = useTranslation()
    return (
        <Checkbox
            checked={isChecked}
            label={
                <CheckboxLabelWrapper>
                    {t.auth.signUp.userAgree + ' '}
                    <Link id='link' href={PATH.TERMS_OF_SERVICE}>
                        {t.auth.signUp.termsOfService}
                    </Link>{' '}
                    {t.auth.signUp.and + ' '}
                    <Link id='link' href={PATH.PRIVACY_POLICY}>
                        {t.auth.signUp.privacy}
                    </Link>
                </CheckboxLabelWrapper>
            }
            onChange={handleCheckboxChange}
        />
    )
}
