import {SelectOptionType} from '@nazar-pryt/inctagram-ui-kit'

import {useGetAllCountriesQuery} from '../api'
import {CountryIcon} from '../ui/CountryIcon'

export const useGetCountries = () => {
    const {data, isLoading} = useGetAllCountriesQuery()

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
        isLoading,
    }
}
