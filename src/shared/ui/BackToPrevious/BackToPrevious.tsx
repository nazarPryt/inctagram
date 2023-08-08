import {BackToPreviousIcon} from './BackToPreviousIcon'
import {BackToPreviousWrapper} from './BackToPrevious.styled'

type BackToPreviousPropsType = {
    title: string
}
export const BackToPrevious = (props: BackToPreviousPropsType) => {
    const {title} = props
    return (
        <BackToPreviousWrapper>
            <BackToPreviousIcon />
            <span>{title}</span>
        </BackToPreviousWrapper>
    )
}
