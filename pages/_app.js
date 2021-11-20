import 'tailwindcss/tailwind.css'

import Head from 'next/head'
import Nav from '../components/Nav'

import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <>
      <Head>
        <title>Bagel Miisha Mach</title>
      </Head>
      <Nav />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
