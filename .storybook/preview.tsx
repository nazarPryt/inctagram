import type {Preview} from '@storybook/react'

import {createGlobalStyle, ThemeProvider} from 'styled-components'
import {withThemeFromJSXProvider} from '@storybook/addon-styling'
import {lightTheme} from '../src/_app/themes/lightTheme'
import {darkTheme} from '../src/_app/themes/darkTheme'
import {withThemeDecorator} from '../src/storybook/decorators/withThemeDecorator'
// todo ---- DO NOT change this imports !!!

const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
`

const preview: Preview = {
    parameters: {
        actions: {argTypesRegex: '^on[A-Z].*'},
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },

    decorators: [
        withThemeFromJSXProvider({
            themes: {
                light: lightTheme,
                dark: darkTheme,
            },
            defaultTheme: 'light',
            Provider: ThemeProvider,
            GlobalStyles,
        }),
        withThemeDecorator,
    ],
}

export default preview
