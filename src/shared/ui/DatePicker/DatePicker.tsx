import React, {ChangeEvent} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {useTranslation} from 'shared/hooks/useTranslation'
import {CustomDatePickerWrapper, DatePickerHeader} from './styled'
import {Control, Controller} from 'react-hook-form'
import range from 'lodash/range'
import {getMonth, getYear} from 'date-fns/fp'
import {months} from './constants'
import {IFormInput} from '../../../features/GeneralInformation/GeneralInformationForm/useGeneralInformationForm'

type DatePickerPropsType = {
    control: Control<IFormInput, {dateOfBirthday: Date}>
}

export const CustomDatePicker = React.forwardRef<DatePicker, DatePickerPropsType>((props, ref) => {
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
        <CustomDatePickerWrapper>
            {t.generalInfo.inputs.dateOfBirth} <br />
            <Controller
                control={props.control}
                name='dateOfBirth'
                render={({field}) => (
                    <DatePicker
                        ref={ref}
                        dateFormat={'dd.MM.yyyy'}
                        selected={field.value}
                        onChange={date => field.onChange(date as Date | ChangeEvent<Element>)}
                        renderCustomHeader={({
                            date,
                            changeYear,
                            changeMonth,
                            decreaseMonth,
                            increaseMonth,
                            prevMonthButtonDisabled,
                            nextMonthButtonDisabled,
                        }) => {
                            return (
                                <DatePickerHeader>
                                    <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                                        {'<'}
                                    </button>
                                    <select
                                        value={getYear(date)}
                                        onChange={({target: {value}}) => changeYear(Number(value))}
                                    >
                                        {yearsList}
                                    </select>

                                    <select
                                        value={months[getMonth(date)]}
                                        onChange={({target: {value}}) => changeMonth(months.indexOf(value))}
                                    >
                                        {monthsList}
                                    </select>

                                    <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                                        {'>'}
                                    </button>
                                </DatePickerHeader>
                            )
                        }}
                    />
                )}
            />
        </CustomDatePickerWrapper>
    )
})
CustomDatePicker.displayName = 'CustomDatePicker'
