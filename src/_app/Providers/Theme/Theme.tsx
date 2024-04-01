import {ReactNode, useEffect, useState} from 'react'

import {setThemeAppAC} from '@/_app/Store/slices/appSlice'
import {useAppDispatch, useAppSelector} from '@/shared/hooks/reduxHooks'
import {GlobalStyles, ToastContainerStyled, darkTheme, lightTheme} from '@nazar-pryt/inctagram-ui-kit'
import {Inter} from 'next/font/google'
import {ThemeProvider} from 'styled-components'

const inter = Inter({subsets: ['latin']})

export function Theme({children}: {children: ReactNode}) {
    const dispatch = useAppDispatch()

    const themeApp = useAppSelector(state => state.app.theme)
    const [theme, setTheme] = useState('')

    useEffect(() => {
        const themeLocal = localStorage.getItem('themeSwitcher')

        if (themeLocal) {
            setTheme(themeLocal)
            dispatch(setThemeAppAC({theme: themeLocal === 'light' ? 'light' : 'dark'}))
        }
    }, [themeApp])

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
