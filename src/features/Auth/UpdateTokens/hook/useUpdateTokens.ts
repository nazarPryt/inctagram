import cookie from 'react-cookies'

import {appSettings} from '@/_app/AppSettings'
import {useUpdateTokensMutation} from '@/features/Auth/UpdateTokens/api/updateTokens.api'

export const useUpdateTokens = () => {
    const accessToken = cookie.load(appSettings.constants.accessToken)

    const [updateTokens, {isLoading}] = useUpdateTokensMutation()

    const decodeJWT = (token: string) => {
        try {
            // Decode the JWT token
            const payload = token.split('.')[1]

            return JSON.parse(atob(payload))
        } catch (error) {
            console.log('decodeJWT: Failed to decode token')

            return null // Failed to decode token
        }
    }

    const isTokenExpired = (token: string) => {
        if (!token) {
            return true
        } // Token is not present

        const decodedToken = decodeJWT(token)

        if (!decodedToken || !decodedToken.exp) {
            return true
        } // Token decoding failed or expiration time is not present

        const currentTime = Math.floor(Date.now() / 1000) // Current time in seconds
        const expirationTime = decodedToken.exp

        return expirationTime < currentTime
    }
}
