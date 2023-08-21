import React from 'react'
import {Aside} from 'widgets/Aside/Aside'
import {BurgerMenuStyled} from 'features/Burger/ui/BurgerMenu/BurgerMenu.styled'

export const BurgerMenu = () => {
    return (
        <BurgerMenuStyled>
            <Aside />
        </BurgerMenuStyled>
    )
}
