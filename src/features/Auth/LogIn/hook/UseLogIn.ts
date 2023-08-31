import { yupResolver } from '@hookform/resolvers/yup'
import { signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { useLoginMutation } from 'features/Auth/LogIn/api/login.api'
import { HandelLoginErrors } from 'features/Auth/LogIn/helpers/HandelLoginErrors'
import { emailPattern } from 'features/Auth/Registration/helpers/emailPattern'
import { PATH } from 'shared/constants/PATH'
import { useAppDispatch } from 'shared/hooks/reduxHooks'

const getLoginFormSchema = (emailErrorMessage: string) => {
  return yup.object({
    email: yup.string().trim().required(emailErrorMessage).matches(emailPattern, 'email is not valid'),
    password: yup
      .string()
      .trim()
      .required('Password is required')
      .min(6, 'Your password is too short, min 6 characters')
      .max(20, 'Your password is too long, max 20 characters'),
  })
}

export const useLogIn = () => {
  const schema = getLoginFormSchema('email is required')
  const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN_URL

  type FormData = yup.InferType<typeof schema>

  const [login, { isLoading }] = useLoginMutation()
  const dispatch = useAppDispatch()

  const {
    handleSubmit,
    setError,
    formState: { errors, isValid },
    ...rest
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: 'onTouched',
    reValidateMode: 'onChange',
    defaultValues: { email: 'sayagih520@xgh6.com', password: 'qwertQ1!' },
  })
  const onSubmit = async (data: FormData): Promise<void> => {
    login({ email: data.email, password: data.password })
      .unwrap()
      .then(async payload => {
        await signIn('credentials', {
          accessToken: payload.accessToken,
          callbackUrl: `${DOMAIN}/${PATH.HOME}`,
        })
      })
      .catch(error => {
        HandelLoginErrors(error, dispatch, setError)
      })
  }

  return {
    handleSubmit: handleSubmit(onSubmit),
    isLoading,
    errors,
    isValid,
    ...rest,
  }
}
