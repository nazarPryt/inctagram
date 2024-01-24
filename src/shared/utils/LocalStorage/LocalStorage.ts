'use client'
export const ACCESS_TOKEN = 'ACCESS_TOKEN'

export type LocalStorageType = {
    accessToken: string
}

export const saveLocalStorage = async (dataStorage: LocalStorageType) => {
    try {
        const dataNormalize = JSON.stringify(dataStorage.accessToken)

        await localStorage.setItem(ACCESS_TOKEN, dataNormalize)
    } catch (e) {
        console.log(e)
    }
}

export const loadLocalStorage = () => {
    try {
        const data = localStorage.getItem(ACCESS_TOKEN)

        if (!data) {
            return undefined
        }

        return data
    } catch (e) {
        console.log(e)
    }
}
