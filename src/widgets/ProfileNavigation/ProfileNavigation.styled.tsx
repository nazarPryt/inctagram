import {breakpoints} from '@/shared/styles/Breakpoints'
import {IconColor, typography} from '@nazar-pryt/inctagram-ui-kit'
import styled from 'styled-components'

export const ProfileNavigationStyled = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;

    a {
        display: flex;
        position: relative;
        text-decoration: none;
        ${typography.H2}
        padding: 8px 0;
        width: 100%;
        color: ${props => props.theme.textColor[900]};
        text-align: center;
        justify-content: center;
        align-items: center;
        transition: 200ms background-color;

        &:hover {
            color: ${props => props.theme.textColor[500]};
            background-color: ${props => props.theme.bodyColor[500]};
        }

        &::after {
            content: '';

            position: absolute;
            bottom: -2px;
            left: 0;

            width: 100%;
            height: 2px;

            background-color: ${props => props.theme.bodyColor[100]};
        }
        &.active {
            color: ${props => props.theme.palette.primary[500]};
            &::after {
                background-color: ${props => props.theme.palette.primary[500]};
            }
        }
        
        @media (max-width: ${breakpoints.tablet}px) {
            ${IconColor};
          
            
            &.active {
               svg{
                   path{
                       fill: ${props => props.theme.palette.primary[500]}};
                   }
               }
            }
            svg {
                width: 30px;
                height: 30px;
            }
        }
    }
`
