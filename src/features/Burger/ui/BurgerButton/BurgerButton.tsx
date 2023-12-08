import {ComponentPropsWithoutRef, forwardRef, useState} from 'react'
import {BurgerButtonStyled} from 'features/Burger/ui/BurgerButton/BurgerButton.styled'

type DefaultButtonPropsType = ComponentPropsWithoutRef<'button'>

export const BurgerButton = forwardRef<HTMLButtonElement, DefaultButtonPropsType>((props, ref) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const handleChangeMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <BurgerButtonStyled isMenuOpen={isMenuOpen} ref={ref} onClick={handleChangeMenu} {...props}>
            <span className='menu_button_line top'></span>
            <span className='menu_button_line mid'></span>
            <span className='menu_button_line botm'></span>
        </BurgerButtonStyled>
    )
})

BurgerButton.displayName = 'Burger'
