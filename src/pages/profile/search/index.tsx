import {getAuthorizedLayout} from '@/_app/Layouts/authorized'

export default function SearchPage() {
    const icon = '😘'
    const icon2 = `\ud83c\uddfa\ud83c\udde6`

    return (
        <div>
            🇺🇦 {icon2}SearchPage {icon}
        </div>
    )
}
SearchPage.getLayout = getAuthorizedLayout
