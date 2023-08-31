import { FC } from 'react'

import { useGeneralInformationForm } from 'features/User/GeneralInformation/hook/useGeneralInformationForm'
import { CustomDatePicker } from 'features/User/GeneralInformation/ui/DatePicker/DatePicker'
import { GeneralInformationFormWrapper } from 'features/User/GeneralInformation/ui/GeneralInformationForm/styled'
import { UserProfile } from 'redux/types/authTypes'
import { useTranslation } from 'shared/hooks/useTranslation'
import { Button } from 'shared/ui/Button/Button'
import { InputText } from 'shared/ui/InputText/InputText'
import { TextArea } from 'shared/ui/TextArea/TextArea'

export const GeneralInformationForm: FC<{ data: UserProfile }> = ({ data }) => {
  const { t } = useTranslation()
  const { register, handleSubmit, errors, control, datePickerRef } = useGeneralInformationForm({ data })

  return (
    <GeneralInformationFormWrapper onSubmit={handleSubmit}>
      <InputText {...register('userName')} error={errors.userName?.message} label={t.generalInfo.inputs.username} />
      <InputText {...register('firstName')} label={t.generalInfo.inputs.firstname} />
      <InputText {...register('lastName')} label={t.generalInfo.inputs.lastname} />
      <CustomDatePicker control={control} {...register('dateOfBirth')} ref={datePickerRef} />
      <InputText {...register('city')} label={t.generalInfo.inputs.city} />
      <TextArea {...register('aboutMe')} error={errors.aboutMe?.message} label={t.generalInfo.inputs.aboutMe} />
      <Button className="buttonSave" type="submit">
        {t.generalInfo.saveChanges}
      </Button>
    </GeneralInformationFormWrapper>
  )
}
