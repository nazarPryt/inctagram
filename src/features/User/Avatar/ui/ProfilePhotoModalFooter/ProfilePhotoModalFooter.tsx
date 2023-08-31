import { ComponentProps } from 'react'

import { ProfilePhotoModalFooterStyled } from './ProfilePhotoModalFooter.styled'

import { Button } from 'shared/ui/Button/Button'

type DefaultInputPropsType = ComponentProps<'input'>

type PropsProps = DefaultInputPropsType & {
  clearImagePreview: () => void
  savePhoto: () => void
}
export const ProfilePhotoModalFooter = ({ savePhoto, clearImagePreview, value, onChange }: PropsProps): JSX.Element => {
  return (
    <ProfilePhotoModalFooterStyled>
      <input max={2} min={1} step="0.1" type="range" value={value} onChange={onChange} />
      <div>
        <Button type="button" onClick={() => clearImagePreview()}>
          delete
        </Button>
        <Button onClick={() => savePhoto()}>Save</Button>
      </div>
    </ProfilePhotoModalFooterStyled>
  )
}
