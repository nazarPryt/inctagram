import {EmojiIcon} from '@/public/EmojiIcon'
import {useAppSelector} from '@/shared/hooks/reduxHooks'
import {Button, IconButton, InputText} from '@nazar-pryt/inctagram-ui-kit'
import {Theme} from 'emoji-picker-react'
import dynamic from 'next/dynamic'

import {useSendChatMessage} from '../../hook/useSendChatMessage'
import {SendMessageFormStyled} from './SendMessageForm.styled'

const EmojiPicker = dynamic(
    () => {
        return import('emoji-picker-react')
    },
    {ssr: false}
)

export const SendMessageForm = () => {
    const theme = useAppSelector(store => store.app.theme)

    const {errors, handleEmoji, handleOpenEmoji, handleSubmit, isValid, open, register} = useSendChatMessage()

    return (
        <SendMessageFormStyled onSubmit={handleSubmit}>
            <InputText error={errors.message?.message} placeholder={'Type a message...'} {...register('message')} />
            <div className={'emoji'}>
                <IconButton onClick={handleOpenEmoji} type={'button'}>
                    <EmojiIcon />
                </IconButton>
                <div className={'picker'}>
                    <EmojiPicker onEmojiClick={handleEmoji} open={open} theme={theme as Theme} />
                </div>
            </div>
            <Button disabled={!isValid} variant={'outlined'}>
                Send
            </Button>
        </SendMessageFormStyled>
    )
}
