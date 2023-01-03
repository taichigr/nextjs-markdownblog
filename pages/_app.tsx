import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <DefaultSeo {...SEO} />
        <Component {...pageProps} />
    </Layout>
  )
}
