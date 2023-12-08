import {getLayoutWithHeader} from '_app/Layouts/unauthorized/Unauthorized'
import {ForgotPasswordForm} from 'features/Auth/ForgotPassword/ui/ForgotPasswordForm/ForgotPasswordForm'

export default function ForgotPasswordPage() {
    return <ForgotPasswordForm />
}

ForgotPasswordPage.getLayout = getLayoutWithHeader
