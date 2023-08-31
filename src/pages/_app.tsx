import { ReactElement, ReactNode } from 'react'

import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

import { Providers } from '_app/Provider'
import { useLoader } from 'shared/hooks/useLoader'

import 'shared/styles/nprogress.css'

import '@fontsource-variable/inter'
// TODO
// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode
}
// sayagih520@xgh6.com
// qwertQ1!
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout): JSX.Element {
  const DOMAIN_URL = process.env.NEXT_PUBLIC_DOMAIN_URL

  useLoader()

  const getLayout = Component.getLayout ?? (page => page)

  return (
    <Providers>
      <SessionProvider basePath="/api/auth" baseUrl={DOMAIN_URL} session={session}>
        {getLayout(<Component {...pageProps} />)}
      </SessionProvider>
    </Providers>
  )
}
