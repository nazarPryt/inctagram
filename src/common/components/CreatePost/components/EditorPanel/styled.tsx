import styled from 'styled-components'

export const EditorPanelWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    gap: 50px;
    position: absolute;
    bottom: 10px;

    .popUpBtn {
        width: 100%;
        display: flex;
        gap: 50px;

        .iconsWrapper {
            display: flex;
            width: 100%;
            justify-content: space-evenly;
            align-items: center;

            div {
                width: 40px;
                height: 40px;
                padding: 5px;
                border-radius: 50%;
                background-color: ${props => props.theme.bodyColor[300]};
            }
        }

        svg {
            path {
                fill: ${props => props.theme.textColor[100]};
            }
        }
    }
`

export const SelectWrapper = styled.div`
    display: ${props => (props.hidden ? 'flex' : 'none')};

    flex-direction: column;
    background-color: ${props => props.theme.bodyColor[500]};
    padding: 10px;
    position: absolute;
    top: -130px;
    left: 30px;
`
export const ZoomWrapper = styled.div`
    display: ${props => (props.hidden ? 'flex' : 'none')};
    flex-direction: column;
    background-color: ${props => props.theme.bodyColor[500]};
    padding: 10px;
    position: absolute;
    left: 180px;
    top: -35px;

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
    right: 15px;
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
        background-color: ${props => props.theme.bodyColor[900]};
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
