import {PostHeaderWrapper} from 'entities/Post/ui/PostHeader/PostHeader.styled'
import {AvatarIcon} from 'shared/components/AvatarIcon/AvatarIcon'
import CopyOutline from '../../../../common/assets/icons/copyOutline.png'
import RemovePerson from '../../../../common/assets/icons/personRemove.png'
import EmailOutline from '../../../../common/assets/icons/emailOutline.png'
import Link from 'next/link'
import {PATH} from 'shared/constants/PATH'
import {useState} from 'react'
import {Popover} from '../../../../shared/components/Popover/Popover'
import {IconButton} from '../../../../shared/components/IconButton/IconButton'
import Image from 'next/image'

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
            <Popover
                onActionHandler={handleActionOne}
                setIsPopoverOpen={setIsPopoverOpen}
                isPopoverOpen={isPopoverOpen}
            >
                <div id='iconWrapper'>
                    <IconButton onClick={handleActionOne}>
                        <Image style={{width: '24px', height: '24px'}} src={EmailOutline} alt={'email icon'} />
                    </IconButton>
                    <span>Report</span>
                </div>
                <div id='iconWrapper'>
                    <IconButton onClick={handleActionTwo}>
                        <Image style={{width: '24px', height: '24px'}} src={RemovePerson} alt={'email icon'} />
                    </IconButton>
                    <span>Unfollow</span>
                </div>
                <div id='iconWrapper'>
                    <IconButton onClick={handleActionThree}>
                        <Image style={{width: '24px', height: '24px'}} src={CopyOutline} alt={'email icon'} />
                    </IconButton>
                    <span>Copy</span>
                </div>
            </Popover>
        </PostHeaderWrapper>
    )
}
