import {getLayoutWithHeader} from '@/_app/Layouts/unauthorized'
import {ForgotPasswordForm} from '@/features/Auth/ForgotPassword/ui/ForgotPasswordForm'

export default function ForgotPasswordPage() {
    return <ForgotPasswordForm />
}

ForgotPasswordPage.getLayout = getLayoutWithHeader
