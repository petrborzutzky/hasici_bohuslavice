import React from 'react'
import { Header, Footer} from './'

const Layout = ({children}) => {
  return (
    <>
      <Header />
      {children}
      <section id='footer' />
      <Footer />
    </>
  )
}

export default Layout
