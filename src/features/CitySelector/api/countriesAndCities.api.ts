import {countryApi} from '@/_app/Api/client/rtkQuery'

import {CountriesResponseType} from './countriesAndCities.types'

export const countriesAndCitiesApi = countryApi.injectEndpoints({
    endpoints: build => ({
        getAllCountries: build.query<CountriesResponseType, void>({
            providesTags: ['AllCountries'],
            query: () => ({
                url: `countries/flag/images`,
            }),
        }),
    }),
    overrideExisting: true,
})

export const {useGetAllCountriesQuery} = countriesAndCitiesApi
