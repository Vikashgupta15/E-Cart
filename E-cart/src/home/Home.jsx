import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import ProductA from '../components/ProductA'
import ProductModel from '../components/ProductModel'
import CoustomiseAdd from '../components/CoustomiseAdd'

function Home({value}) {
  
  return (
    <>
    {/* <CoustomiseAdd value={Mvalue}/> */}
    <Banner value={value}/>
    <ProductModel/>
    {/* <ProductA/> */}
    </>
  )
}

export default Home