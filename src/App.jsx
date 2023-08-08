
import React from 'react'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
import ProductDetail from './components/ProductDetail'
import ItemDetailContainer from './components/ItemDetailContainer'


const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/Cart" element={<Cart />}/>
      <Route exact path="/product/:id" element={<ProductDetail />}/>
      <Route exact path="/category/:category:" element={<ItemListContainer />}/>
      <Route exact path="/Item/:id" element={< ItemDetailContainer />}/>
    
    </Routes>
    </BrowserRouter>
  )
}

export default App