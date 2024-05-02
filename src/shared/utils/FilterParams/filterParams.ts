export const filterAllParams = (params: Record<string, any>): Record<string, any> => {
    const filteredParams: {[key: string]: any} = {}

    for (const key in params) {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
            filteredParams[key] = params[key]
        }
    }

    return filteredParams
}
