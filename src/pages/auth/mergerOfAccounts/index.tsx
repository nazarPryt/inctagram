'use client'
import React from 'react'
import {useTranslation} from 'shared/hooks/useTranslation'
import {AuthContainer} from 'shared/ui/AuthContainer/AuthContainer'
import {Button} from 'shared/ui/Button/Button'
import re from '../../../shared/assets/pictures/congratulation.png'
import Image from 'next/image'
import {getLayoutWithHeader} from '_app/Layouts/unauthorized/Unauthorized'
import {MergeAccountsPageWrapper} from 'shared/styles/MergeAccountsPage'

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
                    <Image src={re} alt={'re'} />
                </span>
            </MergeAccountsPageWrapper>
        </AuthContainer>
    )
}
MergeAccountsPage.getLayout = getLayoutWithHeader
