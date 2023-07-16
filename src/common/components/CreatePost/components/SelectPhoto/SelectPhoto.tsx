import {InputFile} from '../../../InputFile/InputFile'
import {Button} from '../../../Button/Button'
import React, {ChangeEvent} from 'react'
import {SelectPhotoWrapper} from './styled'

type SelectPhotoType = {
    handleCreatePost: (e: ChangeEvent<HTMLInputElement>) => void
}

export const SelectPhoto: React.FC<SelectPhotoType> = props => {
    return (
        <SelectPhotoWrapper>
            <InputFile
                title={'Select from Computer'}
                onChange={props.handleCreatePost}
                accept={'image/png, image/jpeg'}
                multiple={false}
            />
        </SelectPhotoWrapper>
    )
}
