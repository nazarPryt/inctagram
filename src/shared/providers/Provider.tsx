import {ReactNode} from 'react'
import {Provider} from 'react-redux'

import {useAppSelector} from '@/shared/hooks/reduxHooks'
import {store} from '@/shared/store/store'
import {GlobalStyles, ToastContainerStyled, darkTheme, lightTheme} from '@nazar-pryt/inctagram-ui-kit'
import {Inter} from 'next/font/google'
import {ThemeProvider} from 'styled-components'

import 'react-loading-skeleton/dist/skeleton.css'
import 'react-toastify/dist/ReactToastify.css'

const inter = Inter({subsets: ['latin']})

export function Providers({children}: {children: ReactNode}) {
    return (
        <>
            <Provider store={store}>
                <ThemeStyled>{children}</ThemeStyled>
            </Provider>
        </>
    )
}

export function ThemeStyled({children}: {children: ReactNode}) {
    const theme = useAppSelector(state => state.app.theme)

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <link href={'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css'} rel={'stylesheet'} />
            <style global jsx>{`
                html {
                    font-family: ${inter.style.fontFamily};
                }
                body,
                header {
                    transition:
                        200ms background-color,
                        200ms color;
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