import React, { ChangeEvent } from 'react'

import { SelectPhotoWrapper } from './styled'

import { useTranslation } from 'shared/hooks/useTranslation'
import { InputFile } from 'shared/ui/InputFile/InputFile'

type SelectPhotoType = {
  handleCreatePost: (e: ChangeEvent<HTMLInputElement>) => void
}

export const SelectPhoto: React.FC<SelectPhotoType> = ({ handleCreatePost }) => {
  const { t } = useTranslation()

  return (
    <SelectPhotoWrapper>
      <InputFile
        accept="image/png, image/jpeg"
        multiple={false}
        title={t.create.selectButton}
        onChange={handleCreatePost}
      />
    </SelectPhotoWrapper>
  )
}
