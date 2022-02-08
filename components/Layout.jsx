import React from 'react'
import { Header, Footer} from './'
import Head from 'next/head'
import FacebookWidget from './FacebookWidget'

const Layout = ({children}) => {
  return (
    <>
      <div id="fb-root"></div>
      <script async defer crossorigin="anonymous" src="https://connect.facebook.net/cs_CZ/sdk.js#xfbml=1&version=v12.0" nonce="xVwAa8NO"></script>
      
      <Header />

      <div className='container max-w-7xl mx-auto md:px-10 px-2 mb-8'>
        <Head>
          <title>Hasiči Bohuslavice</title>
          <link rel='icon' href='/logo.png' />
        </Head>

        <div className='flex flex-col lg:flex-row min-h-screen'>
          <div className='grow mt-10'>
            {children}
          </div>
          <div className='container h-[32rem] w-96 mx-auto mb-40 lg:ml-10 mt-10 shadow-lg'>
            <FacebookWidget />
          </div>
        </div>
      </div>

      <section id='footer' />
      <Footer />
    </>
  )
}

export default Layout
