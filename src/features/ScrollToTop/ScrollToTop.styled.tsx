import styled, {keyframes} from 'styled-components'

const move = keyframes`
   from {
      opacity: 1;
   }
   33.3% {
      opacity: 1;
      transform: translateY(-10px);
   }
   66.6% {
      opacity: 1;
      transform: translateY(-30px);
   }
   to {
      opacity: 0;
      transform: translateY(-50px) scale(0.5);
   }
`

export const ScrollToTopStyled = styled.button<{$isVisible: boolean}>`
    cursor: pointer;
    display: ${props => (props.$isVisible ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 20px;
    right: 35px;
    height: 80px;
    background-color: inherit;
    border: none;

    .chevron {
        position: absolute;
        width: 50px;
        height: 10px;
        opacity: 0;
        transform: scale(0.3);
        animation: ${move} 3s ease-out infinite;
    }

    .chevron:first-child {
        animation: ${move} 3s ease-out 1s infinite;
    }

    .chevron:nth-child(2) {
        animation: ${move} 3s ease-out 2s infinite;
    }

    .chevron:before,
    .chevron:after {
        content: '';
        position: absolute;
        top: 0;
        height: 100%;
        width: 50%;
        background: ${props => props.theme.palette.primary[500]};
    }

    .chevron:before {
        left: 0;
        transform: skewY(130deg);
    }

    .chevron:after {
        right: 0;
        width: 50%;
        transform: skewY(-130deg);
    }
`
