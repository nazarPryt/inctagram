import 'styled-components'
import { ThemeAppType } from '_app/store/appSlice'

interface IPalette {
  100: string
  300: string
  500: string
  700: string
  900: string
}

interface IViewPort {
  768: string // todo check & add relevant Screen sizes and breakpoints
}

interface ITypographyType {
  fontFamilyPrimary: string

  // line heights
  lineHeightXS: string
  lineHeightS: string
  lineHeightM: string
  lineHeightL: string

  // font sizes
  fontSizeNotification: string
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
    viewPort: IViewPort
    borderRadius: string
    bodyColor: IPalette
    textColor: IPalette
    typography: ITypographyType
    palette: {
      primary: IPalette
      success: IPalette
      danger: IPalette
      warning: IPalette
    }
  }
}
