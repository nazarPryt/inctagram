import {toast} from 'react-toastify'

export const writeTextInClipboardAsync = async (text: string) => {
    try {
        await navigator.clipboard.writeText(text)
        console.log('Text copied to clipboard')
        toast.success('Link was copied')
    } catch (error) {
        console.error('Failed to copy text: ', error)
        toast.error('Cant copy this link')
    }
}

export const readTextFromClipboard = () => {
    navigator.clipboard
        .readText()
        .then(text => {
            console.log('Clipboard content: ', text)
        })
        .catch(err => {
            console.error('Failed to read clipboard contents: ', err)
        })
}

//https://dev.to/darkmavis1980/the-navigator-clipboard-api-in-javascript-38gn
