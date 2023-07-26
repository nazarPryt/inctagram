import {PostHeaderWrapper} from 'entities/Post/ui/PostHeader/PostHeader.styled'
import {AvatarIcon} from 'shared/components/AvatarIcon/AvatarIcon'
import Link from 'next/link'
import {PATH} from 'shared/constants/PATH'
import {useState} from 'react'
import {Popover} from '../../../../shared/components/Popover/Popover'
import {EmailReport} from '../../../../features/EmailReport/EmailReport'
import {UnfollowUser} from '../../../../features/UnfollowUser/UnfollowUser'
import {CopyLink} from '../../../../features/CopyLink/CopyLink'

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
            <div>
                <AvatarIcon img={img} userID={userID} />
                <Link className={'link'} href={`${BASE_URL}${PATH.USER_PROFILE}/${userID}`}>
                    URLProfile
                </Link>
                <span>22 Minutes ago</span>
            </div>
            <Popover setIsPopoverOpen={setIsPopoverOpen} isPopoverOpen={isPopoverOpen}>
                <div>
                    <EmailReport changeHandler={handleActionOne} />
                    <span>Report</span>
                </div>
                <div>
                    <UnfollowUser changeHandler={handleActionTwo} />
                    <span>Unfollow</span>
                </div>
                <div>
                    <CopyLink changeHandler={handleActionThree} />
                    <span>Copy</span>
                </div>
            </Popover>
        </PostHeaderWrapper>
    )
}
