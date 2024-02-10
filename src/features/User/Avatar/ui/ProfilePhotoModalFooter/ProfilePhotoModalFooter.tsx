import {ComponentProps} from 'react'

import {Button} from '@nazar-pryt/inctagram-ui-kit'

import {ProfilePhotoModalFooterStyled} from './ProfilePhotoModalFooter.styled'

type DefaultInputPropsType = ComponentProps<'input'>

type PropsProps = DefaultInputPropsType & {
    clearImagePreview: () => void
    savePhoto: () => void
}
export const ProfilePhotoModalFooter = (props: PropsProps) => {
    return (
        <ProfilePhotoModalFooterStyled>
            <input max={2} min={1} onChange={props.onChange} step={'0.1'} type={'range'} value={props.value} />
            <div>
                <Button onClick={() => props.clearImagePreview()} type={'button'}>
                    delete
                </Button>
                <Button onClick={() => props.savePhoto()}>Save</Button>
            </div>
        </ProfilePhotoModalFooterStyled>
    )
}
