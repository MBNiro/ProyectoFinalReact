
import React from 'react'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'

const App = () => {
  return (
    <>
    <Navbar/>
    <ItemListContainer 
    greeting="Hace realidad tu sueño"
    />
    </>
  )
}

export default App