import {RegistrationForm} from '@/features/Auth/Registration/ui/RegistrationForm/RegistrationForm'
import {getLayoutWithHeader} from '@/shared/layouts/unauthorized'

export default function RegistrationPage() {
    return <RegistrationForm />
}

RegistrationPage.getLayout = getLayoutWithHeader
