import {Avatar} from '@/features/User/Avatar/ui/Avatar/Avatar'

import {GeneralInformationWrapper} from './GeneralInformation.styled'
import {useGetUserProfileQuery} from './api/userProfile/userProfile.api'
import {GeneralInformationForm} from './ui/GeneralInformationForm'
import {GeneralInformationSkeleton} from './ui/GeneralInformationSkeleton'

export const GeneralInformation = () => {
    const {data, isLoading} = useGetUserProfileQuery()

    if (isLoading) {
        return <GeneralInformationSkeleton />
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
