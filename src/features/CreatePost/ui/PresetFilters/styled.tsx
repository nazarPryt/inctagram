import styled from 'styled-components'

export const FiltersWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 10px 20px;
    max-width: 435px;
`

export const Filter = styled.div<{filter: string; width: number; height: number}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;

    width: ${props => props.width / 6}px;
    height: ${props => props.height / 6}px;

    cursor: pointer;

    img {
        width: ${props => props.width / 6}px;
        height: ${props => props.height / 6}px;
        filter: ${props => props.filter};
        object-fit: cover;
    }
`
