import {useGetFollowers} from '@/entities/Profile/Followers/hook/useGetFollowers'
import {FollowersList} from '@/widgets/Profile/Followers/ui/FollowersList'
import {Modal} from '@nazar-pryt/inctagram-ui-kit'

type PropsType = {
    handleFollowersModalClose: () => void
    isFollowersModalOpen: boolean
    userName: string
}
export const Followers = ({handleFollowersModalClose, isFollowersModalOpen, userName}: PropsType) => {
    const {followers, isLoading, totalCount} = useGetFollowers({isFollowersModalOpen, userName})

    return (
        <Modal
            onClose={handleFollowersModalClose}
            open={isFollowersModalOpen}
            size={'md'}
            title={`${totalCount} Followers`}
        >
            <FollowersList followers={followers} isLoading={isLoading} />
        </Modal>
    )
}
