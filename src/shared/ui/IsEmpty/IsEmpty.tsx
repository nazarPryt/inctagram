import emptyFolder from '@/public/pictures/emptyfolder.png'
import Image from 'next/image'

import {IsEmptyStyled} from './IsEmpty.styled'

type IsEmptyType = {
    text: string
}

export const IsEmpty = ({text}: IsEmptyType) => {
    return (
        <IsEmptyStyled>
            <div>
                <h1>{text}</h1>
                <Image alt={'emptyFolder'} height={400} src={emptyFolder} width={400} />
            </div>
        </IsEmptyStyled>
    )
}
