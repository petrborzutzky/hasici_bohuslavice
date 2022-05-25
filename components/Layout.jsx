import React from "react"
import { Header, Footer} from "./"
import Head from "next/head"
import FacebookWidget from "./FacebookWidget"
import Script from "next/script"

const Layout = ({children}) => {
  return (
    <>
      <Header />

      <div className="max-w-7xl mx-auto md:px-10 px-2 mb-8">
        <Head>

          <title>Hasiči Bohuslavice</title>
          <link rel="icon" href="/logo.png" />

        </Head>

        <div className="flex flex-col lg:flex-row min-h-screen">
          <div className="grow mt-10">
            {children}
          </div>
          <div className="container shrink-0 h-[8rem] w-80 mx-auto mb-40 lg:ml-10 mt-10 shadow-lg">
            <FacebookWidget />
          </div>
        </div>
      </div>

      <section id="footer" />
      <Footer />
    </>
  )
}

export default Layout
