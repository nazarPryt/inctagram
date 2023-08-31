import { ComponentProps, forwardRef } from 'react'

import { Wrapper } from '../InputText/InputText.styled'

type DefaultTextareaPropsType = ComponentProps<'textarea'>

type TextareaProps = DefaultTextareaPropsType & {
  label?: string
  error?: string
}
export const TextArea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
  return (
    <Wrapper>
      <textarea ref={ref} {...props} required />
      <span className="highlight" />
      <span className="bar" />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label>{props.label}</label>
    </Wrapper>
  )
})
TextArea.displayName = 'TextArea' // https://bobbyhadz.com/blog/react-component-is-missing-display-name
