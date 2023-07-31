import styled from 'styled-components'
import Link from 'next/link'

export const AvatarIconWrapper = styled(Link)`
    flex-shrink: 0;

    img {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        object-fit: fill;
    }
`