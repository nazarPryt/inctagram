import styled from 'styled-components'

export const FiltersWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    max-width: 435px;
`

export const Filter = styled.div<{filter: string}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;

    width: 120px;
    height: 85px;

    cursor: pointer;

    img {
        width: 100%;
        height: 100%;
        filter: ${props => props.filter};
    }
`
