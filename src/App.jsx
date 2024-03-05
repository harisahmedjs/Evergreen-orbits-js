import React from 'react'

import Homepage from './screens/Homepage'
// import Footer from './componenets/Footer'
import MenuAppBar from './componenets/navbar'

import Footer from './componenets/Footer'
import Navbar from './componenets/Navbar'
 

const App = () => {
  return (

    <>

      <MenuAppBar />
      <Homepage />


      <Navbar />
      {/* <Footer /> */}

    </>

  )
}

export default App