// eslint-disable-next-line import/no-extraneous-dependencies
import { Decorator } from '@storybook/react'
import { ThemeProvider } from 'styled-components'

import { darkTheme } from '_app/themes/darkTheme'
import { GlobalStyle } from '_app/themes/GlobalStyle'
import { lightTheme } from '_app/themes/lightTheme'

const THEMES = {
  light: lightTheme,
  dark: darkTheme,
}

export const withThemeDecorator: Decorator = (Story, context) => {
  const { theme } = context.globals

  return (
    // TODO ts-ignore
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <ThemeProvider theme={THEMES[theme] || THEMES.light}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  )
}
