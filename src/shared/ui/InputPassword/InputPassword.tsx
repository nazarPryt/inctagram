import { ComponentProps, forwardRef, useState } from 'react'

import { Eye } from '../../assets/icons/Eye'
import { EyeOff } from '../../assets/icons/EyeOff'
import { IconButton } from '../IconButton/IconButton'
import { Wrapper } from '../InputText/InputText.styled'

type DefaultInputPropsType = ComponentProps<'input'>

type InputProps = DefaultInputPropsType & {
  label?: string
  error?: string
}
export const InputPassword = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const [see, setSee] = useState(false)

  const handleShowPassword = (): void => {
    setSee(!see)
  }

  return (
    <Wrapper>
      <input ref={ref} type={see ? 'text' : 'password'} {...props} required />
      <span className="highlight" />
      <span className="bar" />
      {see ? (
        <IconButton className="eye" onClick={handleShowPassword}>
          <EyeOff />
        </IconButton>
      ) : (
        <IconButton className="eye" onClick={handleShowPassword}>
          <Eye />
        </IconButton>
      )}
      <span className="error">{props.error}</span>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label>{props.label}</label>
    </Wrapper>
  )
})
InputPassword.displayName = 'InputPassword' // https://bobbyhadz.com/blog/react-component-is-missing-display-name
