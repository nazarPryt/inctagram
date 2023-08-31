import { getAuthorizedLayout } from '_app/Layouts/authorized/AuthorizedLayout'

export default function StatisticsPage(): JSX.Element {
  return <>Statistics page</>
}
StatisticsPage.getLayout = getAuthorizedLayout
