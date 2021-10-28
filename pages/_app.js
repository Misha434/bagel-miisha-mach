import 'tailwindcss/tailwind.css'

import Head from 'next/head'
import Nav from '../components/Nav'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Bagel Miisha Mach</title>
      </Head>
      <div className="container">
        <Nav />
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  )
}

export default MyApp
