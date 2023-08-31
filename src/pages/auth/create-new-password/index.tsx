import { NextPageContext } from 'next'

import { getLayoutWithHeader } from '_app/Layouts/unauthorized/Unauthorized'
import { CreateNewPasswordForm } from 'features/Auth/CreateNewPassword/ui/CreateNewPasswordForm/CreateNewPasswordForm'
import { Loader } from 'shared/ui/Loader/Loader'

export async function getServerSideProps(ctx: NextPageContext) {
  const { recoveryCode } = ctx.query

  return {
    props: {
      recoveryCode,
    },
  }
}

export default function CreateNewPasswordPage({ recoveryCode }: { recoveryCode: string }): JSX.Element {
  if (recoveryCode) {
    return <CreateNewPasswordForm recoveryCode={recoveryCode} />
  }

  return <Loader />
}

CreateNewPasswordPage.getLayout = getLayoutWithHeader
