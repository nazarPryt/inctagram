import {ComponentProps, forwardRef} from 'react'

import {Wrapper} from './InputText.styled'

type DefaultTextareaPropsType = ComponentProps<'textarea'>

export type TextareaProps = DefaultTextareaPropsType & {
    error?: string
    label?: string
}
export const TextArea = forwardRef<HTMLTextAreaElement, TextareaProps>(({error, label, ...rest}, ref) => {
    return (
        <Wrapper>
            <textarea ref={ref} {...rest} required />
            <span className={'highlight'}></span>
            <span className={'bar'}></span>
            <span className={'error'}>{error}</span>
            <label>{label}</label>
        </Wrapper>
    )
})
TextArea.displayName = 'TextArea' //https://bobbyhadz.com/blog/react-component-is-missing-display-name
