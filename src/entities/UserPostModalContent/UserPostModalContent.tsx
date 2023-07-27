import React from 'react'
import {UserPostModalContentWrapper} from 'entities/UserPostModalContent/UserPostModalContent.styled'
import Image from 'next/image'

export const UserPostModalContent = () => {
    return (
        <UserPostModalContentWrapper>
            <div>
                <Image src={'https://loremflickr.com/500/500'} alt={'user post picture'} width={500} height={500} />
            </div>
            <div></div>
        </UserPostModalContentWrapper>
    )
}
