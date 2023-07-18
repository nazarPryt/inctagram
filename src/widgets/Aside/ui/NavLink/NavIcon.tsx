import styled, {css} from 'styled-components'
import React, {ReactNode} from 'react'

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
