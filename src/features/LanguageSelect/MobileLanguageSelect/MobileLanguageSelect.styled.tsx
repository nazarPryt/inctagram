import styled from 'styled-components'

export const MobileLanguageSelectStyled = styled.div`
    display: flex;
    width: 100px;

    a {
        display: flex;
        position: relative;
        text-decoration: none;

        padding: 8px 0;
        width: 100%;
        color: ${props => props.theme.textColor[900]};
        text-align: center;
        justify-content: center;
        align-items: center;
        transition: 200ms background-color;

        img {
            width: 24px;
            height: 24px;
        }
        &:hover {
            color: ${props => props.theme.textColor[500]};
            background-color: ${props => props.theme.bodyColor[500]};
        }

        &.active {
            &::after {
                content: '';

                position: absolute;
                bottom: -2px;
                left: 0;

                width: 100%;
                height: 2px;
                background-color: ${props => props.theme.palette.primary[500]};
            }
        }
    }
`
