import styled, { css } from 'styled-components'

export const TabButton = styled.button<{ $active: boolean }>`
  cursor: pointer;

  padding: 6px 24px;

  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.theme.textColor['100']};
  letter-spacing: 0.7px;

  background-color: inherit;
  border-top: none;
  border-right: none;
  border-bottom: 2px solid ${props => props.theme.bodyColor['100']};
  border-left: none;

  ${props => {
    if (props.$active) {
      return css`
        color: ${props => props.theme.palette.primary['500']};
        border-bottom-color: ${props => props.theme.palette.primary['500']};
      `
    }

    return undefined
  }}
`
