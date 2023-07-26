'use client'
import React from 'react'
import {GeneralInformationWrapper} from 'common/components/GeneralInformation/styled'
import {GeneralInformationForm} from 'common/components/GeneralInformation/GeneralInformationForm/GeneralInformationForm'
import {Avatar} from 'common/components/Avatar/Avatar'
import {useGetUserProfileQuery} from 'redux/api/profileAPI'
import {Loader} from 'shared/components/Loader/Loader'

export const GeneralInformation = ({userId}: {userId: number | null}) => {
    const {data, isLoading} = useGetUserProfileQuery(userId as number)

    if (isLoading) {
        return <Loader />
    }

    if (data) {
        return (
            <GeneralInformationWrapper>
                <Avatar avatar={data.avatars[0]?.url} />
                <GeneralInformationForm data={data} />
            </GeneralInformationWrapper>
        )
    }
    return <div>Network error</div>
}
