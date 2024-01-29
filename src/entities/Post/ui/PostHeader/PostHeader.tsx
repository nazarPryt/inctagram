import {useState} from 'react'

import {CopyLinkIcon} from '@/features/Post/CopyLink/CopyLinkIcon'
import {EmailReportIcon} from '@/features/Post/EmailReport/EmailReportIcon'
import {PATH} from '@/shared/constants/PATH'
import {useTranslation} from '@/shared/hooks/useTranslation'
import {AvatarIcon} from '@/shared/ui/AvatarIcon/AvatarIcon'
import {PersonRemoveIcon, Popover, PopoverItem} from '@nazar-pryt/inctagram-ui-kit'
import Link from 'next/link'

import {PostHeaderWrapper} from './PostHeader.styled'
import {PopOverIcon} from './popOverIcon'

type PostHeaderType = {
    img: string
    userID: number
}

export const PostHeader = ({img, userID}: PostHeaderType) => {
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

    return (
        <PostHeaderWrapper>
            <div className={'PostHeader'}>
                <AvatarIcon img={img} userID={userID} />
                <Link className={'link'} href={`${PATH.USER_PROFILE}/${userID}`}>
                    URLProfile
                </Link>
                <span>22 {t.home.minutesAgo}</span>
            </div>
            <Popover icon={<PopOverIcon />} isOpen={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
                <PopoverItem icon={<EmailReportIcon />} name={t.home.options.report} onClick={handleActionOne} />
                <PopoverItem icon={<PersonRemoveIcon />} name={t.home.options.unfollow} onClick={handleActionTwo} />
                <PopoverItem icon={<CopyLinkIcon />} name={t.home.options.copyLink} onClick={handleActionThree} />
            </Popover>
        </PostHeaderWrapper>
    )
}
