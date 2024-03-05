import React from 'react'
import Homepage from './screens/Homepage'
import Navbar from './componenets/Navbar'
import Footer from './componenets/Footer'
import MenuAppBar from './componenets/Navbar'

const App = () => {
  return (

    <>
      <MenuAppBar />
      <Homepage />
      <Footer />
    </>

  )
}

export default App