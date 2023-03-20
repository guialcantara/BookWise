
import type { AppProps } from 'next/app';
import { Nunito } from 'next/font/google';
import { SessionProvider } from "next-auth/react"
import { globalStyles } from '@/styles/global';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';

globalStyles()

const nunito = Nunito({
  variable: '--nunito-font',
  subsets: ['latin']
})

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) {

  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <SessionProvider session={session}>
      <div
        className={`${nunito.variable}`}
      >
        {getLayout(<Component {...pageProps} />)}
      </div >
    </SessionProvider>
  );
}