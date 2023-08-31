import { getLayoutWithHeader } from '_app/Layouts/unauthorized/Unauthorized'
import { LogInForm } from 'features/Auth/LogIn/ui/LogInForm/LogInForm'

// eslint-disable-next-line react/function-component-definition
export default function LoginPage(): JSX.Element {
  return <LogInForm />
}
LoginPage.getLayout = getLayoutWithHeader
