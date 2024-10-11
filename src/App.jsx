

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Homepage from './pages/home/Homepage.jsx'
import Cart from './pages/cart/Cart.jsx'
import { useState } from 'react'

function App() {
  const [addedToCart,setAddedToCart]=useState(0)
  const [addedProducts,setAddedProducts]=useState([])

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage addedToCart={addedToCart} setAddedToCart={setAddedToCart} addedProducts={addedProducts} setAddedProducts={setAddedProducts}/>} />
      <Route path='/cart' element={<Cart addedToCart={addedToCart} setAddedToCart={setAddedToCart} addedProducts={addedProducts} setAddedProducts={setAddedProducts}/>} />

    </Routes>
    </BrowserRouter>
   
  )
}

export default App
