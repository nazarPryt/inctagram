import {useState} from 'react'

import {AllPostsTypeItemsOwner} from '@/entities/Post/api/all-posts-api.type'
import {CopyLinkIcon} from '@/features/Post/CopyLink/CopyLinkIcon'
import {EmailReportIcon} from '@/features/Post/EmailReport/EmailReportIcon'
import {PATH} from '@/shared/constants/PATH'
import {useTranslation} from '@/shared/hooks/useTranslation'
import {Avatar, PersonRemoveIcon, Popover, PopoverItem} from '@nazar-pryt/inctagram-ui-kit'
import {formatDistance, subDays} from 'date-fns'
import Link from 'next/link'

import {PostHeaderWrapper} from './PostHeader.styled'
import {PopOverIcon} from './popOverIcon'

type PostHeaderType = {
    avatarOwner: string
    createdAt: string
    owner: AllPostsTypeItemsOwner
    ownerId: number
    userName: string
}

export const PostHeader = ({avatarOwner, createdAt, owner, ownerId, userName}: PostHeaderType) => {
    const {t} = useTranslation()
    const [isPopoverOpen, setIsPopoverOpen] = useState(false)
    const handleActionOne = () => {
        console.log('Action One')
        setIsPopoverOpen(false)
    }
    const handleActionTwo = () => {
        console.log('Action Two')
        setIsPopoverOpen(false)
    }
    const handleActionThree = () => {
        console.log('Action Three')
        setIsPopoverOpen(false)
    }
    const day = formatDistance(subDays(new Date(createdAt), 0), new Date(), {addSuffix: true})

    return (
        <PostHeaderWrapper>
            <div className={'PostHeader'}>
                <Avatar alt={`${userName} avatar}`} size={40} src={avatarOwner} userName={userName} />
                <Link className={'link'} href={`${PATH.USER_PROFILE}/${ownerId}`}>
                    {userName}
                </Link>
                <span className={'dot'} />
                <span className={'day'}>{day}</span>
            </div>
            <Popover icon={<PopOverIcon />} isOpen={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
                <PopoverItem icon={<EmailReportIcon />} name={t.home.options.report} onClick={handleActionOne} />
                <PopoverItem icon={<PersonRemoveIcon />} name={t.home.options.unfollow} onClick={handleActionTwo} />
                <PopoverItem icon={<CopyLinkIcon />} name={t.home.options.copyLink} onClick={handleActionThree} />
            </Popover>
        </PostHeaderWrapper>
    )
}
