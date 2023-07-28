import styled from 'styled-components'

export const EditorPanelWrapper = styled.div<{width: number}>`
    display: flex;
    justify-content: space-around;
    width: ${props => props.width}px;
    gap: 50px;
    position: absolute;
    bottom: 30px;
    left: 9px;

    .popUpBtn {
        width: 95%;
        display: flex;
        gap: 50px;
        justify-content: space-between;

        .select,
        .zoom,
        .library {
            position: relative;
            width: 40px;
            height: 40px;
            padding: 5px;
            background-color: ${props => props.theme.bodyColor[500]};
        }

        .wrapper {
            display: flex;
            width: 120px;
            justify-content: space-between;
        }

        svg {
            path {
                fill: ${props => props.theme.textColor[500]};
            }
        }
    }
`
