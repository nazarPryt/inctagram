import {forwardRef} from 'react'
import DatePicker from 'react-datepicker'
import {Control, Controller} from 'react-hook-form'

import {useTranslation} from '@/shared/hooks/useTranslation'
import {getMonth, getYear} from 'date-fns/fp'
import range from 'lodash/range'

import 'react-datepicker/dist/react-datepicker.css'

import {ControlledDatePickerStyled} from './ControlledDatePicker.styled'
import {months} from './constants'

type DatePickerPropsType = {
    control: Control<any>
    name: string
}

export const ControlledDatePicker = forwardRef<DatePicker, DatePickerPropsType>(({control, name}, ref) => {
    const {t} = useTranslation()
    const years = range(1923, getYear(new Date()) + 1, 1) //todo

    const yearsList = years.map(option => (
        <option key={option} value={option}>
            {option}
        </option>
    ))

    const monthsList = months.map(option => (
        <option key={option} value={option}>
            {option}
        </option>
    ))

    return (
        <ControlledDatePickerStyled>
            {t.generalInfo.inputs.dateOfBirth} <br />
            <Controller
                control={control}
                name={name}
                render={({field: {onBlur, onChange, value}}) => (
                    <DatePicker
                        dateFormat={'dd.MM.yyyy'}
                        onBlur={onBlur}
                        onChange={onChange}
                        ref={ref}
                        renderCustomHeader={({
                            changeMonth,
                            changeYear,
                            date,
                            decreaseMonth,
                            increaseMonth,
                            nextMonthButtonDisabled,
                            prevMonthButtonDisabled,
                        }) => {
                            return (
                                <div className={'DatePickerHeader'}>
                                    <button disabled={prevMonthButtonDisabled} onClick={decreaseMonth}>
                                        {'<'}
                                    </button>
                                    <select
                                        onChange={({target: {value}}) => changeYear(Number(value))}
                                        value={getYear(date)}
                                    >
                                        {yearsList}
                                    </select>

                                    <select
                                        onChange={({target: {value}}) => changeMonth(months.indexOf(value))}
                                        value={months[getMonth(date)]}
                                    >
                                        {monthsList}
                                    </select>

                                    <button disabled={nextMonthButtonDisabled} onClick={increaseMonth}>
                                        {'>'}
                                    </button>
                                </div>
                            )
                        }}
                        selected={value}
                    />
                )}
            />
        </ControlledDatePickerStyled>
    )
})
ControlledDatePicker.displayName = 'CustomDatePicker'
