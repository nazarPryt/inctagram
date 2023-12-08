import {store} from '_app/store/store'
import {Provider} from 'react-redux'
import {ReactNode} from 'react'
import {lightTheme} from '_app/themes/lightTheme'
import {darkTheme} from '_app/themes/darkTheme'
import {GlobalStyle} from '_app/themes/GlobalStyle'
import {ThemeProvider} from 'styled-components'
import {useAppSelector} from 'shared/hooks/reduxHooks'

export function Providers({children}: {children: ReactNode}) {
    return (
        <Provider store={store}>
            <ThemeStyled>{children}</ThemeStyled>
        </Provider>
    )
}

export function ThemeStyled({children}: {children: ReactNode}) {
    const theme = useAppSelector(state => state.app.theme)

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    )
}
