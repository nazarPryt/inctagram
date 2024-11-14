import {EndMessageScrollingStyled} from '@/shared/ui/EndMessageScrolling/EndMessageScrolling.styled'

export const EndMessageScrolling = ({text}: {text: string}) => {
    return (
        <EndMessageScrollingStyled>
            <b>{text}</b>
        </EndMessageScrollingStyled>
    )
}
