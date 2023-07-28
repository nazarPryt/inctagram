import React from 'react'
import {ViewUserPostDescriptionWrapper} from 'entities/ViewUserPost/ui/ViewUserPostDescription/ViewUserPostDescription.styled'

type PropsType = {
    description: string
    createdAt: string
}
export const ViewUserPostDescription = ({description}: PropsType) => {
    return <ViewUserPostDescriptionWrapper>{description}</ViewUserPostDescriptionWrapper>
}
