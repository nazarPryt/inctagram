import React from 'react'
import {getAuthorizedLayout} from '_app/Layouts/authorized/AuthorizedLayout'

export default function StatisticsPage() {
    return <>Statistics page</>
}
StatisticsPage.getLayout = getAuthorizedLayout
