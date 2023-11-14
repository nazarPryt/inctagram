import React from 'react'
import {getAuthorizedLayout} from '_app/Layouts/authorized/AuthorizedLayout'
import {GetServerSideProps, GetServerSidePropsContext} from 'next'
import nookies from 'nookies'
import axios from 'axios'
import {serverAuthAPI} from 'shared/server-api/server-api'

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
    nookies.set(ctx, 'refreshToken', 'new', {path: '/', httpOnly: true, secure: true})

    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
    const cookies = nookies.get(ctx)
    const accessToken = cookies.accessToken

    if (accessToken)
        try {
            const res = await serverAuthAPI.authMe(accessToken)

            return {props: {me: res}}
        } catch (e) {
            return {props: {me: JSON.stringify(e)}}
        }

    return {props: {me: 'return'}}
}

export default function RefreshPage(props: any) {
    return (
        <>
            RefreshPage page <p>{JSON.stringify(props)}</p>
        </>
    )
}
RefreshPage.getLayout = getAuthorizedLayout
