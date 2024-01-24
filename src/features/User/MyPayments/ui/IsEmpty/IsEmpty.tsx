import Image from 'next/image'

import {IsEmptyStyled} from './IsEmpty.styled'
import emptyFolder from './icon/emptyfolder.png'

export const IsEmpty = () => {
    return (
        <IsEmptyStyled>
            <div>
                <h1>You do not have any payment yet</h1>
                <Image alt={'emptyFolder'} src={emptyFolder} />
            </div>
        </IsEmptyStyled>
    )
}
