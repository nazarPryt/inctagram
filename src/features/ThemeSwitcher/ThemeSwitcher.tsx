import {useEffect, useState} from 'react'

import {setThemeAppAC} from '@/_app/Store/slices/appSlice'
import {useAppDispatch, useAppSelector} from '@/shared/hooks/reduxHooks'
import {IconButton, MoonIcon, SunIcon, ThemeAppType} from '@nazar-pryt/inctagram-ui-kit'

export const ThemeSwitcher = () => {
    const dispatch = useAppDispatch()
    const themeState = useAppSelector(state => state.app.theme)
    const [themeApp, setThemeApp] = useState(themeState)
    const theme = themeApp === 'light' ? 'dark' : 'light'

    const handleThemeChange = () => {
        dispatch(setThemeAppAC({theme}))
        setThemeApp(theme as ThemeAppType)
    }

    useEffect(() => {
        const themeLocal = localStorage.getItem('themeSwitcher')

        if (themeLocal) {
            setThemeApp(themeLocal as ThemeAppType)
        }
    }, [themeApp])

    return (
        <>
            {theme === 'light' ? (
                <IconButton onClick={handleThemeChange}>
                    <SunIcon />
                </IconButton>
            ) : (
                <IconButton onClick={handleThemeChange}>
                    <MoonIcon />
                </IconButton>
            )}
        </>
    )
}
