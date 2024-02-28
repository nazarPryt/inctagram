import {useEffect} from 'react'
import {UseFormGetValues} from 'react-hook-form'

import {GeneralInformationFormData} from '@/features/User/GeneralInformation/hook/GeneralInformationSchema'
import {SelectOptionType} from '@nazar-pryt/inctagram-ui-kit'

import {useGetAllCountriesQuery, useGetCountryCitiesMutation} from '../api'
import {CountryIcon} from '../ui/CountryIcon'

type PropsType = {
    getValues: UseFormGetValues<GeneralInformationFormData>
}
export const useGetCountries = ({getValues}: PropsType) => {
    const {data, isLoading: isLoadingCountries} = useGetAllCountriesQuery()
    const [getCities, {isLoading: isLoadingCities}] = useGetCountryCitiesMutation()

    // const country = getValues('country')
    //
    // console.log('country', country)
    // const cityOptions: SelectOptionType[] = []
    let countryOptions: SelectOptionType[] = []

    if (data && data.data.length) {
        countryOptions = data.data.map(country => {
            return {
                icon: <CountryIcon country={country} />,
                label: country.name,
                value: country.name,
            }
        })
    }

    return {
        countryOptions,
        getCities,
        isLoadingCities,
        isLoadingCountries,
    }
}
