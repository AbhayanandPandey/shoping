import React from 'react'

import Navbar from '../components/navbar'
import HeaderSwiper from '../components/haderSwiper'
import Carousel from '../components/carousel'
import Footer  from '../components/footer'

function home() {
  return (
    <div>   
        <>
            <Navbar />
            <HeaderSwiper />
            <Carousel />
            <Footer />        
        </>
      
    </div>
  )
}

export default home
