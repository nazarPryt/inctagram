import {Avatar} from '@/features/User/Avatar/ui/Avatar/Avatar'
import {useGetUserProfileQuery} from '@/redux/api/profileAPI'
import {Loader} from '@nazar-pryt/inctagram-ui-kit'

import {GeneralInformationWrapper} from './GeneralInformation.styled'
import {GeneralInformationForm} from './ui/GeneralInformationForm'

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
