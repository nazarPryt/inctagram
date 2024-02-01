import {EmptyAvatar, IconColor} from '@nazar-pryt/inctagram-ui-kit'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 222px;
    height: 228px;
    margin-bottom: 30px;
    background-color: ${props => props.theme.bodyColor['500']};
    ${IconColor}
`

export const EmptyAvatarPlaceholder = () => {
    return (
        <Wrapper>
            <EmptyAvatar />
        </Wrapper>
    )
}
