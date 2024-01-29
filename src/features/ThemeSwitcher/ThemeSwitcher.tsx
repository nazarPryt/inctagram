import {useAppDispatch, useAppSelector} from '@/shared/hooks/reduxHooks'
import {setThemeAppAC} from '@/shared/store/appSlice'
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
