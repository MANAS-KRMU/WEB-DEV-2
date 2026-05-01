import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Products from './Components/Products'
import ProductsDetails from './Components/ProductDetails'


const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='user/:id' element={<ProductsDetails />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
