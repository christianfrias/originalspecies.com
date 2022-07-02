import '../styles/globals.css'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'

function MyApp({ Component, pageProps }: AppProps) {
  const {} = dynamic(import('tw-elements'), { ssr: false });
  return <Component {...pageProps} />
}

export default MyApp
