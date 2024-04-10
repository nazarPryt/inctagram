import {Avatar, InputText} from '@nazar-pryt/inctagram-ui-kit'

import {MessengerStyled} from './Messenger.styled'

export const Messenger = () => {
    return (
        <MessengerStyled>
            <h3>Messenger</h3>
            <div>
                <div className={'ChatUsersList'}>
                    <InputText placeholder={'Search user'} search value={''} />
                    <div>
                        <Avatar size={48} src={'https://loremflickr.com/48/48'} />
                        <div>
                            <h5>Ekaterina Ivanova</h5>
                            <p>Ahahahah, just kidding..</p>
                        </div>
                        <div>17:33</div>
                    </div>
                </div>
                <div className={'chatBox'}>
                    <div className={'selectedUser'}>
                        <Avatar size={48} src={'https://loremflickr.com/48/48'} />
                        <h5>Ekaterina Ivanova</h5>
                    </div>
                    <div className={'chat'}></div>
                </div>
            </div>
        </MessengerStyled>
    )
}
