import {ThemeProvider} from 'styled-components'

import {Decorator} from '@storybook/react'
import {lightTheme} from '_app/themes/lightTheme'
import {darkTheme} from '_app/themes/darkTheme'
import {GlobalStyle} from '_app/themes/GlobalStyle'

const THEMES = {
    light: lightTheme,
    dark: darkTheme,
}
export const withThemeDecorator: Decorator = (Story, context) => {
    const {theme} = context.globals
    return (
        // @ts-ignore
        <ThemeProvider theme={THEMES[theme] || THEMES['light']}>
            <GlobalStyle />
            <Story />
        </ThemeProvider>
    )
}
