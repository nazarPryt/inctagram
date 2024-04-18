import {appSettings} from './AppSettings'
import {AppSettingsSchema} from './AppSettings.schema'

export const AppSettingsZodValidation = () => {
    try {
        AppSettingsSchema.parse(appSettings)
        //console.log('App Settings OK')
    } catch (error) {
        console.error('App Settings configurations error:', error)
        throw error
    }
}
