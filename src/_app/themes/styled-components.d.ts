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
// interface ITypographyType {
//     Large: Interpolation<object>
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
// }

interface ITypographyType {
    fontFamilyPrimary: string

    // line heights
    lineHeightS: string
    lineHeightM: string
    lineHeightL: string

    // font sizes
    fontSizeXS: string
    fontSizeS: string
    fontSizeM: string
    fontSizeL: string
    fontSizeXL: string
    fontSizeXXL: string

    // font weights
    fontWeightRegular: number
    fontWeightMedium: number
    fontWeightSemiBold: number
    fontWeightBold: number
}

declare module 'styled-components' {
    export interface DefaultTheme {
        name: ThemeAppType
        borderRadius: string
        bodyColor: IPalette
        textColor: IPalette
        typography: ITypographyType
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
