import styled from 'styled-components'

export const ProfileHeaderWrapper = styled.div`
    display: flex;
    gap: 30px;
    margin-bottom: 30px;

    .profileData {
        display: flex;
        flex-direction: column;
        gap: 30px;
        width: 100%;

        p {
            line-height: 2rem;
            max-height: 8rem;
            -webkit-box-orient: vertical;
            display: block;
            display: -webkit-box;
            overflow: hidden !important;
            text-overflow: ellipsis;
            -webkit-line-clamp: 4;
        }
    }

    .profileHeader {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .settingsBox {
        display: flex;
        gap: 10px;
    }
    .profileStatistics {
        display: flex;
        gap: 70px;

        div {
            display: flex;
            flex-direction: column;
        }
    }
    @media (max-width: ${props => props.theme.viewPort[768]}px) {
        flex-direction: column;
        align-items: center;
    }
`
