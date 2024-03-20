import {countryApi} from '@/_app/Api/client/rtkQuery'

import {CountriesAndCitiesResponseApiType, CountryType} from './countriesAndCities.types'

export const countriesAndCitiesApi = countryApi.injectEndpoints({
    endpoints: build => ({
        getAllCountries: build.query<CountriesAndCitiesResponseApiType<CountryType>, void>({
            providesTags: ['AllCountries'],
            query: () => ({
                url: `countries/flag/images`,
            }),
        }),
        getCountryCities: build.mutation<CountriesAndCitiesResponseApiType<string>, {country: string}>({
            invalidatesTags: ['CountryCities'],
            query: body => ({
                body,
                extraOptions: {maxRetries: 2},
                method: 'POST',
                redirect: 'follow',
                url: `countries/cities`,
            }),
        }),
    }),

    overrideExisting: true,
})

export const {useGetAllCountriesQuery, useGetCountryCitiesMutation} = countriesAndCitiesApi
