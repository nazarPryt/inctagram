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

export const ZoomWrapper = styled.div`
  display: ${props => (props.hidden ? 'flex' : 'none')};
  flex-direction: column;
  background-color: ${props => props.theme.bodyColor[500]};
  padding: 10px;
  position: absolute;
  left: 50px;
  top: 8px;
}

input {
  width: 90px;
  height: 3px;
}
`

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

export const LibraryPicture = styled.div<{image: string}>`
    width: 80px;
    height: 80px;
    background-image: url('${props => props.image}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    cursor: pointer;
`
