import styled from 'styled-components'

export const ControlledDatePickerStyled = styled.div`
    .react-datepicker__header,
    .react-datepicker,
    .react-datepicker__today-button {
        background-color: ${props => props.theme.bodyColor[500]};
    }

    .react-datepicker__current-month {
        height: 50px;
    }

    .react-datepicker__current-month,
    .react-datepicker__day--disabled {
        color: ${props => props.theme.textColor[100]} !important;
    }

    .react-datepicker__navigation--previous {
        background-color: #4c4c4c;
        left: 166px;
    }

    .react-datepicker__navigation {
        width: 36px;
        height: 36px;
        border-radius: 50%;

        transform: translate(-20%, 35%);
    }

    .react-datepicker__navigation--next {
        background-color: #4c4c4c;
    }

    .react-datepicker__current-month {
        display: flex;
        padding-left: 30px;
        align-items: center;
    }

    .react-datepicker__navigation-icon--previous::before {
        transform: rotate(225deg);
        right: -5px;
        top: 8px;
    }

    .react-datepicker__navigation-icon--next::before {
        transform: rotate(45deg);
        left: -5px;
        top: 8px;
    }

    .react-datepicker-popper {
        width: 300px;
        padding: 0;
    }

    .react-datepicker__month-container {
        border-radius: 0;
    }

    .react-datepicker__day {
        color: ${props => props.theme.textColor[100]} !important;
    }
    .react-datepicker__day:hover {
        color: ${props => props.theme.bodyColor[500]} !important;
    }

    .react-datepicker__day--outside-month {
        color: rgba(76, 76, 76, 0.71) !important;
    }

    .react-datepicker__calendar-icon {
        width: 18px;
        height: 20px;
    }

    input {
        width: 100%;
        height: 36px;
        position: relative;
        padding: 5px;
        font-size: 16px;
        border: 1px solid ${props => props.theme.bodyColor[300]};
        outline: none !important;
    }

    .react-datepicker__day--selected,
    .react-datepicker__day--today {
        border-radius: 50%;
        background-color: #4283f6;
    }

    input,
    .react-datepicker-ignore-onclickoutside {
        background-color: ${props => props.theme.bodyColor[500]};

        color: ${props => props.theme.textColor[100]};
    }

    .react-datepicker__triangle {
        display: none;
    }

    .react-datepicker__day-name,
    .react-datepicker__day {
        color: #4c4c4c;
    }
`
