'use client'
import React, {ComponentProps, forwardRef, useState} from 'react'

import {FieldError} from 'react-hook-form'
import {Wrapper} from '../InputText/InputText.styled'
import EyeWhite from './../../assets/icons/eyeWhite.svg'
import EyeBlack from './../../assets/icons/eyeBlack.svg'
import EyeOffBlack from './../../assets/icons/eyeOffBlack.svg'
import EyeOffWhite from './../../assets/icons/eyeOffWhite.svg'
import {IconButton} from '../IconButton/IconButton'
import {useAppSelector} from '../../hooks/useAppDispatch'

type DefaultInputPropsType = ComponentProps<'input'>

type InputProps = DefaultInputPropsType & {
    label?: string
    error?: FieldError | undefined
}
export const InputPassword = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const theme = useAppSelector(state => state.appReducer.theme)
    const [see, setSee] = useState(false)

    const handleShowPassword = () => {
        setSee(!see)
    }
    return (
        <Wrapper>
            <input ref={ref} type={see ? 'text' : 'password'} {...props} required />
            <span className='highlight'></span>
            <span className='bar'></span>
            {see ? (
                <IconButton className='eye' onClick={handleShowPassword}>
                    {theme === 'dark' ? <EyeOffWhite /> : <EyeOffBlack />}
                </IconButton>
            ) : (
                <IconButton className='eye' onClick={handleShowPassword}>
                    {theme === 'dark' ? <EyeWhite /> : <EyeBlack />}
                </IconButton>
            )}
            <label>{props.label}</label>
        </Wrapper>
    )
})
InputPassword.displayName = 'InputPassword' //https://bobbyhadz.com/blog/react-component-is-missing-display-name
