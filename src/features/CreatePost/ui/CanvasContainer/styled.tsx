import styled from 'styled-components'

export const Wrapper = styled.div<{width: number; height: number}>`
    display: flex;
    justify-content: center;
    width: calc(${props => props.width}px + 20px);
    height: calc(${props => props.height}px + 20px);
`