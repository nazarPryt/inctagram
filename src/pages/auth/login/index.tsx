import {LogInForm} from '@/features/Auth/LogIn/ui/LogInForm/LogInForm'
import {getLayoutWithHeader} from '@/shared/layouts/unauthorized'

export default function LoginPage() {
    return <LogInForm />
}
LoginPage.getLayout = getLayoutWithHeader
