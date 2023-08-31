import { getAuthorizedLayout } from '_app/Layouts/authorized/AuthorizedLayout'

export default function FavoritePage(): JSX.Element {
  return <>Favorites page</>
}
FavoritePage.getLayout = getAuthorizedLayout
