import {useState} from 'react'
import {SubmitHandler, useForm} from 'react-hook-form'

import {WebSocketApi} from '@/_app/Api/client/webSocket'
import {SocketEvents} from '@/_app/Api/client/webSocket/helpers/socketEvents'
import {useAppSelector} from '@/shared/hooks/reduxHooks'
import {zodResolver} from '@hookform/resolvers/zod'
import {EmojiClickData} from 'emoji-picker-react'

import {SendMessageFormDataType, SendMessageFormSchema} from '../helpers/SendMessageForm.schema'

export const useSendChatMessage = () => {
    const selectedChatId = useAppSelector(store => store.messenger.selectedChatId)

    const {
        formState: {errors, isValid},
        getValues,
        handleSubmit,
        register,
        reset,
        setValue,
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

    const handleOpenEmoji = () => {
        setOpen(prev => !prev)
    }

    const onSubmit: SubmitHandler<SendMessageFormDataType> = data => {
        const newMessage = {
            message: data.message,
            receiverId: selectedChatId,
        }

        WebSocketApi.socket?.emit(SocketEvents.RECEIVE_MESSAGE, newMessage)
        reset()
    }

    return {errors, handleEmoji, handleOpenEmoji, handleSubmit: handleSubmit(onSubmit), isValid, open, register}
}
