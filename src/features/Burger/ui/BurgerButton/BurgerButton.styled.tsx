import styled, { css } from 'styled-components'

export const BurgerButtonStyled = styled.button.withConfig({
  shouldForwardProp: prop => !['isMenuOpen'].includes(prop),
})<{ isMenuOpen?: boolean }>`
  cursor: pointer;

  display: none;

  width: 50px;
  height: 50px;

  appearance: none;
  background: none;
  border: none;
  outline: none;

  & span {
    display: inline-block;
    transition: all 0.4s;
  }

  .menu_button_line {
    width: 100%;
    height: 3px;
    background: ${props => props.theme.textColor[100]};
    border-radius: 0.2rem;
  }

  & .menu_button_line.top {
    top: 0;
  }

  & .menu_button_line.mid {
    top: 1rem;
  }

  & .menu_button_line.botm {
    bottom: 0;
  }

  @media (max-width: ${props => props.theme.viewPort[768]}px) {
    display: block;
  }

  ${props => {
    if (props.isMenuOpen) {
      return css`
        & .menu_button_line {
          background: ${props => props.theme.textColor[100]};
        }

        & .menu_button_line.top {
          transform: translateY(15px) rotate(-45deg);
        }

        & .menu_button_line.mid {
          opacity: 0;
        }

        & .menu_button_line.botm {
          transform: translateY(-15px) rotate(45deg);
        }
      `
    }

    return undefined
  }}
`
