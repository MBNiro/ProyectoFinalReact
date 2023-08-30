
import React from 'react'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
import ItemDetailContainer from './components/ItemDetailContainer'
import Navbar from './components/NavBar'


const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/Cart" element={<Cart />}/>
      <Route exact path="/category/:category" element={<ItemListContainer />}/>
      <Route exact path="/Item/:id" element={< ItemDetailContainer />}/>
    
    </Routes>
    </BrowserRouter>
  )
}

export default App