import styled from 'styled-components'
import Link from 'next/link'

export const UserPostWrapper = styled(Link)`
    position: relative;
    cursor: pointer;
    width: 235px;
    height: 230px;

    &:hover {
        opacity: 0.8;
    }

    img {
        object-fit: cover;
    }
`
