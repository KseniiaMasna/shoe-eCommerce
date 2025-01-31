import './App.css'
import { useState } from 'react'
import skechersData from './assets/skechersData.js'
import Header from './components/Header'
import ProductGrid from './components/ProductGrid'

function App() {
  const [clickedShoe, setClickedShoe] = useState(null)


  return (
    <>
      <Header />
      <ProductGrid shoes={skechersData} onQuickView={setClickedShoe}/>
    </>
  )
}

export default App
