import { setThemeAppAC } from '_app/store/appSlice'
import MoonIcon from 'shared/assets/icons/moon.svg'
import SunIcon from 'shared/assets/icons/sun.svg'
import { useAppDispatch, useAppSelector } from 'shared/hooks/reduxHooks'
import { IconButton } from 'shared/ui/IconButton/IconButton'

export const ThemeSwitcher = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const themeApp = useAppSelector(state => state.app.theme)

  const theme = themeApp === 'light' ? 'dark' : 'light'

  const handleThemeChange = (): void => {
    dispatch(setThemeAppAC({ theme }))
  }

  return (
    // TODO
    // eslint-disable-next-line react/jsx-no-useless-fragment
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
