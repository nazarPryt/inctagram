import {IsEmptyStyled} from './IsEmpty.styled'
import Image from 'next/image'
import emptyFolder from './icon/emptyfolder.png'

export const IsEmpty = () => {
    return (
        <IsEmptyStyled>
            <div>
                <h1>You do not have any payment yet</h1>
                <Image src={emptyFolder} alt={'emptyFolder'} />
            </div>
        </IsEmptyStyled>
    )
}
