import {setThemeAppAC} from '@/_app/Store/slices/appSlice'
import {useAppDispatch, useAppSelector} from '@/shared/hooks/reduxHooks'
import {IconButton, MoonIcon, SunIcon} from '@nazar-pryt/inctagram-ui-kit'

export const ThemeSwitcher = () => {
    const dispatch = useAppDispatch()
    const themeApp = useAppSelector(state => state.app.theme)

    const theme = themeApp === 'light' ? 'dark' : 'light'

    const handleThemeChange = () => {
        dispatch(setThemeAppAC({theme}))
    }

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
