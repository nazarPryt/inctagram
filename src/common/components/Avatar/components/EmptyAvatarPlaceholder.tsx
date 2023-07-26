import styled from 'styled-components'
import {EmptyAvatar} from 'common/assets/icons/emptyAvatar'
import React from 'react'

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 222px;
    height: 228px;

    margin-bottom: 30px;
    background-color: ${props => props.theme.bodyColor['500']};
`
export const EmptyAvatarPlaceholder = () => {
    return (
        <Wrapper>
            <EmptyAvatar />
        </Wrapper>
    )
}
