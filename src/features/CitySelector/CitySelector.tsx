import {useState} from 'react'
import {Control, Controller} from 'react-hook-form'

import {Select, SelectOptionType} from '@nazar-pryt/inctagram-ui-kit'

import {GeneralInformationFormData} from '../User/GeneralInformation/hook/GeneralInformationSchema'
import {CitySelectorStyled} from './CitySelector.styled'
import {useGetCountries} from './hook/useGetCountries'

type CitySelectorType = {
    control: Control<GeneralInformationFormData>
    error?: string
}
export const CitySelector = ({control, error}: CitySelectorType) => {
    const isError = !!error?.length
    const cityOptions: SelectOptionType[] = [
        {label: 'city', value: 'city'},
        {label: 'city2', value: 'city2'},
    ]
    const {countryOptions, isLoading} = useGetCountries()

    return (
        <CitySelectorStyled>
            {!isLoading && (
                <Controller
                    control={control}
                    name={'country'}
                    render={({field: {onChange, value}}) => {
                        return (
                            <label>
                                Select country
                                <Select
                                    onChange={onChange}
                                    options={countryOptions}
                                    placeholder={value}
                                    value={value}
                                />
                            </label>
                        )
                    }}
                />
            )}

            <Controller
                control={control}
                name={'city'}
                render={({field: {onChange, value}}) => {
                    return (
                        <label>
                            Select city
                            <Select onChange={onChange} options={cityOptions} placeholder={value} value={value} />
                        </label>
                    )
                }}
            ></Controller>
            {isError && <p>{error}</p>}
        </CitySelectorStyled>
    )
}
