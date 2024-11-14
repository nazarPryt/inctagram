import {SetStateAction} from 'react'

import {PATH} from '@/_app/AppSettings'
import {useGetPublicProfileQuery} from '@/entities/Profile/PublicProfile/api/publicProfile.api'
import {PublicProfileType} from '@/entities/Profile/PublicProfile/helpers/publicProfile.schema'
import {ArrowLeft, Avatar, IconButton, Skeleton} from '@nazar-pryt/inctagram-ui-kit'
import Link from 'next/link'

import {ChatUserInfoStyled} from './ChatUserInfo.styled'
import {ChatUserInfoSkeleton} from './ChatUserInfoSkeleton'

type Props = {
    dialoguePartnerId: number
    setShowChat?: (value: SetStateAction<boolean>) => void
}
export const ChatUserInfo = ({dialoguePartnerId, setShowChat}: Props) => {
    const {data, isLoading} = useGetPublicProfileQuery(dialoguePartnerId, {
        skip: !dialoguePartnerId,
    })

    if (isLoading) {
        return <ChatUserInfoSkeleton />
    }
    if (data) {
        const avatarUrl = data.avatars.length ? data.avatars[0].url : ''

        return (
            <ChatUserInfoStyled>
                <IconButton className={'backButton'} onClick={() => setShowChat && setShowChat(false)}>
                    <ArrowLeft />
                </IconButton>
                <Avatar size={48} src={avatarUrl} userName={data.userName} />
                <Link href={`${PATH.USER_PROFILE}/${dialoguePartnerId}`}>{data.userName}</Link>
            </ChatUserInfoStyled>
        )
    }

    return null
}
