import styled, {keyframes} from 'styled-components'

const inputHighlighter = keyframes`
  from {
    background:#5264AE;
  }

  to {
    width:0; 
    background:transparent;
  }
`

export const Wrapper = styled.div`
    position: relative;

    width: 300px;
    input {
        font-size: 18px;
        padding: 10px 10px 10px 5px;
        display: block;
        width: 100%;
        background-color: inherit;
        color: ${({theme}) => theme.textColor};
        border: none;
        border-bottom: 1px solid #757575;
    }
    input:focus {
        outline: none;
    }

    /* LABEL ======================================= */
    label {
        color: #999;
        font-size: 18px;
        font-weight: normal;
        position: absolute;
        pointer-events: none;
        left: 5px;
        top: 10px;
        transition: 0.2s ease all;
    }

    /* active state */
    //input:valid ~ label,
    input:focus ~ label {
        top: -3px;
        font-size: 14px;
        color: #5264ae;
    }

    /* BOTTOM BARS ================================= */
    .bar {
        position: relative;
        display: block;
        width: 100%;
    }
    .bar:before,
    .bar:after {
        content: '';
        height: 2px;
        width: 0;
        bottom: 1px;
        position: absolute;
        background: #5264ae;
        transition: 0.2s ease all;
    }
    .bar:before {
        left: 50%;
    }
    .bar:after {
        right: 50%;
    }

    /* active state */
    input:focus ~ .bar:before,
    input:focus ~ .bar:after {
        width: 50%;
    }

    /* HIGHLIGHTER ================================== */
    .highlight {
        position: absolute;
        height: 60%;
        width: 100px;
        top: 25%;
        left: 0;
        pointer-events: none;
        opacity: 0.5;
    }

    /* active state */
    input:focus ~ .highlight {
        animation: ${inputHighlighter} 0.3s ease;
    }
`
