'use client'
import React, {FC} from 'react'
import {InputText} from '../../../shared/ui/InputText/InputText'
import {TextArea} from '../../../shared/ui/TextArea/TextArea'
import {GeneralInformationFormWrapper} from './styled'
import {CustomDatePicker} from '../../../shared/ui/DatePicker/DatePicker'
import {Button} from '../../../shared/ui/Button/Button'
import {UserProfile} from '../../../redux/types/authTypes'
import {useGeneralInformationForm} from './UseGeneralInformationForm'

export const GeneralInformationForm: FC<{data: UserProfile}> = ({data}) => {
    const {register, handleSubmit, errors, control, datePickerRef} = useGeneralInformationForm({data})

    return (
        <GeneralInformationFormWrapper onSubmit={handleSubmit}>
            <InputText {...register('userName')} label='Username' error={errors.userName?.message}></InputText>
            <InputText {...register('firstName')} label='First Name'></InputText>
            <InputText {...register('lastName')} label='Last Name'></InputText>
            <CustomDatePicker control={control} {...register('dateOfBirth')} ref={datePickerRef} />
            <InputText {...register('city')} label='City'></InputText>
            <TextArea {...register('aboutMe')} label='About me' error={errors.aboutMe?.message}></TextArea>
            <Button type='submit' className='buttonSave'>
                Save Changes
            </Button>
        </GeneralInformationFormWrapper>
    )
}
