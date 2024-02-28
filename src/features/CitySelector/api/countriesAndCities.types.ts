export type CountriesResponseType = {
    data: CountryType[]
    error: boolean
    msg: string
}
export type CountryType = {
    flag: string
    iso2: string
    iso3: string
    name: string
}
