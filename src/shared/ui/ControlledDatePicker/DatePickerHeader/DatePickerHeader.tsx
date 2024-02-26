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

    // const yearsList = years.map(option => (
    //     <option key={option} value={option}>
    //         {option}
    //     </option>
    // ))
    //
    // const monthsList = months.map(option => (
    //     <option key={option} value={option}>
    //         {option}
    //     </option>
    // ))

    return (
        <DatePickerHeaderStyled>
            <IconButton disabled={prevMonthButtonDisabled} onClick={decreaseMonth} type={'button'}>
                <ArrowBack />
            </IconButton>
            {/*<select*/}
            {/*    onChange={({target: {value}}) => {*/}
            {/*        console.log('month', value)*/}
            {/*        changeMonth(months.indexOf(value))*/}
            {/*    }}*/}
            {/*    value={months[getMonth(date)]}*/}
            {/*>*/}
            {/*    {monthsList}*/}
            {/*</select>*/}

            {/*<select*/}
            {/*    onChange={({target: {value}}) => {*/}
            {/*        console.log('value', value)*/}
            {/*        changeYear(Number(value))*/}
            {/*    }}*/}
            {/*    value={getYear(date)}*/}
            {/*>*/}
            {/*    {yearsList}*/}
            {/*</select>*/}

            <Select
                onChange={(value: string) => {
                    console.log('month-value: ', value)
                    changeMonth(months.indexOf(value))
                }}
                options={monthsList}
                value={months[getMonth(date)]}
            />
            <Select
                onChange={(value: any) => {
                    console.log('value', value)

                    changeYear(Number(value))
                }}
                options={yearsList}
                value={getYear(date)}
            />
            <IconButton disabled={nextMonthButtonDisabled} onClick={increaseMonth} type={'button'}>
                <ArrowForward />
            </IconButton>
        </DatePickerHeaderStyled>
    )
}
