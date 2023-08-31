import { ChangeEvent, forwardRef } from 'react'

import { getMonth, getYear } from 'date-fns/fp'
import range from 'lodash/range'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Control, Controller } from 'react-hook-form'

import { GeneralInformationFormData } from 'features/User/GeneralInformation/hook/GeneralInformationSchema'
import { months } from 'features/User/GeneralInformation/ui/DatePicker/constants'
import { CustomDatePickerWrapper, DatePickerHeader } from 'features/User/GeneralInformation/ui/DatePicker/styled'
import { useTranslation } from 'shared/hooks/useTranslation'

type DatePickerPropsType = {
  control: Control<GeneralInformationFormData, { dateOfBirthday: Date }>
}

export const CustomDatePicker = forwardRef<DatePicker, DatePickerPropsType>((props, ref) => {
  const { t } = useTranslation()
  const years = range(1923, getYear(new Date()) + 1, 1) // todo

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
        name="dateOfBirth"
        render={({ field }) => (
          <DatePicker
            ref={ref}
            dateFormat="dd.MM.yyyy"
            selected={field.value}
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
                  <button disabled={prevMonthButtonDisabled} type="button" onClick={decreaseMonth}>
                    {'<'}
                  </button>
                  <select value={getYear(date)} onChange={({ target: { value } }) => changeYear(Number(value))}>
                    {yearsList}
                  </select>

                  <select
                    value={months[getMonth(date)]}
                    onChange={({ target: { value } }) => changeMonth(months.indexOf(value))}
                  >
                    {monthsList}
                  </select>

                  <button disabled={nextMonthButtonDisabled} type="button" onClick={increaseMonth}>
                    {'>'}
                  </button>
                </DatePickerHeader>
              )
            }}
            onChange={date => field.onChange(date as ChangeEvent<Element> | Date)}
          />
        )}
      />
    </CustomDatePickerWrapper>
  )
})
CustomDatePicker.displayName = 'CustomDatePicker'
