import styled from 'styled-components'

export const SelectWrapper = styled.div`
    display: ${props => (props.hidden ? 'flex' : 'none')};
    flex-direction: column;
    gap: 5px;
    background-color: ${props => props.theme.bodyColor[500]};
    width: 110px;
    padding: 10px;
    position: absolute;
    top: -135px;
    left: 0;

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`
