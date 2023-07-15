'use client'
import React, {useEffect} from 'react'
import {GeneralInformationWrapper} from 'common/components/GeneralInformation/styled'
import {GeneralInformationForm} from 'common/components/GeneralInformation/GeneralInformationForm/GeneralInformationForm'
import {Avatar} from 'common/components/Avatar/Avatar'
import {useGetUserProfileMutation} from '../../../redux/api/profileAPI'
import cookie from 'react-cookies'
import {Loader} from '../../../shared/components/Loader/Loader'

export const GeneralInformation = () => {
    const accessToken = cookie.load('token')

    const [getUserProfile, {isLoading, data}] = useGetUserProfileMutation()

    const avatar = data?.avatars[0].url

    useEffect(() => {
        getUserProfile(accessToken)
    }, [accessToken, getUserProfile])

    if (isLoading) {
        return <Loader />
    }

    if (data) {
        return (
            <GeneralInformationWrapper>
                <Avatar avatar={avatar} />
                <GeneralInformationForm data={data} />
            </GeneralInformationWrapper>
        )
    }
    return <div>Network error</div>
}
