import '../styles/globals.css'

import type { AppProps } from 'next/app'
import Layout from '../../components/layout'

import "primereact/resources/themes/bootstrap4-light-blue/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}