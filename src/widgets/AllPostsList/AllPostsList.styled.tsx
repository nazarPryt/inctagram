import {breakpoints} from '@/shared/styles/Breakpoints'
import styled from 'styled-components'

export const AllPostsListWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 50px;
    justify-items: center;
    gap: 20px;

    @media (max-width: ${breakpoints.mobile}px) {
        grid-template-columns: 1fr;
    }
`
