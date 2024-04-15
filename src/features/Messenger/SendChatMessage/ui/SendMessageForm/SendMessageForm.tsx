import {useState} from 'react'
import {SubmitHandler, useForm} from 'react-hook-form'

import {WebSocketApi} from '@/_app/Api/client/webSocket'
import {SocketEvents} from '@/_app/Api/client/webSocket/helpers/socketEvents'
import {EmojiIcon} from '@/public/EmojiIcon'
import {useAppSelector} from '@/shared/hooks/reduxHooks'
import {zodResolver} from '@hookform/resolvers/zod'
import {Button, IconButton, InputText} from '@nazar-pryt/inctagram-ui-kit'
import EmojiPicker, {EmojiClickData, Theme} from 'emoji-picker-react'
import {z} from 'zod'

import {SendMessageFormStyled} from './SendMessageForm.styled'

const SendMessageFormSchema = z.object({
    message: z.string(),
})

type SendMessageFormDataType = z.infer<typeof SendMessageFormSchema>

export const SendMessageForm = () => {
    const theme = useAppSelector(store => store.app.theme)
    const selectedChatId = useAppSelector(store => store.messenger.selectedChatId)
    const {
        formState: {errors, isValid},
        getValues,
        handleSubmit,
        register,
        setError,
        setValue,
        ...rest
    } = useForm<SendMessageFormDataType>({
        mode: 'all',
        reValidateMode: 'onChange',
        resolver: zodResolver(SendMessageFormSchema),
    })
    const [open, setOpen] = useState(false)

    const handleEmoji = (e: EmojiClickData) => {
        const emoji = e.emoji
        const currentValue = getValues('message')

        setValue('message', `${currentValue} ${emoji}`)
        setOpen(false)
    }
    const newMessage = {
        message: 'some message textfffdfdfdf',
        receiverId: selectedChatId,
    }

    const handleOpenEmoji = () => {
        setOpen(prev => !prev)
    }

    const onSubmit: SubmitHandler<SendMessageFormDataType> = data => {
        console.log(data)
        // WebSocketApi.socket?.emit(SocketEvents.RECEIVE_MESSAGE, newMessage, (response: any) => {
        //     console.log(' handleSend ---- SocketEvents.MESSAGE_SENT ---- response: ', response)
    }

    return (
        <SendMessageFormStyled onSubmit={handleSubmit(onSubmit)}>
            <InputText error={errors.message?.message} placeholder={'Type a message...'} {...register('message')} />
            <div className={'emoji'}>
                <IconButton onClick={handleOpenEmoji} type={'button'}>
                    <EmojiIcon />
                </IconButton>
                <div className={'picker'}>
                    <EmojiPicker onEmojiClick={handleEmoji} open={open} theme={theme as Theme} />
                </div>
            </div>
            <Button variant={'outlined'}>Send</Button>
        </SendMessageFormStyled>
    )
}
