import React from 'react'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
import ProductGrid from '../components/ProductGrid'
import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
    <>
      {/* <Sidebar /> */}
      <Navbar />
      <ProductGrid />
      <Footer />  
    </>
  )
}

export default Home
