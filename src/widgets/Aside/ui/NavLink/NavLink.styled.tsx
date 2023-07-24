import styled, {css} from 'styled-components'
import Link from 'next/link'
import React, {ReactNode} from 'react'

export const NavLinkWrapper = styled(Link)`
    display: flex;
    align-items: center;
    gap: 15px;
    font-weight: 500;
    font-family: Inter serif;
    font-size: 14px;

    text-decoration: none;
    color: ${props => props.theme.textColor};

    &:hover {
        color: ${props => props.theme.palette.primary['100']};
        path {
            fill: ${props => props.theme.palette.primary['100']};
        }
    }

    &.active {
        color: ${props => props.theme.palette.primary['500']};
    }
`
const Wrapper = styled.span<{$active: boolean}>`
    width: 23px;
    height: 23px;

    svg {
        width: 100%;
        height: 100%;
    }

    path {
        ${props => {
            if (props.$active) {
                return css`
                    fill: ${props => props.theme.palette.primary['500']};
                `
            }
            if (props.theme.name === 'light') {
                return css`
                    fill: ${props => props.theme.palette.common.black};
                `
            } else {
                return css`
                    fill: ${props => props.theme.palette.common.white};
                `
            }
        }}
    }
`

export const NavIconWrapper = (props: {children: ReactNode; active: boolean}) => {
    return <Wrapper $active={props.active}>{props.children}</Wrapper>
}
