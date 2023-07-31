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
            text-overflow: ellipsis;
            overflow: hidden;
            -ms-line-clamp: 3;
            -webkit-line-clamp: 3;
            line-clamp: 3;
            display: -webkit-box;
            word-wrap: break-word;
            -webkit-box-orient: vertical;
            box-orient: vertical;
        }
    }

    .profileHeader {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .settingsLink {
        color: ${props => props.theme.textColor[100]};
        background-color: ${props => props.theme.bodyColor[300]};
        font-weight: 600;
        text-decoration: none;
        padding: 6px 24px;
    }
    .profileStatistics {
        display: flex;
        gap: 70px;

        div {
            display: flex;
            flex-direction: column;
        }
    }
`