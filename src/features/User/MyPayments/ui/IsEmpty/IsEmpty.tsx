import Image from 'next/image'

import emptyFolder from './icon/emptyfolder.png'
import { IsEmptyStyled } from './IsEmpty.styled'

export const IsEmpty = (): JSX.Element => {
  return (
    <IsEmptyStyled>
      <div>
        <h1>You do not have any payment yet</h1>
        <Image alt="emptyFolder" src={emptyFolder} />
      </div>
    </IsEmptyStyled>
  )
}
