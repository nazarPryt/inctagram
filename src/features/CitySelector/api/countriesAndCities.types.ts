export type CountriesAndCitiesResponseApiType<T> = {
    data: Array<T>
    error: boolean
    msg: string
}

export type CountryType = {
    flag: string
    iso2: string
    iso3: string
    name: string
}
