import { formatDistance, subDays } from 'date-fns'

import { ViewUserPostDescriptionWrapper } from 'entities/ViewUserPost/ui/ViewUserPostDescription/ViewUserPostDescription.styled'

type PropsType = {
  description: string
  createdAt: string
}
export const ViewUserPostDescription = ({ description, createdAt }: PropsType): JSX.Element => {
  const day = formatDistance(subDays(new Date(createdAt), 1), new Date(), { addSuffix: true }) // todo fix format of day when post was created

  return (
    <ViewUserPostDescriptionWrapper>
      {description} <span>{day}</span>
    </ViewUserPostDescriptionWrapper>
  )
}
