import Image from 'next/image'

import emptyFolder from '../../../../../../public/pictures/emptyfolder.png' //todo make alies import from public
import {IsEmptyStyled} from './IsEmpty.styled'

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
