'use client'
import {store} from '_app/store/store'
import {Provider} from 'react-redux'
import React, {ReactNode} from 'react'
import {lightTheme} from '_app/themes/lightTheme'
import {darkTheme} from '_app/themes/darkTheme'
import {GlobalStyle} from '_app/themes/GlobalStyle'
import {ThemeProvider} from 'styled-components'
import {useAppSelector} from 'shared/hooks/reduxHooks'
import StyledComponentsRegistry from 'shared/lib/StyledComponentsRegistry'
import ProtectedRoute from '_app/ProtectedRoutes/ProtectedRoutes'

export function Providers({children}: {children: ReactNode}) {
    return (
        // <ProtectedRoute>
        <StyledComponentsRegistry>
            <Provider store={store}>
                <ThemeStyled>{children}</ThemeStyled>
            </Provider>
        </StyledComponentsRegistry>
        // </ProtectedRoute>
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
