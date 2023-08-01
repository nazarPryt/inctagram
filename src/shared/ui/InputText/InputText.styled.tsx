import styled from 'styled-components'

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 400px;
    padding: 10px 0;
    margin-bottom: 5px;

    textarea {
        resize: none;
    }

    input,
    textarea {
        background: none;
        color: ${props => props.theme.textColor['100']};
        font-size: 18px;
        padding: 10px 10px 10px 5px;
        display: block;
        width: 100%;
        border: none;
        border-radius: 0;
        border-bottom: 1px solid mix(white, #424242, 70%);

        &:focus {
            outline: none;
        }

        &:focus ~ label,
        &:valid ~ label {
            top: -3px;
            font-size: 12px;
            color: ${props => props.theme.textColor['100']};
            letter-spacing: 1px;
        }

        &:focus ~ .bar:before {
            width: 100%;
        }
    }

    input[type='password'] {
        letter-spacing: 1px;
    }

    label {
        color: ${props => props.theme.textColor['100']};
        font-size: 16px;
        font-weight: normal;
        position: absolute;
        pointer-events: none;
        left: 5px;
        top: 10px;
        transition: 300ms ease all;
    }

    .bar {
        position: relative;
        display: block;
        width: 100%;
        border-bottom: 1px solid ${props => props.theme.bodyColor['300']};

        &:before {
            content: '';
            height: 2px;
            width: 0;
            bottom: 0;
            position: absolute;
            background: ${props => props.theme.palette.primary['300']};
            transition: 300ms ease all;
            left: 0;
        }
    }

    .eye {
        position: absolute;
        right: 10px;
        top: 4px;
    }

    .error {
        position: absolute;
        top: 90%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        color: red;
    }
`
