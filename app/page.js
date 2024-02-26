import React from 'react'
import Nav from './component/Nav'
import Footer from './component/Footer'
import Header from './component/Header'
import News from './component/News'
import Stars from './component/Stars'
export default function page() {
  return (
    <div>
      <Nav />
      <Header />
      <News />
      <Stars />
      
      <Footer />
    </div>
  )
}
