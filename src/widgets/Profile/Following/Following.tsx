import {useGetFollowing} from '@/entities/Profile/Following/hook/useGetFollowing'
import {FollowingList} from '@/widgets/Profile/Following/ui/FollowingList'
import {Modal} from '@nazar-pryt/inctagram-ui-kit'

type PropsType = {
    handleFollowingModalClose: () => void
    isFollowingModalOpen: boolean
    userName: string
}
export const Following = ({handleFollowingModalClose, isFollowingModalOpen, userName}: PropsType) => {
    const {following, isLoading, totalFollowing} = useGetFollowing({isFollowingModalOpen, userName})

    return (
        <Modal
            onClose={handleFollowingModalClose}
            open={isFollowingModalOpen}
            size={'md'}
            title={`${totalFollowing} Following`}
        >
            <FollowingList following={following} isLoading={isLoading} />
        </Modal>
    )
}
