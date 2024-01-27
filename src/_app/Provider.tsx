import {ReactNode} from 'react'
import {Provider} from 'react-redux'

import {store} from '@/_app/store/store'
import {useAppSelector} from '@/shared/hooks/reduxHooks'
import {GlobalStyles, darkTheme, lightTheme} from '@nazar-pryt/inctagram-ui-kit'
import {ThemeProvider} from 'styled-components'

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
            <GlobalStyles />
            {children}
        </ThemeProvider>
    )
}
