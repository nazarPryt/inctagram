import React from 'react'
import {AvatarIcon} from 'shared/components/AvatarIcon/AvatarIcon'
import Link from 'next/link'
import {PATH} from 'shared/constants/PATH'
import {PostDescriptionWrapper} from 'entities/Post/ui/PostDesciption/PostDescription.styled'

type PostDescriptionType = {
    description: string
    userID: number
    img: string
}
export const PostDescription = ({description, userID, img}: PostDescriptionType) => {
    const BASE_URL = process.env.NEXT_PUBLIC_NEXTAUTH_URL as string

    return (
        <PostDescriptionWrapper>
            <AvatarIcon userID={userID} img={img} />
            <div>
                <Link href={`${BASE_URL}${PATH.USER_PROFILE}/${userID}`}>URLProfile</Link> <p>{description}</p>
            </div>
        </PostDescriptionWrapper>
    )
}
