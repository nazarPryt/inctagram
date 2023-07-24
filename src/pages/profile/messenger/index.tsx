import React from 'react'
import {getAuthorizedLayout} from '_app/Layouts/authorized/AuthorizedLayout'

export default function MessengerPage() {
    return <>Messenger page</>
}
MessengerPage.getLayout = getAuthorizedLayout
