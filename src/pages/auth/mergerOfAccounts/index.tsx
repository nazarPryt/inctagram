'use client'
import React from 'react'
import re from 'common/assets/pictures/congratulation.png'
import Image from 'next/image'
import {getLayoutWithHeader} from '_app/Layouts/unauthorized/Unauthorized'
import {MergeAccountsPageWrapper} from 'shared/styles/MergeAccountsPage'
import {AuthContainer} from 'shared/components/AuthContainer/AuthContainer'
import {Button} from 'shared/components/Button/Button'

export default function MergeAccountsPage() {
    return (
        <AuthContainer>
            <MergeAccountsPageWrapper>
                <h1>Merger of Accounts</h1>
                <p>The user with email Epam@epam.com is already in the system. Could we merge this accounts?</p>
                <Button variant={'outlined'}>Yes, merge</Button>
                <Button variant={'outlined'}>No</Button>
                <span>
                    <Image src={re} alt={'re'} />
                </span>
            </MergeAccountsPageWrapper>
        </AuthContainer>
    )
}
MergeAccountsPage.getLayout = getLayoutWithHeader
