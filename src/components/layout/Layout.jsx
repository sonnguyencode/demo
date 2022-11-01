import React from 'react'
import  Footer  from '../../FooterPage/Footer'
import ProductPage from '../../modules/ProductHome/ProductPage'
import Header from "../header/Header"


const Layout = ({children}) => {
  return (
    <>
    <Header />
    <div>{children}</div>
   
    
    <Footer />
    </>
  )
}

export default Layout