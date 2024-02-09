import styled from 'styled-components'

export const AllPostsListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    // need for correct work of infiniteScroll
    overflow: auto;
    height: 100vh;
`
