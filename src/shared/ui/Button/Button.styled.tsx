import React, { Component, ComponentPropsWithoutRef, ElementType } from 'react'

import styled, { css } from 'styled-components'

export type ButtonVariantType = 'contained' | 'link' | 'outlined' | 'primary' | 'text'

export type ButtonProps<T extends ElementType = 'button'> = ComponentPropsWithoutRef<T> & {
  asT?: T
  children?: React.ReactNode
  variant?: ButtonVariantType
  fullwidth?: boolean
  className?: string
}
export const ComponentButton = styled(Component<ButtonProps>).withConfig({
  shouldForwardProp: prop => !['fullwidth'].includes(prop),
})<{ fullwidth?: boolean }>`
  width: ${props => (props.fullwidth ? '100%' : '')};
  cursor: pointer;

  padding: 6px 24px;

  font-family: Inter, sans-serif;
  font-size: 16px;

  font-weight: 600;
  letter-spacing: 0.7px;
  text-decoration: none;

  border: none;
  border-radius: 2px;

  ${props => {
    switch (props.variant) {
      case 'contained':
        return css`
          color: ${({ theme }) => theme.textColor[900]};
          background-color: ${({ theme }) => theme.bodyColor[100]};

          &:active {
            background-color: ${({ theme }) => theme.palette.primary[700]};
          }

          &:hover {
            color: ${({ theme }) => theme.textColor[300]};
            background-color: ${({ theme }) => theme.bodyColor[100]};
          }

          &:focus {
            color: ${({ theme }) => theme.textColor[900]};
            background-color: ${({ theme }) => theme.bodyColor[100]};
            border: 2px solid ${({ theme }) => theme.palette.primary[700]};
          }

          &:disabled {
            cursor: not-allowed;
            color: ${({ theme }) => theme.textColor[100]};
            background-color: ${({ theme }) => theme.bodyColor[900]};
          }
        `

      case 'text':
        return css`
          color: ${({ theme }) => theme.palette.primary[500]};
          background-color: inherit;

          &:active {
            color: ${({ theme }) => theme.palette.primary[700]};
          }

          &:hover {
            color: ${({ theme }) => theme.palette.primary[100]};
          }

          &:focus {
            color: ${({ theme }) => theme.palette.primary[500]};
            border: 2px solid ${({ theme }) => theme.palette.primary[700]};
          }

          &:disabled {
            cursor: not-allowed;
            color: ${({ theme }) => theme.palette.primary[900]};
          }
        `
      case 'outlined':
        return css`
          color: ${({ theme }) => theme.palette.primary[500]};
          background-color: inherit;
          border: 1px solid ${({ theme }) => theme.palette.primary[500]};

          &:active {
            color: ${({ theme }) => theme.palette.primary[700]};
          }

          &:hover {
            color: ${({ theme }) => theme.palette.primary[100]};
            border: 1px solid ${({ theme }) => theme.palette.primary[100]};
          }

          &:focus {
            color: ${({ theme }) => theme.palette.primary[700]};
            border: 2px solid ${props => props.theme.palette.primary[700]};
          }

          &:disabled {
            cursor: not-allowed;
            color: ${({ theme }) => theme.palette.primary[900]};
            border: 2px solid ${props => props.theme.palette.primary[900]};
          }
        `
      case 'primary':
        return css`
          color: white;
          background-color: ${({ theme }) => theme.palette.primary[500]};

          &:active {
            color: white;
            background-color: ${({ theme }) => theme.palette.primary[700]};
          }

          &:hover {
            color: white;
            background-color: ${({ theme }) => theme.palette.primary[100]};
          }

          &:focus {
            color: ${({ theme }) => theme.textColor[100]};
            background-color: ${({ theme }) => theme.palette.primary[700]};
          }

          &:disabled {
            cursor: not-allowed;
            color: ${({ theme }) => theme.textColor[900]};
            background-color: ${({ theme }) => theme.palette.primary[900]};
          }
        `
      default:
        return css`
          color: white;
          background-color: ${({ theme }) => theme.palette.primary[500]};

          &:active {
            color: white;
            background-color: ${({ theme }) => theme.palette.primary[700]};
          }

          &:hover {
            color: white;
            background-color: ${({ theme }) => theme.palette.primary[100]};
          }

          &:focus {
            color: ${({ theme }) => theme.textColor[100]};
            background-color: ${({ theme }) => theme.palette.primary[700]};
          }

          &:disabled {
            cursor: not-allowed;
            color: ${({ theme }) => theme.textColor[900]};
            background-color: ${({ theme }) => theme.palette.primary[900]};
          }
        `
    }
  }};
`
