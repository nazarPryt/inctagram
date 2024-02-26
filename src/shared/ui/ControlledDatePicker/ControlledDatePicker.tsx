import {forwardRef, useState} from 'react'
import DatePicker from 'react-datepicker'
import {Control, Controller} from 'react-hook-form'

import {PATH} from '@/shared/constants/PATH'
import {useTranslation} from '@/shared/hooks/useTranslation'
import {DatePickerHeader} from '@/shared/ui/ControlledDatePicker/DatePickerHeader/DatePickerHeader'
import range from 'lodash/range'
import Link from 'next/link'

import 'react-datepicker/dist/react-datepicker.css'

import {ControlledDatePickerStyled} from './ControlledDatePicker.styled'

type DatePickerPropsType = {
    control: Control<any>
    name: string
    placeholder?: Date | string
    range?: boolean
}
type Value = Date | null
type RangeValue = [Value, Value]

export const ControlledDatePicker = forwardRef<DatePicker, DatePickerPropsType>(
    ({control, name, placeholder, range}, ref) => {
        const [startDate, setStartDate] = useState<Value>(placeholder ? new Date(placeholder) : null)
        const [endDate, setEndDate] = useState<Value>(null)

        const {t} = useTranslation()

        return (
            <ControlledDatePickerStyled>
                {t.generalInfo.inputs.dateOfBirth} <br />
                <Controller
                    control={control}
                    name={name}
                    render={({field: {onBlur, onChange, value}}) => {
                        const handleChange = (value: RangeValue | Value) => {
                            if (value instanceof Array) {
                                const [start, end] = value

                                setStartDate(start)
                                setEndDate(end)
                            } else {
                                setStartDate(value)
                            }

                            onChange(value)
                        }

                        const birthdayError = (
                            <>
                                {/*{error?.message}*/}
                                <Link className={'birthdayErrorLink'} href={PATH.PRIVACY_POLICY} target={'_blank'}>
                                    privacyPolicy
                                </Link>
                            </>
                        )

                        return (
                            <DatePicker
                                dateFormat={'dd.MM.yyyy'}
                                endDate={range ? endDate : undefined}
                                onBlur={onBlur}
                                onChange={handleChange}
                                placeholderText={value.toLocaleDateString('ru-RU')}
                                ref={ref}
                                renderCustomHeader={params => <DatePickerHeader {...params} />}
                                selected={startDate}
                                selectsRange={range}
                                startDate={range ? startDate : undefined}
                            />
                        )
                    }}
                />
            </ControlledDatePickerStyled>
        )
    }
)
ControlledDatePicker.displayName = 'CustomDatePicker'
