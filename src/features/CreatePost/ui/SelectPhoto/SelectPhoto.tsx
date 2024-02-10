import {ChangeEvent} from 'react'

import {useTranslation} from '@/shared/hooks/useTranslation'
import {InputFile} from '@nazar-pryt/inctagram-ui-kit'

import {SelectPhotoWrapper} from './styled'

type SelectPhotoType = {
    handleCreatePost: (e: ChangeEvent<HTMLInputElement>) => void
}

export const SelectPhoto = (props: SelectPhotoType) => {
    const {t} = useTranslation()

    return (
        <SelectPhotoWrapper>
            <InputFile
                accept={'image/png, image/jpeg'}
                multiple={false}
                onChange={props.handleCreatePost}
                title={t.create.selectButton}
            />
        </SelectPhotoWrapper>
    )
}
