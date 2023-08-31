import { getLayoutWithHeader } from '_app/Layouts/unauthorized/Unauthorized'
import { RegistrationForm } from 'features/Auth/Registration/ui/RegistrationForm/RegistrationForm'

export default function RegistrationPage(): JSX.Element {
  return <RegistrationForm />
}

RegistrationPage.getLayout = getLayoutWithHeader
