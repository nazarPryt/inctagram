import {useState} from 'react'

import {appSettings} from '@/_app/AppSettings'
import {PATH} from '@/_app/AppSettings/PATH'
import {AllPostsItemOwnerType} from '@/entities/Post/helpers/AllPosts.schema'
import {CopyLinkIcon} from '@/features/Post/CopyLink/CopyLinkIcon'
import {useDeleteUserPost} from '@/features/Post/DeletePost/hook/useDeleteUserPost'
import {DeletePostModal} from '@/features/Post/DeletePost/ui/DeletePostModal'
import {DeletePostIcon} from '@/features/Post/DeletePost/ui/icon/DeletePostIcon'
import {useReportPost} from '@/features/Post/ReportPost/hook/useReportPost'
import {useFormatDistance} from '@/shared/hooks/useFormatDistance'
import {ModeVariant, useMode} from '@/shared/hooks/useMode'
import {useTranslation} from '@/shared/hooks/useTranslation'
import {writeTextInClipboardAsync} from '@/shared/utils/WriteReadClipboard'
import {
    Avatar,
    DotsHorizontal,
    EmailOutline,
    PersonRemoveIcon,
    Popover,
    PopoverItem,
} from '@nazar-pryt/inctagram-ui-kit'
import Link from 'next/link'

import {PostHeaderWrapper} from './PostHeader.styled'

type PostHeaderType = {
    avatarOwner?: string
    createdAt: string
    owner: AllPostsItemOwnerType
    ownerId: number
    postId: number
    userName: string
}

export const PostHeader = ({avatarOwner, createdAt, owner, ownerId, postId, userName}: PostHeaderType) => {
    const [isPopoverOpen, setPopover] = useState(false)
    const timeAgo = useFormatDistance(createdAt)

    const {handleDeletePost, handleModalClose, handleModalOpen, modalIsOpen} = useDeleteUserPost({postId})
    const {handleOpenReportPostDialog, renderReportPostDialog} = useReportPost({setPopover, userName})

    const {mode} = useMode(ownerId)
    const {t} = useTranslation()

    const handleActionTwo = () => {
        console.log('Action Two')
        setPopover(false)
    }
    const handleCopyLink = () => {
        void writeTextInClipboardAsync(`${appSettings.env.DOMAIN_URL}${PATH.USER_PROFILE}/${ownerId}/${postId}`)
        setPopover(false)
    }
    const renderPopoverItems: ModeVariant = {
        fellow: (
            <>
                <PopoverItem
                    icon={<EmailOutline />}
                    name={t.home.options.report}
                    onClick={handleOpenReportPostDialog}
                />
                <PopoverItem icon={<PersonRemoveIcon />} name={t.home.options.unfollow} onClick={handleActionTwo} />
                <PopoverItem icon={<CopyLinkIcon />} name={t.home.options.copyLink} onClick={handleCopyLink} />
            </>
        ),
        myProfile: (
            <>
                <PopoverItem icon={<DeletePostIcon />} name={'Delete Post'} onClick={handleModalOpen} />
                <PopoverItem icon={<CopyLinkIcon />} name={t.home.options.copyLink} onClick={handleCopyLink} />
            </>
        ),
        publick: <></>,
    }

    return (
        <>
            <PostHeaderWrapper>
                <div className={'PostHeader'}>
                    <Avatar alt={`${userName} avatar}`} size={40} src={avatarOwner ?? ''} userName={userName} />
                    <Link className={'link'} href={`${PATH.USER_PROFILE}/${ownerId}`}>
                        {userName}
                    </Link>
                    <span className={'dot'} />
                    <span className={'day'}>{timeAgo}</span>
                </div>
                <Popover icon={<DotsHorizontal />} isOpen={isPopoverOpen} onOpenChange={setPopover}>
                    {renderPopoverItems[mode]}
                </Popover>
            </PostHeaderWrapper>
            {renderReportPostDialog()}
            <DeletePostModal
                handleDeletePost={handleDeletePost}
                handleModalClose={handleModalClose}
                isOpen={modalIsOpen}
            />
        </>
    )
}
