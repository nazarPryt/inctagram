import {ReactNode} from 'react'

import {useAppSelector} from '@/shared/hooks/reduxHooks'
import {GlobalStyles, ToastContainerStyled, darkTheme, lightTheme} from '@nazar-pryt/inctagram-ui-kit'
import {Inter} from 'next/font/google'
import {ThemeProvider} from 'styled-components'

const inter = Inter({subsets: ['latin']})

export function Theme({children}: {children: ReactNode}) {
    const theme = useAppSelector(state => state.app.theme)

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <style global jsx>{`
                html {
                    font-family: ${inter.style.fontFamily};
                }
            `}</style>
            <GlobalStyles />
            {children}
            <ToastContainerStyled
                autoClose={5000}
                closeOnClick
                draggable
                hideProgressBar={false}
                newestOnTop={false}
                pauseOnFocusLoss
                pauseOnHover
                position={'bottom-left'}
                rtl={false}
            />
        </ThemeProvider>
    )
}
