import styled from 'styled-components'
import React, {ComponentProps} from 'react'
import {Button} from 'shared/ui/Button/Button'


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-self: end;
    gap: 30px;
    margin-top: 40px;
    width: 100%;

    div {
        display: flex;
        justify-content: space-between;
    }
`

type DefaultInputPropsType = ComponentProps<'input'>

type PropsProps = DefaultInputPropsType & {
    clearImagePreview: () => void
    savePhoto: () => void
}
export const ProfilePhotoModalFooter = (props: PropsProps) => {
    return (
        <Wrapper>
            <input type='range' value={props.value} onChange={props.onChange} min={1} max={2} step='0.1' />
            <div>
                <Button type={'button'} onClick={() => props.clearImagePreview()}>
                    delete
                </Button>
                <Button onClick={() => props.savePhoto()}>Save</Button>
            </div>
        </Wrapper>
    )
}
