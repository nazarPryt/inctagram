import { ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { BurgerButtonStyled } from 'features/Burger/ui/BurgerButton/BurgerButton.styled'

type DefaultButtonPropsType = ComponentPropsWithoutRef<'button'>

export const BurgerButton = forwardRef<HTMLButtonElement, DefaultButtonPropsType>((props, ref) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleChangeMenu = (): void => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <BurgerButtonStyled ref={ref} isMenuOpen={isMenuOpen} onClick={handleChangeMenu} {...props}>
      <span className="menu_button_line top" />
      <span className="menu_button_line mid" />
      <span className="menu_button_line botm" />
    </BurgerButtonStyled>
  )
})

BurgerButton.displayName = 'Burger'
