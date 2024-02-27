import {useState} from 'react'
import {Control, Controller} from 'react-hook-form'

import {Select, SelectOptionType} from '@nazar-pryt/inctagram-ui-kit'

import {CitySelectorStyled} from './CitySelector.styled'

type CitySelectorType = {
    control: Control<any>
    error?: string
}
export const CitySelector = ({control, error}: CitySelectorType) => {
    const [city, setCity] = useState([])

    const isError = !!error?.length

    const countryOptions: SelectOptionType[] = [
        {label: 'country', value: 'country'},
        {label: 'country2', value: 'country2'},
    ]
    const cityOptions: SelectOptionType[] = [
        {label: 'city', value: 'city'},
        {label: 'city2', value: 'city2'},
    ]

    return (
        <CitySelectorStyled>
            <Controller
                control={control}
                name={'country'}
                render={({field: {onBlur, onChange, value}}) => {
                    return (
                        <label>
                            Select your country
                            <Select onChange={onChange} options={countryOptions} placeholder={value} value={value} />
                        </label>
                    )
                }}
            ></Controller>

            <Controller
                control={control}
                name={'city'}
                render={({field: {onBlur, onChange, value}}) => {
                    return (
                        <label>
                            Select your city
                            <Select onChange={onChange} options={cityOptions} placeholder={value} value={value} />
                        </label>
                    )
                }}
            ></Controller>
            {isError && <p>{error}</p>}
        </CitySelectorStyled>
    )
}
