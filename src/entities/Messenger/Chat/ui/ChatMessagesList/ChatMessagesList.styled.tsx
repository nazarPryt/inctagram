import styled from 'styled-components'

export const ChatMessagesListStyled = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column-reverse;
    overflow-y: scroll;
    overflow-x: hidden;
    padding: 10px;
    height: 300px;

    .chatMessagesListInfiniteScroll {
        //To put endMessage and loader to the top.
        display: flex;
        flex-direction: column-reverse;
    }
`
