import 'styled-components'
import {NextFont} from 'next/dist/compiled/@next/font'
import {Interpolation} from 'styled-components/dist/types'
import {ThemeAppType} from 'redux/appSlice'
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
interface ITypographyType {
    Large: Interpolation<object>
    // H1: ITypographyStyles
    // H2: ITypographyStyles
    // H3: ITypographyStyles
    // 'regular_text 16': ITypographyStyles
    // 'Bold_text 16': ITypographyStyles
    // 'regular_text 14': ITypographyStyles
    // 'Medium_text 14': ITypographyStyles
    // 'bold_text 14': ITypographyStyles
    // small_text: ITypographyStyles
    // 'Semi-bold small_text': ITypographyStyles
    // regular_link: ITypographyStyles
    // small_link: ITypographyStyles
}

declare module 'styled-components' {
    export interface DefaultTheme {
        name: ThemeAppType
        borderRadius: string
        bodyColor: string
        textColor: string
        //typography: ITypographyType
        palette: {
            common: {
                black: string
                white: string
            }
            primary: IPalette
            success: IPalette
            danger: IPalette
            warning: IPalette
            dark: IPalette
            light: IPalette
        }
    }
}
