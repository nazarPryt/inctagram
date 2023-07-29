import React, {Dispatch, SetStateAction, useState} from 'react'
import {ViewUserPostHeaderWrapper} from 'entities/ViewUserPost/ui/ViewUserPostHeader/ViewUserPostHeader.styled'
import {AvatarIcon} from 'shared/ui/AvatarIcon/AvatarIcon'
import Link from 'next/link'
import {PATH} from 'shared/constants/PATH'
import {Popover} from 'shared/ui/Popover/Popover'
import {PopoverItem} from 'shared/ui/Popover/PopoverItem/PopoverItem'
import {DeletePostIcon} from 'features/DeletePost/DeletePostIcon'
import {EditPostIcon} from 'features/EditPost/EditPostIcon'

type PropsType = {
    userID: number
    postId: number
    edit: boolean
    setEdit: Dispatch<SetStateAction<boolean>>
}
export const ViewUserPostHeader = ({userID, postId, setEdit, edit}: PropsType) => {
    const BASE_URL = process.env.NEXT_PUBLIC_NEXTAUTH_URL as string

    const [isPopoverOpen, setIsPopoverOpen] = useState(false)
    const handleEditPost = () => {
        setEdit(true)
        console.log('handleEditPost')
        console.log('postId', postId)
        setIsPopoverOpen(false)
    }
    const handleDeletePost = () => {
        console.log('postId', postId)
        console.log('handleDeletePost')
        setIsPopoverOpen(false)
    }

    return (
        <ViewUserPostHeaderWrapper>
            <div className={'avaLink'}>
                <AvatarIcon img={'https://loremflickr.com/500/500'} userID={userID} />
                <Link className={'link'} href={`${BASE_URL}${PATH.USER_PROFILE}/${userID}`}>
                    URLProfile
                </Link>
            </div>
            {!edit && (
                <Popover setIsPopoverOpen={setIsPopoverOpen} isPopoverOpen={isPopoverOpen}>
                    <PopoverItem onClick={handleEditPost} name={'Edit Post'} icon={<EditPostIcon />} />
                    <PopoverItem onClick={handleDeletePost} name={'Delete Post'} icon={<DeletePostIcon />} />
                </Popover>
            )}
        </ViewUserPostHeaderWrapper>
    )
}
