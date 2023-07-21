'use client'
import {DefaultTheme} from 'styled-components'

export const lightTheme: DefaultTheme = {
    name: 'light',
    borderRadius: '4px',
    bodyColor: {
        100: '#FFFFFF',
        300: '#F7FBFF',
        500: '#EDF3FA',
        700: '#D5DAE0',
        900: '#BDC1C7',
    },
    textColor: {
        100: '#0E1720',
        300: '#131E2B',
        500: '#182636',
        700: '#46515E',
        900: '#747D86',
    },
    palette: {
        primary: {
            // 100: '#73A5FF',
            // 300: '#4C8DFF',
            // 500: '#397DF6',
            // 700: '#2F68CC',
            // 900: '#234E99',
            100: '#80FFBF',
            300: '#22E584',
            500: '#14CC70',
            700: '#0F9954',
            900: '#0A6638',
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
    },
}
