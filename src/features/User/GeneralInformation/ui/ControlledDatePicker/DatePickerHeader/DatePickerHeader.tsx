import {ReactDatePickerCustomHeaderProps} from 'react-datepicker'

import {ArrowBack, ArrowForward, IconButton, Select, SelectOptionType} from '@nazar-pryt/inctagram-ui-kit'
import {getMonth, getYear} from 'date-fns/fp'
import range from 'lodash/range'

import {months} from '../constants'
import {DatePickerHeaderStyled} from './DatePickerHeader.styled'

export const DatePickerHeader = ({
    changeMonth,
    changeYear,
    date,
    decreaseMonth,
    increaseMonth,
    nextMonthButtonDisabled,
    prevMonthButtonDisabled,
}: Partial<ReactDatePickerCustomHeaderProps>) => {
    const years = range(1923, getYear(new Date()) + 1, 1)

    const yearsList: SelectOptionType[] = years.map(year => ({label: year, value: year}))
    const monthsList: SelectOptionType[] = months.map(month => ({label: month, value: month}))

    return (
        <DatePickerHeaderStyled>
            <IconButton disabled={prevMonthButtonDisabled} onClick={decreaseMonth} type={'button'}>
                <ArrowBack />
            </IconButton>

            <Select
                onChange={(value: string) => {
                    if (changeMonth) {
                        changeMonth(months.indexOf(value))
                    }
                }}
                options={monthsList}
                portal={false}
                value={months[getMonth(date as Date)]}
                width={150}
            />
            <Select
                onChange={(value: number) => {
                    if (changeYear) {
                        changeYear(Number(value))
                    }
                }}
                options={yearsList}
                portal={false}
                value={getYear(date as Date)}
                width={120}
            />

            <IconButton disabled={nextMonthButtonDisabled} onClick={increaseMonth} type={'button'}>
                <ArrowForward />
            </IconButton>
        </DatePickerHeaderStyled>
    )
}
