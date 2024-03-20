import {getLayoutWithHeader} from '@/_app/Layouts/unauthorized'
import {LogInForm} from '@/features/Auth/LogIn/ui/LogInForm'

export default function LoginPage() {
    return <LogInForm />
}
LoginPage.getLayout = getLayoutWithHeader
