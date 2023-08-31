import { ReactNode } from 'react'

import Link from 'next/link'
import styled, { css } from 'styled-components'

export const NavLinkWrapper = styled(Link)`
  display: flex;
  gap: 15px;
  align-items: center;

  color: ${props => props.theme.textColor[100]};
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.palette.primary[100]};

    path {
      fill: ${props => props.theme.palette.primary[100]};
    }
  }

  &.active {
    color: ${props => props.theme.palette.primary[500]};

    path {
      fill: ${props => props.theme.palette.primary[500]};
    }
  }
`
const Wrapper = styled.span<{ $active: boolean }>`
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
          fill: ${props => props.theme.palette.primary[500]};
        `
      }

      return css`
        fill: ${props => props.theme.textColor[100]};
      `
    }}
  }
`

export const NavIconWrapper = (props: { children: ReactNode; active: boolean }) => {
  // eslint-disable-next-line react/destructuring-assignment
  return <Wrapper $active={props.active}>{props.children}</Wrapper>
}
