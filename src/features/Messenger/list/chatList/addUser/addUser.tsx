import {useState} from 'react'

import {AddUserStyled} from '@/features/Messenger/list/chatList/addUser/AddUser.styled'

export const AddUser = () => {
    const [user, setUser] = useState(null)

    const handleSearch = () => {
        console.log('handleSearch')
    }

    const handleAdd = async () => {
        console.log('handleAdd')
    }

    return (
        <AddUserStyled>
            <form onSubmit={handleSearch}>
                <input name={'username'} placeholder={'Username'} type={'text'} />
                <button>Search</button>
            </form>
            {user && (
                <div className={'user'}>
                    <div className={'detail'}>
                        <img alt={''} src={'https://loremflickr.com/48/48'} />
                        <span>user.username</span>
                    </div>
                    <button onClick={handleAdd}>Add User</button>
                </div>
            )}
        </AddUserStyled>
    )
}
