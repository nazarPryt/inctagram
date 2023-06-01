'use client'
import {DefaultTheme} from 'styled-components'
export const lightTheme: DefaultTheme = {
    name: 'default',
    borderRadius: '4px',
    bodyColor: '#ffffff',
    textColor: '#000000',
    palette: {
        common: {
            black: '#121212',
            white: '#ffffff',
        },
        primary: {
            100: '#73A5FF',
            300: '#4C8DFF',
            500: '#397DF6',
            700: '#2F68CC',
            900: '#234E99',
        },
        success: {
            100: '#80FFBF',
            300: '#22E584',
            500: '#14CC70',
            700: '#0F9954',
            900: '#0A6638',
        },
        danger: {
            100: '#FF8099',
            300: '#F23D61',
            500: '#CC1439',
            700: '#990F2B',
            900: '#660A1D',
        },
        warning: {
            100: '#FFD073',
            300: '#E5AC39',
            500: '#D99000',
            700: '#996600',
            900: '#664400',
        },
        dark: {
            100: '#747D86',
            300: '#46515E',
            500: '#182636',
            700: '#131E2B',
            900: '#0E1720',
        },
        light: {
            100: '#FFFFFF',
            300: '#F7FBFF',
            500: '#EDF3FA',
            700: '#D5DAE0',
            900: '#BDC1C7 ',
        },
    },
}
