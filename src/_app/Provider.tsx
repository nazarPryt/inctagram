'use client'

import React, { ReactNode } from 'react'

import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { store } from '_app/store/store'
import { darkTheme } from '_app/themes/darkTheme'
import { GlobalStyle } from '_app/themes/GlobalStyle'
import { lightTheme } from '_app/themes/lightTheme'
import { useAppSelector } from 'shared/hooks/reduxHooks'
import StyledComponentsRegistry from 'shared/lib/StyledComponentsRegistry'

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <StyledComponentsRegistry>
      <Provider store={store}>
        <ThemeStyled>{children}</ThemeStyled>
      </Provider>
    </StyledComponentsRegistry>
  )
}

export const ThemeStyled = ({ children }: { children: ReactNode }) => {
  const theme = useAppSelector(state => state.app.theme)

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}
