import {ComponentProps} from 'react'
import {Button} from 'shared/ui/Button/Button'
import {ProfilePhotoModalFooterStyled} from './ProfilePhotoModalFooter.styled'

type DefaultInputPropsType = ComponentProps<'input'>

type PropsProps = DefaultInputPropsType & {
    clearImagePreview: () => void
    savePhoto: () => void
}
export const ProfilePhotoModalFooter = (props: PropsProps) => {
    return (
        <ProfilePhotoModalFooterStyled>
            <input type='range' value={props.value} onChange={props.onChange} min={1} max={2} step='0.1' />
            <div>
                <Button type={'button'} onClick={() => props.clearImagePreview()}>
                    delete
                </Button>
                <Button onClick={() => props.savePhoto()}>Save</Button>
            </div>
        </ProfilePhotoModalFooterStyled>
    )
}
