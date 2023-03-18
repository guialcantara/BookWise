
import type { AppProps } from 'next/app';
import { Nunito } from 'next/font/google';
import { SessionProvider } from "next-auth/react"
import { globalStyles } from '@/styles/global';

globalStyles()

const nunito = Nunito({
  variable: '--nunito-font',
  subsets: ['latin']
})

export default function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <div
        className={`${nunito.variable}`}
      >
        <Component {...pageProps} />
      </div >
    </SessionProvider>
  );
}