'use client'
import React from 'react'
import {GeneralInformationWrapper} from 'common/components/GeneralInformation/styled'
import {GeneralInformationForm} from 'common/components/GeneralInformation/GeneralInformationForm/GeneralInformationForm'
import {Avatar} from 'common/components/Avatar/Avatar'
import {useGetUserProfileQuery} from 'redux/api/profileAPI'
import {Loader} from 'shared/components/Loader/Loader'
import {useSession} from 'next-auth/react'

export const GeneralInformation = () => {
    const {data: user} = useSession()

    const {data, isLoading} = useGetUserProfileQuery(user!.user.userId)

    if (isLoading) {
        return <Loader />
    }

    if (data) {
        return (
            <GeneralInformationWrapper>
                <Avatar avatar={data?.avatars[0].url} />
                <GeneralInformationForm data={data} />
            </GeneralInformationWrapper>
        )
    }
    return <div>Network error</div>
}
