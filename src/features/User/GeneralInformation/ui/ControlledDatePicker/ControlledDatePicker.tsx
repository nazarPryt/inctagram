import {forwardRef} from 'react'
import DatePicker from 'react-datepicker'
import {Control, Controller} from 'react-hook-form'

import {PATH} from '@/_app/AppSettings/PATH'
import {useTranslation} from '@/shared/hooks/useTranslation'
import Link from 'next/link'

import 'react-datepicker/dist/react-datepicker.css'

import {ControlledDatePickerStyled} from './ControlledDatePicker.styled'
import {DatePickerHeader} from './DatePickerHeader'

type DatePickerPropsType = {
    control: Control<any>
    error?: string
    name: string
}

export const ControlledDatePicker = forwardRef<DatePicker, DatePickerPropsType>(({control, error, name}, ref) => {
    const {t} = useTranslation()

    const isError = !!error?.length
    const birthdayError = (
        <p className={'error'}>
            {error}
            <Link href={PATH.PRIVACY_POLICY} target={'_blank'}>
                Privacy Policy
            </Link>
        </p>
    )

    return (
        <ControlledDatePickerStyled $error={isError}>
            <label>
                {t.generalInfo.inputs.dateOfBirth}
                <Controller
                    control={control}
                    name={name}
                    render={({field: {onBlur, onChange, value}}) => {
                        return (
                            <DatePicker
                                dateFormat={'dd.MM.yyyy'}
                                onBlur={onBlur}
                                onChange={onChange}
                                placeholderText={value.toLocaleDateString('ru-RU')}
                                ref={ref}
                                renderCustomHeader={params => <DatePickerHeader {...params} />}
                                selected={value}
                            />
                        )
                    }}
                />
            </label>
            {isError && birthdayError}
        </ControlledDatePickerStyled>
    )
})
ControlledDatePicker.displayName = 'ControlledDatePicker'
