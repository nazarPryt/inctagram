import styled from 'styled-components'

interface TypographyProps {
    fontSize?: string
    fontWeight?: string
    lineHeight?: string
}

const TypographyMixin = styled.p<TypographyProps>`
    color: ${props => props.theme.textColor['500']};
    white-space: pre-line;

    &.primary-color {
        color: ${props => props.theme.textColor['500']};
    }

    &.secondary-color {
        //color: ${props => props.theme.bodyColor['500']};
    }

    &.inherit-color {
        color: inherit;
    }

    &.error-color {
        color: ${props => props.theme.palette.danger['500']};
    }
`

export const H1 = styled(TypographyMixin)``

export const H2 = styled(TypographyMixin)``

export const H3 = styled(TypographyMixin)``

export const Large = styled(TypographyMixin)``

export const RegularText16 = styled(TypographyMixin)``

export const BoldText16 = styled(TypographyMixin)``

export const RegularText14 = styled(TypographyMixin)``

export const MediumText14 = styled(TypographyMixin)``

export const BoldText14 = styled(TypographyMixin)``

export const SmallText = styled(TypographyMixin)``
export const SemiBoldSmallText = styled(TypographyMixin)``

export const RegularLink = styled(TypographyMixin)`
    color: ${props => props.theme.palette.primary['500']};
    text-decoration-line: underline;
    cursor: pointer;
`

export const SmallLink = styled(TypographyMixin)`
    color: ${props => props.theme.palette.primary['500']};
    text-decoration-line: underline;
    cursor: pointer;
`

export const Error = styled(TypographyMixin)`
    color: ${props => props.theme.palette.danger['500']};
`

export const TypographyStyle = {
    BoldText14,
    BoldText16,
    Error,
    H1,
    H2,
    H3,
    Large,
    MediumText14,
    RegularLink,
    RegularText14,
    RegularText16,
    SemiBoldSmallText,
    SmallLink,
    SmallText,
}
