import styled from 'styled-components'

export const LibraryWrapper = styled.div`
    display: ${props => (props.hidden ? 'flex' : 'none')};
    align-items: center;
    gap: 10px;
    background-color: ${props => props.theme.bodyColor[500]};
    padding: 5px;
    position: absolute;
    right: 0;
    top: -135px;
    max-width: 475px;
    overflow: hidden;

    div {
        display: flex;
        align-items: center;
        position: relative;
        height: 80px;
    }

    .close {
        justify-content: center;
        background-color: ${props => props.theme.bodyColor[500]};
        position: absolute;
        right: 0;
        top: 0;
    }

    button {
        width: 20px;
        height: 20px;
        padding: 0;
    }

    label {
        display: none;
    }

    .OVER {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        gap: 10px;
        overflow-x: scroll;
        height: 100px;
        margin: 10px;

        div {
            display: flex;
            width: 100px;
            height: 100%;
        }
    }
`

export const LibraryPicture = styled.div<{image: string; filter: string}>`
    width: 80px;
    height: 80px;
    background-image: url('${props => props.image}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    filter: ${props => props.filter};
    cursor: pointer;
`
