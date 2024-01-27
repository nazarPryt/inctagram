import {Avatar} from '@/features/User/Avatar/ui/Avatar/Avatar'
import {GeneralInformationWrapper} from '@/features/User/GeneralInformation/ui/GeneralInformation/styled'
import {GeneralInformationForm} from '@/features/User/GeneralInformation/ui/GeneralInformationForm/GeneralInformationForm'
import {useGetUserProfileQuery} from '@/redux/api/profileAPI'
import {Loader} from '@/shared/ui/Loader/Loader'

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
