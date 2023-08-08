'use client'
import React from 'react'
import {GeneralInformationWrapper} from './styled'
import {GeneralInformationForm} from './GeneralInformationForm/GeneralInformationForm'
import {Avatar} from '../Avatar/Avatar'
import {useGetUserProfileQuery} from '../../redux/api/profileAPI'
import {Loader} from '../../shared/ui/Loader/Loader'

export const GeneralInformation = () => {
    const {data, isLoading} = useGetUserProfileQuery()

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
