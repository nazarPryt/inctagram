import styled from 'styled-components'

export const Main = styled.div`
    width: 100%;

    .trigger {
        all: unset;
        cursor: pointer;
        display: flex;
        gap: 12px;
        align-items: center;
        justify-content: space-between;

        box-sizing: border-box;
        height: 36px;
        padding: 6px 12px;

        font-size: ${props => props.theme.typography.fontSizeM};
        line-height: ${props => props.theme.typography.lineHeightM};
        color: ${props => props.theme.palette.light['100']};

        background-color: ${props => props.theme.palette.dark['700']};
        border: 1px solid ${props => props.theme.palette.dark['100']};
        border-radius: 0.125rem;
        &.primary {
            min-width: 13.125rem;
        }
        &[data-state='open'] {
            border-color: ${props => props.theme.palette.dark['100']};
            border-bottom: none;
            border-radius: 0.125rem 0.125rem 0 0;
        }

        span {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        &.pagination {
            min-width: 3.125rem;
            gap: 2px;
            height: 24px;
            padding: 0 2px 0 6px;
            font-size: ${props => props.theme.typography.fontSizeS};
        }

        &.error {
            border-color: ${props => props.theme.palette.danger['500']};
        }

        &:hover {
            background: ${props => props.theme.palette.dark['500']};
            border-color: ${props => props.theme.palette.dark['100']};
        }

        &:focus {
            border-color: ${props => props.theme.palette.primary['500']};
            //outline: 1px solid ${props => props.theme.palette.primary['500']};
        }

        &[data-placeholder] {
            color: ${props => props.theme.palette.light['100']};
        }

        &[data-disabled] {
            pointer-events: none;
            color: ${props => props.theme.palette.dark['300']};
        }

        .icon {
            width: 24px;
            height: 24px;
            transition: 0.2s;
            &.pagination {
                display: flex;
                width: 16px;
                height: 16px;
            }
            svg {
                color: ${props => props.theme.textColor};
            }
        }

        &[data-state='open'] {
            .icon {
                transform: rotate(180deg);
            }
        }
    }
    .content {
        position: relative;
        z-index: 500;

        display: flex;
        width: var(--radix-select-trigger-width);
        max-height: var(--radix-select-content-available-height);

        background-color: ${props => props.theme.palette.dark['900']};
        border: 1px solid ${props => props.theme.palette.dark['100']};
        border-radius: 0 0 0.125rem 0.125rem;

        &.pagination {
            width: var(--radix-select-trigger-width);
        }

        .item {
            display: flex;
            padding: 6px 12px;
            gap: 12px;
            font-size: ${props => props.theme.typography.fontSizeS};
            line-height: ${props => props.theme.typography.lineHeightM};
            color: ${props => props.theme.palette.light['100']};
            background-color: ${props => props.theme.palette.dark['900']};

            &.pagination {
                padding: 0 0 0 6px;
                font-size: ${props => props.theme.typography.fontSizeS};
                line-height: ${props => props.theme.typography.lineHeightM};
            }

            &[data-highlighted] {
                color: ${props => props.theme.palette.primary['500']};
                background-color: ${props => props.theme.palette.dark['300']};
                outline: none;
            }

            &[data-disabled] {
                pointer-events: none;
                color: ${props => props.theme.palette.dark['300']};
            }
        }
    }

    .label {
        display: block;
        font-size: ${props => props.theme.typography.fontSizeS};
        line-height: ${props => props.theme.typography.lineHeightM};
        color: ${props => props.theme.palette.dark['100']};

        &.disabled {
            color: ${props => props.theme.palette.dark['300']};
        }
    }
`
