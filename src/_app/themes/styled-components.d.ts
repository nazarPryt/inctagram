import 'styled-components'
import {NextFont} from 'next/dist/compiled/@next/font'
import {ThemeAppType} from '_app/store/appSlice'

interface IPalette {
    100: string
    300: string
    500: string
    700: string
    900: string
}

interface ITypographyStyles {
    'line-height': string
    'font-size': string
    'font-family': NextFont
    'font-weight': number
}

declare module 'styled-components' {
    export interface DefaultTheme {
        name: ThemeAppType
        borderRadius: string
        bodyColor: IPalette
        textColor: IPalette
        //typography: ITypographyType
        palette: {
            // common: {
            //     black: string
            //     white: string
            // }
            primary: IPalette
            success: IPalette
            danger: IPalette
            warning: IPalette
            // dark: IPalette
            // light: IPalette
        }
    }
}
