import {ForgotPasswordForm} from '@/features/Auth/ForgotPassword/ui/ForgotPasswordForm/ForgotPasswordForm'
import {getLayoutWithHeader} from '@/shared/layouts/unauthorized'

export default function ForgotPasswordPage() {
    return <ForgotPasswordForm />
}

ForgotPasswordPage.getLayout = getLayoutWithHeader
