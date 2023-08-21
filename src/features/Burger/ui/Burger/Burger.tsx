import React, {ComponentPropsWithoutRef, useState} from 'react'
import {BurgerStyled} from 'features/Burger/ui/Burger/Burger.styled'

export const Burger = ({...rest}: ComponentPropsWithoutRef<'button'>) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    console.log(isMenuOpen)
    const handleChangeMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        // <BurgerStyled isMenuOpen={isMenuOpen} onClick={handleChangeMenu}>
        <BurgerStyled {...rest} isMenuOpen={isMenuOpen}>
            <span className='menu_button_line top'></span>
            <span className='menu_button_line mid'></span>
            <span className='menu_button_line botm'></span>
        </BurgerStyled>
    )
}
