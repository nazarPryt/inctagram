import React, {ComponentProps, forwardRef} from 'react'
import {InputFileWrapper} from 'shared/components/InputFile/InputFile.styled'

type DefaultInputPropsType = ComponentProps<'input'>

type InputFileProps = DefaultInputPropsType & {
    title: string
}
export const InputFile = forwardRef<HTMLInputElement, InputFileProps>((props, ref) => {
    return (
        <InputFileWrapper htmlFor='InputFile'>
            <input type='file' id='InputFile' ref={ref} {...props} hidden />
            {props.title}
        </InputFileWrapper>
    )
})

InputFile.displayName = 'InputFile'
