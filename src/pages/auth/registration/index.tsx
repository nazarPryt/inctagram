import {getLayoutWithHeader} from '@/_app/Layouts/unauthorized'
import {RegistrationForm} from '@/features/Auth/Registration/ui/RegistrationForm'

export default function RegistrationPage() {
    return <RegistrationForm />
}

RegistrationPage.getLayout = getLayoutWithHeader
