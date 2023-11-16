import React from 'react'
import {getAuthorizedLayout} from '_app/Layouts/authorized/AuthorizedLayout'
import styled from 'styled-components'
import cookie from 'react-cookies'
import {GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType} from 'next'
import nookies from 'nookies'
import axios from 'axios'

export const getServerSideProps: GetServerSideProps<{accessToken: string; data: any}> = async (
    ctx: GetServerSidePropsContext
) => {
    const cookies = nookies.get(ctx)
    const accessToken = cookies.accessToken
    nookies.set(ctx, 'myCookiy', 'sdfsdfsdf')
    const data = {}

    return {
        props: {
            accessToken: accessToken ? accessToken : 'not-found',
            data,
        },
    }
}

export default function SearchPage(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const setCookieFromBrowserHandler = () => {
        cookie.save('nazar-browser', 'data-set-from-browser', {path: '/'})
    }

    const triggerHandler = async () => {
        try {
            const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

            const res = await axios.post(`${BASE_URL}auth/update-tokens`, {withCredentials: true})
            console.log(res)
            return
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <SearchPageWrapper>
            <p>accessToken: </p>
            <p>{props.accessToken}</p>
            <br />
            <p>data: </p>
            <p>{JSON.stringify(props.data)}</p>
            <br />
            <button onClick={setCookieFromBrowserHandler}>
                set cookie from browser: (nazar-browser): (data set from browser)
            </button>
            <br />
            <button onClick={triggerHandler}>trigger refresh endpoint</button>
        </SearchPageWrapper>
    )
}
SearchPage.getLayout = getAuthorizedLayout

const SearchPageWrapper = styled.div``
