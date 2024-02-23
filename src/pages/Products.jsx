import React from 'react'
import { Footer, Navbar, Product } from "../components"

const Products = (props) => {
  return (
    <>
      <Navbar />
      <Product flag={props.flag} />
      <Footer />
    </>
  )
}

export default Products