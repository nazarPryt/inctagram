import React, {useState} from 'react'
import {BurgerStyled} from 'features/Burger/ui/Burger.styled'

export const Burger = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    console.log(isMenuOpen)
    const handleChangeMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <BurgerStyled isMenuOpen={isMenuOpen} onClick={handleChangeMenu}>
            <span className='menu_button_line top'></span>
            <span className='menu_button_line mid'></span>
            <span className='menu_button_line botm'></span>
        </BurgerStyled>
    )
}
