'use client'
import React, {FC} from 'react'
import {useTranslation} from 'shared/hooks/useTranslation'
import {InputText} from 'shared/ui/InputText/InputText'
import {TextArea} from 'shared/ui/TextArea/TextArea'
import {GeneralInformationFormWrapper} from './styled'
import {CustomDatePicker} from 'shared/ui/DatePicker/DatePicker'
import {UserProfile} from 'redux/types/authTypes'
import {useGeneralInformationForm} from './useGeneralInformationForm'
import Button from 'shared/ui/Button/Button'

export const GeneralInformationForm: FC<{data: UserProfile}> = ({data}) => {
    const {t} = useTranslation()
    const {register, handleSubmit, errors, control, datePickerRef} = useGeneralInformationForm({data})

    return (
        <GeneralInformationFormWrapper onSubmit={handleSubmit}>
            <InputText
                {...register('userName')}
                label={t.generalInfo.inputs.username}
                error={errors.userName?.message}
            ></InputText>
            <InputText {...register('firstName')} label={t.generalInfo.inputs.firstname}></InputText>
            <InputText {...register('lastName')} label={t.generalInfo.inputs.lastname}></InputText>
            <CustomDatePicker control={control} {...register('dateOfBirth')} ref={datePickerRef} />
            <InputText {...register('city')} label={t.generalInfo.inputs.city}></InputText>
            <TextArea
                {...register('aboutMe')}
                label={t.generalInfo.inputs.aboutMe}
                error={errors.aboutMe?.message}
            ></TextArea>
            <Button type='submit' className='buttonSave'>
                {t.generalInfo.saveChanges}
            </Button>
        </GeneralInformationFormWrapper>
    )
}
