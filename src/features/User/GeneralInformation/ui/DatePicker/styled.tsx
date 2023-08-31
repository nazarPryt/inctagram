import styled from 'styled-components'

export const CustomDatePickerWrapper = styled.div`
  .react-datepicker__header,
  .react-datepicker,
  .react-datepicker__today-button {
    background-color: ${props => props.theme.bodyColor[900]};
  }

  .react-datepicker__current-month {
    display: flex;
    align-items: center;
    height: 50px;
    padding-left: 30px;
  }

  .react-datepicker__current-month,
  .react-datepicker__day--disabled {
    color: ${props => props.theme.textColor[100]} !important;
  }

  .react-datepicker__navigation--previous {
    left: 166px;
    background-color: #4c4c4c;
  }

  .react-datepicker__navigation {
    transform: translate(-20%, 35%);
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }

  .react-datepicker__navigation--next {
    background-color: #4c4c4c;
  }

  .react-datepicker__navigation-icon--previous::before {
    top: 8px;
    right: -5px;
    transform: rotate(225deg);
  }

  .react-datepicker__navigation-icon--next::before {
    top: 8px;
    left: -5px;
    transform: rotate(45deg);
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

  .react-datepicker__day-name,
  .react-datepicker__day {
    color: #4c4c4c;
  }

  .react-datepicker__day:hover {
    color: ${props => props.theme.bodyColor[900]} !important;
  }

  .react-datepicker__day--outside-month {
    color: rgb(76 76 76 / 71%) !important;
  }

  .react-datepicker__calendar-icon {
    width: 18px;
    height: 20px;
  }

  input {
    position: relative;

    width: 158px;
    height: 36px;
    padding: 5px;

    font-size: 16px;

    border: 0.5px solid ${props => props.theme.bodyColor[300]};
    outline: none !important;
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--today {
    background-color: #4283f6;
    border-radius: 50%;
  }

  input,
  .react-datepicker-ignore-onclickoutside {
    color: ${props => props.theme.textColor[100]};
    background-color: ${props => props.theme.bodyColor[900]};
  }

  .react-datepicker__triangle {
    display: none;
  }
`

export const DatePickerHeader = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
`
