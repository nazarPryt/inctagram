import {BackToPreviousIcon} from './BackToPreviousIcon'
import {BackToPreviousWrapper} from './BackToPrevious.styled'

type PropsType = {
    title: string
    href: string
}
export const BackToPrevious = ({title, href}: PropsType) => {
    return (
        <BackToPreviousWrapper href={href}>
            <BackToPreviousIcon />
            <span>{title}</span>
        </BackToPreviousWrapper>
    )
}
