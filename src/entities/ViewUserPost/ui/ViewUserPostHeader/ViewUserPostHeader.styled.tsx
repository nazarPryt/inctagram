import styled from 'styled-components'

export const ViewUserPostHeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0;
    border-bottom: 1px solid ${props => props.theme.bodyColor[100]};

    .avaLink {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;

        .link {
            position: relative;
            text-decoration: none;
            font-weight: 600;
            font-size: 16px;
            color: ${props => props.theme.textColor[100]};
        }
    }
`
