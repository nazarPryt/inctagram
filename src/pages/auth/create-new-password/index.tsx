import {getLayoutWithHeader} from '@/_app/Layouts/unauthorized'
import {CreateNewPasswordForm} from '@/features/Auth/CreateNewPassword/ui/CreateNewPasswordForm'
import {Loader} from '@nazar-pryt/inctagram-ui-kit'
import {NextPageContext} from 'next'

export async function getServerSideProps(ctx: NextPageContext) {
    const {recoveryCode} = ctx.query

    return {
        props: {
            recoveryCode,
        },
    }
}
export default function CreateNewPasswordPage({recoveryCode}: {recoveryCode: string}) {
    if (recoveryCode) {
        return <CreateNewPasswordForm recoveryCode={recoveryCode} />
    }

    return <Loader />
}

CreateNewPasswordPage.getLayout = getLayoutWithHeader
