import {PostHeaderWrapper} from 'entities/Post/ui/PostHeader/PostHeader.styled'
import {AvatarIcon} from '../../../../shared/ui/AvatarIcon/AvatarIcon'
import Link from 'next/link'
import {PATH} from 'shared/constants/PATH'
import {useState} from 'react'
import {Popover} from '../../../../shared/ui/Popover/Popover'
import {PopoverItem} from '../../../../shared/ui/Popover/PopoverItem/PopoverItem'
import {EmailReportIcon} from '../../../../features/EmailReport/EmailReportIcon'
import {UnfollowUserIcon} from '../../../../features/UnfollowUser/UnfollowUserIcon'
import {CopyLinkIcon} from '../../../../features/CopyLink/CopyLinkIcon'

type PostHeaderType = {
    img: string
    userID: number
}

export const PostHeader = ({img, userID}: PostHeaderType) => {
    const BASE_URL = process.env.NEXT_PUBLIC_NEXTAUTH_URL as string

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
                <Link className={'link'} href={`${BASE_URL}${PATH.USER_PROFILE}/${userID}`}>
                    URLProfile
                </Link>
                <span>22 Minutes ago</span>
            </div>
            <Popover setIsPopoverOpen={setIsPopoverOpen} isPopoverOpen={isPopoverOpen}>
                <PopoverItem onClick={handleActionOne} name={'Report'} icon={<EmailReportIcon />} />
                <PopoverItem onClick={handleActionTwo} name={'Unfollow'} icon={<UnfollowUserIcon />} />
                <PopoverItem onClick={handleActionThree} name={'Copy'} icon={<CopyLinkIcon />} />
            </Popover>
        </PostHeaderWrapper>
    )
}
