import {useTranslation} from '@/shared/hooks/useTranslation'
import {TextArea} from '@/shared/ui/TextArea'
import {Button, InputText} from '@nazar-pryt/inctagram-ui-kit'

import {UserProfileType} from '../../api/userProfile/userProfile.types'
import {useGeneralInformationForm} from '../../hook/useGeneralInformationForm'
import {GeneralInformationFormWrapper} from './GeneralInformationForm.styled'

export const GeneralInformationForm = ({data}: {data: UserProfileType}) => {
    const {t} = useTranslation()
    const {control, datePickerRef, errors, handleSubmit, register} = useGeneralInformationForm({data})

    console.log('errors', errors)

    return (
        <GeneralInformationFormWrapper onSubmit={handleSubmit}>
            <InputText
                {...register('userName')}
                error={errors.userName?.message}
                label={t.generalInfo.inputs.username}
            ></InputText>
            <InputText {...register('firstName')} label={t.generalInfo.inputs.firstname}></InputText>
            <InputText {...register('lastName')} label={t.generalInfo.inputs.lastname}></InputText>
            {/*<CustomDatePicker control={control} {...register('dateOfBirth')} ref={datePickerRef} />*/}
            <InputText {...register('city')} label={t.generalInfo.inputs.city}></InputText>
            <TextArea
                {...register('aboutMe')}
                error={errors.aboutMe?.message}
                label={t.generalInfo.inputs.aboutMe}
            ></TextArea>
            <Button className={'buttonSave'} type={'submit'}>
                {t.generalInfo.saveChanges}
            </Button>
        </GeneralInformationFormWrapper>
    )
}
