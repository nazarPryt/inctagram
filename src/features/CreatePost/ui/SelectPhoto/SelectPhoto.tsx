import React, {ChangeEvent} from 'react'
import {SelectPhotoWrapper} from './styled'
import {InputFile} from '../../../../shared/ui/InputFile/InputFile'
import {useTranslation} from '../../../../shared/hooks/useTranslation'

type SelectPhotoType = {
    handleCreatePost: (e: ChangeEvent<HTMLInputElement>) => void
}

export const SelectPhoto: React.FC<SelectPhotoType> = props => {
    const {t} = useTranslation()
    return (
        <SelectPhotoWrapper>
            <InputFile
                title={t.create.selectButton}
                onChange={props.handleCreatePost}
                accept={'image/png, image/jpeg'}
                multiple={false}
            />
        </SelectPhotoWrapper>
    )
}
