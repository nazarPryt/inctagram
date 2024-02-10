import {useGeneralInformationForm} from '@/features/User/GeneralInformation/hook/useGeneralInformationForm'
import {UserProfile} from '@/redux/types/authTypes'
import {useTranslation} from '@/shared/hooks/useTranslation'
import {Button, InputText, TextArea} from '@nazar-pryt/inctagram-ui-kit'

import {GeneralInformationFormWrapper} from './styled'

export const GeneralInformationForm = ({data}: {data: UserProfile}) => {
    const {t} = useTranslation()
    const {control, datePickerRef, errors, handleSubmit, register} = useGeneralInformationForm({data})

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
