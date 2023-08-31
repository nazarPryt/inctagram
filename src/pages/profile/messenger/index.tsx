import { getAuthorizedLayout } from '_app/Layouts/authorized/AuthorizedLayout'

export default function MessengerPage(): JSX.Element {
  return <>Messenger page</>
}
MessengerPage.getLayout = getAuthorizedLayout
