import {useEffect, useState} from 'react'
import {Control, Controller, UseFormGetValues, UseFormSetValue, UseFormWatch} from 'react-hook-form'

import {Select, SelectOptionType} from '@nazar-pryt/inctagram-ui-kit'

import {GeneralInformationFormData} from '../User/GeneralInformation/hook/GeneralInformationSchema'
import {CitySelectorStyled} from './CitySelector.styled'
import {useGetCountries} from './hook/useGetCountries'

type CitySelectorType = {
    control: Control<GeneralInformationFormData>
    error?: string
    getValues: UseFormGetValues<GeneralInformationFormData>
    setValue: UseFormSetValue<GeneralInformationFormData>
    watch: UseFormWatch<GeneralInformationFormData>
}
export const CitySelector = ({control, error, getValues, setValue, watch}: CitySelectorType) => {
    const [cityOptions, setCityOptions] = useState<SelectOptionType[]>([])
    const isError = !!error?.length

    const {countryOptions, getCities, isLoadingCities, isLoadingCountries} = useGetCountries({getValues})
    const country = getValues('country')
    const watchCountry = watch('country')

    // console.log('watchCountry', watchCountry)
    // console.log('country', country)

    useEffect(() => {
        getCities({country})
            .unwrap()
            .then(res => {
                const cityOptions = res.data.map(city => {
                    return {
                        label: city,
                        value: city,
                    }
                })

                setCityOptions(cityOptions)
            })
            .catch(e => {
                console.log(e)
            })
    }, [country])

    return (
        <CitySelectorStyled>
            {!isLoadingCountries && (
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

            {!isLoadingCities && watchCountry && (
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
            )}
            {isError && <p>{error}</p>}
        </CitySelectorStyled>
    )
}
