import React, {ChangeEvent} from 'react'
import {SelectPhotoWrapper} from './styled'
import {InputFile} from '../../../../../shared/components/InputFile/InputFile'

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
