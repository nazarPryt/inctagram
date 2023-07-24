import React from 'react'
import {getAuthorizedLayout} from '_app/Layouts/authorized/AuthorizedLayout'

export default function FavoritePage() {
    return <>Favorites page</>
}
FavoritePage.getLayout = getAuthorizedLayout
