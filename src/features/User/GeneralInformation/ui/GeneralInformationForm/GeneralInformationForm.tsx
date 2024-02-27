import {Controller} from 'react-hook-form'

import {CitySelector} from '@/features/User/GeneralInformation/ui/CitySelector/CitySelector'
import {ControlledDatePicker} from '@/features/User/GeneralInformation/ui/ControlledDatePicker'
import {useTranslation} from '@/shared/hooks/useTranslation'
import {Button, InputText, TextArea} from '@nazar-pryt/inctagram-ui-kit'

import {UserProfileType} from '../../api/userProfile/userProfile.types'
import {useGeneralInformationForm} from '../../hook/useGeneralInformationForm'
import {GeneralInformationFormWrapper} from './GeneralInformationForm.styled'

export const GeneralInformationForm = ({data}: {data: UserProfileType}) => {
    const {t} = useTranslation()
    const {control, errors, handleSubmit, isLoading, register} = useGeneralInformationForm({data})

    return (
        <GeneralInformationFormWrapper onSubmit={handleSubmit}>
            <InputText
                {...register('userName')}
                error={errors.userName?.message}
                label={t.generalInfo.inputs.username}
            ></InputText>
            <InputText {...register('firstName')} label={t.generalInfo.inputs.firstname}></InputText>
            <InputText {...register('lastName')} label={t.generalInfo.inputs.lastname}></InputText>
            <ControlledDatePicker control={control} error={errors.dateOfBirth?.message} name={'dateOfBirth'} />
            <CitySelector control={control} error={errors.city?.message} />
            {/*<InputText {...register('city')} label={t.generalInfo.inputs.city}></InputText>*/}
            <Controller
                control={control}
                name={'aboutMe'}
                render={({field}) => (
                    <TextArea
                        {...field}
                        error={errors.aboutMe?.message}
                        label={t.generalInfo.inputs.aboutMe}
                        maxLength={200}
                    />
                )}
            />

            <Button className={'buttonSave'} disabled={isLoading} type={'submit'}>
                {t.generalInfo.saveChanges}
            </Button>
        </GeneralInformationFormWrapper>
    )
}
