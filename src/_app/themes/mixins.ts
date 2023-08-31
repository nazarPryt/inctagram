import { css } from 'styled-components'

class TypographyClass {
  Large() {
    return css`
      font-family: 'Inter Variable', sans-serif;
      font-weight: 600;
      font-size: 1.625rem;
      line-height: 2.25rem;
    `
  }

  H1() {
    return css`
      font-family: 'Inter Variable', sans-serif;
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 2.25rem;
    `
  }

  H2() {
    return css`
      font-family: 'Inter Variable', sans-serif;
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 1.5rem;
    `
  }

  H3() {
    return css`
      font-family: 'Inter Variable', sans-serif;
      font-weight: 700;
      font-size: 1rem;
      line-height: 2.25rem;
    `
  }

  regular_text_16() {
    return css`
      font-family: 'Inter Variable', sans-serif;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.5rem;
    `
  }

  Bold_text_16() {
    return css`
      font-family: 'Inter Variable', sans-serif;
      font-weight: 700;
      font-size: 1rem;
      line-height: 1.5rem;
    `
  }

  regular_text_14() {
    return css`
      font-family: 'Inter Variable', sans-serif;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 1.5rem;
    `
  }

  Medium_text_14() {
    return css`
      font-family: 'Inter Variable', sans-serif;
      font-weight: 500;
      font-size: 0.875rem;
      line-height: 1.5rem;
    `
  }

  bold_text_14() {
    return css`
      font-family: 'Inter Variable', sans-serif;
      font-weight: 700;
      font-size: 0.875rem;
      line-height: 1.5rem;
    `
  }

  small_text() {
    return css`
      font-family: 'Inter Variable', sans-serif;
      font-weight: 400;
      font-size: 0.75rem;
      line-height: 1rem;
    `
  }

  Semi_bold_small_text() {
    return css`
      font-family: 'Inter Variable', sans-serif;
      font-weight: 600;
      font-size: 0.75rem;
      line-height: 1rem;
    `
  }

  regular_link() {
    return css`
      font-family: 'Inter Variable', sans-serif;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 1.5rem;
    `
  }

  small_link() {
    return css`
      font-family: 'Inter Variable', sans-serif;
      font-weight: 400;
      font-size: 0.75rem;
      line-height: 1rem;
    `
  }
}
export const typography = new TypographyClass()
