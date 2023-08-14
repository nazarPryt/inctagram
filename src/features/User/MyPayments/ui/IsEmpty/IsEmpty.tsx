import React from 'react'
import {IsEmptyStyled} from './IsEmpty.styled'
import Image from 'next/image'
import emptyFolder from './icon/emptyfolder.png'
export const IsEmpty = () => {
    return (
        <IsEmptyStyled>
            <h1>You do not have any payment yet</h1>
            <Image src={emptyFolder} alt={'emptyFolder'} />
        </IsEmptyStyled>
    )
}
