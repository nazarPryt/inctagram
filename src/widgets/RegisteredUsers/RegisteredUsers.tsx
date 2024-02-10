import {RegisteredUsersStyled} from '@/widgets/RegisteredUsers/RegisteredUsers.styled'

type PropsType = {
    totalCount: number
}
export const RegisteredUsers = ({totalCount}: PropsType) => {
    const toShow = totalCount.toString().split('')

    return (
        <RegisteredUsersStyled>
            <h2>Registered users: </h2>
            <div className={'totalCountBox'}>
                <span>0</span>
                <span>0</span>
                {toShow.map((number, index) => {
                    return <span key={index}>{number}</span>
                })}
            </div>
        </RegisteredUsersStyled>
    )
}
